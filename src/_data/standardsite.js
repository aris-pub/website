// Build-time data for the standard.site per-post link tag. Mirrors exactly what
// the publisher writes, because both read scripts/standardsite.js.
const { ARIS_DID, publicationUri, listPosts, documentRkey } = require("../../scripts/standardsite");

module.exports = function () {
  const documents = {};
  for (const post of listPosts()) {
    documents[post.slug] = documentRkey(post.slug, post.date);
  }
  return { did: ARIS_DID, publicationUri: publicationUri(), documents };
};
