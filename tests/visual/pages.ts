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

/** Forces the gold (static JS) offcanvas open the way hummingbird's toggle would. */
const OPEN_GOLD_OFFCANVAS = `const o=document.querySelector('#settings-offcanvas');o.classList.add('show');o.style.visibility='visible';const b=document.createElement('div');b.className='offcanvas-backdrop fade show';document.body.appendChild(b)`;

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
  }
];
