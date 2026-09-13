/**
 * Pages under visual regression. `react` is the app route, `gold` the static
 * phoenix-tailwind HTML (relative to ../phoenix-tailwind/public).
 * Add a line here for every page you migrate.
 *
 * Tolerances above the 0.5% default are DATA-ONLY deltas (demo content differs
 * between the React app and the gold pug) and are commented per page with the
 * audited value. Prefer aligning the demo data (data/*, gold row order) over
 * raising a tolerance; audit exact values with VISUAL_TOLERANCE=0.0001.
 */
export interface VisualPage {
  name: string;
  react: string;
  gold: string;
  /** Also compare in dark theme (default: light only). */
  dark?: boolean;
  /** Extra viewport widths to check besides 1540 (e.g. 768). */
  widths?: number[];
  /** Per-page diff tolerance override (fraction of pixels, default from env / 0.01). */
  tolerance?: number;
  /** Extra selectors to mask (dynamic/unstable content). */
  mask?: string[];
  /** Selectors whose element geometry (visual center) must match the gold
      within 1.5px — catches small in-component misalignments that stay far
      below any page-level pixel tolerance. */
  probes?: string[];
  /** Actions run after load, per side: click a selector and/or eval JS (e.g. open a panel). */
  setup?: { react?: SideSetup; gold?: SideSetup };
}

export interface SideSetup {
  click?: string;
  eval?: string;
  /** localStorage entries set before the page loads (e.g. layout config). */
  storage?: Record<string, string>;
}

/** The 7 authentication pages, each rendered by all three layouts. */
const AUTH_PAGES = [
  'sign-in',
  'sign-up',
  'sign-out',
  'forgot-password',
  'reset-password',
  'lock-screen',
  '2FA'
] as const;

/**
 * The split/card layouts paint their photo through `.bg-holder`'s CSS
 * `background-image` — up to 5.5 MB, requested only once React has rendered
 * the div, so `settle()`'s `<img>` wait cannot see it and the shot can catch a
 * half-painted photo. Decode every bg-holder URL explicitly first.
 */
const AWAIT_BG_HOLDER =
  `(async()=>{await Promise.all([...document.querySelectorAll('.bg-holder')]` +
  `.map(el=>{const m=/url\("?(.*?)"?\)/.exec(getComputedStyle(el).backgroundImage);` +
  `return m&&new Promise(r=>{const i=new Image();i.onload=i.onerror=r;i.src=m[1]})}))})()`;

const AWAIT_BG = {
  react: { eval: AWAIT_BG_HOLDER },
  gold: { eval: AWAIT_BG_HOLDER }
};

/** Anchors shared by every authentication page (see the `auth(...)` entries). */
const AUTH_PROBES = [
  '[data-password-toggle]',
  '.form-control-icon-start',
  '.avatar',
  '.divider-content-center'
];

const auth = (
  variant: 'simple' | 'split' | 'card',
  extra: Partial<VisualPage> = {}
): VisualPage[] =>
  AUTH_PAGES.map(page => ({
    name: `auth-${variant}-${page.toLowerCase()}`,
    react: `/pages/authentication/${variant}/${page}`,
    gold: `/pages/authentication/${variant}/${page}.html`,
    ...extra
  }));

/**
 * A `/pages/demo/*` layout demo route vs its gold `demo/*.html`. The React page
 * sets the navbar config through `useConfigMountEffect` instead of localStorage,
 * so this gates the route itself rather than the settings-panel state.
 */
const demo = (route: string, gold = route): VisualPage => ({
  name: `demo-${route}`,
  react: `/pages/demo/${route}`,
  gold: `/demo/${gold}.html`
});

/** React `/` with a navbar config vs a gold `demo/*.html` layout page. */
const layout = (
  name: string,
  gold: string,
  storage: Record<string, string>,
  extra: Partial<VisualPage> = {}
): VisualPage => ({
  name,
  react: '/',
  gold: `/demo/${gold}.html`,
  setup: { react: { storage } },
  ...extra
});

/** Scrolls the chat thread body to its bottom (chat.js does this at docReady). */
const SCROLL_CHAT_BODY = `const b=document.querySelector('.chat .card-body');if(b)b.scrollTop=b.scrollHeight`;

/** Forces the gold (static JS) offcanvas open the way hummingbird's toggle would. */
const OPEN_GOLD_OFFCANVAS = `const o=document.querySelector('#settings-offcanvas');o.classList.add('show');o.style.visibility='visible';const b=document.createElement('div');b.className='offcanvas-backdrop fade show';document.body.appendChild(b)`;

/**
 * Replays the gold's `treeview.js` init, which cannot run headless: its loop
 * borders every `.treeview-list` and opens each `data-show="true"` list plus
 * its ancestors, but `hummingbird.Collapse` is undefined in the static bundle
 * so it throws on the first item — leaving the page fully collapsed and only
 * the first list bordered. A real browser shows those branches expanded with
 * every level bordered, which is what React renders.
 */
const OPEN_GOLD_TREEVIEW =
  `document.querySelectorAll('.treeview-list').forEach(l=>l.classList.add('treeview-border'));` +
  `document.querySelectorAll('.treeview-list[data-show="true"]').forEach(l=>{let el=l;while(el){if(el.classList&&el.classList.contains('treeview-list')){el.classList.add('show','collapse-show');const t=document.querySelector('[href="#'+el.id+'"]');if(t)t.setAttribute('aria-expanded','true')}el=el.parentElement}});`;

