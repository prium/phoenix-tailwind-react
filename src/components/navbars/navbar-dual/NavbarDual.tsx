import { Navbar, cn } from '@hummingbirdui/react';
import NavbarBrand from '../nav-items/NavbarBrand';
import DropdownSearchBox from 'components/common/DropdownSearchBox';
import SearchResult from 'components/common/SearchResult';
import NavItems from '../nav-items/NavItems';
import NavbarTopNav from '../navbar-horizontal/NavbarTopNav';
import { useAppContext } from 'providers/AppProvider';
import { useBreakpoints } from 'providers/BreakpointsProvider';

/** `+DualNav` in phoenix-tailwind NavbarTop.pug (`.navbar-expand-lg`) */
const NavbarDual = () => {
  const {
    config: { navbarTopAppearance, openNavbarVertical },
    setConfig
  } = useAppContext();
  const { breakpoints } = useBreakpoints();

  return (
    <Navbar
      expand="lg"
      id="dualNav"
      className="navbar-top fixed right-0 top-0 left-0 z-1030"
      data-navbar-appearance={navbarTopAppearance === 'darker' ? 'darker' : ''}
      open={openNavbarVertical}
      onOpenChange={open => setConfig({ openNavbarVertical: open })}
    >
      <div className="w-full">
        <div className="flex flex-between-center dual-nav-first-layer">
          <NavbarBrand />
          {breakpoints.up('lg') && (
            <DropdownSearchBox
              className="navbar-top-search-box w-100"
              inputClassName="rounded-full"
              size="sm"
            >
              <SearchResult />
            </DropdownSearchBox>
          )}
          <NavItems />
        </div>
        <Navbar.Collapse
          id="navbarTopCollapse"
          className={cn('navbar-top-collapse lg:justify-center', {
            show: openNavbarVertical
          })}
        >
          <NavbarTopNav />
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavbarDual;
