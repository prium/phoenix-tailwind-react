import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonGroup, Dropdown } from '@hummingbirdui/react';
import Button from 'components/base/Button';

export interface FilterMenu {
  label: string;
  items: {
    onClick?: () => void;
    label: string;
  }[];
}

interface FilterButtonGroupProps {
  menus: FilterMenu[];
}

/** `.btn-group.static` filter dropdowns (e.g. apps/e-commerce/admin/orders.pug) */
const FilterButtonGroup = ({ menus }: FilterButtonGroupProps) => {
  return (
    <ButtonGroup className="static">
      {menus.map(menu => (
        <ButtonGroup className="static whitespace-nowrap" key={menu.label}>
          <Dropdown>
            <Dropdown.Trigger asChild>
              <Button
                variant="phoenix"
                color="secondary"
                className="px-12 shrink-0 dropdown-caret-none"
              >
                {menu.label}
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className="ms-2"
                  transform="down-2"
                />
              </Button>
            </Dropdown.Trigger>
            <Dropdown.Content align="end">
              {menu.items.map((item, subIndex) => (
                <Dropdown.Item key={subIndex} onClick={item.onClick}>
                  {item.label}
                </Dropdown.Item>
              ))}
            </Dropdown.Content>
          </Dropdown>
        </ButtonGroup>
      ))}
      <Button variant="phoenix" color="secondary" className="px-12 shrink-0">
        More filters
      </Button>
    </ButtonGroup>
  );
};

export default FilterButtonGroup;
