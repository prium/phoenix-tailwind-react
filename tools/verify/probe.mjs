// Usage: node tools/verify/probe.mjs <url> <selector> [clickSelector]
// Prints box + key computed styles for the first element matching <selector>
// (and its parent chain up to 3 levels). Run against BOTH the gold page and the
// React page and diff the output.
import { chromium } from 'playwright';
const [, , url, sel, click] = process.argv;
const browser = await chromium.launch({ channel: 'chrome' });
const page = await (await browser.newContext({ viewport: { width: 1540, height: 900 } })).newPage();
await page.goto(url, { waitUntil: 'load', timeout: 60000 });
await page.waitForTimeout(1500);
if (click) { await page.click(click); await page.waitForTimeout(600); }
const r = await page.evaluate(sel => {
  const box = el => {
    if (!el) return null;
    const b = el.getBoundingClientRect(), c = getComputedStyle(el);
    return { tag: el.tagName, cls: el.className, w: +b.width.toFixed(1), h: +b.height.toFixed(1),
      pad: c.padding, margin: c.margin, fs: c.fontSize, lh: c.lineHeight, minH: c.minHeight,
      minW: c.minWidth, maxW: c.maxWidth, disp: c.display, pos: c.position, color: c.color, bg: c.backgroundColor };
  };
  const el = document.querySelector(sel);
  if (!el) return { error: 'not found: ' + sel };
  const chain = []; let p = el.parentElement;
  for (let i = 0; i < 3 && p; i++, p = p.parentElement) chain.push(box(p));
  return { el: box(el), parents: chain };
}, sel);
console.log(JSON.stringify(r, null, 1));
await browser.close();
