import { Navbar, cn } from '@hummingbirdui/react';
import { useAppContext } from 'providers/AppProvider';
import NavbarBrand from 'components/navbars/nav-items/NavbarBrand';
import NavItems from 'components/navbars/nav-items/NavItems';
import NavItemsSlim from 'components/navbars/nav-items/NavItemsSlim';
import DropdownSearchBox from 'components/common/DropdownSearchBox';
import SearchResult from 'components/common/SearchResult';
import { useBreakpoints } from 'providers/BreakpointsProvider';

/** Mirrors phoenix-tailwind `mixins/navbars/TopNav.pug` (+TopNav). */
const NavbarTopDefault = () => {
  const {
    config: { navbarTopShape, navbarTopAppearance }
  } = useAppContext();

  const { breakpoints } = useBreakpoints();

  return (
    <Navbar
      expand="always"
      id="navbarDefault"
      className={cn('navbar-top fixed right-0 top-0 left-0 z-1030', {
        'navbar-slim': navbarTopShape === 'slim'
      })}
      data-navbar-appearance={navbarTopAppearance === 'darker' ? 'darker' : ''}
    >
      <div className="navbar-collapse justify-between">
        <NavbarBrand />

        {navbarTopShape === 'default' ? (
          <>
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
          </>
        ) : (
          <NavItemsSlim />
        )}
      </div>
    </Navbar>
  );
};

export default NavbarTopDefault;
