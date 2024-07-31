import { toISOString, formatDate } from './filters/dates.js';
import { markdownFormat } from './filters/markdown-format.js';
import { shuffleArray } from './filters/sort-random.js';
import { sortAlphabetically } from './filters/sort-alphabetic.js';
import { splitLines } from './filters/split-lines.js';
import { stripTags } from './filters/strip-tags.js';
import { toAbsoluteUrl } from './filters/to-absolute-url.js';
import { slugifyString } from './filters/slugify.js';

export default {
  toISOString,
  formatDate,
  markdownFormat,
  splitLines,
  stripTags,
  toAbsoluteUrl,
  shuffleArray,
  sortAlphabetically,
  slugifyString,
};
