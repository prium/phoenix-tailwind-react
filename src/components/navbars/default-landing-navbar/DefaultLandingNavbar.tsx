import { Navbar, cn } from '@hummingbirdui/react';
import FeatherIcon from 'feather-icons-react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';

import Logo from 'components/common/Logo';
import SearchBox from 'components/common/SearchBox';
import ThemeToggler from 'components/common/ThemeToggler';
import SearchModal from 'components/navbars/nav-items/SearchModal';

const navItems = [
  { label: 'Home', url: '#' },
  { label: 'Features', url: '#feature' },
  { label: 'Blog', url: '#blog' },
  { label: 'Team', url: '#team' }
];

/**
 * `+Navbar` in phoenix-tailwind mixins/landing/common/Navbar.pug — shared by
 * both landing pages. `data-navbar-shadow-on-scroll` is replayed by the
 * scroll listener below (theme/navbar-shadow-on-scroll.js).
 */
const DefaultLandingNavbar = ({ className }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [openSearchModal, setOpenSearchModal] = useState(false);

  useEffect(() => {
    const toggleShadowClass = () => {
      if (window.scrollY > 300) {
        containerRef.current?.classList.add('navbar-shadow');
      } else {
        containerRef.current?.classList.remove('navbar-shadow');
      }
    };

    document.addEventListener('scroll', toggleShadowClass);

    return () => document.removeEventListener('scroll', toggleShadowClass);
  }, []);

  return (
    <>
      <div
        className={cn('bg-soft sticky top-0 z-1020', className)}
        ref={containerRef}
      >
        <Navbar expand="lg" className="container-small px-4 lg:px-12 2xl:px-4">
          <Navbar.Brand asChild>
            <Link to="/">
              <Logo />
            </Link>
          </Navbar.Brand>
          <div className="ms-auto lg:hidden">
            <ThemeToggler className="px-2" />
          </div>
          <Navbar.Toggle className="px-3 py-1" />
          <Navbar.Collapse id="navbarSupportedContent">
            <div className="border-b border-subtle lg:border-b-0 mb-2">
              <SearchBox
                placeholder="Search"
                className="inline lg:hidden"
                inputClassName="rounded-full my-6"
              />
            </div>
            <Navbar.Nav className="me-auto mb-2 lg:mb-0">
              {navItems.map(item => (
                <li
                  key={item.label}
                  className={cn('nav-item', {
                    'border-b border-subtle lg:border-b-0':
                      item.label !== 'Team'
                  })}
                >
                  <a
                    className="nav-link leading-none text-md font-bold py-4"
                    href={item.url}
                    aria-current={item.url === '#' ? 'page' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </Navbar.Nav>

            <div className="grid lg:flex items-center">
              <div className="nav-item items-center hidden lg:block pe-2">
                <ThemeToggler className="px-2" />
              </div>
              <a
                className="text-soft hover:text-subtle px-2 hidden lg:inline leading-sm"
                href="#!"
                onClick={event => {
                  event.preventDefault();
                  setOpenSearchModal(true);
                }}
              >
                <FeatherIcon icon="search" size={20} className="size-5" />
              </a>
              <Link
                className="btn btn-link text-default text-center order-1 lg:order-0 ps-6 lg:me-2"
                to="/pages/authentication/simple/sign-in"
              >
                Sign in
              </Link>
              <Link
                className="btn btn-phoenix-primary text-center order-0"
                to="/pages/authentication/simple/sign-up"
              >
                <span className="font-bold">Sign up</span>
              </Link>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <SearchModal open={openSearchModal} onOpenChange={setOpenSearchModal} />
    </>
  );
};

export default DefaultLandingNavbar;
