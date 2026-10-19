// Publish the Aris blog to the AT Protocol as standard.site records.
//
// Writes one site.standard.publication (once) and one site.standard.document
// per blog post to the Aris account (aris-pub), using the same deterministic
// TID keys the eleventy build uses for the per-post link tags. Idempotent:
// re-running overwrites the same records.
//
// Usage:
//   node scripts/publish-standardsite.js --dry-run
//   ARIS_BOT_HANDLE=aris-pub.bsky.social ARIS_BOT_PASSWORD=<app-password> \
//     node scripts/publish-standardsite.js

const {
  PDS_HOST,
  PUBLICATION_COLLECTION,
  DOCUMENT_COLLECTION,
  PUBLICATION_RKEY,
  publicationUri,
  documentRkey,
  listPosts,
  buildPublication,
  buildDocument,
} = require("./standardsite");

async function login(handle, password) {
  const r = await fetch(`${PDS_HOST}/xrpc/com.atproto.server.createSession`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ identifier: handle, password }),
  });
  if (!r.ok) throw new Error(`login ${r.status}: ${await r.text()}`);
  const d = await r.json();
  return { jwt: d.accessJwt, did: d.did };
}

async function putRecord(jwt, did, collection, rkey, record) {
  const r = await fetch(`${PDS_HOST}/xrpc/com.atproto.repo.putRecord`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${jwt}` },
    body: JSON.stringify({ repo: did, collection, rkey, record }),
  });
  if (!r.ok) throw new Error(`putRecord ${collection} ${rkey} ${r.status}: ${await r.text()}`);
  return (await r.json()).uri;
}

async function main() {
  const dryRun = process.argv.includes("--dry-run");
  const posts = listPosts();

  if (dryRun) {
    console.log(`[dry-run] ${PUBLICATION_COLLECTION} ${PUBLICATION_RKEY}`);
    console.log(JSON.stringify(buildPublication(), null, 2));
    for (const p of posts) {
      console.log(`\n[dry-run] ${DOCUMENT_COLLECTION} ${documentRkey(p.slug, p.date)}  (${p.slug})`);
      console.log(JSON.stringify(buildDocument(p, publicationUri()), null, 2));
    }
    return;
  }

  const handle = process.env.ARIS_BOT_HANDLE;
  const password = process.env.ARIS_BOT_PASSWORD;
  if (!handle || !password) {
    console.log("ARIS_BOT_HANDLE/ARIS_BOT_PASSWORD not set, skipping standard.site publish.");
    return;
  }

  const { jwt, did } = await login(handle, password);
  const pubUri = publicationUri(did);
  await putRecord(jwt, did, PUBLICATION_COLLECTION, PUBLICATION_RKEY, buildPublication());
  for (const p of posts) {
    await putRecord(jwt, did, DOCUMENT_COLLECTION, documentRkey(p.slug, p.date), buildDocument(p, pubUri));
    console.log("posted", p.slug);
  }
  console.log(`publication: ${pubUri}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
