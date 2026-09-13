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
      const opts = {
        width: v.width,
        dark: v.dark,
        mask: p.mask,
        probes: p.probes
      };
      const [react, gold] = await Promise.all([
        shoot(browser, REACT + p.react, { ...opts, setup: p.setup?.react }),
        shoot(browser, GOLD + p.gold, { ...opts, setup: p.setup?.gold })
      ]);
      const name = `${p.name}-${v.width}${v.dark ? '-dark' : ''}`;
      const r = diff(react.png, gold.png, OUT, name);

      // element-geometry probes: visual centers must match within 1.5px
      for (const sel of p.probes ?? []) {
        const rb = react.boxes[sel] ?? [];
        const gb = gold.boxes[sel] ?? [];
        expect
          .soft(rb.length, `${label}: probe "${sel}" match count`)
          .toBe(gb.length);
        rb.forEach((b, i) => {
          const g = gb[i];
          if (!g) return;
          const dx = Math.abs(b.x + b.w / 2 - (g.x + g.w / 2));
          const dy = Math.abs(b.y + b.h / 2 - (g.y + g.h / 2));
          expect
            .soft(
              Math.max(dx, dy),
              `${label}: probe "${sel}"[${i}] center off by ${dx.toFixed(1)}/${dy.toFixed(1)}px (react ${JSON.stringify(b)} vs gold ${JSON.stringify(g)})`
            )
            .toBeLessThanOrEqual(1.5);
        });
      }
      // an explicit VISUAL_TOLERANCE env wins over per-page values (audit mode)
      const tolerance = process.env.VISUAL_TOLERANCE
        ? DEFAULT_TOLERANCE
        : (p.tolerance ?? DEFAULT_TOLERANCE);
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
