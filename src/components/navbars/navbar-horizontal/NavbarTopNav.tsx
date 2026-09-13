import { capitalize } from 'helpers/utils';
import { cn } from '@hummingbirdui/react';
import { RouteItems, routes } from 'sitemap';
import TopNavMegaMenu from './TopNavMegaMenu';
import TopNavItem from './TopNavItem';
import useTopNavDropdown from './useTopNavDropdown';

/** `+navbarTopMenus` in phoenix-tailwind Mixins.pug */
const NavbarTopNav = ({ className }: { className?: string }) => {
  return (
    <ul
      className={cn('navbar-nav navbar-nav-top', className)}
      data-dropdown-on-hover=""
    >
      {routes.map(route => (
        <NavbarTopNavItem route={route} key={route.label} />
      ))}
    </ul>
  );
};

const NavbarTopNavItem = ({ route }: { route: RouteItems }) => {
  const Icon = route.icon;
  const { open, toggleProps, containerProps } =
    useTopNavDropdown<HTMLLIElement>();
  const label = route.horizontalNavLabel ?? route.label;

  return (
    <li className="nav-item dropdown" {...containerProps}>
      <a
        href="#!"
        role="button"
        aria-haspopup="true"
        className={cn('nav-link dropdown-toggle leading-none', { show: open })}
        {...toggleProps}
      >
        <Icon className="uil text-base me-2" size={16} fill="currentColor" />
        {capitalize(label)}
      </a>
      {route.megaMenu ? (
        <TopNavMegaMenu route={route} show={open} />
      ) : (
        <TopNavItem route={route} show={open} />
      )}
    </li>
  );
};

export default NavbarTopNav;
