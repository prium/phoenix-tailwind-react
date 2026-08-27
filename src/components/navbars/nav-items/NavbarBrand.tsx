import classNames from 'classnames';
import { useAppContext } from 'providers/AppProvider';
import { Navbar } from 'react-bootstrap';
import logo from 'assets/img/icons/logo.png';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import NavbarToggleButton from './NavbarToggleButton';
import { Link } from 'react-router';

const NavbarBrand = () => {
  const {
    config: { navbarTopShape, navbarPosition }
  } = useAppContext();
  const { breakpoints } = useBreakpoints();

  return (
    <>
      <div className="navbar-logo">
        {breakpoints.down('lg') && <NavbarToggleButton />}
        <Navbar.Brand
          as={Link}
          to="/"
          className={classNames({
            'me-1 sm:me-4':
              navbarTopShape === 'slim' || navbarPosition === 'horizontal'
          })}
        >
          {navbarTopShape === 'slim' ? (
            <>
              phoenix{' '}
              <span className="text-highlight hidden sm:inline">
                slim
              </span>
            </>
          ) : (
            <div className="flex items-center">
              <img src={logo} alt="phoenix" width={27} />
              <p className="logo-text ms-2 hidden sm:block">phoenix</p>
            </div>
          )}
        </Navbar.Brand>
      </div>
    </>
  );
};

export default NavbarBrand;