/**
 * The widgets page marks its section strip with Bootstrap's `data-bs-spy`, but
 * hummingbird's ScrollSpy never binds to it, so the gold never highlights a
 * link — not on load, not after a scroll (measured). `.active` adds a 1px
 * bottom border to the sticky strip, so without this the whole 13,800px page
 * sits 1px lower on one side and every glyph differs. Activate the first link,
 * which is what a working scrollspy (and React) shows at scroll 0.
 */
const ACTIVATE_GOLD_SCROLLSPY = `document.querySelector('#widgets-scrollspy .nav-link').classList.add('active')`;

const EC = '/apps/e-commerce';
const p = (
  name: string,
  react: string,
  gold: string,
  extra: Partial<VisualPage> = {}
): VisualPage => ({
  name,
  react: EC + react,
  gold: EC + gold,
  ...extra
});

/** Kanban create-board wizard at step `n` (see the step entries below). */
const createBoardStep = (n: number, probes: string[]): VisualPage => ({
  name: `kanban-create-board-step${n}`,
  react: '/apps/kanban/create-board',
  gold: '/apps/kanban/create-kanban-board.html',
  probes,
  setup: {
    react: {
      eval: `(async n=>{for(let i=1;i<n;i++){document.querySelector('[data-wizard-next-btn]').click();await new Promise(r=>setTimeout(r,300))}})(${n})`
    },
    gold: {
      eval:
        `(n=>{document.querySelectorAll('.theme-wizard [id^=create-board-tab]').forEach((p,i)=>p.classList.toggle('active',i===n-1));` +
        `document.querySelectorAll('[data-wizard-step]').forEach((a,i)=>{a.classList.toggle('active',i===n-1);a.classList.toggle('done',i<n-1);a.classList.toggle('complete',i<n-2)});` +
        `document.querySelector('[data-kanban-step]').textContent=String(n);` +
        `document.querySelector('[data-wizard-footer]').classList.toggle('hidden',n===5);` +
        `document.querySelector('[data-wizard-prev-btn]').classList.toggle('hidden',!(n>1&&n<5))})(${n})`
    }
  }
});

