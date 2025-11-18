#!/usr/bin/env node

/**
 * Clean build script for Windows compatibility
 * Handles file locking issues with .next directory
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const nextDir = path.join(projectRoot, '.next');

async function removeDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    return true;
  }

  try {
    // On Windows, we need to retry deletion due to file locking
    let retries = 3;
    while (retries > 0) {
      try {
        fs.rmSync(dirPath, { recursive: true, force: true, maxRetries: 3, retryDelay: 100 });
        return true;
      } catch (error) {
        retries--;
        if (retries === 0) {
          throw error;
        }
        // Wait a bit before retrying
        const delay = (4 - retries) * 100;
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  } catch (error) {
    // If recursive delete fails, try to remove files individually
    try {
      const files = fs.readdirSync(dirPath);
      for (const file of files) {
        const filePath = path.join(dirPath, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
          await removeDirectory(filePath);
        } else {
          // Retry file deletion
          let fileRetries = 3;
          while (fileRetries > 0) {
            try {
              fs.unlinkSync(filePath);
              break;
            } catch (unlinkError) {
              fileRetries--;
              if (fileRetries > 0) {
                await new Promise(resolve => setTimeout(resolve, 100));
              }
            }
          }
        }
      }
      fs.rmdirSync(dirPath);
      return true;
    } catch (nestedError) {
      console.warn(`⚠️  Could not fully remove .next directory: ${nestedError.message}`);
      console.warn('   This is usually harmless - the build will continue.');
      return false;
    }
  }
}

async function cleanBuild() {
  console.log('🧹 Cleaning build artifacts...');
  
  if (fs.existsSync(nextDir)) {
    const removed = await removeDirectory(nextDir);
    if (removed) {
      console.log('✅ Cleaned .next directory');
    } else {
      console.log('⚠️  Partial cleanup - build will continue');
    }
  } else {
    console.log('✓ No .next directory to clean');
  }
}

cleanBuild().catch(error => {
  console.error('❌ Clean failed:', error.message);
  process.exit(1);
});

