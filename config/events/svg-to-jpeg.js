import { promises as fsPromises, existsSync } from 'fs';
import path from 'node:path';
import Image from '@11ty/eleventy-img';

const ogImagesDir = './_site/media/og-images';

export const svgToJpeg = async function () {
  const socialPreviewImagesDir = '_site/media/og-images/';
  const files = await fsPromises.readdir(socialPreviewImagesDir);
  if (files.length > 0) {
    for (const filename of files) {
      const outputFilename = filename.substring(0, filename.length - 4);
      if (filename.endsWith('.svg') && !existsSync(path.join(ogImagesDir, outputFilename))) {
        const imageUrl = socialPreviewImagesDir + filename;
        await Image(imageUrl, {
          formats: ['jpeg'],
          outputDir: ogImagesDir,
          filenameFormat: function (id, src, width, format) {
            return `${outputFilename}.${format}`;
          },
        });
        await fsPromises.unlink(path.join(socialPreviewImagesDir, filename)); // Remove the SVG file
      }
    }
  } else {
    console.log('⚠ No social images found');
  }
};
