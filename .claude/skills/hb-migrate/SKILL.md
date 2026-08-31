---
name: hb-migrate
description: Migrate a phoenix-tailwind-react module/page from react-bootstrap + Bootstrap SCSS to Hummingbird React + Tailwind v4, pixel-identical to the static ../phoenix-tailwind gold. Use for "migrate/convert <module or page> to hummingbird", "port <page> to tailwind", or when a page still imports react-bootstrap.
---

# Hummingbird React + Tailwind migration

Goal: every page renders **pixel-identical** to the static gold in `../phoenix-tailwind`
(pug → `public/**/*.html`), using `@hummingbirdui/react` + the copied CSS in
`src/assets/css`. No react-bootstrap stays behind. The E-commerce module
(`src/pages/apps/e-commerce`, `src/pages/dashboard/ecommerce`) is the finished
reference — copy its patterns.

## 0. Ground truth, always

| Thing | Where |
|---|---|
| Gold markup | `../phoenix-tailwind/src/pug/**` (mixins under `src/pug/mixins/<module>/`) |
| Gold rendered HTML | `../phoenix-tailwind/public/**/*.html` — if missing/stale run `cd ../phoenix-tailwind && npx gulp compile:all` (background, ~3 min) |
| Gold CSS (copied verbatim) | `src/assets/css/**` — source commit in `src/assets/css/SOURCE.md`; only `index.css` is app-specific |
| Hummingbird React API | `node_modules/@hummingbirdui/react/dist/components/<name>/<name>.js` (read the cva variants to see what classes a prop emits) |
| Hummingbird core CSS | `node_modules/@hummingbirdui/hummingbird/src/**` |
| Class-name codemod | `tools/bs2tw/` (`npm run convert:tw -- <dir>`), `overrides.mjs` = app knowledge, `CONVERTED.md` = what has been run |
| Migration status | `MIGRATION.md` at the repo root — update its table in the same commit that finishes a page/module |
| Token rename codemod | `node tools/bs2tw/rename-tokens.mjs <dir>` (`getThemeColor('primary')` → `'color-primary'`, see `tokenMap.mjs`) |
| Visual regression | `tests/visual/` (`pages.ts` list, `compare.ts` masks/tolerance, `visual.spec.ts`), `playwright.config.ts` starts both servers; `tools/verify/{shot,probe}.mjs` for ad-hoc checks |
| Finished examples | `src/components/base/{Button,Badge,Avatar,AdvanceTable,AdvanceTableFooter,IndeterminateCheckbox,RevealDropdown,Swiper,Timeline,Dropzone}.tsx`, `src/components/tables/{ProductsTable,OrdersTable}.tsx`, `src/components/navbars/ecommerce/*`, `src/layouts/MainLayout.tsx` |

**Never guess a class from Bootstrap memory.** Bootstrap `mb-4` ≠ Tailwind `mb-4`.
Open the pug mixin and copy its class string.

## 1. Per-page loop

