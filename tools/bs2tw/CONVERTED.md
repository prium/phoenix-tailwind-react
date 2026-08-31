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
- CRM tree + still-unconverted closure FILES (dirs are mixed — some files were
  converted with the e-commerce closure): pages/apps/crm, pages/dashboard/Crm.tsx,
  components/modules/crm, and the signature-carrying files in components/{modals,
  forms,list-items,grid-list-items,timelines} incl. non-CRM ones (Hotel/Flight/
  Calendar modals, Feed/Pricing/Social/Profile/Mutual items, FileManager/Basic
  timelines) — see commit "chore: run bs2tw codemod over crm tree".
- src/components/modules/travel-agency, src/pages/apps/travel-agency, src/pages/dashboard/TravelAgency.tsx, src/data/travel-agency
