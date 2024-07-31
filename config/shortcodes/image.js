import Image from '@11ty/eleventy-img';
import path from 'node:path';
import htmlmin from 'html-minifier-terser';
import { stringifyAttributes } from '../utils/stringify-attributes.js';

/**
 * Generates an HTML image element with responsive images and optional caption.
 * @param {string} src - The path to the image source file.
 * @param {string} [alt=''] - The alternative text for the image.
 * @param {string} [caption=''] - The caption for the image.
 * @param {string} [loading='lazy'] - The loading attribute for the image.
 * @param {string} [className] - The CSS class name for the image element.
 * @param {string} [sizes='90vw'] - The sizes attribute for the image.
 * @param {number[]} [widths=[440, 650, 960, 1200]] - The widths for generating responsive images.
 * @param {string[]} [formats=['avif', 'webp', 'jpeg']] - The formats for generating responsive images.
 * @returns {string} - The HTML image element.
 */
export const imageShortcode = async (
  src,
  alt = '',
  caption = '',
  loading = 'lazy',
  className,
  sizes = '90vw',
  widths = [440, 650, 960, 1200],
  formats = ['avif', 'webp', 'jpeg']
) => {
  const metadata = await Image(src, {
    widths: [...widths],
    formats: [...formats],
    urlPath: '/media/images/',
    outputDir: './_site/media/images/',
    filenameFormat: (id, src, width, format) => {
      const extension = path.extname(src);
      const name = path.basename(src, extension);
      return `${name}-${width}w.${format}`;
    },
  });

  const lowsrc = metadata.jpeg[metadata.jpeg.length - 1];

  // Getting the URL to use
  let imgSrc = src;
  if (!imgSrc.startsWith('.')) {
    const inputPath = this.page.inputPath;
    const pathParts = inputPath.split('/');
    pathParts.pop();
    imgSrc = `${pathParts.join('/')}/${src}`;
  }

  const imageSources = Object.values(metadata)
    .map((imageFormat) => {
      return `  <source type="${imageFormat[0].sourceType}" srcset="${imageFormat
        .map((entry) => entry.srcset)
        .join(', ')}" sizes="${sizes}">`;
    })
    .join('\n');

  const imageAttributes = stringifyAttributes({
    src: lowsrc.url,
    width: lowsrc.width,
    height: lowsrc.height,
    alt,
    loading,
    decoding: loading === 'eager' ? 'sync' : 'async',
    class: 'img-fluid',
  });

  const imageElement = caption
    ? `<figure slot="image" class="${className ? `${className}` : ''}">
				<picture>
					${imageSources}
					<img
					${imageAttributes}>
				</picture>
				<figcaption>${caption}</figcaption>
			</figure>`
    : `<picture slot="image" class="${className ? `${className}` : ''}">
				${imageSources}
				<img
				${imageAttributes}>
			</picture>`;

  return htmlmin.minify(imageElement, { collapseWhitespace: true });
};
