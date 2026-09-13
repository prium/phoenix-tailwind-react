import { Nav, cn } from '@hummingbirdui/react';
import { useState } from 'react';

export interface FilterTabItem {
  label: string;
  value: string;
  onClick?: () => void;
  count: number;
}

interface FilterTabProps {
  tabItems: FilterTabItem[];
  className?: string;
  /** Extra classes for each `a.nav-link` (e.g. `px-2 py-1` in project-management). */
  navLinkClassName?: string;
}

/** `ul.nav.nav-links` filter tabs (e.g. apps/e-commerce/admin/customers.pug) */
const FilterTab = ({
  tabItems,
  className,
  navLinkClassName
}: FilterTabProps) => {
  const [activeItem, setActiveItem] = useState('all');

  const handleClick = (item: FilterTabItem) => {
    setActiveItem(item.value);
    item.onClick?.();
  };

  return (
    <Nav className={cn('nav-links -mx-4', className)}>
      {tabItems.map(item => (
        <Nav.Item key={item.label}>
          <Nav.Link
            href="#!"
            onClick={e => {
              e.preventDefault();
              handleClick(item);
            }}
            active={activeItem === item.value}
            className={navLinkClassName}
          >
            <span>{item.label} </span>
            <span className="text-subtle font-semibold">({item.count})</span>
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default FilterTab;
