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
| Other layouts (Auth simple/split/card, DocPagesLayout) | ⬜ | still on shim; EmailLayout + FileManagerLayout done with their modules |
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
| Calendar | ✅ | `calendar` (light+dark, probes); both Calendar modals off the shim, dates derived from the same dayjs() expressions as the gold |
| CRM app pages (8) | ✅ | `crm-*` (8 entries: analytics, deals, deal-details, leads, lead-details, add-contact, reports, report-details) |
| Email | ✅ | `email-*` (3 entries, probes); EmailLayout keeps the gold phoenix-offcanvas DOM |
| Events | ✅ | `event-*` (2 entries, probes); `FloatingDatePicker` + `InlineCheckItem` extracted |
| File manager | ✅ | `file-manager-*` (2 entries, 18 probes); FileManagerLayout migrated; modal/offcanvas states verified |
| Gallery | ✅ | `gallery-*` (6 entries); `PackeryGrid` replays the gold isotope/packery ordering |
| Gantt chart | ✅ | `gantt-chart` (light+dark, 11 probes); dhtmlx engine stays; vendor CSS moved to index.css |
| Kanban (board, boards, create-board wizard) | ✅ | `kanban-*` (7 entries incl. wizard steps 2–5, probes); modal/offcanvas states verified; `WizardPager` extracted, `PhoenixFloatingLabel` emits gold DOM |
| Social (feed, profile, settings) | ✅ | `social-*` (3 entries, probes); `FloatingIconField` + `SettingsProfileCard` extracted |
| Stock app pages (stock-details, portfolio, watchlist) | ✅ | `stock-*` (3 entries); orphaned react-bootstrap stock tables/cards deleted |
| Travel agency (17 pages: landing, 6 hotel customer, 4 hotel admin, 3 flight, 3 trip) | ✅ | `ta-*` (17 entries); own layouts (TravelLanding/TravelAgency/FlightAlternate/Trip) all migrated |

## Pages / misc

| Area | Status | Notes |
|---|---|---|
| Starter | ✅ | `starter` (light+dark) |
| FAQ (accordion + tab) | ✅ | `faq-accordion`, `faq-tab` (light+dark, 768); `data/faq.ts` regenerated from the gold pug — the React copy was entirely different content; the tab page now uses the gold's pure-CSS `offcanvas-md` instead of a `useBreakpoints` double render |
| Pricing (column + grid) | ✅ | `pricing-column`, `pricing-grid` (light+dark, 768); `FaStack` extracted; grid cards split into the gold's separate monthly/yearly sets |
| Landing (default + alternate) | ✅ | `landing-default`, `landing-alternate` (light+dark); both testimonial carousels ported to HB `Carousel` (embla) with `--carousel-item-spacing: 0`; count-up/lottie/googlemap masked as non-deterministic |
| pages/pages remainder (notifications, members, timeline, layouts demo) | ⬜ | |
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
