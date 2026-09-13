import { startTransition } from 'react';
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
import NavbarTopNav from 'components/navbars/navbar-horizontal/NavbarTopNav';
import { useBreakpoints } from 'providers/BreakpointsProvider';

/** Mirrors phoenix-tailwind `mixins/navbars/NavbarVertical.pug`. */
const NavbarVertical = () => {
  const {
    config: {
      openNavbarVertical,
      navbarVerticalAppearance,
      isNavbarVerticalCollapsed,
      navbarPosition
    },
    setConfig
  } = useAppContext();
  const { breakpoints } = useBreakpoints();

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
            {/* navbar-combo.js moves the top menu here below the navbar's breakpoint */}
            {navbarPosition === 'combo' && breakpoints.down('lg') && (
              <div className="move-container" data-move-container="">
                <div className="navbar-vertical-divider">
                  <hr className="navbar-vertical-hr" />
                </div>
                <NavbarTopNav />
              </div>
            )}
          </div>
        </Navbar.Collapse>
        <div className="navbar-vertical-footer">
          <Button
            className="navbar-vertical-toggle border-0 font-semibold w-full whitespace-nowrap flex items-center justify-start"
            onClick={() => {
              /*
                Toggle the class synchronously, as navbar-vertical.js does in
                the gold. `width` transitions run on wall-clock time, so waiting
                for the config effect costs the animation its first frames.
                The AppProvider effect then re-applies the same class, idempotently.
              */
              document.documentElement.classList.toggle(
                'navbar-vertical-collapsed',
                !isNavbarVerticalCollapsed
              );
              // Non-urgent: lets React yield so the browser can paint the
              // transition instead of blocking it with the config re-render.
              startTransition(() => {
                setConfig({
                  isNavbarVerticalCollapsed: !isNavbarVerticalCollapsed
                });
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
