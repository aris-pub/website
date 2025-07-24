module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/admin");
  
  // Copy Heroicons
  eleventyConfig.addPassthroughCopy({"node_modules/heroicons/24/outline": "icons"});
  
  // Add date formatting filter
  eleventyConfig.addFilter("dateFormat", (date) => {
    const d = new Date(date);
    const months = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  });

  // Add excerpt filter
  eleventyConfig.addFilter("excerpt", (content) => {
    const excerpt = content.split("<!--more-->")[0];
    return excerpt || content.substring(0, 200) + "...";
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};