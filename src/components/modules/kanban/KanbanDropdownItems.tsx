import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown, cn } from '@hummingbirdui/react';
import { Fragment } from 'react';

export interface KanbanDropdownItem {
  id: number;
  label?: string;
  isNested?: boolean;
  className?: string;
  hr?: boolean;
}

/**
 * The action list the gold's kanban column / card dropdowns share
 * (`a.dropdown-item.flex.flex-between-center` rows with `hr.my-2` separators).
 */
const KanbanDropdownItems = ({ items }: { items: KanbanDropdownItem[] }) => {
  return (
    <>
      {items.map(item => (
        <Fragment key={item.id}>
          {item.hr ? (
            <hr className="my-2" />
          ) : (
            <Dropdown.Item asChild>
              <a
                className={cn('flex flex-between-center', item.className)}
                href="#!"
              >
                <span>{item.label}</span>
                {item.isNested && (
                  <FontAwesomeIcon icon={faAngleRight} className="text-sm" />
                )}
              </a>
            </Dropdown.Item>
          )}
        </Fragment>
      ))}
    </>
  );
};

export default KanbanDropdownItems;
