// Browser-enforced acceptance criteria (spec 30 §8). These run on every build.
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { listPages, REQUIRED } from './pages.mjs';

const ORIGIN = 'http://127.0.0.1:8787';
const BYTE_BUDGET = 150 * 1024;
const pages = listPages();

test('the build contains every required listing page (SITE-AC-01, local)', () => {
  for (const r of REQUIRED) expect(pages, `missing ${r}`).toContain(r);
});

for (const path of pages) {
  test.describe(path, () => {
    test('zero third-party requests, no cookies or storage, byte budget, no fonts, no JS (SITE-AC-03, -04, -10)', async ({ browser }) => {
      const context = await browser.newContext();
      const page = await context.newPage();
      const foreign = [];
      const fontRequests = [];
      let bytes = 0;
      page.on('request', (req) => {
        const url = new URL(req.url());
        if (url.origin !== ORIGIN) foreign.push(req.url());
        if (req.resourceType() === 'font' || /\.(woff2?|ttf|otf|eot)(\?|$)/i.test(url.pathname)) fontRequests.push(req.url());
      });
      page.on('response', async (res) => {
        try { bytes += (await res.body()).length; } catch {}
      });
      const res = await page.goto(path, { waitUntil: 'networkidle' });
      expect(res?.status(), `${path} status`).toBe(200);
      expect(foreign, 'requests to other origins').toEqual([]);
      expect(fontRequests, 'font files loaded').toEqual([]);
      expect(bytes, 'transferred bytes').toBeLessThanOrEqual(BYTE_BUDGET);

      expect(await context.cookies(), 'cookies').toEqual([]);
      const storage = await page.evaluate(async () => ({
        local: localStorage.length,
        session: sessionStorage.length,
        idb: (await indexedDB.databases()).length,
      }));
      expect(storage).toEqual({ local: 0, session: 0, idb: 0 });

      const scripts = await page.evaluate(() =>
        [...document.querySelectorAll('script')].map((s) => ({ src: s.src, len: s.textContent.length })),
      );
      expect(scripts.filter((s) => s.src), 'external scripts').toEqual([]);
      expect(scripts.reduce((n, s) => n + s.len, 0), 'inline JS bytes').toBeLessThan(2048);
      await context.close();
    });

    test('accessible and legible in light and dark, and at 360px (SITE-AC-07, -08, -09)', async ({ browser }) => {
      const backgrounds = {};
      for (const colorScheme of ['light', 'dark']) {
        const context = await browser.newContext({ colorScheme, viewport: { width: 360, height: 740 } });
        const page = await context.newPage();
        await page.goto(path);
        const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
        expect(results.violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(' ')).join(', ')}`), `${colorScheme} axe`).toEqual([]);
        const dims = await page.evaluate(() => ({ scroll: document.documentElement.scrollWidth, client: document.documentElement.clientWidth }));
        expect(dims.scroll, `${colorScheme} horizontal scroll`).toBeLessThanOrEqual(dims.client);
        backgrounds[colorScheme] = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
        await context.close();
      }
      expect(backgrounds.light, 'dark scheme should change the page background').not.toBe(backgrounds.dark);
    });
  });
}

test('a coming-soon app shows no Marketplace link and no purchase language (SITE-AC-11)', async ({ page }) => {
  const appPages = pages.filter((p) => p.startsWith('/apps/'));
  expect(appPages.length).toBeGreaterThan(0);
  for (const path of appPages) {
    await page.goto(path);
    const status = (await page.locator('.facts .badge').first().textContent())?.trim().toLowerCase();
    if (status !== 'coming soon') continue;
    const hrefs = await page.locator('a').evaluateAll((as) => as.map((a) => a.href));
    expect(hrefs.filter((h) => /marketplace\.atlassian\.com/i.test(h)), `${path} marketplace links`).toEqual([]);
    const text = (await page.locator('main').innerText()).toLowerCase();
    for (const word of ['buy', 'purchase', 'pricing', 'per user', '/month', 'free trial', 'start your trial', 'subscribe']) {
      expect(text.includes(word), `${path} contains "${word}"`).toBe(false);
    }
  }
});

test('a missing path answers 404 with the not-found page', async ({ page }) => {
  const res = await page.goto('/no-such-page/');
  expect(res?.status()).toBe(404);
  await expect(page.locator('main h1')).toHaveText('Page not found');
});

test('legal pages show a last-updated date (SITE-AC-12)', async ({ page }) => {
  for (const path of ['/privacy/', '/terms/', '/security/']) {
    await page.goto(path);
    const time = page.locator('main time[datetime]').first();
    await expect(time, `${path} has a <time>`).toBeVisible();
    expect(await time.getAttribute('datetime')).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    await expect(page.locator('main')).toContainText('Last updated');
  }
});
