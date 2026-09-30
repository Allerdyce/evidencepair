// A draft site may carry "Pending review" statements. A non-draft site may
// not: the `pending` shortcode throws at build time when site.draft is false,
// and this check catches any marker that slipped through another route.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
const site = JSON.parse(readFileSync('data/site.json', 'utf8'));
const root = process.env.SITE_DIR ?? '_site';
const hits = [];
const walk = (d) => { for (const n of readdirSync(d)) { const p = join(d, n); if (statSync(p).isDirectory()) walk(p); else if (n.endsWith('.html') && readFileSync(p, 'utf8').includes('data-pending="1"')) hits.push(p); } };
walk(root);
if (site.draft) { console.log(`check-pending: draft site, ${hits.length} page(s) carry pending statements: ${hits.join(', ') || 'none'}`); process.exit(0); }
if (hits.length) { console.error(`check-pending: site.draft is false but pending statements remain in: ${hits.join(', ')}`); process.exit(1); }
console.log('check-pending: no pending statements');
