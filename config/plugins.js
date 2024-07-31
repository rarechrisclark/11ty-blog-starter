// Eleventy
import { EleventyRenderPlugin } from '@11ty/eleventy';
import rss from '@11ty/eleventy-plugin-rss';
import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight';

// custom
import { markdownLib } from './plugins/markdown-config.js';
import { tocConfig } from './plugins/toc-config.js';

// Custom transforms
import { htmlConfig } from './plugins/html-config.js';

export default {
  EleventyRenderPlugin,
  rss,
  tocConfig,
  syntaxHighlight,
  markdownLib,
  htmlConfig,
};
