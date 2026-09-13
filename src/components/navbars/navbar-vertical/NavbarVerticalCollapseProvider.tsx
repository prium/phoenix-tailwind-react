import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  use,
  useMemo,
  useState
} from 'react';
import { useLocation } from 'react-router';
import { Route, routes } from 'sitemap';

interface NavbarVerticalCollapseContextInterface {
  openItems: string[];
  setOpenItems: Dispatch<SetStateAction<string[]>>;
}

const NavbarVerticalCollapseContext = createContext(
  {} as NavbarVerticalCollapseContextInterface
);

/**
 * The menus the current route sits under, indexed by nesting level — the same
 * answer `CollapsableNavItem`'s mount effect arrives at, but available before
 * the first paint. `NavbarVertical.pug` bakes `.show` into the markup, so
 * without this the active menu animates itself open on every page load.
 */
const openItemsForPath = (pathname: string) => {
  const open = [''];
  const contains = (page: Route): boolean =>
    page.path === pathname || !!page.pages?.some(contains);

  const walk = (pages: Route[], level: number) => {
    const match = pages.find(page => page.pages?.some(contains));
    if (!match?.pages) return;
    open[level] = match.name;
    walk(match.pages, level + 1);
  };

  walk(
    routes.flatMap(section => section.pages),
    1
  );
  return open;
};

const NavbarVerticalCollapseProvider = ({ children }: PropsWithChildren) => {
  const { pathname } = useLocation();
  // Lazy: the route at mount decides, and `CollapsableNavItem` keeps it in
  // sync from there.
  const [openItems, setOpenItems] = useState(() => openItemsForPath(pathname));
  /**
   * A fresh object here re-renders every `NavItem`/`CollapsableNavItem` each
   * time `NavbarVertical` renders. That is ~460ms of blocked main thread on a
   * sitemap this size, which ate the sidenav's 200ms width transition whole.
   */
  const value = useMemo(() => ({ openItems, setOpenItems }), [openItems]);
  return (
    <NavbarVerticalCollapseContext value={value}>
      {children}
    </NavbarVerticalCollapseContext>
  );
};

export const useNavbarVerticalCollapse = () =>
  use(NavbarVerticalCollapseContext);

export default NavbarVerticalCollapseProvider;
