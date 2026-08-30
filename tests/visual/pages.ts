/**
 * Pages under visual regression. `react` is the app route, `gold` the static
 * phoenix-tailwind HTML (relative to ../phoenix-tailwind/public).
 * Add a line here for every page you migrate.
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

export const pages: VisualPage[] = [
  { name: 'dashboard-ecommerce', react: '/', gold: '/index.html', dark: true, widths: [768] },

  // customer
  { name: 'ec-homepage', react: `${EC}/customer/homepage`, gold: `${EC}/landing/homepage.html` },
  { name: 'ec-products-filter', react: `${EC}/customer/products-filter`, gold: `${EC}/landing/products-filter.html` },
  { name: 'ec-favorite-stores', react: `${EC}/customer/favorite-stores`, gold: `${EC}/landing/favourite-stores.html` },
  { name: 'ec-cart', react: `${EC}/customer/cart`, gold: `${EC}/landing/cart.html` },
  { name: 'ec-checkout', react: `${EC}/customer/checkout`, gold: `${EC}/landing/checkout.html` },
  { name: 'ec-shipping-info', react: `${EC}/customer/shipping-info`, gold: `${EC}/landing/shipping-info.html` },
  { name: 'ec-profile', react: `${EC}/customer/profile`, gold: `${EC}/landing/profile.html` },
  { name: 'ec-product-details', react: `${EC}/customer/product-details`, gold: `${EC}/landing/product-details.html` },
  { name: 'ec-invoice', react: `${EC}/customer/invoice`, gold: `${EC}/landing/invoice.html` },
  { name: 'ec-order-tracking', react: `${EC}/customer/order-tracking`, gold: `${EC}/landing/order-tracking.html`, mask: ['.mapbox-container', '.mapboxgl-map'] },
  { name: 'ec-wishlist', react: `${EC}/customer/wishlist`, gold: `${EC}/landing/wishlist.html` },

  // admin
  { name: 'ec-admin-products', react: `${EC}/admin/products`, gold: `${EC}/admin/products.html` },
  { name: 'ec-admin-customers', react: `${EC}/admin/customers`, gold: `${EC}/admin/customers.html` },
  { name: 'ec-admin-orders', react: `${EC}/admin/orders`, gold: `${EC}/admin/orders.html` },
  { name: 'ec-admin-add-product', react: `${EC}/admin/add-product`, gold: `${EC}/admin/add-product.html` },
  { name: 'ec-admin-order-details', react: `${EC}/admin/order-details`, gold: `${EC}/admin/order-details.html` },
  { name: 'ec-admin-refund', react: `${EC}/admin/refund`, gold: `${EC}/admin/refund.html` },
  { name: 'ec-admin-customer-details', react: `${EC}/admin/customer-details`, gold: `${EC}/admin/customer-details.html` }
];
