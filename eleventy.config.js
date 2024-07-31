/**
 * Most adjustments must be made in `config/*`
 */

// register dotenv for process.env.* variables to pickup
import dotenv from 'dotenv';
dotenv.config();

// config import
import { getAllPosts, tagList, onlyMarkdown, searchIndex } from './config/collections.js';
import events from './config/events.js';
import filters from './config/filters.js';
import plugins from './config/plugins.js';
import shortcodes from './config/shortcodes.js';

let updateImageJsonRun = false;

export default function (eleventyConfig) {
  // --------------------- watch targets ---------------------
  eleventyConfig.addWatchTarget(`src/media/**/*.{jpg,jpeg,png,svg,webp}`);
  eleventyConfig.addWatchTarget(`src/_data/**/*.{json,js}`);

  // --------------------- layout aliases ---------------------
  eleventyConfig.addLayoutAlias('base', 'base.liquid');
  eleventyConfig.addLayoutAlias('blog', 'blog.liquid');
  eleventyConfig.addLayoutAlias('home', 'home.liquid');
  eleventyConfig.addLayoutAlias('page', 'page.liquid');
  eleventyConfig.addLayoutAlias('post', 'post.liquid');
  eleventyConfig.addLayoutAlias('tags', 'tags.liquid');

  // --------------------- collections ---------------------
  eleventyConfig.addCollection('allPosts', getAllPosts);
  eleventyConfig.addCollection('onlyMarkdown', onlyMarkdown);
  eleventyConfig.addCollection('tagList', tagList);
  eleventyConfig.addCollection('searchIndex', searchIndex);

  // ---------------------  Plugins  ---------------------
  eleventyConfig.addPlugin(plugins.htmlConfig);
  eleventyConfig.addPlugin(plugins.EleventyRenderPlugin);
  eleventyConfig.addPlugin(plugins.rss);
  eleventyConfig.addPlugin(plugins.tocConfig);
  eleventyConfig.addPlugin(plugins.syntaxHighlight);

  // 	--------------------- Library and Data Extensions ---------------------
  eleventyConfig.setLibrary('md', plugins.markdownLib);

  // ---------------------  Filters ---------------------

  eleventyConfig.addFilter('toIsoString', filters.toISOString);
  eleventyConfig.addFilter('formatDate', filters.formatDate);
  eleventyConfig.addFilter('markdownFormat', filters.markdownFormat);
  eleventyConfig.addFilter('splitlines', filters.splitLines);
  eleventyConfig.addFilter('striptags', filters.stripTags);
  eleventyConfig.addFilter('shuffle', filters.shuffleArray);
  eleventyConfig.addFilter('alphabetic', filters.sortAlphabetically);
  eleventyConfig.addFilter('toAbsoluteUrl', filters.toAbsoluteUrl);
  eleventyConfig.addFilter('slugify', filters.slugifyString);

  // --------------------- Shortcodes ---------------------

  eleventyConfig.addShortcode('image', shortcodes.imageShortcode);
  eleventyConfig.addShortcode('svg', shortcodes.svgShortcode);
  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);

  // --------------------- Events ---------------------
  if (process.env.ELEVENTY_RUN_MODE === 'serve') {
    eleventyConfig.on('eleventy.after', events.svgToJpeg);
  }

  eleventyConfig.on('eleventy.afterBuild', async () => {
    if (!updateImageJsonRun) {
      await events.updateImageJson();
      updateImageJsonRun = true;
    }
  });

  // --------------------- Pass-through File Copy ---------------------
  eleventyConfig.addPassthroughCopy({
    // -- to root
    // 'static/*': '/',
    'node_modules/minisearch/dist/umd/index.js': 'assets/js/components/minisearch.js',
  });

  // --------------------- Build Settings
  eleventyConfig.setDataDeepMerge(true);

  // --------------------- Return Config ---------------------

  return {
    markdownTemplateEngine: 'liquid',
    htmlTemplateEngine: 'liquid',
    dataTemplateEngine: 'liquid',
    templateFormats: ['html', 'md', 'liquid'],
    dir: {
      input: 'src',
      output: '_site',
      content: 'content',
      includes: '_includes',
      layouts: '_layouts',
      data: '_data',
    },
  };
}
