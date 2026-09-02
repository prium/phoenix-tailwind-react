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
- src/components/modules/stock, src/pages/apps/stock, src/pages/dashboard/Stock.tsx, src/data/stock
- social closure: src/pages/apps/social, src/components/modules/{social,events},
  src/components/image-gallery/{SocialPhotos,PostGallery}.tsx,
  src/components/list-items/EventItem.tsx, src/components/forms/Settings*.tsx,
  src/data/social, src/data/eventsData.ts (SocialCoverCard/SocialProfileCard/
  FeedTextarea/Mutual+ProfileNavigation/SocialMessages were converted in earlier waves)
- chat/email/events closure: src/pages/apps/{chat,email,events},
  src/components/modules/email, src/components/forms/Event*.tsx,
  src/components/list-items/EventsTopicCovered.tsx, src/data/{chat.ts,email.tsx}
  (modules/chat, chat-widget, EmailLayout, Chat/EventTitle cards, modules/events,
  eventsData were converted in earlier waves — manual pass only; SharedFiles.tsx
  still carries signature classes inside constructs the converter skips)
- kanban closure: src/pages/apps/kanban, src/components/modules/kanban,
  src/components/modals/Kanban{AddList,Invite}Modal.tsx, src/data/kanban.ts,
  src/components/base/PhoenixFloatingLabel.tsx
- gallery/file-manager/gantt/calendar closure: src/pages/apps/{gallery,
  file-manager,calendar,gantt-chart}, src/components/modules/{gallery,
  file-manager,gantt}, src/layouts/FileManagerLayout.tsx,
  src/components/base/FullCalendar.tsx, src/components/charts/dhtmlx,
  src/data/{gallery,file-manager,treeview,calendarEvents,ganttData}
  (Calendar{Event,AddNewEvent}Modal + FileManagerTimeline were converted with
  the crm wave — manual pass only)
- faq/starter closure: src/pages/pages/Starter.tsx, src/pages/faq,
  src/components/modules/faq, src/components/cta/FaqCta.tsx, src/data/faq.ts
  (commit "chore: run bs2tw codemod over the faq/starter closure")
- pricing closure: src/pages/pages/pricing, src/components/pricing-items,
  src/data/pricing.ts — PricingPackageList.tsx was NOT re-run (already converted
  with the crm tree); manual pass only
- landing closure: src/pages/pages/landing, src/components/modules/landing,
  src/data/landing, src/components/sliders/{TestimonialCarousel,
  AlternateTestimonialCarousel}.tsx — DefaultLandingNavbar.tsx was NOT re-run
  (converted with the layout shell); its leftovers were fixed by hand
- notifications/members/timeline/coming-soon closure: src/pages/notifications,
  src/pages/Members.tsx, src/pages/pages/Timeline.tsx, src/pages/ComingSoon.tsx,
  src/data/{members,notifications,timelineData}.ts — BasicTimeline.tsx,
  MembersTable.tsx and common/NotificationItem.tsx were NOT re-run (earlier
  waves); manual pass only
- error pages: src/pages/error
- authentication closure: src/pages/pages/authentication,
  src/components/modules/auth — layouts/Auth{Simple,Split,Card}Layout and
  common/AuthSocialButtons were NOT re-run (converted with the layout shell);
  fixed by hand

