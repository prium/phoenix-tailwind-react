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
| Chat widget | ✅ | live in MainLayout, HB-based (tracker note was stale) |
| Other layouts (FileManagerLayout, Auth simple/split/card, DocPagesLayout) | ⬜ | still on shim; EmailLayout done with the email module |
| `src/react-bootstrap/` shim | 🚧 | delete when `grep -rl react-bootstrap src` is empty |

## Dashboards

| Page | Status | Visual entries |
|---|---|---|
| E-commerce `/` | ✅ | `dashboard-ecommerce` (dark, 768) |
| Project management `/dashboard/project-management` | ✅ | `dashboard-project-management` (dark, 768, probes) |
| CRM `/dashboard/crm` | ✅ | `dashboard-crm` (dark, 768) |
| Stock `/dashboard/stock` | ✅ | `dashboard-stock` (dark, 768, probes) |
| Travel agency `/dashboard/travel-agency` | ✅ | `dashboard-travel-agency` (dark, 768, probes) |

## Apps

| Module | Status | Visual entries / notes |
|---|---|---|
| E-commerce (11 customer + 7 admin pages) | ✅ | `ec-*` (18 entries) |
| Project management (6 pages) | ✅ | `pm-*` + dashboard (7 entries) |
| Chat | ✅ | `chat` (1540+768) + `chat-details` (offcanvas); ChatHomepage is React-only (no gold page) |
| Calendar | ⬜ | |
| CRM app pages (8) | ✅ | `crm-*` (8 entries: analytics, deals, deal-details, leads, lead-details, add-contact, reports, report-details) |
| Email | ✅ | `email-*` (3 entries, probes); EmailLayout keeps the gold phoenix-offcanvas DOM |
| Events | ✅ | `event-*` (2 entries, probes); `FloatingDatePicker` + `InlineCheckItem` extracted |
| File manager | ⬜ | needs FileManagerLayout |
| Gallery | ⬜ | |
| Gantt chart | ⬜ | dhtmlx engine stays (see ZeroRoadMapChart) |
| Kanban | ⬜ | |
| Social (feed, profile, settings) | ✅ | `social-*` (3 entries, probes); `FloatingIconField` + `SettingsProfileCard` extracted |
| Stock app pages (stock-details, portfolio, watchlist) | ✅ | `stock-*` (3 entries); orphaned react-bootstrap stock tables/cards deleted |
| Travel agency (17 pages: landing, 6 hotel customer, 4 hotel admin, 3 flight, 3 trip) | ✅ | `ta-*` (17 entries); own layouts (TravelLanding/TravelAgency/FlightAlternate/Trip) all migrated |

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
