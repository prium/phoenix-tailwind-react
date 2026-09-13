import { useAppContext } from 'providers/AppProvider';
import { useEffect } from 'react';
import { useLocation } from 'react-router';

/** `+NavbarToggleIcon` in phoenix-tailwind Mixins.pug */
const NavbarToggleButton = () => {
  const {
    config: { openNavbarVertical },
    setConfig
  } = useAppContext();
  const { pathname } = useLocation();

  const toggleOpenNavbarVertical = () => {
    setConfig({
      openNavbarVertical: !openNavbarVertical
    });
  };

  useEffect(() => {
    return () => {
      setConfig({
        openNavbarVertical: false
      });
    };
  }, []);

  useEffect(() => {
    if (openNavbarVertical) {
      setConfig({
        openNavbarVertical: false
      });
    }
  }, [pathname]);

  return (
    <button
      type="button"
      className="btn navbar-toggler navbar-toggler-humburger-icon hover-bg-transparent"
      aria-controls="navbarVerticalCollapse"
      aria-expanded={openNavbarVertical}
      aria-label="Toggle Navigation"
      onClick={toggleOpenNavbarVertical}
    >
      <span className="navbar-toggle-icon">
        <span className="toggle-line" />
      </span>
    </button>
  );
};

export default NavbarToggleButton;
