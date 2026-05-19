/**
 * Converts all .jpg / .jpeg images in public/ (recursively) to .avif
 * Skips .png (logos/favicons), .ARW (raw), and already-converted files.
 * Deletes the originals after successful conversion.
 */

import sharp from 'sharp';
import { readdirSync, statSync, unlinkSync } from 'fs';
import { join, extname, basename, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, '..', 'public');

const CONVERTIBLE = new Set(['.jpg', '.jpeg']);

let converted = 0;
let failed = 0;
let skipped = 0;

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      walk(full);
    } else {
      const ext = extname(full).toLowerCase();
      if (CONVERTIBLE.has(ext)) {
        convert(full);
      } else {
        skipped++;
      }
    }
  }
}

async function convert(srcPath) {
  const base = basename(srcPath, extname(srcPath));
  // Handle filenames like "20251016_153307.jpg.jpeg" → strip all extensions cleanly
  const cleanBase = base.replace(/\.(jpg|jpeg)$/i, '');
  const destPath = join(dirname(srcPath), cleanBase + '.avif');

  try {
    await sharp(srcPath)
      .avif({ quality: 72, effort: 4 })
      .toFile(destPath);
    unlinkSync(srcPath);
    converted++;
    console.log(`  ✓  ${srcPath.replace(PUBLIC_DIR, '')}  →  .avif`);
  } catch (err) {
    failed++;
    console.error(`  ✗  ${srcPath.replace(PUBLIC_DIR, '')}  —  ${err.message}`);
  }
}

console.log('\nScanning public/ for convertible images…\n');
walk(PUBLIC_DIR);
console.log(`\nDone — converted: ${converted}  |  failed: ${failed}  |  skipped (non-jpg): ${skipped}\n`);
