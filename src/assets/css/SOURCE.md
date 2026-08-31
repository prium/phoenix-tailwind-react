Copied verbatim from ../phoenix-tailwind/src/css at commit b9ac89e97 (hummingbird 1.4.0).
Only index.css is app-specific; keep the rest in sync with phoenix-tailwind.

Local patch ahead of that commit (applied in the phoenix-tailwind working tree
too, but not yet committed there): components/avatar.css defaults
--avatar-width/--avatar-height to var(--avatar-size) so .avatar-group avatars
keep a fixed size for every avatar-* size instead of sizing from each image's
intrinsic resolution. Drop this note once phoenix-tailwind commits the fix.

Also patched in the phoenix-tailwind working tree (pug, not css):
dashboard/travel-agency.pug FinancialActivities margins are now
`mt-8 xl:mt-0 2xl:mt-8 mb-8` — top matches the original Phoenix (mt-5 = 2rem)
and the `2xl:mb-0` was dropped so the chart keeps a 32px gap above the Gross
Profit card at 2xl (the original sat nearly flush there; requested change).
Commit it upstream with the avatar fix.

Third working-tree patch upstream: financial-activities-chart.js tooltip now
Math.abs()es the diverging revenue/expanses values (bundle rebuilt via gulp
script) — the raw negatives leaked into the tooltip on both sides.
