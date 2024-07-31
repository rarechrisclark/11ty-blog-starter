import pluginTOC from '@uncenter/eleventy-plugin-toc';

export const tocConfig = (eleventyConfig) => {
  eleventyConfig.addPlugin(pluginTOC, {
    tags: ['h2', 'h3'], // tags (heading levels) to include
    ignoredHeadings: ['[data-toc-exclude]'], // headings to ignore (list of selectors)
    ignoredElements: [], // elements (within the headings) to ignore when generating the TOC (list of selectors)
    ul: true, // whether to a use a `ul` or `ol`
    wrapper: function (toc) {
      // wrapper around the generated TOC
      return `${toc}`;
    },
  });
};
