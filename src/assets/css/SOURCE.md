Copied verbatim from ../phoenix-tailwind/src/css at commit b9ac89e97 (hummingbird 1.4.0).
Only index.css is app-specific; keep the rest in sync with phoenix-tailwind.

Local patch ahead of that commit (applied in the phoenix-tailwind working tree
too, but not yet committed there): components/avatar.css
1. defaults --avatar-width/--avatar-height to var(--avatar-size) so
   .avatar-group avatars keep a fixed size for every avatar-* size instead of
   sizing from each image's intrinsic resolution;
2. the avatar-lg…avatar-4xl size utilities now set --avatar-size (the var the
   hummingbird core `.avatar` box actually consumes) instead of the
   --avatar-width/height pair — standalone avatars with those classes rendered
   at the 40px default (social profile/feed cover avatars were tiny; avatar-lg
   was 50px instead of the original Phoenix 48px). Gold public CSS rebuilt via
   `npx gulp style`;
3. `.avatar img` fills the box and crops (`size-full object-cover`, as the
   original phoenix `.avatar img { width/height:100%; object-fit:cover }`) —
   non-square uploads rendered at natural aspect and broke the circle.
4. `.avatar-emoji` is restored: the Tailwind port kept the markup
   (mixins/common/Avatar.pug still emits `.avatar-emoji > span`) but never
   ported the rule, so an emoji avatar rendered as bare text with no plate —
   the rule only survives in the stale bootstrap build
   (public/assets/css/theme.min.css). Sized at ~0.75 of the box, as the old
   per-size `.avatar-{s..5xl} .avatar-emoji` steps did.
Drop this note once phoenix-tailwind commits the fix.

Fifth working-tree patch upstream: components/forms.css adds
`focus-visible:ring-0` to `.form-check-input`. Hummingbird core rings the box at
`ring-4` / 50% alpha on `:focus-visible` while the phoenix skin adds its own
`0 0 0 .25rem` / 25% shadow, so a keyboard-focused checkbox or radio stacked
both and read as a heavy halo. The original phoenix has a single
`0 0 0 .25rem rgba(56,116,255,.25)`.

Also patched in the phoenix-tailwind working tree (pug, not css):
dashboard/travel-agency.pug FinancialActivities margins are now
`mt-8 xl:mt-0 2xl:mt-8 mb-8` — top matches the original Phoenix (mt-5 = 2rem)
and the `2xl:mb-0` was dropped so the chart keeps a 32px gap above the Gross
Profit card at 2xl (the original sat nearly flush there; requested change).
Commit it upstream with the avatar fix.

Third working-tree patch upstream: financial-activities-chart.js tooltip now
Math.abs()es the diverging revenue/expanses values (bundle rebuilt via gulp
script) — the raw negatives leaked into the tooltip on both sides.

Sixth working-tree patch upstream: plugins/nouislider.css adds `.noUi-primary`,
`.noUi-success`, `.noUi-info`, `.noUi-warning` and `.noUi-danger`, each setting
`.noUi-connect { background: var(--color-<name>) !important }`. The theme's own
markup — `modules/forms/advance/range.html` and the demos — has always used
these classes, but only `.noUi-primary-lighter` was ever written, so the
"Colored Sliders" card rendered five identical blue sliders in the gold too.
Verified: success #25b003, info #0097eb, warning #e5780b, danger #fa3b1d.
Rebuild the gold's public/assets/css before comparing that page visually.


Seventh working-tree patch upstream: unconverted SCSS that Tailwind reported as
build warnings and that had therefore never applied.
1. Seven `> {` / `+ {` blocks (navbar-top, mixed x2, treeview, showcase x2,
   google-map) are SCSS's "children of the parent" shorthand, which is an
   invalid empty selector in native CSS nesting — the whole block was dropped.
   Merged into the child selector (`+ label`, `> div`, ...).
2. Four `@include hover-focus` blocks in plugins/flatpickr.css became
   `&:hover, &:focus` — the flatpickr hover/focus styling had never applied.
3. components/stock.css kept two `@include media-breakpoint-up` calls that were
   never converted. Left inert (commented, as this theme's other unconverted
   blocks are) rather than enabled: the xxl one would widen
   `.stock-overview-card` from 300px to 360px at >= 1540px, a design change.
   Enable it there if that sizing was the intent.
Gold public CSS rebuilt via `npx gulp style`.

Eighth working-tree patch upstream: small/large control sizes. root.css only
set the base `--input-btn-*` tokens, so every `-sm`/`-lg` size in hummingbird
(btn, form-control, form-select, input-group) kept hummingbird's defaults: a
10.24px (`--text-sm` in this scale) small font instead of 0.8rem, 4px/8px radii,
1.25/1.5 line-heights and 20px large input padding. Measured against the
original Bootstrap phoenix (../phoenix) on identical markup:
  btn-sm 30.28 -> 33.34px, form-control-sm / form-select-sm 29.25 -> 33.06px,
  btn-lg 54 -> 49.19px, form-control-lg / form-select-lg 50 -> 49.83px.
1. root.css adds phoenix's `$input-btn-*-sm/-lg` as `--input-btn-*-sm/-lg`.
2. buttons.css btn-lg pins radius-md and line-height 1.2.
3. forms.css form-control-lg / form-select-lg keep the 1rem input padding-x;
   input-group-text is semibold; input-group-sm/-lg size the addon, button and
   select (3.5rem padding-right) as phoenix does.
Gold public CSS rebuilt via `npx gulp style`.

APP-ONLY DEVIATION (not upstream, re-apply after every sync) — three `url()`
paths. Upstream writes them for phoenix-tailwind's *build output*, where the
stylesheet sits in public/assets/css/ beside public/assets/img/; Vite resolves
them against the source file, so they failed to resolve and shipped as broken
background images. No single path satisfies both layouts, and Tailwind rebases
relative urls while inlining @import, so a Vite plugin cannot intercept them.
Rewritten to this app's src/assets/img:
  components/navbar-top.css  ../img/icons/logo-bg.png   -> ../../img/icons/logo-bg.png
  components/feed.css        generic/59.png             -> ../../img/generic/59.png
  plugins/rater.css          /assets/img/icons/star.svg -> ../../img/icons/star.svg
(components/landing.css and components/travel-agency.css already use the
source-relative form upstream, so they need no patch — they are the ones that
are broken in the gold instead.)