export const pages: VisualPage[] = [
  {
    name: 'dashboard-ecommerce',
    react: '/',
    gold: '/index.html',
    dark: true,
    widths: [768]
  },
  // data-only: the Projects table has 7 demo projects (gold 6) and different
  // assignee images
  {
    name: 'dashboard-project-management',
    react: '/dashboard/project-management',
    gold: '/dashboard/project-management.html',
    dark: true,
    widths: [768],
    tolerance: 0.0075, // ~0.45%: demo dates/progress numbers differ per row

    probes: [
      '.flatpickr-input-container .flatpickr-icon',
      '.flatpickr-input-container .form-control'
    ]
  },
  {
    name: 'pm-todo-list',
    react: '/apps/project-management/todo-list',
    gold: '/apps/project-management/todo-list.html'
  },
  {
    name: 'pm-project-details',
    react: '/apps/project-management/project-details',
    gold: '/apps/project-management/project-details.html'
  },
  // layouts (settings panel "Navigation type" / "Horizontal navbar shape")
  layout('layout-horizontal', 'navbar-horizontal', {
    navbarPosition: 'horizontal'
  }),
  layout('layout-combo', 'combo-nav', { navbarPosition: 'combo' }),
  layout('layout-dual', 'dual-nav', { navbarPosition: 'dual' }),
  layout('layout-combo-slim', 'combo-nav-slim', {
    navbarPosition: 'combo',
    navbarTopShape: 'slim'
  }),
  layout('layout-topnav-slim', 'topnav-slim', {
    navbarTopShape: 'slim',
    navbarTopAppearance: 'darker'
  }),
  {
    name: 'settings-panel',
    react: '/',
    gold: '/index.html',
    dark: true,
    setup: {
      react: { click: '.setting-toggle' },
      gold: { eval: OPEN_GOLD_OFFCANVAS }
    }
  },

  // customer
  p('ec-homepage', '/customer/homepage', '/landing/homepage.html'),
  // data-only: 3rd product row, prices and filter groups differ
  p(
    'ec-products-filter',
    '/customer/products-filter',
    '/landing/products-filter.html',
    { tolerance: 0.04 }
  ),
  // ~0.5%: demo store names/stats differ
  p(
    'ec-favorite-stores',
    '/customer/favorite-stores',
    '/landing/favourite-stores.html',
    { tolerance: 0.0075 }
  ),
  p('ec-cart', '/customer/cart', '/landing/cart.html'),
  p('ec-checkout', '/customer/checkout', '/landing/checkout.html'),
  p(
    'ec-shipping-info',
    '/customer/shipping-info',
    '/landing/shipping-info.html'
  ),
  // ~0.9%: demo orders/wishlist rows differ
  p('ec-profile', '/customer/profile', '/landing/profile.html', {
    tolerance: 0.01
  }),
  p(
    'ec-product-details',
    '/customer/product-details',
    '/landing/product-details.html'
  ),
  p('ec-invoice', '/customer/invoice', '/landing/invoice.html'),
  p(
    'ec-order-tracking',
    '/customer/order-tracking',
    '/landing/order-tracking.html',
    {
      mask: ['.mapbox-container', '.mapboxgl-map'],
      tolerance: 0.01 // 0.4-1.0% run-to-run: mapbox area renders nondeterministically
    }
  ),
  // ~0.7%: demo wishlist products differ
  p('ec-wishlist', '/customer/wishlist', '/landing/wishlist.html', {
    tolerance: 0.01
  }),

  // admin
  p('ec-admin-products', '/admin/products', '/admin/products.html'),
  p('ec-admin-customers', '/admin/customers', '/admin/customers.html'),
  p('ec-admin-orders', '/admin/orders', '/admin/orders.html'),
  // ~0.55%: editor/select demo content differs
  p('ec-admin-add-product', '/admin/add-product', '/admin/add-product.html', {
    tolerance: 0.0075
  }),
  // data-only: different demo products / row count
  p(
    'ec-admin-order-details',
    '/admin/order-details',
    '/admin/order-details.html',
    { tolerance: 0.02 }
  ),
  // data-only: different demo products / row count
  p('ec-admin-refund', '/admin/refund', '/admin/refund.html', {
    tolerance: 0.02
  }),
  // data-only: different demo orders / wishlist / reviews
  p(
    'ec-admin-customer-details',
    '/admin/customer-details',
    '/admin/customer-details.html',
    { tolerance: 0.03 }
  ),

  // project management
  {
    name: 'pm-create-new',
    react: '/apps/project-management/create-new',
    gold: '/apps/project-management/create-new.html'
  },
  // data-only: demo projects (names, dates, assignees, counts) differ from the gold
  {
    name: 'pm-list-view',
    react: '/apps/project-management/project-list-view',
    gold: '/apps/project-management/project-list-view.html',
    tolerance: 0.015
  },
  // data-only: demo project names/dates/budgets differ and React has 7 demo
  // projects vs the gold 6 (one extra card in row 2); assignee counts in
  // data/project-management/projects.ts mirror the gold
  {
    name: 'pm-card-view',
    react: '/apps/project-management/project-card-view',
    gold: '/apps/project-management/project-card-view.html',
    tolerance: 0.02
  },
  // data-only: demo project names / status badges differ
  {
    name: 'pm-board-view',
    react: '/apps/project-management/project-board-view',
    gold: '/apps/project-management/project-board-view.html',
    tolerance: 0.02
  },

  // crm
  {
    name: 'dashboard-crm',
    react: '/dashboard/crm',
    gold: '/dashboard/crm.html',
    dark: true,
    widths: [768]
  },
  {
    name: 'crm-analytics',
    react: '/apps/crm/analytics',
    gold: '/apps/crm/analytics.html',
    probes: [
      '.flatpickr-input-container .flatpickr-icon',
      '.flatpickr-input-container .form-control'
    ]
  },
  {
    name: 'crm-leads',
    react: '/apps/crm/leads',
    gold: '/apps/crm/leads.html',
    probes: [
      '.flatpickr-input-container .flatpickr-icon',
      '.flatpickr-input-container .form-control'
    ]
  },
  {
    name: 'crm-lead-details',
    react: '/apps/crm/lead-details',
    gold: '/apps/crm/lead-details.html'
  },
  {
    name: 'crm-add-contact',
    react: '/apps/crm/add-contact',
    gold: '/apps/crm/add-contact.html'
  },
  {
    name: 'crm-deals',
    react: '/apps/crm/deals',
    gold: '/apps/crm/deals.html'
  },
  {
    name: 'crm-deal-details',
    react: '/apps/crm/deal-details',
    gold: '/apps/crm/deal-details.html'
  },
  {
    name: 'crm-reports',
    react: '/apps/crm/reports',
    gold: '/apps/crm/reports.html',
    probes: ['.card .form-check-input', '.search-box .search-box-icon']
  },
  {
    name: 'crm-report-details',
    react: '/apps/crm/report-details',
    gold: '/apps/crm/report-details.html',
    probes: [
      '.circle-progress-svg',
      '.reports-details-chart-table .badge',
      '.avatar.avatar-sm img'
    ]
  },
  {
    name: 'ta-admin-room-listing',
    react: '/apps/travel-agency/hotel/admin/room-listing',
    gold: '/apps/travel-agency/hotel/admin/room-listing.html'
  },
  {
    name: 'ta-hotel-homepage',
    react: '/apps/travel-agency/hotel/customer/homepage',
    gold: '/apps/travel-agency/hotel/customer/homepage.html'
  },
  {
    name: 'ta-trip-homepage',
    react: '/apps/travel-agency/trip/homepage',
    gold: '/apps/travel-agency/trip/homepage.html'
  },
  {
    name: 'dashboard-travel-agency',
    react: '/dashboard/travel-agency',
    gold: '/dashboard/travel-agency.html',
    dark: true,
    widths: [768],
    // live visitors-per-second counter: React randomises it every 2s, the
    // gold static page never runs its countup (stays "0")
    mask: ['.real-time-user'],
    probes: [
      '.search-box .search-box-icon',
      'button[title="Next"]',
      '.card-footer.pt-4 a'
    ]
  },
  {
    name: 'ta-landing',
    react: '/apps/travel-agency/landing',
    gold: '/apps/travel-agency/landing.html',
    // typed.js hero word + caret are mid-animation at capture time on both sides
    mask: ['.typed-text', '.typed-cursor'],
    probes: ['.swiper-nav .swiper-button-next', '.isotope-nav.active']
  },
  {
    name: 'ta-flight-homepage',
    react: '/apps/travel-agency/flight/homepage',
    gold: '/apps/travel-agency/flight/homepage.html',
    // the gold capture has the auto-show promo modal closed — close ours too
    setup: {
      react: { click: '[data-slot="dialog-body"] button[aria-label="Close"]' }
    }
  },
  {
    name: 'ta-admin-room-search',
    react: '/apps/travel-agency/hotel/admin/search-room',
    gold: '/apps/travel-agency/hotel/admin/room-search.html',
    probes: [
      '.noUi-handle',
      '.swiper-nav .swiper-button-next',
      '.sticky.bottom-0 .btn-primary'
    ]
  },
  {
    name: 'ta-hotel-details',
    react: '/apps/travel-agency/hotel/customer/hotel-details',
    gold: '/apps/travel-agency/hotel/customer/hotel-details.html'
  },
  {
    name: 'ta-trip-details',
    react: '/apps/travel-agency/trip/trip-details',
    gold: '/apps/travel-agency/trip/trip-details.html',
    // swiper autoplay + mapbox cluster render nondeterministically
    mask: ['.swiper-theme-container', '.mapboxgl-map', '.mapbox-container'],
    probes: [
      '.collapse-indicator .toggle-icon',
      '.echart-trip-review',
      '.avatar.avatar-xs img'
    ]
  },
  {
    name: 'ta-flight-booking',
    react: '/apps/travel-agency/flight/booking',
    gold: '/apps/travel-agency/flight/booking.html',
    probes: [
      '.theme-wizard .nav-item-circle',
      '.flight-bottom-bar .btn-primary',
      '.btn-support-chat'
    ]
  },
  {
    name: 'ta-hotel-compare',
    react: '/apps/travel-agency/hotel/customer/hotel-compare',
    gold: '/apps/travel-agency/hotel/customer/hotel-compare.html',
    // autoplay swipers: active bullet index depends on capture timing
    mask: ['.swiper-pagination']
  },
  {
    name: 'ta-flight-payment',
    react: '/apps/travel-agency/flight/payment',
    gold: '/apps/travel-agency/flight/payment.html',
    probes: [
      '.theme-wizard .nav-item-circle',
      '#flightCheckoutForm .form-check-input',
      '.flight-bottom-bar .btn-primary'
    ]
  },
  {
    name: 'ta-trip-checkout',
    react: '/apps/travel-agency/trip/checkout',
    gold: '/apps/travel-agency/trip/checkout.html',
    probes: [
      '.input-group-icon .form-control-icon-start',
      // scoped: the gold settings offcanvas adds 2 form-switch inputs outside <main>
      '.container-medium .form-check .form-check-input',
      '.relative .form-control.pe-10'
    ]
  },
  {
    name: 'ta-hotel-checkout',
    react: '/apps/travel-agency/hotel/customer/checkout',
    gold: '/apps/travel-agency/hotel/customer/checkout.html',
    probes: ['.form-check-inline .form-check-input', '#checkoutForm1 .btn']
  },
  {
    name: 'ta-hotel-payment',
    react: '/apps/travel-agency/hotel/customer/payment',
    gold: '/apps/travel-agency/hotel/customer/payment.html',
    probes: ['#checkoutForm2 .form-check-input', '#checkoutForm2 .btn-primary']
  },
  {
    name: 'ta-hotel-gallery',
    react: '/apps/travel-agency/hotel/customer/gallery',
    gold: '/apps/travel-agency/hotel/customer/gallery.html'
  },
  {
    name: 'ta-admin-add-room',
    react: '/apps/travel-agency/hotel/admin/add-room',
    gold: '/apps/travel-agency/hotel/admin/add-room.html',
    probes: [
      '.theme-wizard .nav-item-circle',
      '.theme-wizard .form-select',
      '.theme-wizard .input-group .btn'
    ]
  },
  {
    name: 'ta-admin-add-property',
    react: '/apps/travel-agency/hotel/admin/add-property',
    gold: '/apps/travel-agency/hotel/admin/add-property.html',
    probes: [
      '.theme-wizard .nav-item-circle',
      '.theme-wizard .form-control-icon-start',
      '.theme-wizard .form-check-input'
    ]
  },
  {
    name: 'dashboard-stock',
    react: '/dashboard/stock',
    gold: '/dashboard/stock.html',
    dark: true,
    widths: [768],
    // anchored icons/controls outside the (masked) autoplay slider
    probes: [
      '.top-stock-card-container .search-box-icon',
      '#companyTabdiv .company-card img',
      '.stock-btn-group .btn'
    ]
  },
  {
    name: 'stock-details',
    react: '/apps/stock/stock-details',
    gold: '/apps/stock/stock-details.html',
    // anchored icons/controls of the default (Chart) tab + sidebar
    probes: [
      '#stockDetailsTab .nav-link.active',
      '#stockDetailsSidebar .badge',
      '#stockDetailsSidebar .input-group-text',
      '#stockDetailsSidebar .table td.text-info-dark',
      '#chart-tab .btn-phoenix-secondary'
    ]
  },
  {
    name: 'stock-portfolio',
    react: '/apps/stock/portfolio',
    gold: '/apps/stock/portfolio.html'
  },
  {
    name: 'stock-watchlist',
    react: '/apps/stock/watchlist',
    gold: '/apps/stock/watchlist.html'
  },
  {
    name: 'social-feed',
    react: '/apps/social/feed',
    gold: '/apps/social/feed.html',
    probes: [
      // post reaction buttons + comment Reply buttons
      'button.btn-link.font-extrabold',
      // "Add comment" fields in the post footers
      '.bg-subtle .form-control',
      // reveal (ellipsis) buttons on posts / messages / events
      '.btn-reveal',
      // feed textarea action icons + privacy dropdown toggle
      '.card-footer .btn.p-0'
    ]
  },
  {
    name: 'social-profile',
    react: '/apps/social/profile',
    gold: '/apps/social/profile.html',
    probes: [
      'button.btn-link.font-extrabold',
      '.bg-subtle .form-control',
      '.btn-reveal',
      // profile cover card action buttons
      '.card-body .btn-primary',
      '.card-body .btn-phoenix-primary',
      '.card-body .btn-phoenix-secondary'
    ]
  },
  {
    name: 'social-settings',
    react: '/apps/social/settings',
    gold: '/apps/social/settings.html',
    probes: [
      '.input-group-icon .form-control-icon-start',
      '.input-group-icon .form-control',
      // exact-class scoping keeps the navbar's own form-switches out of the count
      '[class="form-check mb-1.25"] .form-check-input',
      '[class="form-check mb-1.5"] .form-check-input',
      '[class="form-check form-switch mb-1.5"] .form-check-input'
    ]
  },
  // the gold chat.html always shows the first thread's conversation, so the
  // React side is compared at that thread's route (the index route is a
  // React-only landing card with no gold counterpart)
  {
    name: 'chat',
    react: '/apps/chat/1/conversation',
    gold: '/apps/chat.html',
    widths: [768],
    // both sides re-scroll the thread body after images settle: the gold
    // chat.js scrolls at docReady, before its attachment image has loaded,
    // so its resting scroll position is timing-dependent
    setup: {
      react: { eval: SCROLL_CHAT_BODY },
      gold: { eval: SCROLL_CHAT_BODY }
    },
    probes: [
      '.chat .card-header .btn-square',
      '.chat-thread-tab .unread-badge',
      '.chat .card-footer .btn-primary'
    ]
  },
  // conversation-details offcanvas (same page, opened via the header button on
  // both sides — the gold static JS binds data-phoenix-toggle="offcanvas")
  {
    name: 'chat-details',
    react: '/apps/chat/1/conversation',
    gold: '/apps/chat.html',
    setup: {
      react: { click: '[data-phoenix-target="#thread-details-0"]' },
      gold: { click: '[data-phoenix-target="#thread-details-0"]' }
    }
  },
  {
    name: 'email-inbox',
    react: '/apps/email/inbox',
    gold: '/apps/email/inbox.html',
    probes: [
      // toolbar refresh / prev / next buttons + bulk-select row controls
      '.email-toolbar .btn',
      '.inbox-toolbar + div .form-check-input',
      '.inbox-toolbar + div .flex.gap-3 .btn',
      '.hover-actions-trigger .form-check-input',
      '.hover-actions-trigger .avatar',
      '.email-sidebar .nav-icons',
      '.email-sidebar .nav-item-count'
    ]
  },
  {
    name: 'email-detail',
    react: '/apps/email/email-detail',
    gold: '/apps/email/email-detail.html',
    probes: [
      // reply/remove/archive/print/star tooltip buttons + reveal dropdown
      '.email-detail-content .row .btn',
      '.email-detail-content img.rounded-full',
      '.email-detail-content .size-12',
      '.email-detail-content .btn-phoenix-secondary',
      '.btn-reveal',
      '.email-toolbar + div .flex.gap-3 .btn',
      '.email-sidebar .nav-icons'
    ]
  },
  {
    name: 'email-compose',
    react: '/apps/email/compose',
    gold: '/apps/email/compose.html',
    probes: [
      '.card .form-control',
      'label[for="emailAttachment"]',
      'label[for="emailPhotos"]',
      '.card .btn-primary',
      '.email-toolbar + div .flex.gap-3 .btn',
      '.email-sidebar .nav-icons'
    ]
  },
  {
    name: 'event-detail',
    react: '/apps/events/event-detail',
    gold: '/apps/events/event-detail.html',
    probes: [
      // feather icon chips + button glyphs of the title card / sidebar
      '.bg-info-subtle',
      '.bg-primary-subtle',
      '.fa-heart',
      '.fa-share-nodes',
      '.fa-calendar-plus',
      '.fa-user-plus',
      '.fa-route',
      // "Share with Friends" square buttons + sidebar tag badges
      '.btn-square',
      '.badge-tag'
    ]
  },
  {
    name: 'event-create',
    react: '/apps/events/create-an-event',
    gold: '/apps/events/create-an-event.html',
    probes: [
      // schedule datepicker glyphs + their floating inputs
      '.form-control-icon-start',
      '.input-group-icon .form-control',
      '.datetimepicker',
      // inline Online/Offline/Both + Free/Paid radios; privacy radios
      '[class="form-check-inline me-4"] .form-check-input',
      '.form-check-input.mt-1',
      // dropzone prompt box
      '.dz-message'
    ]
  },
  {
    name: 'kanban-board',
    react: '/apps/kanban/kanban',
    gold: '/apps/kanban/kanban.html',
    probes: [
      // header board switcher / avatars / invite / nav icons
      '.kanban-header .avatar',
      '.kanban-header .fa-user-plus',
      '.kanban-header .fa-bars',
      // column headers and cards
      '.kanban-title-badge',
      '.kanban-collapse-icon',
      '.kanban-status .badge',
      '.kanban-container .avatar-group .avatar',
      '.kanban-add-task button'
    ]
  },
  {
    name: 'kanban-boards',
    react: '/apps/kanban/boards',
    gold: '/apps/kanban/boards.html',
    probes: [
      '.search-box-icon',
      '.kanban-boards-slider .swiper-button-next',
      '.avatar-group .avatar',
      '.fa-list-check',
      '.fa-calendar-xmark'
    ]
  },
  {
    name: 'kanban-create-board',
    react: '/apps/kanban/create-board',
    gold: '/apps/kanban/create-kanban-board.html',
    probes: [
      '.nav-wizard .nav-link',
      '.theme-wizard .form-floating > .form-control',
      '.theme-wizard .form-floating > .form-select',
      '[data-wizard-next-btn]'
    ]
  },
  // create-board wizard steps 2-5: the gold's static tab JS does not run
  // headless, so the gold side forces the exact classes its wizard JS would
  // toggle (done/active nav links, active pane, footer/prev visibility) while
  // the React side really clicks Next.
  createBoardStep(2, ['.kanban-column-icon', '.kanban-color-picker']),
  createBoardStep(3, ['.nav-underline .nav-link', '.kanban-swatch-label']),
  createBoardStep(4, ['.kanban-tag-badge', '.kanban-tag-action-icons']),
  createBoardStep(5, [
    '.kanban-radio-collapse .form-check-input',
    '[data-board-prev-btn]'
  ]),

  // gallery — the tiles are packed by `PackeryGrid` (React port of the gold's
  // isotope/packery), so probe every tile anchor as well as the toolbar icons.
  {
    name: 'gallery-album',
    react: '/apps/gallery/album',
    gold: '/apps/gallery/album.html',
    probes: [
      '.search-box-icon',
      '.album-item .dropdown',
      '.circle-icon-item',
      '.photo-stack-bottom'
    ]
  },
  {
    name: 'gallery-column',
    react: '/apps/gallery/gallery-column',
    gold: '/apps/gallery/gallery-column.html',
    probes: [
      '.search-box-icon',
      'a.btn-square',
      '.gallery-column-separator',
      '#image_gallery .title'
    ]
  },
  {
    name: 'gallery-grid',
    react: '/apps/gallery/gallery-grid',
    gold: '/apps/gallery/gallery-grid.html',
    probes: ['.search-box-icon', 'a.btn-square', '.hoverbox']
  },
  {
    name: 'gallery-grid-with-title',
    react: '/apps/gallery/grid-with-title',
    gold: '/apps/gallery/grid-with-title.html',
    probes: [
      '.search-box-icon',
      'a.btn-square',
      '.hoverbox',
      '.hoverbox-content > div'
    ]
  },
  {
    name: 'gallery-masonry',
    react: '/apps/gallery/gallery-masonry',
    gold: '/apps/gallery/gallery-masonry.html',
    probes: [
      '.search-box-icon',
      'a.btn-square',
      '.circle-icon-item',
      '.backdrop-faded'
    ]
  },
  {
    name: 'gallery-slider',
    react: '/apps/gallery/gallery-slider',
    gold: '/apps/gallery/gallery-slider.html',
    probes: [
      '.search-box-icon',
      'a.btn-square',
      '.swiper-button-next',
      '.swiper-button-prev',
      '.swiper-thumbs .swiper-slide img'
    ]
  },

  // file manager
  // the "Total N items" counts are hardcoded in the gold pug (16 / 12) while
  // React counts the rows it actually renders (20 / 16) — same digit count, so
  // only two glyphs differ and the default tolerance covers it
  {
    name: 'file-manager-grid',
    react: '/apps/file-manager/grid-view',
    gold: '/apps/file-manager/grid-view.html',
    setup: { gold: { eval: OPEN_GOLD_TREEVIEW } },
    probes: [
      // sidebar: tree-view glyphs, storage meter segments, collapse chevrons
      '.file-manager-sidebar .treeview-icon',
      '.progress-stacked .progress',
      '.collapse-indicator .toggle-icon',
      // toolbar + card header controls
      '.search-box .search-box-icon',
      '.card-header .btn-phoenix-secondary',
      // action bar info button and the per-file checkboxes / action menus
      '.myfiles-action-bar .btn',
      '.files-container .form-check-input',
      '.file-box-wrapper .dropdown .btn'
    ]
  },
  {
    name: 'file-manager-list',
    react: '/apps/file-manager/list-view',
    gold: '/apps/file-manager/list-view.html',
    setup: { gold: { eval: OPEN_GOLD_TREEVIEW } },
    probes: [
      '.file-manager-sidebar .treeview-icon',
      '.progress-stacked .progress',
      '.collapse-indicator .toggle-icon',
      '.search-box .search-box-icon',
      '.card-header .btn-phoenix-secondary',
      '.myfiles-action-bar .btn',
      // table: bulk-select header box, row icon boxes, avatars, reveal menus
      '.my-files-table thead .form-check-input',
      '.my-files-table .square-icon-box',
      '.my-files-table .avatar-group .avatar',
      '.my-files-table .btn-reveal'
    ]
  },

  // calendar + gantt
  {
    // Both sides derive the demo events from "today" with dayjs, so they always
    // render the same month — nothing pinned or masked. Default 0.5% tolerance;
    // audited at VISUAL_TOLERANCE=0.0001 → 0.047%, all of it the shared footer
    // wording ("Phoenix Tailwind" vs "Phoenix React", version string).
    name: 'calendar',
    react: '/apps/calendar',
    gold: '/apps/calendar.html',
    dark: true, // the plugin skin has a `@variant dark` block for `.fc`
    probes: [
      // toolbar: Today, prev/next, month title, Month/Week switcher
      '.btn-phoenix-primary',
      '.icon-item-sm',
      '.calendar-title',
      '.btn-group .btn-phoenix-secondary',
      // calendar chrome: weekday headers, day numbers, event pills, "+n more"
      '.fc-col-header-cell-cushion',
      '.fc-daygrid-day-number',
      '.fc-daygrid-event',
      '.fc-daygrid-more-link'
    ]
  },
  {
    // dhtmlx-gantt is deterministic here: every task in data/ganttData.ts is
    // pinned to a fixed 2023 date (the gold's gantt-data.js uses the same
    // `%d-%m-%Y` strings), so both sides always render the same Mar–Nov window.
    // Default 0.5% tolerance; audited at VISUAL_TOLERANCE=0.0001 → 0.06%, all of
    // it the shared footer wording ("Phoenix Tailwind" vs "Phoenix React") and
    // version string.
    name: 'gantt-chart',
    react: '/apps/gantt-chart',
    gold: '/apps/gantt-chart.html',
    dark: true,
    probes: [
      // toolbar: Add Task, search input + icon, Auto Fit switch, view select,
      // Filter/Options link buttons
      '[data-gantt-add-task]',
      '.gantt-search-box .search-input',
      '.gantt-search-box .search-box-icon',
      '#ganttZoomToFit',
      '[data-gantt-view]',
      '.gantt-header .btn-link',
      // grid chrome: sortable column headers, task titles, subtask-count badges
      '.gantt_grid_head_cell',
      '.gantt-task-title',
      '.gantt-task-title-wrapper .badge',
      // assignee avatars and the "+n" overflow avatar
      '.avatar-group .avatar',
      // timeline bars
      '.gantt_task_line'
    ]
  },
  // pages section — starter / faq / pricing / landing
  {
    name: 'starter',
    react: '/pages/starter',
    gold: '/pages/starter.html',
    dark: true,
    probes: [
      // the light/dark spot illustration (only one is visible per theme)
      '.content-min-h img',
      '.content-min-h h1',
      '.content-min-h .btn'
    ]
  },
  {
    name: 'faq-accordion',
    react: '/pages/faq/faq-accordion',
    gold: '/pages/faq/faq-accordion.html',
    dark: true,
    widths: [768],
    probes: [
      '.breadcrumb-item',
      '.search-box .search-input',
      '.search-box .search-box-icon',
      // item boxes + their headers: catches accordion padding/border drift
      '.accordion-item',
      '.accordion-button',
      '.accordion-body',
      // CTA button and its icon (`.py-20` excludes the floating chat widget,
      // which also carries `.btn-support-chat`)
      '.py-20 .btn-support-chat',
      '.py-20 .btn-support-chat .svg-inline--fa'
    ]
  },
  {
    name: 'faq-tab',
    react: '/pages/faq/faq-tab',
    gold: '/pages/faq/faq-tab.html',
    dark: true,
    widths: [768],
    probes: [
      '.faq-title-box',
      '.faq-title-box .search-input',
      '.faq-title-box .search-box-icon',
      // filter tabs + the nine category cards and their anchored icons
      '.faq-category-tab .nav-link',
      '.faq-subcategory-tab .nav-item',
      '.faq-subcategory-tab .nav-link',
      '.faq-subcategory-tab .category-icon',
      // visible pane: star / bullet icons and their headings
      '.faq-subcategory-content .fa-star',
      '.faq-subcategory-content .fa-circle',
      '.faq-subcategory-content h4'
    ]
  },
  {
    name: 'pricing-column',
    react: '/pages/pricing/pricing-column',
    gold: '/pages/pricing/pricing-column.html',
    dark: true,
    widths: [768],
    probes: [
      'img.w-30', // plan illustrations
      '.fa-ul .fa-stack', // stacked check/cross feature glyphs
      '.fa-ul .fa-li', // the fa-ul list gutter icons
      'button.btn-lg', // Buy buttons
      '.badge-phoenix-primary' // "New" badges
    ]
  },
  {
    name: 'pricing-grid',
    react: '/pages/pricing/pricing-grid',
    gold: '/pages/pricing/pricing-grid.html',
    dark: true,
    widths: [768],
    probes: [
      '.nav-underline .nav-link', // Yearly/Monthly tabs (underline sits on these)
      '.card-body img', // plan illustrations
      '.card-body li > span:first-child', // check-circle glyphs
      '.card .badge', // "recommended" badge
      '.bg-soft .badge', // "New" badge in the package list
      'button.btn-lg' // Subscribe / free-trial CTAs
    ]
  },
  {
    name: 'landing-default',
    react: '/pages/landing/default',
    gold: '/pages/landing/default.html',
    dark: true,
    // `[data-countup]`: the gold animates 0 → 125+/308k over 10s (countUp.js,
    // not a CSS animation, so `animations: 'disabled'` cannot freeze it) — the
    // digits shown depend on when the shot is taken on either side.
    mask: ['[data-countup]'],
    probes: [
      // navbar brand + sign-up button
      '.navbar-brand',
      '.btn-phoenix-primary',
      // feature illustrations and the isotope filter nav
      '.feature-image',
      '.isotope-nav',
      // team avatars in their decorated boxes (the testimonial ones are not
      // comparable: the gold only lays out the active carousel slide, embla
      // keeps all three in flow)
      '.team-avatar-container',
      // pricing ribbon + the `fa-ul` bullet glyphs
      '.badge-pricing',
      '.fa-li',
      // address contact glyphs (unicons webfont in the gold, svg here)
      '.icon-wrapper'
    ]
  },
  {
    name: 'landing-alternate',
    react: '/pages/landing/alternate',
    gold: '/pages/landing/alternate.html',
    dark: true,
    probes: [
      '.navbar-brand',
      '.btn-phoenix-primary',
      // gallery filter nav + the gold's own carousel indicator markup
      '.isotope-nav',
      '.carousel-indicators button',
      // pricing bullet glyphs, contact glyphs and the blog cards
      '.fa-li',
      '.icon-wrapper',
      '.blog-card'
    ],
    mask: [
      // same countUp.js figures as the default landing (5–15s, JS driven)
      '[data-countup]',
      // the rotating-earth lottie animates continuously on both sides and is
      // never on the same frame twice; it is absolutely positioned decoration,
      // so hiding it costs no layout (0.07–0.29% of the page unmasked)
      '.lottie',
      // the gold's Google map only renders when the CDN key resolves — its
      // street labels come and go between runs (`.mapboxgl-map` is already
      // masked globally for the React side)
      '.googlemap'
    ]
  },
  // pages section — misc, errors, authentication
  {
    name: 'notifications',
    react: '/pages/notifications',
    gold: '/pages/notifications.html',
    // the per-row ellipsis toggle is the only anchored control on the page
    probes: ['.notification-dropdown-toggle']
  },
  {
    name: 'members',
    react: '/pages/members',
    gold: '/pages/members.html',
    // sortable headers (list.js caret), the search icon and the pagination
    // controls are the anchored bits a page tolerance cannot see
    probes: [
      '.search-box-icon',
      'thead .sort',
      '[data-list-pagination="prev"]',
      '[data-list-pagination="next"]'
    ]
  },
  {
    name: 'timeline',
    react: '/pages/timeline',
    gold: '/pages/timeline.html',
    // the page swaps its illustration on `dark:`
    dark: true,
    // the dot icons and the right-aligned times are the anchored elements
    probes: ['.timeline-item-bar .icon-item', '.timeline-time']
  },
  {
    name: 'coming-soon',
    react: '/pages/coming-soon',
    gold: '/coming-soon.html',
    // the page swaps its illustration and its player on `dark:`
    dark: true,
    // the lottie player never settles on a frame (both sides animate from
    // their own clock), so only its box is compared, not its pixels
    mask: ['.lottie'],
    // the CTA is the anchored control below the animation (scoped to the page:
    // the gold's settings panel carries a second .btn-primary)
    probes: ['.text-container .btn-primary']
  },
  {
    name: 'error-403',
    react: '/pages/errors/403',
    gold: '/pages/errors/403.html',
    dark: true,
    widths: [768],
    // anchor the "Go Home" button (`.btn-primary` alone also matches the
    // gold settings panel's purchase link)
    probes: ['a.btn-lg.btn-primary']
  },
  {
    name: 'error-404',
    react: '/pages/errors/404',
    gold: '/pages/errors/404.html',
    dark: true,
    widths: [768],
    // anchor the "Go Home" button (`.btn-primary` alone also matches the
    // gold settings panel's purchase link)
    probes: ['a.btn-lg.btn-primary']
  },
  {
    name: 'error-500',
    react: '/pages/errors/500',
    gold: '/pages/errors/500.html',
    dark: true,
    widths: [768],
    // anchor the "Go Home" button (`.btn-primary` alone also matches the
    // gold settings panel's purchase link)
    probes: ['a.btn-lg.btn-primary']
  },
  // Authentication: the same 7 forms in 3 layouts. The probes anchor the
  // password eye toggle, the sign-in input icons, the lock-screen avatar and
  // the "or use email" divider — a few px of drift there is invisible to a
  // page-level tolerance. Selectors that match nothing on a given page are a
  // no-op (0 === 0), so one probe set covers all 7 pages of a variant.
  ...auth('simple', { dark: true, widths: [768], probes: AUTH_PROBES }),
  ...auth('split', {
    dark: true,
    widths: [768],
    probes: AUTH_PROBES,
    setup: AWAIT_BG
  }),
  ...auth('card', {
    dark: true,
    widths: [768],
    probes: AUTH_PROBES,
    setup: AWAIT_BG
  }),
  // layout demo pages (`/pages/demo/*`) — the routes themselves, as opposed to
  // the `layout-*` entries above which drive `/` through localStorage. Each one
  // renders the Ecommerce dashboard under a different navbar config.
  demo('vertical-sidenav'),
  demo('dark-mode'),
  demo('sidenav-collapse'),
  demo('darknav'),
  demo('topnav-slim'),
  demo('combo-nav'),
  demo('combo-nav-slim'),
  demo('dual-nav'),
  demo('navbar-top', 'navbar-horizontal'),
  demo('horizontal-slim'),
  // React carries an 11th route that renders exactly what `horizontal-slim`
  // does; the gold has no separate page for it.
  demo('navbar-top-slim', 'horizontal-slim'),

  // modules > widgets: the aggregate page that collects every widget in the
  // theme (widgets.pug). Unlike the other /modules pages it is a real page,
  // so it is pixel-compared.
  {
    name: 'widgets',
    react: '/widgets',
    gold: '/widgets.html',
    dark: true,
    widths: [768],
    setup: { gold: { eval: ACTIVATE_GOLD_SCROLLSPY } },
    probes: [
      // section-title fa-stack circles (the webfont sheet doubles fa-stack-2x)
      '.fa-stack',
      // sticky section nav links
      '.widgets-scrollspy-nav .nav-link',
      // deal-forecast / top-regions legend squares
      '.fa-square',
      // the Forms section's dropzone prompt (its line box drives the section
      // height, see Dropzone.messageClassName)
      '.dz-message',
      // to-do / project search boxes
      '.search-box .search-box-icon'
    ]
  },
  {
    name: 'showcase',
    react: '/showcase',
    gold: '/showcase.html'
  }
];
