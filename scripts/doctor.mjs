#!/usr/bin/env bun

/**
 * Quick environment and project health check.
 * Run with: bun run doctor
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const root = path.resolve(import.meta.dir, '..');
let ok = true;

function pass(label, detail = '') {
  console.log(`✅ ${label}${detail ? ` (${detail})` : ''}`);
}

function fail(label, detail = '') {
  console.log(`❌ ${label}${detail ? ` — ${detail}` : ''}`);
  ok = false;
}

function parseVersion(version) {
  return version.replace(/^v/, '').split('.').map((part) => Number(part) || 0);
}

function meetsMinimum(actual, minimum) {
  const a = parseVersion(actual);
  const m = parseVersion(minimum);
  for (let i = 0; i < 3; i += 1) {
    if (a[i] > m[i]) return true;
    if (a[i] < m[i]) return false;
  }
  return true;
}

console.log('🩺 Project health check\n');

try {
  const bunVersion = execSync('bun --version', { encoding: 'utf8' }).trim();
  if (meetsMinimum(bunVersion, '1.2.0')) {
    pass('Bun', bunVersion);
  } else {
    fail('Bun', `found ${bunVersion}, need >= 1.2.0`);
  }
} catch {
  fail('Bun', 'not installed');
}

try {
  const nodeVersion = execSync('node --version', { encoding: 'utf8' }).trim();
  if (meetsMinimum(nodeVersion, '20.0.0')) {
    pass('Node.js', nodeVersion);
  } else {
    fail('Node.js', `found ${nodeVersion}, need >= 20`);
  }
} catch {
  fail('Node.js', 'not installed');
}

if (fs.existsSync(path.join(root, 'bun.lock'))) {
  pass('bun.lock present');
} else {
  fail('bun.lock', 'missing — run bun install');
}

if (fs.existsSync(path.join(root, 'package-lock.json'))) {
  fail('package-lock.json', 'remove it — this project uses Bun');
} else {
  pass('no npm lockfile');
}

if (fs.existsSync(path.join(root, 'node_modules'))) {
  pass('dependencies installed');
} else {
  fail('node_modules', 'run bun install');
}

try {
  execSync('bun install --frozen-lockfile', { cwd: root, stdio: 'pipe' });
  pass('lockfile matches package.json');
} catch {
  fail('lockfile', 'out of sync — run bun install');
}

console.log(ok ? '\n🎉 All checks passed.' : '\n⚠️  Fix the issues above and run again.');
process.exit(ok ? 0 : 1);
