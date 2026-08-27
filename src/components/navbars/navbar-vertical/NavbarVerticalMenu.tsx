import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { cn } from '@hummingbirdui/react';
import FeatherIcon from 'feather-icons-react';
import { Route } from 'sitemap';
import { capitalize } from 'helpers/utils';
import { NavLink, useLocation } from 'react-router';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { useNavbarVerticalCollapse } from './NavbarVerticalCollapseProvider';
import Badge from 'components/base/Badge';
import { useAppContext } from 'providers/AppProvider';

interface NavbarVerticalMenuProps {
  routes: Route[];
  level: number;
}

interface NavItemProps {
  route: Route;
  level: number;
}

const RouteBadges = ({
  route,
  className
}: {
  route: Route;
  className?: string;
}) => (
  <>
    {route.new && (
      <Badge variant="phoenix" color="warning" className={cn('ms-2', className)}>
        New
      </Badge>
    )}
    {route.isNext && (
      <Badge variant="phoenix" color="primary" className={cn('ms-2', className)}>
        Next
      </Badge>
    )}
  </>
);

const RouteIcon = ({ route }: { route: Route }) =>
  route.iconSet === 'font-awesome' ? (
    <FontAwesomeIcon icon={route.icon as IconProp} transform={{ size: 16 }} />
  ) : (
    <FeatherIcon icon={route.icon} size={16} />
  );

/** Leaf link — `a.nav-link(.label-1)` in NavbarVertical.pug */
const NavItem = ({ route, level }: NavItemProps) => {
  const {
    config: { isNavbarVerticalCollapsed }
  } = useAppContext();
  const { setOpenItems, openItems } = useNavbarVerticalCollapse();

  return (
    <NavLink
      to={route.path ? route.path : '#!'}
      target={route.isTargetBlank ? '_blank' : undefined}
      className={({ isActive }) =>
        cn('nav-link', {
          'label-1': level === 1,
          active: isActive && route.path !== '#!'
        })
      }
      onClick={() => level === 1 && setOpenItems(openItems.map(() => ''))}
    >
      <div className={cn('flex items-center', { 'text-soft': !route.active })}>
        {route.icon ? (
          <>
            <span
              className={cn('nav-link-icon', {
                new: route.new || route.hasNew
              })}
            >
              <RouteIcon route={route} />
            </span>
            <span className="nav-link-text-wrapper">
              <span className="nav-link-text">{capitalize(route.name)}</span>
              {!isNavbarVerticalCollapsed && (
                <RouteBadges route={route} className="nav-link-badge" />
              )}
            </span>
          </>
        ) : (
          <>
            <span className="nav-link-text">{capitalize(route.name)}</span>
            <RouteBadges route={route} />
          </>
        )}
      </div>
    </NavLink>
  );
};

/** Parent link + `ul.nav.collapse.parent` — PageLooper in NavbarVertical.pug */
const CollapsableNavItem = ({ route, level }: NavItemProps) => {
  const { pathname } = useLocation();
  const { setOpenItems, openItems } = useNavbarVerticalCollapse();
  const {
    config: { isNavbarVerticalCollapsed }
  } = useAppContext();

  const isOpen = openItems[level] === route.name;

  const openCollapse = (childrens: Route[] = []) => {
    const checkLink = (children: Route): boolean => {
      if (`${children.path}` === pathname) {
        return true;
      }
      return !!children.pages && children.pages.some(checkLink);
    };
    return childrens.some(checkLink);
  };

  const updateOpenItems = (name: string) => {
    const updatedOpenItems = [...openItems];
    updatedOpenItems[level] = name;
    updatedOpenItems.forEach((_item, index) => {
      if (index > level) {
        updatedOpenItems[index] = '';
      }
    });
    setOpenItems(updatedOpenItems);
  };

  useEffect(() => {
    if (openCollapse(route.pages)) {
      updateOpenItems(route.name);
    }
  }, []);

  const toggle = () => updateOpenItems(isOpen ? '' : route.name);

  return (
    <>
      <a
        role="button"
        tabIndex={0}
        onClick={toggle}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggle();
          }
        }}
        className={cn('nav-link dropdown-indicator cursor-pointer', {
          'label-1': level === 1,
          collapsed: !isOpen,
          'text-soft': !route.active
        })}
        aria-expanded={isOpen}
        aria-controls={`nv-${route.name}`}
      >
        <div className="flex items-center">
          <div className="dropdown-indicator-icon-wrapper">
            <FontAwesomeIcon
              icon={faCaretRight}
              className={cn('dropdown-indicator-icon', {
                'text-soft': !route.active
              })}
            />
          </div>
          {level === 1 && (
            <span
              className={cn('nav-link-icon', {
                new: route.new || route.hasNew
              })}
            >
              <RouteIcon route={route} />
            </span>
          )}
          <span className={cn('nav-link-text', { new: route.hasNew })}>
            {capitalize(route.name)}
            {(!isNavbarVerticalCollapsed || level !== 1) && (
              <RouteBadges route={route} />
            )}
          </span>
        </div>
      </a>
      <div className={cn('parent-wrapper', { 'label-1': level === 1 })}>
        {/*
          Rendered even when closed: in collapsed-navbar mode the CSS shows
          `.parent-wrapper.label-1 > .parent` as a hover fly-out.
        */}
        <ul
          id={`nv-${route.name}`}
          className={cn('nav collapse parent', { show: isOpen })}
        >
          {level === 1 && (
            <li className="collapsed-nav-item-title hidden">
              {capitalize(route.name)}
              {isNavbarVerticalCollapsed && <RouteBadges route={route} />}
            </li>
          )}
          <NavbarVerticalMenu routes={route.pages || []} level={level + 1} />
        </ul>
      </div>
    </>
  );
};

const NavbarVerticalMenu = ({ routes, level }: NavbarVerticalMenuProps) => {
  return (
    <>
      {routes.map(route => {
        const item = route.pages ? (
          <CollapsableNavItem route={route} level={level} />
        ) : (
          <NavItem route={route} level={level} />
        );
        return level === 1 ? (
          <div className="nav-item-wrapper" key={route.name}>
            {item}
          </div>
        ) : (
          <li className="nav-item" key={route.name}>
            {item}
          </li>
        );
      })}
    </>
  );
};

export default NavbarVerticalMenu;
