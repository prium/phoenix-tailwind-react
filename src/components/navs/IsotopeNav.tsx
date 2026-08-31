import { useState } from 'react';
import { cn } from '@hummingbirdui/react';

export interface IsotopeNavItem {
  eventKey: string | number;
  label: string;
}

interface IsotopeNavProps {
  navItems: IsotopeNavItem[];
  className?: string;
  defaultActiveKey?: string | number;
  onSelect?: (eventKey: string | null) => void;
}

/**
 * Gold isotope filter nav: `ul.nav > li.nav-item > a.isotope-nav.cursor-pointer(.active)`
 * (see phoenix-tailwind `[data-filter-nav]` markup — no `.nav-link` class).
 */
const IsotopeNav = ({
  navItems,
  className,
  defaultActiveKey,
  onSelect
}: IsotopeNavProps) => {
  const [activeKey, setActiveKey] = useState<string | number>(
    defaultActiveKey ?? navItems[0].eventKey
  );

  return (
    <ul className={cn('nav', className)}>
      {navItems.map((navItem: IsotopeNavItem) => (
        <li className="nav-item" key={navItem.eventKey}>
          <a
            className={cn('isotope-nav cursor-pointer', {
              active: activeKey === navItem.eventKey
            })}
            onClick={() => {
              setActiveKey(navItem.eventKey);
              onSelect?.(String(navItem.eventKey));
            }}
          >
            {navItem.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default IsotopeNav;
