// Usage: node tools/verify/shot.mjs <url> <out.png> [width=1540] [theme=light|dark] [clickSelector] [evalJs]
//   evalJs: JS run in the page before the shot (e.g. force an offcanvas open); pass '' to skip clickSelector
// Needs: npm i -D playwright  (uses the locally installed Chrome)
import { chromium } from 'playwright';
const [, , url, out, w = '1540', theme = 'light', click, evalJs] = process.argv;
const browser = await chromium.launch({ channel: 'chrome' });
const ctx = await browser.newContext({ viewport: { width: +w, height: 900 } });
await ctx.addInitScript(([t, st]) => { localStorage.setItem('theme', t); localStorage.setItem('phoenixTheme', t); Object.entries(JSON.parse(st)).forEach(([k, v]) => localStorage.setItem(k, v)); }, [theme, process.env.SHOT_STORAGE || '{}']);
const page = await ctx.newPage();
await page.goto(url, { waitUntil: 'load', timeout: 60000 });
await page.waitForTimeout(1500);
if (click) { await page.click(click); await page.waitForTimeout(600); }
if (evalJs) { await page.evaluate(evalJs); await page.waitForTimeout(600); }
await page.screenshot({ path: out, fullPage: true });
await browser.close();
console.log('wrote', out);
