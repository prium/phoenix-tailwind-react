import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { categories } from 'data/e-commerce';
import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { Card, Col, Dropdown, Row, cn } from '@hummingbirdui/react';
import { Link, useLocation } from 'react-router';
import FeatherIcon from 'feather-icons-react';
import {
  faAngleDown,
  faAngleRight,
  faBars
} from '@fortawesome/free-solid-svg-icons';

type NavItemType = {
  id: number;
  label: string;
  url: string;
};

const initNavItems: NavItemType[] = [
  { id: 1, label: 'Home', url: '/apps/e-commerce/customer/homepage' },
  {
    id: 2,
    label: 'My Favorite Stores',
    url: '/apps/e-commerce/customer/favorite-stores'
  },
  { id: 3, label: 'Products', url: '/apps/e-commerce/customer/products-filter' },
  { id: 4, label: 'Wishlist', url: '/apps/e-commerce/customer/wishlist' },
  {
    id: 5,
    label: 'Shipping Info',
    url: '/apps/e-commerce/customer/shipping-info'
  },
  { id: 6, label: 'Be a vendor', url: '/apps/e-commerce/admin/add-product' },
  {
    id: 7,
    label: 'Track order',
    url: '/apps/e-commerce/customer/order-tracking'
  },
  { id: 8, label: 'Checkout', url: '/apps/e-commerce/customer/checkout' }
];

/** `+CategoryDropdown` in phoenix-tailwind mixins/e-commerce/Navbar.pug */
const CategoryDropdown = () => (
  <Dropdown>
    <Dropdown.Trigger asChild>
      <button
        type="button"
        className="btn text-default ps-0 pe-8 whitespace-nowrap dropdown-caret-none"
      >
        <FontAwesomeIcon icon={faBars} className="me-2" />
        Category
      </button>
    </Dropdown.Trigger>
    <Dropdown.Content
      align="start"
      className="border border-light py-0 category-dropdown-menu"
    >
      <Card className="border-0 scrollbar max-h-164.25">
        <Card.Body className="p-10 pb-4">
          <Row className="gx-12 gy-8 mb-8">
            {categories.map(category => (
              <Col xs={12} sm={6} md={4} key={category.title}>
                <div className="flex items-center mb-4">
                  <FeatherIcon
                    icon={category.icon}
                    className="text-primary me-2 stroke-3"
                    size={16}
                  />
                  <h6 className="text-highlight mb-0 whitespace-nowrap">
                    {category.title}
                  </h6>
                </div>
                <div className="-ms-2">
                  {category.sections.map(section => (
                    <Link
                      key={section.label}
                      to={section.url}
                      className="text-emphasis block mb-1 no-underline hover:bg-subtle px-2 py-1 rounded-md"
                    >
                      {section.label}
                    </Link>
                  ))}
                </div>
              </Col>
            ))}
          </Row>
          <div className="text-center border-t border-light pt-4">
            <Link className="font-bold" to="#!">
              See all Categories
              <FontAwesomeIcon
                icon={faAngleRight}
                className="ms-1"
                transform="down-1"
              />
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Dropdown.Content>
  </Dropdown>
);

/**
 * `+Navbar` in phoenix-tailwind mixins/e-commerce/Navbar.pug.
 * Items that don't fit are hidden and listed under a "More" dropdown
 * (same behaviour as phoenix-tailwind's navbar-responsive-navitems script).
 */
const EcommerceNavbar = () => {
  const { pathname } = useLocation();

  const containerRef = useRef<HTMLDivElement | null>(null);
  const categoryRef = useRef<HTMLDivElement | null>(null);
  const moreBtnRef = useRef<HTMLLIElement | null>(null);
  const navItemsRef = useRef<(HTMLLIElement | null)[]>([]);
  /** Widths cached while visible — hidden items measure 0. */
  const itemWidthsRef = useRef<number[]>([]);
  const [visibleCount, setVisibleCount] = useState(initNavItems.length);

  const updateItems = useCallback(() => {
    const otherElsWidth = categoryRef.current?.clientWidth || 0;
    const containerWidth = containerRef.current?.clientWidth || 0;
    const moreBtnWidth = moreBtnRef.current?.clientWidth || 0;

    let totalItemsWidth = 0;
    let count = initNavItems.length;
    navItemsRef.current.forEach((item, index) => {
      if (!item) return;
      if (item.clientWidth) itemWidthsRef.current[index] = item.clientWidth;
      totalItemsWidth += (itemWidthsRef.current[index] || 0) + 32;
      if (
        count === initNavItems.length &&
        otherElsWidth + totalItemsWidth + moreBtnWidth + 50 > containerWidth
      ) {
        count = index;
      }
    });
    setVisibleCount(count);
  }, []);

  useLayoutEffect(() => {
    updateItems();
    window.addEventListener('resize', updateItems);
    return () => window.removeEventListener('resize', updateItems);
  }, [updateItems]);

  const overflowItems = initNavItems.slice(visibleCount);

  return (
    <nav className="navbar-responsive-navitems navbar-expand bg-soft justify-between">
      <div
        className="container-small flex flex-between-center flex-nowrap w-full"
        ref={containerRef}
      >
        <div ref={categoryRef}>
          <CategoryDropdown />
        </div>
        <ul className="navbar-nav justify-end items-center">
          {initNavItems.map((item, index) => (
            <li
              className={cn('nav-item', { hidden: index >= visibleCount })}
              key={item.id}
              ref={el => {
                navItemsRef.current[index] = el;
              }}
            >
              <Link
                to={item.url}
                className={cn('nav-link', {
                  'ps-0': index === 0,
                  'pe-0': index === initNavItems.length - 1,
                  active: pathname === item.url
                })}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li
            className={cn('nav-item dropdown', {
              hidden: overflowItems.length === 0
            })}
            ref={moreBtnRef}
          >
            <Dropdown>
              <Dropdown.Trigger asChild>
                <a
                  href="#!"
                  onClick={e => e.preventDefault()}
                  className="nav-link font-bold pe-0 dropdown-caret-none"
                >
                  More
                  <FontAwesomeIcon icon={faAngleDown} className="ms-2" />
                </a>
              </Dropdown.Trigger>
              <Dropdown.Content align="end" className="category-list">
                {overflowItems.map(item => (
                  <Dropdown.Item key={item.id} asChild>
                    <Link to={item.url}>{item.label}</Link>
                  </Dropdown.Item>
                ))}
              </Dropdown.Content>
            </Dropdown>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default EcommerceNavbar;
