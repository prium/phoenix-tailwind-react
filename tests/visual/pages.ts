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
}

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

  // customer
  p('ec-homepage', '/customer/homepage', '/landing/homepage.html'),
  // data-only: 3rd product row, prices and filter groups differ
  p(
    'ec-products-filter',
    '/customer/products-filter',
    '/landing/products-filter.html',
    { tolerance: 0.04 }
  ),
  p(
    'ec-favorite-stores',
    '/customer/favorite-stores',
    '/landing/favourite-stores.html'
  ),
  p('ec-cart', '/customer/cart', '/landing/cart.html'),
  // data-only: address text wraps differently
  p('ec-checkout', '/customer/checkout', '/landing/checkout.html', {
    tolerance: 0.015
  }),
  p(
    'ec-shipping-info',
    '/customer/shipping-info',
    '/landing/shipping-info.html'
  ),
  p('ec-profile', '/customer/profile', '/landing/profile.html'),
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
      mask: ['.mapbox-container', '.mapboxgl-map']
    }
  ),
  p('ec-wishlist', '/customer/wishlist', '/landing/wishlist.html'),

  // admin
  // data-only: gold headers are UPPERCASE, "$39" vs "$39.00"
  p('ec-admin-products', '/admin/products', '/admin/products.html', {
    tolerance: 0.015
  }),
  p('ec-admin-customers', '/admin/customers', '/admin/customers.html'),
  // data-only: gold headers UPPERCASE, totals formatting, badge labels
  p('ec-admin-orders', '/admin/orders', '/admin/orders.html', {
    tolerance: 0.02
  }),
  p('ec-admin-add-product', '/admin/add-product', '/admin/add-product.html'),
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
  )
];
