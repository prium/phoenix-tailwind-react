import { Navbar } from 'react-bootstrap';
import { useAppContext } from 'providers/AppProvider';
import classNames from 'classnames';
import NavbarBrand from 'components/navbars/nav-items/NavbarBrand';
import NavItemsSlim from 'components/navbars/nav-items/NavItemsSlim';
import NavItems from 'components/navbars/nav-items/NavItems';
import NavbarTopNav from './NavbarTopNav';
import { useBreakpoints } from 'providers/BreakpointsProvider';

const NavbarTopHorizontal = () => {
  const {
    config: {
      navbarPosition,
      openNavbarVertical,
      navbarTopShape,
      navbarTopAppearance
    }
  } = useAppContext();

  const { breakpoints } = useBreakpoints();

  return (
    <Navbar
      className={classNames('navbar-top fixed top-0 left-0 right-0 z-1030', {
        'navbar-slim': navbarTopShape === 'slim'
      })}
      expand="lg"
      variant=""
      data-navbar-appearance={navbarTopAppearance === 'darker' ? 'darker' : ''}
    >
      <NavbarBrand />
      {!(navbarPosition === 'combo' && breakpoints.down('lg')) && (
        <Navbar.Collapse
          className="navbar-top-collapse order-1 lg:order-0 justify-center pb-0"
          in={openNavbarVertical}
        >
          <NavbarTopNav />
        </Navbar.Collapse>
      )}
      {navbarTopShape === 'default' ? <NavItems /> : <NavItemsSlim />}
    </Navbar>
  );
};

export default NavbarTopHorizontal;
