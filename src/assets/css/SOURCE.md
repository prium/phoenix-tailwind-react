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
