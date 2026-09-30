// SITE-AC-13: adding an app is a content change only. Adds a fixture app
// (status: live, with a Marketplace URL), builds to a temp dir, checks the app
// page and its home card exist with the Marketplace link, then removes it.
// The fixture's Marketplace URL is not fetched: the fixture never ships.
import { execFileSync } from 'node:child_process';
import { writeFileSync, rmSync, readFileSync, existsSync, mkdirSync } from 'node:fs';

const fixture = 'content/apps/zz-fixture-app.md';
const docsDir = 'content/docs/zz-fixture-app';
const out = '.tmp/build-fixture';
const front = `---
name: Fixture App for Confluence
product: Confluence
tagline: A fixture used only to prove that adding an app is a content change.
price: "$1.00 per user per month"
status: live
marketplaceUrl: https://marketplace.atlassian.com/apps/0000000/fixture-app
docsPath: /docs/zz-fixture-app/
updated: 2026-01-01
---
Body of the fixture app.
`;
try {
  writeFileSync(fixture, front);
  mkdirSync(docsDir, { recursive: true });
  writeFileSync(`${docsDir}/quick-start.md`, `---\ntitle: Quick start\napp: zz-fixture-app\norder: 1\n---\nFixture docs.\n`);
  rmSync(out, { recursive: true, force: true });
  execFileSync('npx', ['eleventy', '--output', out], { stdio: 'inherit' });
  const appPage = `${out}/apps/zz-fixture-app/index.html`;
  const docPage = `${out}/docs/zz-fixture-app/quick-start/index.html`;
  const home = readFileSync(`${out}/index.html`, 'utf8');
  const fails = [];
  if (!existsSync(appPage)) fails.push('app page not built');
  else {
    const html = readFileSync(appPage, 'utf8');
    if (!html.includes('marketplace.atlassian.com/apps/0000000/fixture-app')) fails.push('live app page lacks Marketplace link');
    if (!html.includes('$1.00 per user per month')) fails.push('live app page lacks price');
  }
  if (!existsSync(docPage)) fails.push('fixture doc page not built');
  if (!home.includes('Fixture App for Confluence')) fails.push('home page lacks fixture card');
  if (!home.includes('marketplace.atlassian.com/apps/0000000/fixture-app')) fails.push('home card lacks Marketplace link');
  if (fails.length) { console.error('check-content-model: ' + fails.join('; ')); process.exit(1); }
  console.log('check-content-model: a new app renders from one content file with no template change');
} finally {
  rmSync(fixture, { force: true });
  rmSync(docsDir, { recursive: true, force: true });
  rmSync(out, { recursive: true, force: true });
}
