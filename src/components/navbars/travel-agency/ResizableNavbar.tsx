import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { Dropdown, cn } from '@hummingbirdui/react';
import { Link, useLocation } from 'react-router';
import { ResizableNav } from 'data/travel-agency/resizableNav';

/**
 * `+Navbar` in phoenix-tailwind mixins/travel-agency/common/Navbar.pug
 * (`.navbar-responsive-navitems`). Items that don't fit are hidden and
 * listed under a "More" dropdown, like phoenix's responsive-navitems script.
 */
const ResizableNavbar = ({ navItems }: ResizableNav) => {
  const { pathname } = useLocation();

  const containerRef = useRef<HTMLDivElement | null>(null);
  const moreBtnRef = useRef<HTMLLIElement | null>(null);
  const navItemsRef = useRef<(HTMLLIElement | null)[]>([]);
  /** Widths cached while visible — hidden items measure 0. */
  const itemWidthsRef = useRef<number[]>([]);
  const [visibleCount, setVisibleCount] = useState(navItems.length);

  const updateItems = useCallback(() => {
    const containerWidth = containerRef.current?.clientWidth || 0;
    const moreBtnWidth = moreBtnRef.current?.clientWidth || 0;

    let totalItemsWidth = 0;
    let count = navItems.length;
    navItemsRef.current.forEach((item, index) => {
      if (!item) return;
      if (item.clientWidth) itemWidthsRef.current[index] = item.clientWidth;
      totalItemsWidth += (itemWidthsRef.current[index] || 0) + 32;
      if (
        count === navItems.length &&
        totalItemsWidth + moreBtnWidth + 50 > containerWidth
      ) {
        count = index;
      }
    });
    setVisibleCount(count);
  }, [navItems]);

  useLayoutEffect(() => {
    updateItems();
    window.addEventListener('resize', updateItems);
    return () => window.removeEventListener('resize', updateItems);
  }, [updateItems]);

  const overflowItems = navItems.slice(visibleCount);

  return (
    <div className="navbar-responsive-navitems navbar-expand border-y bg-soft border-subtle py-2">
      <div
        className="container-medium flex flex-between-center"
        ref={containerRef}
      >
        <ul className="navbar-nav justify-end items-center">
          {navItems.map((item, index) => (
            <li
              className={cn('nav-item', { hidden: index >= visibleCount })}
              key={item.id}
              ref={el => {
                navItemsRef.current[index] = el;
              }}
            >
              <Link
                to={item.url}
                className={cn('nav-link px-4', {
                  'ps-0': index === 0,
                  'text-primary': pathname === item.url
                })}
              >
                {item.label}
              </Link>
            </li>
          ))}
          {/* `.navbar-responsive-navitems .nav-item.dropdown` is display:none in
              navbar.css — shown inline when items overflow, as in the gold JS */}
          <li
            className="nav-item dropdown"
            ref={moreBtnRef}
            style={{ display: overflowItems.length ? 'block' : undefined }}
          >
            <Dropdown>
              <Dropdown.Trigger asChild>
                <a
                  href="#!"
                  onClick={e => e.preventDefault()}
                  className="nav-link dropdown-toggle dropdown-caret-none font-bold pe-0 ps-4"
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
    </div>
  );
};

export default ResizableNavbar;
