/**
 * Sync the AIR Office static demo build into public/air-office-demo.
 *
 * Expects a sibling checkout at ../air-office with a fresh
 * apps/web/dist-static-demo (from `bun run build:web:static-demo`).
 *
 * Usage (repo root):
 *   bun scripts/sync-air-office-demo.mjs
 */
import { cpSync, existsSync, rmSync, mkdirSync, readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { resolve, join } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const source = resolve(root, '..', 'air-office', 'apps', 'web', 'dist-static-demo');
const dest = resolve(root, 'public', 'air-office-demo');

const FLAT_MATERIALS_BOOTSTRAP = `  <!-- Website embed: force Settings → Liquid Glass & Transparency off
       (appearance.flat-materials) before the app bootstraps. -->
  <script>
    (function () {
      try {
        var key = 'air-office:settings-personal';
        var raw = localStorage.getItem(key);
        var prefs = raw ? JSON.parse(raw) : {};
        if (!prefs || typeof prefs !== 'object' || Array.isArray(prefs)) prefs = {};
        prefs['appearance.flat-materials'] = true;
        localStorage.setItem(key, JSON.stringify(prefs));
        document.documentElement.setAttribute('data-reduced-transparency', 'force');
      } catch (e) {}
    })();
  </script>
`;

if (!existsSync(join(source, 'index.html'))) {
  console.warn(`Missing static demo build at ${source}`);
  console.warn('Skip sync. In air-office run: SKIP_STATIC_DEMO_EXPORT=1 bun run build:web:static-demo');
  process.exit(0);
}

if (existsSync(dest)) {
  rmSync(dest, { recursive: true, force: true });
}
mkdirSync(dest, { recursive: true });

cpSync(source, dest, {
  recursive: true,
  filter: (src) => !src.replace(/\\/g, '/').includes('/media/originals'),
});

const indexPath = join(dest, 'index.html');
let indexHtml = readFileSync(indexPath, 'utf8');
if (!indexHtml.includes('appearance.flat-materials')) {
  indexHtml = indexHtml.replace('<title>AIR Office</title>', `<title>AIR Office</title>\n${FLAT_MATERIALS_BOOTSTRAP}`);
  writeFileSync(indexPath, indexHtml);
}

function folderMb(dir) {
  let total = 0;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) total += folderMb(path);
    else total += statSync(path).size;
  }
  return total;
}

const mb = folderMb(dest) / (1024 * 1024);
console.info(`Synced AIR Office static demo → public/air-office-demo (${mb.toFixed(1)} MB)`);
