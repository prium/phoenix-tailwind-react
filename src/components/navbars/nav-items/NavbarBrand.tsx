import { useAppContext } from 'providers/AppProvider';
import logo from 'assets/img/icons/logo.png';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import NavbarToggleButton from './NavbarToggleButton';
import { Link } from 'react-router';

/** `+NavbarLogo` / `+NavbarBrand` / `+Logo` mixins in phoenix-tailwind. */
const NavbarBrand = () => {
  const {
    config: { navbarTopShape }
  } = useAppContext();
  const { breakpoints } = useBreakpoints();

  return (
    <div className="navbar-logo">
      {breakpoints.down('lg') && <NavbarToggleButton />}
      <Link to="/" className="navbar-brand me-1 sm:me-4">
        {navbarTopShape === 'slim' ? (
          <>
            phoenix{' '}
            <span className="text-highlight hidden sm:inline">slim</span>
          </>
        ) : (
          <div className="flex items-center">
            <img src={logo} alt="phoenix" width={27} />
            <h5 className="logo-text ms-2 hidden sm:block">phoenix</h5>
          </div>
        )}
      </Link>
    </div>
  );
};

export default NavbarBrand;
