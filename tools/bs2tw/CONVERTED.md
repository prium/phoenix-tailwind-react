# Paths already run through converter.mjs

Never run the converter twice on the same file: Bootstrap and Tailwind share
class names with different meanings (`mb-4` → `mb-6` → `mb-10` …).

- src/layouts
- src/components/navbars, footers, settings-panel, common, charts, cards, stats,
  tables, leaflet-maps, modules/e-commerce, modules/chat
- src/pages/dashboard/ecommerce
- src/helpers
- src/pages/apps/e-commerce + closure files (banners, cta, forms, modals, navs, tabs, hooks…)
- (see git log "chore: run bs2tw codemod" commits for later additions)
- src/pages/apps/project-management, src/pages/dashboard/ProjectManagement.tsx, src/components/modules/project-management
