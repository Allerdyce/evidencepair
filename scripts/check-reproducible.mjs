// SITE-AC-14: two clean builds of the same commit produce byte-identical output.
import { execFileSync } from 'node:child_process';
import { rmSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const a = '.tmp/build-a', b = '.tmp/build-b';
for (const d of [a, b]) { rmSync(d, { recursive: true, force: true }); execFileSync('npx', ['eleventy', '--output', d], { stdio: 'inherit' }); }
const list = (d) => { const out = []; const walk = (x) => { for (const n of readdirSync(x)) { const p = join(x, n); statSync(p).isDirectory() ? walk(p) : out.push(p.slice(d.length + 1)); } }; walk(d); return out.sort(); };
const la = list(a), lb = list(b);
if (JSON.stringify(la) !== JSON.stringify(lb)) { console.error('file lists differ'); process.exit(1); }
let diff = 0;
for (const f of la) if (!readFileSync(join(a, f)).equals(readFileSync(join(b, f)))) { console.error(`differs: ${f}`); diff++; }
if (diff) process.exit(1);
console.log(`check-reproducible: ${la.length} files identical across two builds`);
