import { cn } from '@hummingbirdui/react';

export interface PhoenixNavItem {
  label: string;
  eventKey: string;
}

interface PhoenixNavProps {
  navItems: PhoenixNavItem[];
  activeKey: string;
  onSelect: (eventKey: string) => void;
  className?: string;
}

/**
 * Gold `ul.nav.nav-phoenix-pills` tab pills — `#contactListTabdiv` in
 * phoenix-tailwind `src/pug/apps/chat.pug`.
 */
const PhoenixNav = ({
  navItems,
  activeKey,
  onSelect,
  className
}: PhoenixNavProps) => {
  return (
    <ul
      className={cn('nav nav-phoenix-pills mb-8 sm:hidden xl:flex', className)}
      role="tablist"
    >
      {navItems.map(item => (
        <li className="nav-item" role="presentation" key={item.eventKey}>
          <a
            className={cn('nav-link cursor-pointer', {
              active: activeKey === item.eventKey
            })}
            role="tab"
            aria-selected={activeKey === item.eventKey}
            onClick={() => onSelect(item.eventKey)}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default PhoenixNav;
