import { useEffect, useRef, useState } from 'react';
import { Navbar } from '@hummingbirdui/react';
import { Link, useLocation } from 'react-router';
import FeatherIcon from 'feather-icons-react';
import Logo from 'components/common/Logo';
import ThemeToggler from 'components/common/ThemeToggler';

/** `+Navbar` links in phoenix-tailwind mixins/travel-agency/landing/Navbar.pug */
const navItems = [
  { label: 'Hotel', url: '/apps/travel-agency/hotel/customer/homepage' },
  { label: 'Flight', url: '/apps/travel-agency/flight/homepage' },
  { label: 'Trip', url: '/apps/travel-agency/trip/homepage' },
  { label: 'Event', url: '#!' },
  { label: 'Package', url: '#!' },
  { label: 'Trending', url: '#!' }
];

/**
 * Landing navbar (`.navbar-landing`) — a simple link bar, unlike the shared
 * travel-agency `NavbarMain` which carries the hover dropdown menus.
 */
const LandingNavbar = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { pathname } = useLocation();
  const [openCollapse, setOpenCollapse] = useState(false);

  useEffect(() => {
    // gold: [data-navbar-shadow-on-scroll]
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
    <div className="bg-soft sticky top-0 z-1020" ref={containerRef}>
      <Navbar
        expand="lg"
        className="navbar-landing container-medium"
        open={openCollapse}
        onOpenChange={setOpenCollapse}
      >
        <Navbar.Brand asChild className="lg:grow-0 lg:me-14 xl:me-26">
          <Link to="/">
            <Logo />
          </Link>
        </Navbar.Brand>
        <div className="flex items-center gap-2 sm:gap-4 md:gap-6 my-2 lg:order-1 ms-auto">
          <ThemeToggler />
          <Link to="#!" className="btn btn-link text-subtle p-0">
            <FeatherIcon icon="map-pin" size={18} />
          </Link>
          <Link to="#!" className="btn btn-link text-subtle p-0">
            <FeatherIcon icon="bell" size={20} />
          </Link>
          <Link to="#!" className="btn btn-link text-subtle p-0 me-2 lg:me-0">
            <FeatherIcon icon="user" size={20} />
          </Link>
        </div>
        <Navbar.Toggle className="text-base ps-1 sm:ps-4 pe-0">
          <span className="navbar-toggler-icon size-6" />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mt-4 lg:mt-0">
            {navItems.map((item, index) => (
              <li
                key={item.label}
                className={
                  index === navItems.length - 1
                    ? 'nav-item'
                    : 'nav-item border-b border-subtle lg:border-b-0'
                }
              >
                <Link className="nav-link font-normal" to={item.url}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default LandingNavbar;
