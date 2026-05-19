import { readdirSync, statSync, readFileSync, writeFileSync } from 'fs';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const TARGET_EXTS = new Set(['.ts', '.tsx']);
const SKIP_DIRS = new Set(['node_modules', '.next', '.git', 'scripts', 'public']);

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    if (SKIP_DIRS.has(entry)) continue;
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      walk(full);
    } else if (TARGET_EXTS.has(extname(full).toLowerCase())) {
      process(full);
    }
  }
}

function process(filePath) {
  let content = readFileSync(filePath, 'utf8');
  // Replace double-extension patterns first
  let updated = content
    .replace(/\.jpg\.jpeg/gi, '.avif')
    .replace(/\.JPG\.jpeg/gi, '.avif')
    .replace(/\.jpeg/gi, '.avif')
    .replace(/\.jpg/gi, '.avif');

  if (updated !== content) {
    writeFileSync(filePath, updated, 'utf8');
    console.log(`Updated: ${filePath.replace(ROOT, '')}`);
  }
}

walk(ROOT);
console.log('Done.');
