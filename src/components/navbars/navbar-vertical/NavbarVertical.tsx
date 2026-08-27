import { Navbar, cn } from '@hummingbirdui/react';
import { routes } from 'sitemap';
import { capitalize } from 'helpers/utils';
import NavbarVerticalMenu from './NavbarVerticalMenu';
import {
  UilArrowFromRight,
  UilLeftArrowToLeft
} from '@iconscout/react-unicons';
import { useAppContext } from 'providers/AppProvider';
import Button from 'components/base/Button';
import NavbarVerticalCollapseProvider from './NavbarVerticalCollapseProvider';

/** Mirrors phoenix-tailwind `mixins/navbars/NavbarVertical.pug`. */
const NavbarVertical = () => {
  const {
    config: {
      openNavbarVertical,
      navbarVerticalAppearance,
      isNavbarVerticalCollapsed
    },
    setConfig
  } = useAppContext();

  return (
    <NavbarVerticalCollapseProvider>
      <Navbar
        className="navbar-vertical"
        expand="lg"
        open={openNavbarVertical}
        onOpenChange={open => setConfig({ openNavbarVertical: open })}
        data-navbar-appearance={
          navbarVerticalAppearance === 'darker' ? 'darker' : ''
        }
      >
        <Navbar.Collapse
          id="navbarVerticalCollapse"
          className={cn({ show: openNavbarVertical })}
        >
          <div className="navbar-vertical-content">
            <Navbar.Nav className="flex-col" id="navbarVerticalNav">
              {routes.map(route => (
                <li className="nav-item" key={route.label}>
                  {!route.labelDisabled && (
                    <>
                      <p className="navbar-vertical-label">
                        {capitalize(route.label)}
                      </p>
                      <hr className="navbar-vertical-line" />
                    </>
                  )}
                  <NavbarVerticalMenu level={1} routes={route.pages} />
                </li>
              ))}
            </Navbar.Nav>
            {/* TODO(hb-migration): combo navigation (NavbarTopNav) below lg */}
          </div>
        </Navbar.Collapse>
        <div className="navbar-vertical-footer">
          <Button
            className="navbar-vertical-toggle border-0 font-semibold w-full whitespace-nowrap flex items-center justify-start"
            onClick={() => {
              setConfig({
                isNavbarVerticalCollapsed: !isNavbarVerticalCollapsed
              });
            }}
          >
            {isNavbarVerticalCollapsed ? (
              <UilArrowFromRight
                fill="currentColor"
                size={16}
                className="mb-1"
              />
            ) : (
              <UilLeftArrowToLeft
                fill="currentColor"
                size={16}
                className="mb-1"
              />
            )}
            <span className="navbar-vertical-footer-text ms-2">
              Collapsed View
            </span>
          </Button>
        </div>
      </Navbar>
    </NavbarVerticalCollapseProvider>
  );
};

export default NavbarVertical;
