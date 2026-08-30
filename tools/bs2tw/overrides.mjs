/**
 * App-specific additions/overrides on top of the upstream classMap
 * (tools/bs2tw/classMap.upstream.mjs, copied verbatim from ../phoenix-tailwind).
 *
 * Keep upstream untouched so it can be re-synced with a plain copy; everything
 * this project learns about Bootstrap→Tailwind naming goes here and is merged
 * LAST, so it wins over upstream.
 *
 * Naming reference: src/assets/css/theme.css (token names) and the gold markup
 * in ../phoenix-tailwind/public/*.html.
 */

// Phoenix `fs-*` scale → named sizes from theme.css
// (--text-xs 8.192 / sm 10.24 / md 12.8 / base 16 / lg 20 / xl 25 / 2xl 31.25 …)
const fontSizes = {
  'fs-1': 'text-6xl',
  'fs-2': 'text-5xl',
  'fs-3': 'text-4xl',
  'fs-4': 'text-3xl',
  'fs-5': 'text-2xl',
  'fs-6': 'text-xl',
  'fs-7': 'text-lg',
  'fs-8': 'text-base',
  'fs-9': 'text-md',
  'fs-10': 'text-sm',
  'fs-11': 'text-xs'
};

const breakpoints = { sm: 'sm', md: 'md', lg: 'lg', xl: 'xl', xxl: '2xl' };

const responsiveFontSizes = {};
for (const [bs, tw] of Object.entries(breakpoints)) {
  for (const [key, value] of Object.entries(fontSizes)) {
    const n = key.slice(3);
    responsiveFontSizes[`fs-${bs}-${n}`] = `${tw}:${value}`;
  }
}

// Grid gutters. Bootstrap/Phoenix `g-N` uses the $spacers map
// (1=.25rem 2=.5 3=1 4=1.5 5=2 6=2.5 7=3 8=3.5 9=4 10=4.5 11=5 12=6 13=6.5 14=7 15=7.5)
// while Hummingbird's `g-N` is the Tailwind spacing scale (N × .25rem).
// Upstream leaves `g-*` untouched, which silently shrinks every gap ≥ 3.
const spacerToTailwind = {
  0: 0, 1: 1, 2: 2, 3: 4, 4: 6, 5: 8, 6: 10, 7: 12, 8: 14, 9: 16,
  10: 18, 11: 20, 12: 24, 13: 26, 14: 28, 15: 30
};
const gutters = {};
for (const prefix of ['g', 'gx', 'gy']) {
  for (const [bs, tw] of Object.entries(spacerToTailwind)) {
    gutters[`${prefix}-${bs}`] = `${prefix}-${tw}`;
    for (const [bp, twBp] of Object.entries(breakpoints)) {
      gutters[`${prefix}-${bp}-${bs}`] = `${twBp}:${prefix}-${tw}`;
    }
  }
}

export const overrides = {
  ...fontSizes,
  ...responsiveFontSizes,
  ...gutters,

  // Body colour utilities → token-namespace utilities (auto-generated from
  // --text-color-* / --background-color-* / --border-color-* in theme.css)
  'text-body': 'text-default',
  'text-body-emphasis': 'text-emphasis',
  'text-body-highlight': 'text-highlight',
  'text-body-secondary': 'text-muted',
  'text-body-tertiary': 'text-subtle',
  'text-body-quaternary': 'text-soft',
  'bg-body': 'bg-default',
  'bg-body-emphasis': 'bg-soft',
  'bg-body-highlight': 'bg-subtle',
  'bg-body-secondary': 'bg-muted',
  'bg-body-tertiary': 'bg-highlight',
  'bg-body-hover': 'hover:bg-default',
  'border-translucent': 'border-subtle',

  // Misc Bootstrap helpers that upstream left unmapped
  'rounded-pill': 'rounded-full',
  'rounded-circle': 'rounded-full',
  'lh-1': 'leading-none',
  'lh-sm': 'leading-sm',
  'lh-base': 'leading-base',
  'lh-lg': 'leading-lg',
  'white-space-nowrap': 'whitespace-nowrap',
  'text-nowrap': 'whitespace-nowrap',
  'position-relative': 'relative',
  'position-absolute': 'absolute',
  'position-static': 'static',
  'position-fixed': 'fixed',
  'position-sticky': 'sticky',
  'visually-hidden': 'sr-only',
  'fixed-top': 'fixed top-0 left-0 right-0 z-1030',
  'fw-black': 'font-black',
  'dark__text-opacity-50': 'dark:text-current/50'
};
