# Hummingbird + Tailwind migration tracker

Single source of truth for the react-bootstrap → `@hummingbirdui/react` + Tailwind v4
migration on `feat/hummingbird-tailwind`. **Update the table in the same commit that
finishes a page/module** (the hb-migrate skill's per-page loop ends with this).

- ✅ done — pixel-verified against `../phoenix-tailwind` gold, listed in
  `tests/visual/pages.ts`, closure free of react-bootstrap
- 🚧 partial — some files ported or codemodded, not verified / closure still on the shim
- ⬜ todo — untouched, compiles through the `src/react-bootstrap/` shim

A module is only ✅ when `npm run test:visual` is green with its pages listed,
the leftover-Bootstrap grep is empty for its closure, and this table says so.

## Shell & infrastructure

| Area | Status | Notes |
|---|---|---|
| Build pipeline (Tailwind v4, `src/assets/css`) | ✅ | CSS copied from phoenix-tailwind `b9ac89e97` + local avatar-group patch (see `src/assets/css/SOURCE.md`) |
| MainLayout, vertical navbar, top default navbar | ✅ | |
| Horizontal / combo / dual / slim top navbars | ✅ | `layout-*` entries |
| Settings panel + toggle | ✅ | `settings-panel` entry (light+dark) |
| Base components (Button, Badge, Avatar, AdvanceTable, footer, dropdowns, SearchBox, DatePicker, ReactSelect, CheckButton, PhoenixOffcanvas…) | ✅ | see skill §0 finished examples |
| Chat widget | ⬜ | stubbed `return null` |
| Other layouts (EmailLayout, FileManagerLayout, Auth simple/split/card, DocPagesLayout) | ⬜ | still on shim |
| `src/react-bootstrap/` shim | 🚧 | delete when `grep -rl react-bootstrap src` is empty |

## Dashboards

| Page | Status | Visual entries |
|---|---|---|
| E-commerce `/` | ✅ | `dashboard-ecommerce` (dark, 768) |
| Project management `/dashboard/project-management` | ✅ | `dashboard-project-management` (dark, 768, probes) |
| CRM `/dashboard/crm` | ⬜ | |
| Stock `/dashboard/stock` | ⬜ | |
| Travel agency `/dashboard/travel-agency` | ⬜ | |

## Apps

| Module | Status | Visual entries / notes |
|---|---|---|
| E-commerce (11 customer + 7 admin pages) | ✅ | `ec-*` (18 entries) |
| Project management (6 pages) | ✅ | `pm-*` + dashboard (7 entries) |
| Chat | 🚧 | components codemodded early; not verified, not in pages.ts |
| Calendar | ⬜ | |
| CRM app pages | ⬜ | |
| Email | ⬜ | needs EmailLayout |
| Events | ⬜ | |
| File manager | ⬜ | needs FileManagerLayout |
| Gallery | ⬜ | |
| Gantt chart | ⬜ | dhtmlx engine stays (see ZeroRoadMapChart) |
| Kanban | ⬜ | |
| Social | ⬜ | |
| Stock app pages | ⬜ | |
| Travel agency | ⬜ | largest closure (~28 page files + modules) |

## Pages / misc

| Area | Status | Notes |
|---|---|---|
| pages/pages (starter, pricing, notifications, members…) | ⬜ | |
| FAQ | ⬜ | |
| Documentation | ⬜ | migrate last; some content describes Bootstrap |
| Showcase, ComingSoon, errors | ⬜ | |
| pages/modules (component demo pages, 43 files) | ⬜ | low priority; huge but mechanical |

## Conventions (details in `.claude/skills/hb-migrate/SKILL.md`)

- Visual gate: default tolerance **0.5%**; any override must be commented with the
  audited value (`VISUAL_TOLERANCE=0.0001` audit) and a data-only reason. Prefer
  aligning demo data (`data/*`, gold row order, `data/users.ts` members) over raising
  tolerance. Add `probes` for anchored icons/controls.
- Table header labels: copy UPPERCASE literally from the gold html.
- Codemod once per directory only — record in `tools/bs2tw/CONVERTED.md`.
- Vendor plugin CSS imports go in `src/assets/css/index.css` **before** `./plugins`,
  never in component files (cascade order).
- Upstream CSS sync state lives in `src/assets/css/SOURCE.md`.
