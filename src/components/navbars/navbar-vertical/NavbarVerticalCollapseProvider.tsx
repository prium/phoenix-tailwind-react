import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  use,
  useMemo,
  useState
} from 'react';

interface NavbarVerticalCollapseContextInterface {
  openItems: string[];
  setOpenItems: Dispatch<SetStateAction<string[]>>;
}

const NavbarVerticalCollapseContext = createContext(
  {} as NavbarVerticalCollapseContextInterface
);

const NavbarVerticalCollapseProvider = ({ children }: PropsWithChildren) => {
  const [openItems, setOpenItems] = useState(['']);
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
