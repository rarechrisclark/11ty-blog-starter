import fsPromises from 'fs/promises'; // Use the promise-based API for `fs`
import path from 'path';
import sharp from 'sharp';

// Define the directories and output file
const IMAGE_DIR = path.resolve('./src/media/images');
const OUTPUT_FILE = path.resolve('./src/_data/images.json');

// Function to convert image to JPEG format
const convertToJpg = async (imagePath) => {
  const extension = path.extname(imagePath).toLowerCase();
  const baseName = path.basename(imagePath, extension);
  const newImagePath = path.join(path.dirname(imagePath), `${baseName}.jpg`);

  if (extension !== '.jpg') {
    await sharp(imagePath).toFile(newImagePath);
    await fsPromises.unlink(imagePath); // Remove the original file
    return newImagePath;
  }
  return imagePath;
};

// Function to read the existing JSON file
const readExistingJson = async () => {
  try {
    const data = await fsPromises.readFile(OUTPUT_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    if (err.code === 'ENOENT') {
      // File does not exist
      return [];
    }
    throw err;
  }
};

// Function to create or update JSON file with image data
export const updateImageJson = async () => {
  try {
    // Check if the image directory exists
    if (
      !(await fsPromises
        .access(IMAGE_DIR)
        .then(() => true)
        .catch(() => false))
    ) {
      console.warn('Warning: Image directory not found');
      await fsPromises.writeFile(OUTPUT_FILE, JSON.stringify([]));
      return;
    }

    // Read existing images from JSON file
    const existingImages = await readExistingJson();

    // Create a Set of existing image src paths for quick lookup
    const existingImagePaths = new Set(existingImages.map((img) => img.src));

    // Read files from the image directory
    const files = await fsPromises.readdir(IMAGE_DIR);
    if (files.length === 0) {
      console.warn('Warning: No images found in the directory');
      return;
    }

    // Initialize array to hold new image data
    const newImages = [];

    // Iterate through each image and process it
    for (const file of files) {
      const imagePath = path.join(IMAGE_DIR, file);
      if ((await fsPromises.stat(imagePath)).isFile()) {
        const convertedImagePath = await convertToJpg(imagePath);
        const relativePath = path.relative('.', convertedImagePath).replace(/\\/g, '/'); // Normalize path

        // Only add new images
        if (!existingImagePaths.has(`./${relativePath}`)) {
          newImages.push({ src: `./${relativePath}`, alt: 'image' });
        }
      }
    }

    // Combine existing and new images
    const updatedImages = [...existingImages, ...newImages];

    // Write the JSON file with updated image data
    await fsPromises.writeFile(OUTPUT_FILE, JSON.stringify(updatedImages, null, 2));
    console.log(`JSON file updated at ${OUTPUT_FILE}`);
  } catch (err) {
    console.error('Error:', err);
  }
};
