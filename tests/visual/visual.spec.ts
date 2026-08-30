import { test, expect } from '@playwright/test';
import path from 'node:path';
import { pages } from './pages';
import { DEFAULT_TOLERANCE, GOLD, REACT, diff, shoot } from './compare';

const OUT = path.resolve('tests/visual/output');
const only = process.env.VISUAL_PAGES?.split(',')
  .map(s => s.trim())
  .filter(Boolean);

for (const p of pages) {
  if (only && !only.includes(p.name)) continue;
  const variants: { width: number; dark: boolean }[] = [
    { width: 1540, dark: false }
  ];
  if (p.dark) variants.push({ width: 1540, dark: true });
  for (const w of p.widths ?? []) variants.push({ width: w, dark: false });

  for (const v of variants) {
    const label = `${p.name} @${v.width}${v.dark ? ' dark' : ''}`;
    test(label, async ({ browser }) => {
      const opts = { width: v.width, dark: v.dark, mask: p.mask };
      const [react, gold] = await Promise.all([
        shoot(browser, REACT + p.react, opts),
        shoot(browser, GOLD + p.gold, opts)
      ]);
      const name = `${p.name}-${v.width}${v.dark ? '-dark' : ''}`;
      const r = diff(react, gold, OUT, name);
      const tolerance = p.tolerance ?? DEFAULT_TOLERANCE;
      test.info().annotations.push({
        type: 'diff',
        description: `${(r.ratio * 100).toFixed(2)}% (${r.diffPixels}px), height Δ ${r.heightDelta}px`
      });
      await test
        .info()
        .attach('diff', { path: r.files.diff, contentType: 'image/png' });
      await test
        .info()
        .attach('react', { path: r.files.react, contentType: 'image/png' });
      await test
        .info()
        .attach('gold', { path: r.files.gold, contentType: 'image/png' });
      expect(
        r.ratio,
        `${label}: ${(r.ratio * 100).toFixed(2)}% pixels differ (tolerance ${tolerance * 100}%), page height Δ ${r.heightDelta}px — see ${r.files.diff}`
      ).toBeLessThanOrEqual(tolerance);
    });
  }
}
