import Button from 'components/base/Button';
import Logo from 'components/common/Logo';
import useNavbarBgChangeOnScroll from 'hooks/useNavbarBgChangeOnScroll';
import { useRef } from 'react';
import { Navbar } from '@hummingbirdui/react';
import { Link } from 'react-router';

/** `mixins/navbars/NavbarShowcase.pug` */
const ShowcaseNavbar = () => {
  const navbarRef = useRef<HTMLElement | null>(null);

  useNavbarBgChangeOnScroll(navbarRef);

  return (
    <Navbar
      ref={navbarRef}
      expand="lg"
      // `bg-red-200` is the gold's, and is never seen: navbar-soft-on-scroll
      // paints an inline rgba(255,255,255,alpha) over it from the first frame.
      className="sticky top-0 z-1020 py-4 bg-red-200"
    >
      <div className="container-small px-0 sm:px-4">
        <Navbar.Brand asChild>
          <Link to="/">
            <Logo as="h5" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle className="px-3 py-1">
          <span className="navbar-toggler-icon size-[28.8px]!" />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 lg:mb-0">
            <li className="nav-item border-b border-subtle lg:border-b-0">
              <Link
                to="/documentation/getting-started"
                className="nav-link text-md font-bold pe-4"
                aria-current="page"
              >
                Documentation
              </Link>
            </li>
            <li className="nav-item border-b border-subtle lg:border-b-0">
              <a
                className="nav-link text-md font-bold pe-4"
                href="mailto:support@themewagon.com"
              >
                Support
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-md font-bold pe-8"
                href="https://themewagon.com/hire-us/"
                target="_blank"
              >
                Hire us
              </a>
            </li>
          </ul>
          <div className="grid lg:flex items-center">
            <Button variant="primary" asChild>
              <a
                href={`${import.meta.env.VITE_PURCHASE_LINK}`}
                target="_blank"
                rel="noreferrer"
              >
                Purchase
              </a>
            </Button>
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default ShowcaseNavbar;
