// Shared standard.site logic for the Aris blog: deterministic TID keys, the
// publication and document record shapes, and the blog-post list. Used by both
// the eleventy data file (src/_data/standardsite.js, for the per-post link tag)
// and the publisher (scripts/publish-standardsite.js, which writes the records).
//
// The records live on the Aris atproto account (aris-pub), alongside the Press
// pub.aris.scroll records. Record keys must be TIDs (the PDS rejects non-TID
// keys), and they are deterministic so re-runs overwrite rather than duplicate.

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

const SITE_URL = "https://aris.pub";
const ARIS_DID = "did:plc:7i46wjtdwxov7vxxlkfnafbd";
const PDS_HOST = "https://bsky.social";

const PUBLICATION_COLLECTION = "site.standard.publication";
const DOCUMENT_COLLECTION = "site.standard.document";

const PUBLICATION_NAME = "Aris";
const PUBLICATION_DESCRIPTION = "Essays on how research gets read, judged, and published.";

const BLOG_DIR = path.join(__dirname, "..", "src", "blog");

const S32 = "234567abcdefghijklmnopqrstuvwxyz";

function s32encode(value) {
  let out = "";
  for (let i = 0; i < 13; i++) {
    out = S32[Number(value & 31n)] + out;
    value >>= 5n;
  }
  return out;
}

function stableTid(when, seed) {
  const micros = (BigInt(when.getTime()) * 1000n) & ((1n << 53n) - 1n);
  const clockId = BigInt("0x" + crypto.createHash("sha256").update(seed).digest("hex").slice(0, 8)) & 0x3ffn;
  return s32encode(((micros << 10n) | clockId) & ((1n << 63n) - 1n));
}

const PUBLICATION_RKEY = stableTid(new Date("2026-01-01T00:00:00.000Z"), "aris-blog-publication");

function publicationUri(did = ARIS_DID) {
  return `at://${did}/${PUBLICATION_COLLECTION}/${PUBLICATION_RKEY}`;
}

function documentRkey(slug, when) {
  return stableTid(when, `aris-blog-doc:${slug}`);
}

function parseFrontmatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return {};
  const fm = m[1];
  const get = (key) => {
    const mm = fm.match(new RegExp("^" + key + ":\\s*(.+?)\\s*$", "m"));
    return mm ? mm[1].trim().replace(/^["']|["']$/g, "") : null;
  };
  return { title: get("title"), date: get("date"), description: get("description") };
}

function listPosts() {
  return fs.readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const slug = f.replace(/\.md$/, "");
      const fm = parseFrontmatter(fs.readFileSync(path.join(BLOG_DIR, f), "utf-8"));
      return {
        slug,
        title: fm.title,
        description: fm.description,
        date: new Date(fm.date),
        path: `/blog/${slug}/`,
      };
    })
    .filter((p) => p.title && !isNaN(p.date.getTime()))
    .sort((a, b) => a.date - b.date);
}

function buildPublication() {
  return {
    $type: PUBLICATION_COLLECTION,
    url: SITE_URL,
    name: PUBLICATION_NAME,
    description: PUBLICATION_DESCRIPTION,
    preferences: { showInDiscover: true },
  };
}

function buildDocument(post, pubUri) {
  const record = {
    $type: DOCUMENT_COLLECTION,
    site: pubUri,
    title: post.title,
    path: post.path,
    publishedAt: post.date.toISOString(),
  };
  if (post.description) record.description = post.description;
  return record;
}

module.exports = {
  SITE_URL,
  ARIS_DID,
  PDS_HOST,
  PUBLICATION_COLLECTION,
  DOCUMENT_COLLECTION,
  PUBLICATION_RKEY,
  stableTid,
  publicationUri,
  documentRkey,
  listPosts,
  buildPublication,
  buildDocument,
};
