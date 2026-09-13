import { Navbar, cn } from '@hummingbirdui/react';
import { useAppContext } from 'providers/AppProvider';
import NavbarBrand from 'components/navbars/nav-items/NavbarBrand';
import NavItems from 'components/navbars/nav-items/NavItems';
import NavItemsSlim from 'components/navbars/nav-items/NavItemsSlim';
import NavbarTopNav from './NavbarTopNav';
import { useBreakpoints } from 'providers/BreakpointsProvider';

/**
 * `+NavbarTop` / `+NavbarTopSlim` (NavbarTop.pug) and `+NavbarCombo` /
 * `+NavbarComboSlim` (NavbarCombo.pug) in phoenix-tailwind, all `.navbar-expand-lg`.
 * In combo mode below lg the menu is rendered inside the vertical navbar instead
 * (gold moves it there with navbar-combo.js).
 */
const NavbarTopHorizontal = () => {
  const {
    config: {
      navbarPosition,
      openNavbarVertical,
      navbarTopShape,
      navbarTopAppearance
    },
    setConfig
  } = useAppContext();
  const { breakpoints } = useBreakpoints();

  const combo = navbarPosition === 'combo';
  const slim = navbarTopShape === 'slim';
  const id = combo
    ? slim
      ? 'navbarComboSlim'
      : 'navbarCombo'
    : slim
      ? 'navbarTopSlim'
      : 'navbarTop';

  return (
    <Navbar
      expand="lg"
      id={id}
      className={cn('navbar-top fixed right-0 top-0 left-0 z-1030', {
        'navbar-slim justify-between': slim
      })}
      data-navbar-top={combo ? 'combo' : undefined}
      data-move-target={combo ? '#navbarVerticalNav' : undefined}
      data-navbar-appearance={navbarTopAppearance === 'darker' ? 'darker' : ''}
      open={openNavbarVertical}
      onOpenChange={open => setConfig({ openNavbarVertical: open })}
    >
      <NavbarBrand />
      {!(combo && breakpoints.down('lg')) && (
        <Navbar.Collapse
          id="navbarTopCollapse"
          className={cn(
            'navbar-top-collapse order-1 lg:order-0 lg:justify-center',
            { show: openNavbarVertical }
          )}
        >
          <NavbarTopNav />
        </Navbar.Collapse>
      )}
      {slim ? <NavItemsSlim /> : <NavItems />}
    </Navbar>
  );
};

export default NavbarTopHorizontal;
