// SITE-AC-01 against the deployed site: every required listing URL answers
// 200 over HTTPS. Usage: node scripts/check-live.mjs https://evidencepair.com
const base = process.argv[2] ?? process.env.SITE_URL;
if (!base || !base.startsWith('https://')) { console.error('usage: check-live.mjs https://<host>'); process.exit(2); }
const required = ['/', '/privacy/', '/terms/', '/security/', '/support/', '/docs/'];
let failures = 0;
for (const p of required) {
  const url = new URL(p, base).toString();
  try {
    const res = await fetch(url, { redirect: 'manual', signal: AbortSignal.timeout(15000) });
    const ok = res.status === 200 && res.url.startsWith('https://');
    console.log(`${ok ? 'ok ' : 'FAIL'} ${res.status} ${url}`);
    if (!ok) failures++;
  } catch (e) { console.log(`FAIL ${url}: ${e.message}`); failures++; }
}
process.exit(failures ? 1 : 0);
