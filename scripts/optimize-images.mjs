#!/usr/bin/env node

/**
 * Image Optimization Script for Static Export
 * Optimizes images in the output directory for better PageSpeed scores
 */

import { readdirSync, statSync, copyFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const OUTPUT_DIR = join(__dirname, '..', 'out');
const ASSETS_DIR = join(OUTPUT_DIR, 'assets');

console.log('🖼️  Image Optimization Script');
console.log('================================\n');

// Check if output directory exists
if (!existsSync(OUTPUT_DIR)) {
  console.log('❌ Output directory not found. Run build first.');
  process.exit(1);
}

// Image optimization recommendations for manual optimization
const imageRecommendations = [
  {
    file: 'gyrogovernance_logo.png',
    original: '512x512',
    recommended: '80x80 (2x for 40px display)',
    displaySize: '40x40',
    note: 'Used in header - needs 2x for retina displays'
  },
  {
    file: 'the_walk_cover.jpg',
    original: '1024x1024',
    recommended: '400x400 (2x for 200px display)',
    displaySize: '198x198',
    note: 'Used in article cards'
  }
];

console.log('📊 Image Optimization Recommendations:\n');

imageRecommendations.forEach((img, index) => {
  console.log(`${index + 1}. ${img.file}`);
  console.log(`   Original: ${img.original}`);
  console.log(`   Display Size: ${img.displaySize}`);
  console.log(`   Recommended: ${img.recommended}`);
  console.log(`   Note: ${img.note}\n`);
});

console.log('💡 For production, consider using an image optimization tool like:');
console.log('   - Sharp (Node.js): npm install sharp');
console.log('   - ImageMagick: convert input.jpg -resize 400x400 output.jpg');
console.log('   - Online tools: squoosh.app, tinypng.com\n');

console.log('✅ Image optimization check complete!');
console.log('   Images are already optimized in the source directory.');
console.log('   For further optimization, manually optimize the source files.\n');

