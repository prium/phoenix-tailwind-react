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
  }
];
