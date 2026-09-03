/**
 * Gate for the `/modules/**` documentation pages.
 *
 * Their examples are executed by react-live, so a broken snippet does not fail
 * the build or the visual suite — it just renders an error where the preview
 * should be. This walks every doc route and reports, per page:
 *   - uncaught page errors
 *   - every react-live compile error (`<LiveError data-live-error>`)
 *   - how many examples rendered a preview at all
 *
 * Usage: node tools/verify/docs.mjs [routePrefix ...]
 *        node tools/verify/docs.mjs /modules/components
 * Expects the React dev server on :5077 (npx vite --port 5077).
 */
import { chromium } from 'playwright';
import { readFileSync } from 'node:fs';

const BASE = process.env.REACT_BASE ?? 'http://localhost:5077';

/** Pull every `path: '…'` route out of Routes.tsx under the given prefixes. */
const routesFor = prefixes => {
  const src = readFileSync(
    new URL('../../src/Routes.tsx', import.meta.url),
    'utf8'
  );
  const routes = new Set();
  // the modules routes are nested `path:` strings; rebuild them from the file's
  // own structure by tracking the `/modules` and `/pages` parents
  const stack = [];
  for (const line of src.split('\n')) {
    const depth = line.search(/\S/);
    const match = line.match(/path: '([^']+)'/);
    if (!match) continue;
    while (stack.length && stack[stack.length - 1].depth >= depth) stack.pop();
    const parent = stack.length ? stack[stack.length - 1].path : '';
    const path = match[1].startsWith('/')
      ? match[1]
      : `${parent}/${match[1]}`.replace(/\/+/g, '/');
    stack.push({ depth, path });
    if (prefixes.some(p => path.startsWith(p))) routes.add(path);
  }
  return [...routes].sort();
};

const prefixes = process.argv.slice(2);
const routes = routesFor(prefixes.length ? prefixes : ['/modules']);

const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ viewport: { width: 1540, height: 1200 } });

let failed = 0;
for (const route of routes) {
  const pageErrors = [];
  const onError = err => pageErrors.push(err.message);
  page.on('pageerror', onError);

  await page.goto(`${BASE}${route}`, { waitUntil: 'load' });
  await page
    .waitForFunction(() => !document.querySelector('.phoenix-loader'), {
      timeout: 30_000
    })
    .catch(() => {});
  await page.waitForTimeout(600);

  const liveErrors = await page.$$eval('[data-live-error]', els =>
    els.map(el => el.textContent.trim()).filter(Boolean)
  );
  const previews = await page.$$eval(
    '[data-component-card], .card',
    els => els.length
  );

  page.off('pageerror', onError);

  const bad = liveErrors.length || pageErrors.length;
  if (bad) failed += 1;
  console.log(
    `${bad ? 'FAIL' : ' ok '}  ${route.padEnd(52)} cards=${String(previews).padStart(2)}` +
      (liveErrors.length ? `  liveErrors=${liveErrors.length}` : '') +
      (pageErrors.length ? `  pageErrors=${pageErrors.length}` : '')
  );
  for (const e of liveErrors) console.log(`        live: ${e.split('\n')[0]}`);
  for (const e of pageErrors) console.log(`        page: ${e.split('\n')[0]}`);
}

await browser.close();
console.log(`\n${routes.length - failed}/${routes.length} doc pages clean`);
process.exit(failed ? 1 : 0);
