/**
 * COLLEAGUES DATA TEMPLATE
 * ========================
 * 
 * This is a template file for colleagues personal data.
 * 
 * INSTRUCTIONS:
 * 1. Copy this file to: src/data/_private/_private.colleagues.js
 * 2. Fill in the real personal data
 * 3. Place colleague images in: src/assets/images/_private/colleagues/
 *    - Name them as: _private.colleague-1.jpg, _private.colleague-2.jpg, etc.
 * 
 * IMPORTANT: Files with "_private" prefix are gitignored and won't be uploaded to the repo.
 */

// Import images from the private folder
// Uncomment and adjust paths when you have the actual images
// import colleague1Image from '../assets/images/_private/colleagues/_private.colleague-1.jpg';
// import colleague2Image from '../assets/images/_private/colleagues/_private.colleague-2.jpg';
// import colleague3Image from '../assets/images/_private/colleagues/_private.colleague-3.jpg';
// import colleague4Image from '../assets/images/_private/colleagues/_private.colleague-4.jpg';

// Placeholder image for development (replace with actual import above)
import placeholderImage from '../assets/images/misc/placeholder.png';

const colleaguesData = [
  {
    id: 1,
    name: '[COLLEAGUE 1 NAME]',
    shortDescription: '[Short description - 1-2 sentences about the colleague]',
    longDescription: `[Full biography and professional description]`,
    image: placeholderImage, // Replace with: colleague1Image
  },
  {
    id: 2,
    name: '[COLLEAGUE 2 NAME]',
    shortDescription: '[Short description - 1-2 sentences about the colleague]',
    longDescription: `[Full biography and professional description]`,
    image: placeholderImage, // Replace with: colleague2Image
  },
  {
    id: 3,
    name: '[COLLEAGUE 3 NAME]',
    shortDescription: '[Short description - 1-2 sentences about the colleague]',
    longDescription: `[Full biography and professional description]`,
    image: placeholderImage, // Replace with: colleague3Image
  },
  {
    id: 4,
    name: '[COLLEAGUE 4 NAME]',
    shortDescription: '[Short description - 1-2 sentences about the colleague]',
    longDescription: `[Full biography and professional description]`,
    image: placeholderImage, // Replace with: colleague4Image
  },
];

export default colleaguesData;
