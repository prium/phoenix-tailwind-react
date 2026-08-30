import { Fragment } from 'react';
import { Route, RouteItems } from 'sitemap';
import { capitalize } from 'helpers/utils';
import { Link, useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FeatherIcon from 'feather-icons-react';
import { UilAngleRight } from '@iconscout/react-unicons';
import { cn } from '@hummingbirdui/react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import useTopNavDropdown from './useTopNavDropdown';

interface MenuProps {
  show?: boolean;
}

/** `+TopNavItem` in phoenix-tailwind Mixins.pug */
const TopNavItem = ({ route, show }: { route: RouteItems } & MenuProps) => {
  return (
    <ul
      className={cn('dropdown-menu navbar-dropdown-caret', { show })}
      data-bs-popper={show ? 'none' : undefined}
    >
      {route.pages.map(page => (
        <Fragment key={page.name}>
          {page.pages ? (
            page.flat ? (
              page.pages.map(item => (
                <TopNavDropdownItem page={item} key={item.name} />
              ))
            ) : (
              <TopNavLooper page={page} />
            )
          ) : (
            <TopNavDropdownItem page={page} />
          )}
        </Fragment>
      ))}
    </ul>
  );
};

/** `+DropdownIcon` — gold always renders `span.me-2.uil` (empty when no icon) */
const DropdownIcon = ({ page }: { page: Route }) => {
  if (page.iconSet === 'font-awesome') {
    return (
      <FontAwesomeIcon icon={page.icon as IconProp} className="me-2 uil" />
    );
  }
  const icon = (page.icon as string | undefined) || page.topNavIcon;
  return icon ? (
    <FeatherIcon icon={icon} size={16} className="me-2 uil" />
  ) : (
    <span className="me-2 uil" />
  );
};

/** `+TopNavLooper` — nested dropdown (hover at ≥ lg unless `dropdownInside`) */
const TopNavLooper = ({ page }: { page: Route }) => {
  const { open, toggleProps, containerProps } =
    useTopNavDropdown<HTMLLIElement>(!page.dropdownInside);

  return (
    <li
      className={cn('dropdown', { 'dropdown-inside': page.dropdownInside })}
      {...containerProps}
    >
      <a
        href="#!"
        id={page.pathName ?? page.name}
        className={cn('dropdown-item dropdown-toggle', { show: open })}
        {...toggleProps}
      >
        <div className="dropdown-item-wrapper">
          <UilAngleRight
            className="uil text-base uil-angle-right leading-none dropdown-indicator-icon"
            size={16}
            fill="currentColor"
          />
          <span>
            <DropdownIcon page={page} />
            {capitalize(page.name)}
          </span>
        </div>
      </a>
      <ul
        className={cn('dropdown-menu', { show: open })}
        data-bs-popper={open ? 'none' : undefined}
      >
        {page.pages?.map(item => (
          <Fragment key={item.name}>
            {item.pages ? (
              <TopNavLooper page={item} />
            ) : (
              <TopNavDropdownItem page={item} />
            )}
          </Fragment>
        ))}
      </ul>
    </li>
  );
};

/** `+TopNavDropdownItem` / `+TopNavDropdownLink` */
const TopNavDropdownItem = ({ page }: { page: Route }) => {
  const { pathname } = useLocation();
  return (
    <li>
      <Link
        to={page.path || '#!'}
        target={page.isTargetBlank ? '_blank' : undefined}
        className={cn('dropdown-item', {
          'nav-link-disable': page.active === false,
          active: pathname === page.path
        })}
      >
        <div className="dropdown-item-wrapper">
          <DropdownIcon page={page} />
          {capitalize(page.name)}
        </div>
      </Link>
    </li>
  );
};

export default TopNavItem;
