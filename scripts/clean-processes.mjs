#!/usr/bin/env node

/**
 * Process cleanup script for Windows
 * Helps kill hanging Node.js processes and clean up memory
 */

import { execSync } from 'child_process';
import { platform } from 'os';

console.log('🧹 Cleaning up Node.js processes...\n');

if (platform() === 'win32') {
  try {
    // Kill all node.exe processes
    console.log('Killing Node.js processes...');
    execSync('taskkill /f /im node.exe /t 2>nul', { stdio: 'inherit' });
    console.log('✅ Node.js processes terminated');
  } catch (error) {
    console.log('ℹ️  No Node.js processes found or already terminated');
  }

  try {
    // Kill any remaining Next.js processes
    console.log('Checking for remaining processes...');
    execSync('taskkill /f /im next.exe /t 2>nul', { stdio: 'inherit' });
  } catch (error) {
    // Ignore errors - processes might not exist
  }

  try {
    console.log('Clearing Bun cache...');
    execSync('bun pm cache rm', { stdio: 'inherit' });
    console.log('✅ Bun cache cleared');
  } catch (error) {
    console.log('⚠️  Could not clear Bun cache');
  }

} else {
  console.log('❌ This script is designed for Windows only');
  console.log('On Unix systems, use: pkill -f node');
}

console.log('\n🎉 Process cleanup complete!');
console.log('💡 Tip: Use "bun run kill-nodes" for quick cleanup');