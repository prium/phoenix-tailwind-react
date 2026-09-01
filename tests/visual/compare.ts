import { Browser, Page } from '@playwright/test';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';
import fs from 'node:fs';
import path from 'node:path';

export const REACT = process.env.VISUAL_REACT_URL ?? 'http://localhost:5077';
export const GOLD = process.env.VISUAL_GOLD_URL ?? 'http://localhost:5088';
/** Fraction of differing pixels tolerated (0.01 = 1%). */
export const DEFAULT_TOLERANCE = Number(process.env.VISUAL_TOLERANCE ?? 0.005);
/** Per-pixel colour sensitivity for pixelmatch (0 strict … 1 lax). */
const PIXEL_THRESHOLD = Number(process.env.VISUAL_PIXEL_THRESHOLD ?? 0.15);

/** Things that are never comparable: live widgets, third-party tiles, animations. */
const ALWAYS_MASK = [
  // vertical nav menu items differ between the React routes and the gold demo menu
  '.navbar-vertical-content',
  '.support-chat-container',
  '[data-support-chat]',
  '.settings-toggle',
  '.settings-panel',
  '.leaflet-container',
  '.mapboxgl-canvas',
  '.mapboxgl-map',
  'canvas',
  'video',
  '.swiper-wrapper'
];

const HIDE_CSS = `
  *, *::before, *::after { transition: none !important; animation: none !important; caret-color: transparent !important; }
  ::-webkit-scrollbar { display: none !important; }
  html { scrollbar-width: none !important; }
  ${ALWAYS_MASK.join(', ')} { opacity: 0 !important; pointer-events: none !important; }
`;

export interface ShotOptions {
  width: number;
  dark: boolean;
  mask?: string[];
  setup?: { click?: string; eval?: string; storage?: Record<string, string> };
  /** selectors whose element geometry is compared between the two sides */
  probes?: string[];
}

export interface ProbeBox {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface Shot {
  png: PNG;
  /** bounding boxes per probe selector (all matches, in DOM order) */
  boxes: Record<string, ProbeBox[]>;
}

export async function shoot(
  browser: Browser,
  url: string,
  opts: ShotOptions
): Promise<Shot> {
  const context = await browser.newContext({
    viewport: { width: opts.width, height: 900 },
    deviceScaleFactor: 1,
    reducedMotion: 'reduce',
    colorScheme: opts.dark ? 'dark' : 'light'
  });
  // Both apps read the same localStorage keys (phoenix config.js / index.html pre-paint script).
  await context.addInitScript(
    ([theme, storage]) => {
      localStorage.setItem('theme', theme);
      localStorage.setItem('isRTL', 'false');
      localStorage.setItem('isNavbarVerticalCollapsed', 'false');
      localStorage.setItem('phoenixTheme', theme); // gold config.js key
      Object.entries(storage).forEach(([k, v]) => localStorage.setItem(k, v));
    },
    [opts.dark ? 'dark' : 'light', opts.setup?.storage ?? {}] as const
  );
  const page = await context.newPage();
  await page.goto(url, { waitUntil: 'load', timeout: 60_000 });
  await page.addStyleTag({
    content:
      HIDE_CSS +
      (opts.mask?.length
        ? `${opts.mask.join(', ')} { opacity: 0 !important; pointer-events: none !important; }`
        : '')
  });
  await settle(page);
  if (opts.setup?.click) {
    await page.click(opts.setup.click);
    await page.waitForTimeout(600);
  }
  if (opts.setup?.eval) {
    await page.evaluate(opts.setup.eval);
    await page.waitForTimeout(600);
  }
  let boxes: Record<string, ProbeBox[]> = {};
  if (opts.probes?.length) {
    boxes = await page.evaluate(
      sels =>
        Object.fromEntries(
          sels.map(sel => [
            sel,
            [...document.querySelectorAll(sel)]
              .filter(el => {
                const r = el.getBoundingClientRect();
                // ignore hidden instances (e.g. the gold keeps closed modals in the DOM)
                return r.width > 0 && r.height > 0;
              })
              .map(el => {
                const r = el.getBoundingClientRect();
                return {
                  x: Math.round(r.x * 10) / 10,
                  y: Math.round((r.y + window.scrollY) * 10) / 10,
                  w: Math.round(r.width * 10) / 10,
                  h: Math.round(r.height * 10) / 10
                };
              })
          ])
        ),
      opts.probes
    );
  }
  const buf = await page.screenshot({ fullPage: true, animations: 'disabled' });
  await context.close();
  return { png: PNG.sync.read(buf), boxes };
}

const AWAIT_IMAGES = async () => {
  await (document as any).fonts?.ready;
  await Promise.all(
    Array.from(document.images)
      .filter(i => !i.complete)
      .map(
        i =>
          new Promise(r => {
            i.onload = i.onerror = r;
          })
      )
  );
};

/** Wait for fonts, images, echarts and layout to be stable. */
async function settle(page: Page) {
  await page.evaluate(AWAIT_IMAGES);
  // Scroll through the page so lazy content renders, then back to top.
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 800) {
      window.scrollTo(0, y);
      await new Promise(r => setTimeout(r, 40));
    }
    window.scrollTo(0, 0);
  });
  // Images mounted after the first wait (swiper loop clones, lazy sections
  // revealed by the scroll pass) load late and shift layout — wait again.
  await page.evaluate(AWAIT_IMAGES);
  await page.waitForTimeout(700);
}

function padTo(img: PNG, w: number, h: number): PNG {
  if (img.width === w && img.height === h) return img;
  const out = new PNG({ width: w, height: h, fill: true });
  out.data.fill(255);
  PNG.bitblt(img, out, 0, 0, img.width, img.height, 0, 0);
  return out;
}

export interface DiffResult {
  ratio: number;
  diffPixels: number;
  width: number;
  height: number;
  heightDelta: number;
  files: { react: string; gold: string; diff: string };
}

export function diff(
  react: PNG,
  gold: PNG,
  outDir: string,
  name: string
): DiffResult {
  const width = Math.max(react.width, gold.width);
  const height = Math.max(react.height, gold.height);
  const a = padTo(react, width, height);
  const b = padTo(gold, width, height);
  const d = new PNG({ width, height });
  const diffPixels = pixelmatch(a.data, b.data, d.data, width, height, {
    threshold: PIXEL_THRESHOLD,
    includeAA: false,
    diffColor: [255, 0, 0],
    diffColorAlt: [0, 128, 255]
  });
  fs.mkdirSync(outDir, { recursive: true });
  const files = {
    react: path.join(outDir, `${name}.react.png`),
    gold: path.join(outDir, `${name}.gold.png`),
    diff: path.join(outDir, `${name}.diff.png`)
  };
  fs.writeFileSync(files.react, PNG.sync.write(a));
  fs.writeFileSync(files.gold, PNG.sync.write(b));
  fs.writeFileSync(files.diff, PNG.sync.write(d));
  return {
    ratio: diffPixels / (width * height),
    diffPixels,
    width,
    height,
    heightDelta: react.height - gold.height,
    files
  };
}