1. **Locate** the gold pug for the page (`grep -rl "<unique heading text>" ../phoenix-tailwind/src/pug`) and the React page + every component in its import closure that still imports `react-bootstrap` (`grep -rl "react-bootstrap" src/pages/<module> src/components/...`).
2. **Codemod first, once.** For each directory not yet in `tools/bs2tw/CONVERTED.md`: `npm run convert:tw -- <dir>` → append to `CONVERTED.md` → commit `chore: run bs2tw codemod over <dir>`. Running twice corrupts spacing (`mb-4→mb-6→mb-10`).
3. **Port components** file by file (leaf components → page). Replace react-bootstrap with Hummingbird React or plain elements (section 2), then paste the **exact** class strings from the pug. Put literal class strings in data files when classes are dynamic (Tailwind can't see `text-${color}`).
4. **Start servers**: `npx vite --port 5077` (React) and `cd ../phoenix-tailwind/public && python3 -m http.server 5088` (gold), both in background.
5. **Verify visually** with the regression suite: add the page to `tests/visual/pages.ts` (`react` route + `gold` html path), then `VISUAL_PAGES=<name> npm run test:visual`. It screenshots both sides, writes `tests/visual/output/<name>-1540.{react,gold,diff}.png` and fails above 1% differing pixels. **View the diff png**: red = React-only, blue = gold-only; a uniform vertical shift means a margin/padding delta above that point; scattered text = data-only. For any real delta run `node tools/verify/probe.mjs <url> "<selector>"` against gold (:5088) and React (:5077) — the differing class/padding/line-height is visible in the numbers. Fix, re-run. Default tolerance is **0.5%**; only raise a page's `tolerance` for documented data-only noise — comment the audited value (`VISUAL_TOLERANCE=0.0001`) and the reason, and FIRST try aligning the demo data instead: the gold pages hardcode their own demo sets (sometimes different per view for the same entity — mirror that with view-specific data/order exports) and `data/users.ts` carries the gold team images, so avatars/rows can usually be made to match. A page-level pixel tolerance cannot see small in-component misalignments (a 4px icon shift is ~0.003% of a page): for anchored icons/controls add `probes: ['<selector>']` to the page entry — the suite compares each visible match's visual center against the gold within 1.5px. `npm run test:visual` (no filter) is the module gate; `npm run test:visual:report` opens the HTML report.
6. **Leftover grep must be empty** for the touched dirs:
   `grep -rnE "\b(d-(flex|none|block)|fs-[0-9]+|fw-|text-body|bg-body|position-|justify-content-|align-items-|mx-n|rounded-pill|react-bootstrap)" <dirs>`
7. `npx tsc --noEmit -p tsconfig.app.json | grep <changed files>` (repo has ~300 pre-existing errors in unmigrated files — only gate on yours) and `npx prettier --write <files>`.
8. **Commit per page/feature** with the `feat(<module>): …` / `fix(<area>): …` style used on `feat/hummingbird-tailwind`. Remove pages' `TODO(hb-migration)` stubs when you replace them.
9. **Update `MIGRATION.md`** — flip the page/module row to ✅ (or 🚧 with a note) in the same commit.

## 2. Component replacement map

| react-bootstrap | Use instead |
|---|---|
| `Button` | app `components/base/Button` (`variant="phoenix-secondary"`/`color`+`variant="phoenix"`, `size`, `startIcon`, `loading`, `asChild`) |
| `Badge` | app `components/base/Badge` (`variant="phoenix"|"tag"`, `bg`, `pill`, `icon`) |
| `Card`, `Card.Body` | HB `Card`, `Card.Body` |
| `Row`/`Col`/`Container` | HB `Row`/`Col` (same breakpoint props, gutters `g-N` remapped: 2→2, 3→4, 4→6, 5→8, 6→10) / plain `div.container-small` (`PhoenixContainer`) |
| `Dropdown` | HB `Dropdown` + `Dropdown.Trigger asChild` + `Dropdown.Content align=…` + `Dropdown.Item asChild <Link>`. Content is **portaled** — put all classes on `Dropdown.Content`, never rely on descendant selectors; pin width if the CSS used `min-width` (Radix popper is `min-width:max-content`) |
| `Nav`/`Tabs` | HB `Tabs` (`Tabs.List variant="underline"|"vertical-tab"`) or plain `ul.nav > a.nav-link` (see `FilterTab`) |
| `Modal` | HB `Dialog` (`Dialog.Content/Title/Body`); `Offcanvas` → HB `Drawer` |
| `Form.Control/Select/Check` | HB `Input`/`Select`/`Textarea`/`InputGroup`. **Checkbox in tables**: plain `div.form-check > input.form-check-input` (HB `Checkbox` adds a halo wrapper) — use `IndeterminateCheckbox`/`CheckboxItem` |
| `Table` | `AdvanceTable` (react-table + HB `Table`, `tableProps={{size:'sm'}}` for `table-sm`) with column `meta.headerProps/cellProps` classes copied from the pug `th`/`td` |
| `Collapse` | HB `Collapsible`; nav menus keep `ul.nav.collapse.show` markup (`NavbarVerticalMenu`) |
| `Pagination` | HB `Pagination` + `Pagination.Link asChild` (`AdvanceTableFooter`) |
| `Tooltip/OverlayTrigger` | HB `Tooltip` |
| `Stack`, `Image`, `ListGroup` | plain `div.flex`, `img`, `ul` with gold classes |
| `useBreakpoints` | keep (`hooks/useBreakpoints`) |
| classnames | `cn` from `@hummingbirdui/react` |

Anything unmigrated still compiles through the temporary shim `src/react-bootstrap/` — delete the shim once `grep -rl react-bootstrap src` is empty.

## 3. Scale + token cheatsheet (Bootstrap → Tailwind/phoenix)

- Spacing: bs `1,2,3,4,5,6,7,8,9,10` → tw `1,2,4,6,8,10,12,14,16,18`; negatives `mx-n4` → `-mx-6`.
- Font: `fs-11/10/9/8/7/6` → `text-xs/sm/md/base/lg/xl`; `fw-semibold/bold/black` → `font-semibold/bold/black`; `lh-sm` → `leading-sm`, `lh-1` → `leading-none`.
- Text: `text-body-quaternary→text-soft`, `-tertiary→text-subtle`, `-secondary→text-muted`, `text-body→text-default`, `-highlight→text-highlight`, `-emphasis→text-emphasis`. Backgrounds same words: `bg-body-emphasis→bg-soft`, `bg-body-secondary→bg-muted`, `bg-body-hover→hover:bg-default`. `border-translucent→border-subtle`, `rounded-pill→rounded-full`, `text-nowrap→whitespace-nowrap`, `xxl:`→`2xl:`.
- Chart tokens (`getThemeColor`): `primary→color-primary`, `primary-bg-subtle→color-primary-subtle`, `body-bg→background-color-default`, `body-color→text-color-default`, `secondary-color→text-color-muted`, `tertiary-bg→background-color-highlight`, `quaternary-color→text-color-soft`, `border-color→border-color-default`, `gray-N→color-gray-N`. `getColor(name)` reads `--${name}`; a dev warning means the token name is wrong.
- Dark mode attribute is `data-hb-theme="dark"` (`dark:` variant), RTL via `dir` — no separate stylesheets.
- Chart sizes: gold gives the wrapper a size (`h-80 w-full` …) and the echarts div `height:100%`.

## 4. Pitfalls learned (check before debugging)

- Codemod only rewrites string/template/`cn()` classes; multi-line `classNames({})` objects, class strings in data files and `variant="…"` props need a manual pass.
- Vendor plugin CSS (`flatpickr/dist/flatpickr.css`, similar) must be imported in `src/assets/css/index.css` BEFORE `./plugins` — importing it from a component file injects it after the phoenix skin and the stock theme wins the cascade. Mirror the gold's `<head>` order.
- Anything whose CSS keys on structure (`.swiper-nav`, `.timeline-item-bar`, `.dz-message`, `.search-box > form > .search-input`, `.table-list .sort[data-sort]`, `.navbar-vertical ~ .content`) must keep the gold DOM verbatim.
- Table image columns need the gold `min-w-*` on the `th`, otherwise `max-w-full` shrinks the image.
- Table header labels: the gold writes them literally in UPPERCASE (no text-transform CSS) — copy the exact case from the gold html into each column's `header:` string. Recurring regression; `InvoiceTable` is the one deliberate sentence-case exception.
- Avatar groups: `.avatar-group` sizing comes from `--avatar-width/--avatar-height` (now defaulted to `--avatar-size` in `components/avatar.css`); avatars in groups are fixed-size, never driven by image resolution. If group avatars look inconsistent, check for markup that drops the `avatar`/`avatar-*` classes, not the images.
- Radix portals: dropdown/dialog content lives under `body` — classes go on the content element; measure hidden nav items while visible (`EcommerceNavbar`).
- Nested / hover menus (top navbar): HB `Dropdown` has no submenus — keep gold's plain `li.dropdown > a.dropdown-toggle + ul.dropdown-menu` markup and drive `show` + `data-bs-popper="none"` from state (`navbar-horizontal/useTopNavDropdown.ts`).
- HB `Navbar.Collapse` is a `grid` below its breakpoint (gold is `display:block`): use `lg:justify-center`, not `justify-center`.
- Layout variants (horizontal / combo / dual / slim) are verified against `../phoenix-tailwind/public/demo/*.html` via `layout(...)` entries in `tests/visual/pages.ts` (per-side `setup.storage` seeds `localStorage`).
- Leaflet colour filter: `L.tileLayer(url, { colorFilter })` + `updateColorFilter` (plugin v2 augments `TileLayer`).
- Playwright: install once with `npm i -D playwright`, launch with `channel: 'chrome'`; Mapbox pages need `waitUntil: 'load'` not `networkidle`.
- Shell quirks: don't `cd` into subdirs in compound commands (cwd drifts); `===` in `echo` breaks zsh.
- Upstream `../phoenix-tailwind` moves — before comparing, `git log -1` there and re-run `gulp compile:all` if `public/` is missing pages; re-copy `src/css` and update `SOURCE.md` when it changes.

## 5. Done criteria for a module

- `npm run test:visual` green with every page of the module listed in `tests/visual/pages.ts` (dashboards with `dark: true, widths: [768]`); any tolerance above 1% is commented as data-only.
- `grep -rl react-bootstrap` over the module's import closure is empty; leftover grep (1.6) empty.
- `CONVERTED.md` updated; commits per page; final message lists pages verified, known data-only deltas, and what remains on the shim.
