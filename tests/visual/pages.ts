/**
 * Pages under visual regression. `react` is the app route, `gold` the static
 * phoenix-tailwind HTML (relative to ../phoenix-tailwind/public).
 * Add a line here for every page you migrate.
 *
 * Tolerances above the 1% default are DATA-ONLY deltas (demo content differs
 * between the React app and the gold pug) and are commented per page. Lower a
 * page's tolerance again once its demo data is aligned.
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
  extra: Partial<VisualPage> = {},
): VisualPage => ({
  name,
  react: "/",
  gold: `/demo/${gold}.html`,
  setup: { react: { storage } },
  ...extra,
});

/** Forces the gold (static JS) offcanvas open the way hummingbird's toggle would. */
const OPEN_GOLD_OFFCANVAS = `const o=document.querySelector('#settings-offcanvas');o.classList.add('show');o.style.visibility='visible';const b=document.createElement('div');b.className='offcanvas-backdrop fade show';document.body.appendChild(b)`;

const EC = "/apps/e-commerce";
const p = (
  name: string,
  react: string,
  gold: string,
  extra: Partial<VisualPage> = {},
): VisualPage => ({
  name,
  react: EC + react,
  gold: EC + gold,
  ...extra,
});

export const pages: VisualPage[] = [
  {
    name: "dashboard-ecommerce",
    react: "/",
    gold: "/index.html",
    dark: true,
    widths: [768],
  },
  // layouts (settings panel "Navigation type" / "Horizontal navbar shape")
  layout("layout-horizontal", "navbar-horizontal", {
    navbarPosition: "horizontal",
  }),
  layout("layout-combo", "combo-nav", { navbarPosition: "combo" }),
  layout("layout-dual", "dual-nav", { navbarPosition: "dual" }),
  layout("layout-combo-slim", "combo-nav-slim", {
    navbarPosition: "combo",
    navbarTopShape: "slim",
  }),
  layout("layout-topnav-slim", "topnav-slim", {
    navbarTopShape: "slim",
    navbarTopAppearance: "darker",
  }),
  {
    name: "settings-panel",
    react: "/",
    gold: "/index.html",
    dark: true,
    setup: {
      react: { click: ".setting-toggle" },
      gold: { eval: OPEN_GOLD_OFFCANVAS },
    },
  },

  // customer
  p("ec-homepage", "/customer/homepage", "/landing/homepage.html"),
  // data-only: 3rd product row, prices and filter groups differ
  p(
    "ec-products-filter",
    "/customer/products-filter",
    "/landing/products-filter.html",
    { tolerance: 0.04 },
  ),
  p(
    "ec-favorite-stores",
    "/customer/favorite-stores",
    "/landing/favourite-stores.html",
  ),
  p("ec-cart", "/customer/cart", "/landing/cart.html"),
  p("ec-checkout", "/customer/checkout", "/landing/checkout.html"),
  p(
    "ec-shipping-info",
    "/customer/shipping-info",
    "/landing/shipping-info.html",
  ),
  p("ec-profile", "/customer/profile", "/landing/profile.html"),
  p(
    "ec-product-details",
    "/customer/product-details",
    "/landing/product-details.html",
  ),
  p("ec-invoice", "/customer/invoice", "/landing/invoice.html"),
  p(
    "ec-order-tracking",
    "/customer/order-tracking",
    "/landing/order-tracking.html",
    {
      mask: [".mapbox-container", ".mapboxgl-map"],
    },
  ),
  p("ec-wishlist", "/customer/wishlist", "/landing/wishlist.html"),

  // admin
  p("ec-admin-products", "/admin/products", "/admin/products.html"),
  p("ec-admin-customers", "/admin/customers", "/admin/customers.html"),
  p("ec-admin-orders", "/admin/orders", "/admin/orders.html"),
  p("ec-admin-add-product", "/admin/add-product", "/admin/add-product.html"),
  // data-only: different demo products / row count
  p(
    "ec-admin-order-details",
    "/admin/order-details",
    "/admin/order-details.html",
    { tolerance: 0.02 },
  ),
  // data-only: different demo products / row count
  p("ec-admin-refund", "/admin/refund", "/admin/refund.html", {
    tolerance: 0.02,
  }),
  // data-only: different demo orders / wishlist / reviews
  p(
    "ec-admin-customer-details",
    "/admin/customer-details",
    "/admin/customer-details.html",
    { tolerance: 0.03 },
  ),

  // project management
  {
    name: "pm-create-new",
    react: "/apps/project-management/create-new",
    gold: "/apps/project-management/create-new.html",
  },
  // project management
  // data-only: demo projects (names, dates, assignees, counts) differ from the gold
  {
    name: "pm-list-view",
    react: "/apps/project-management/project-list-view",
    gold: "/apps/project-management/project-list-view.html",
    tolerance: 0.02,
  },
  // data-only: demo projects differ, and the gold's `.avatar-group > a.inline-block`
  // avatars size themselves from each image's intrinsic size, so card heights
  // follow the demo members' images (React members use other images)
  {
    name: "pm-card-view",
    react: "/apps/project-management/project-card-view",
    gold: "/apps/project-management/project-card-view.html",
    tolerance: 0.07,
  },
  // data-only: demo project names / status badges differ
  {
    name: "pm-board-view",
    react: "/apps/project-management/project-board-view",
    gold: "/apps/project-management/project-board-view.html",
    tolerance: 0.02,
  },
];
