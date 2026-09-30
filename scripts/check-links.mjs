// SITE-AC-06: no broken internal links; every external link resolves.
// Internal links are checked against the built files. External links are
// fetched (GET, following redirects). Set SKIP_EXTERNAL=1 to check only
// internal links, e.g. offline.
import { readFileSync, existsSync, statSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const root = process.env.SITE_DIR ?? '_site';
const files = [];
const walk = (d) => { for (const n of readdirSync(d)) { const p = join(d, n); statSync(p).isDirectory() ? walk(p) : n.endsWith('.html') && files.push(p); } };
walk(root);
if (files.length === 0) { console.error(`check-links: no HTML files under ${root}`); process.exit(1); }

const internal = new Map();
const external = new Map();
const attr = /\b(?:href|src)\s*=\s*"([^"]*)"/g;
for (const f of files) {
  const html = readFileSync(f, 'utf8');
  for (const m of html.matchAll(attr)) {
    const raw = m[1];
    if (raw.startsWith('mailto:') || raw.startsWith('#') || raw.startsWith('data:')) continue;
    if (/^https?:\/\//.test(raw)) (external.get(raw) ?? external.set(raw, []).get(raw)).push(f);
    else (internal.get(raw) ?? internal.set(raw, []).get(raw)).push(f);
  }
}

let failures = 0;
for (const [href, from] of internal) {
  const path = href.split('#')[0].split('?')[0];
  if (!path.startsWith('/')) { console.error(`relative link ${href} in ${from[0]} (use root-relative links)`); failures++; continue; }
  const target = join(root, path);
  const ok = existsSync(target) && (statSync(target).isFile() || existsSync(join(target, 'index.html')));
  if (!ok) { console.error(`broken internal link ${href} in ${from.join(', ')}`); failures++; }
  const frag = href.split('#')[1];
  if (ok && frag) {
    const file = statSync(target).isFile() ? target : join(target, 'index.html');
    if (!readFileSync(file, 'utf8').includes(`id="${frag}"`)) { console.error(`missing anchor #${frag} for ${href} in ${from[0]}`); failures++; }
  }
}
console.log(`check-links: ${internal.size} internal links checked in ${files.length} pages`);

if (process.env.SKIP_EXTERNAL) {
  console.log(`check-links: skipped ${external.size} external links (SKIP_EXTERNAL)`);
} else {
  for (const [url, from] of external) {
    try {
      const res = await fetch(url, { method: 'GET', redirect: 'follow', headers: { 'user-agent': 'Mozilla/5.0 (evidencepair-site link check)' }, signal: AbortSignal.timeout(15000) });
      if (!res.ok) { console.error(`external link ${url} returned ${res.status} (from ${from[0]})`); failures++; }
      else console.log(`ok ${res.status} ${url}`);
    } catch (e) {
      console.error(`external link ${url} failed: ${e.message} (from ${from[0]})`); failures++;
    }
  }
}
if (failures) { console.error(`check-links: ${failures} failure(s)`); process.exit(1); }
console.log('check-links: all links resolve');
