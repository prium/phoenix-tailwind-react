import { useEffect, useMemo, useRef, useState } from 'react';
import { Navbar, cn } from '@hummingbirdui/react';
import { Link, useLocation } from 'react-router';
import FeatherIcon from 'feather-icons-react';
import Logo from 'components/common/Logo';
import ThemeToggler from 'components/common/ThemeToggler';
import useTopNavDropdown from 'components/navbars/navbar-horizontal/useTopNavDropdown';

interface SubMenuItem {
  label: string;
  url: string;
}

interface NavItem {
  label: string;
  items?: SubMenuItem[];
}

/** `+TopNavbar` navLinks in phoenix-tailwind mixins/travel-agency/common/TopNavbar.pug */
const navItems: NavItem[] = [
  {
    label: 'Hotel',
    items: [
      {
        label: 'Homepage',
        url: '/apps/travel-agency/hotel/customer/homepage'
      },
      {
        label: 'Hotel Details',
        url: '/apps/travel-agency/hotel/customer/hotel-details'
      },
      {
        label: 'Hotel Compare',
        url: '/apps/travel-agency/hotel/customer/hotel-compare'
      },
      {
        label: 'Check out',
        url: '/apps/travel-agency/hotel/customer/checkout'
      },
      {
        label: 'Payment',
        url: '/apps/travel-agency/hotel/customer/payment'
      },
      {
        label: 'Gallery',
        url: '/apps/travel-agency/hotel/customer/gallery'
      }
    ]
  },
  {
    label: 'Flight',
    items: [
      { label: 'Homepage', url: '/apps/travel-agency/flight/homepage' },
      { label: 'Booking', url: '/apps/travel-agency/flight/booking' },
      { label: 'Payment', url: '/apps/travel-agency/flight/payment' }
    ]
  },
  {
    label: 'Trip',
    items: [
      { label: 'Homepage', url: '/apps/travel-agency/trip/homepage' },
      { label: 'Trip Details', url: '/apps/travel-agency/trip/trip-details' },
      { label: 'Checkout', url: '/apps/travel-agency/trip/checkout' }
    ]
  },
  { label: 'Event' },
  { label: 'Package' }
];

/** `+NavbarItem` — plain bootstrap dropdown markup driven by hover/click state */
const NavbarMainItem = ({
  item,
  active
}: {
  item: NavItem;
  active: boolean;
}) => {
  const { open, toggleProps, containerProps } =
    useTopNavDropdown<HTMLLIElement>();

  return (
    <li className="nav-item dropdown" {...containerProps}>
      <a
        href="#!"
        role="button"
        aria-haspopup="true"
        className={cn('nav-link text-base font-bold', {
          'dropdown-toggle': !!item.items,
          'text-primary': active,
          show: open
        })}
        {...toggleProps}
      >
        {item.label}
      </a>
      {item.items && (
        <ul
          className={cn('dropdown-menu navbar-dropdown-caret', { show: open })}
          data-bs-popper={open ? 'none' : undefined}
        >
          {item.items.map(link => (
            <li key={link.label}>
              <Link className="dropdown-item" to={link.url}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

/**
 * `+TopNavbar` in phoenix-tailwind mixins/travel-agency/common/TopNavbar.pug.
 * `currentPage` (Hotel / Flight / Trip) is derived from the pathname.
 */
const NavbarMain = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { pathname } = useLocation();
  const [openCollapse, setOpenCollapse] = useState(false);

  const currentPage = useMemo(() => {
    if (pathname.includes('/travel-agency/hotel')) return 'Hotel';
    if (pathname.includes('/travel-agency/flight')) return 'Flight';
    if (pathname.includes('/travel-agency/trip')) return 'Trip';
    return '';
  }, [pathname]);

  useEffect(() => {
    const toggleShadowClass = () => {
      containerRef.current?.classList.toggle(
        'navbar-shadow',
        window.scrollY > 300
      );
    };
    document.addEventListener('scroll', toggleShadowClass);
    return () => document.removeEventListener('scroll', toggleShadowClass);
  }, []);

  useEffect(() => {
    setOpenCollapse(false);
  }, [pathname]);

  return (
    <div className="sticky top-0 z-1020 bg-default" ref={containerRef}>
      <Navbar
        expand="lg"
        className="navbar-top container-medium border-0! bg-default! px-4! py-2!"
        open={openCollapse}
        onOpenChange={setOpenCollapse}
      >
        <Navbar.Toggle className="text-base px-2 py-1 pe-3 sm:me-2">
          <span className="navbar-toggler-icon size-6" />
        </Navbar.Toggle>
        <Navbar.Brand
          asChild
          className="flex-1 lg:flex-none! lg:grow-0 lg:me-14 xl:me-26"
        >
          <Link to="/">
            <Logo />
          </Link>
        </Navbar.Brand>
        <div className="flex items-center gap-2 sm:gap-4 md:gap-6 my-2 lg:order-1">
          <ThemeToggler />
          <Link to="#!" className="btn btn-link text-subtle p-0">
            <FeatherIcon icon="map-pin" size={18} />
          </Link>
          <Link to="#!" className="btn btn-link text-subtle p-0">
            <FeatherIcon icon="bell" size={20} />
          </Link>
          <Link to="#!" className="btn btn-link text-subtle p-0">
            <FeatherIcon icon="log-in" size={20} />
          </Link>
          <Link to="#!" className="btn btn-link text-subtle p-0">
            <FeatherIcon icon="user" size={20} />
          </Link>
        </div>
        <Navbar.Collapse
          id="navbarTopCollapse"
          className="navbar-top-collapse order-1 lg:order-0 lg:justify-center pb-0"
        >
          <ul className="navbar-nav travel-nav-top me-auto">
            {navItems.map(item => (
              <NavbarMainItem
                key={item.label}
                item={item}
                active={item.label === currentPage}
              />
            ))}
          </ul>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarMain;
