export default function (eleventyConfig) {
  eleventyConfig.setServerOptions({
    watch: ['_site/**/*.css'],
  });

	// Copy `img/` to `_site/img`
	eleventyConfig.addPassthroughCopy("img");
  	eleventyConfig.addPassthroughCopy("css");

  return {
    dir: {
      input: 'src',
    },
  };
};
