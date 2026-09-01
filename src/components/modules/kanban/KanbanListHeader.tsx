import { Dispatch, SetStateAction } from 'react';
import {
  UilArrowFromRight,
  UilLeftArrowToLeft
} from '@iconscout/react-unicons';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown, cn } from '@hummingbirdui/react';
import { KanbanBoardItem } from 'data/kanban';
import KanbanDropdownItems, { KanbanDropdownItem } from './KanbanDropdownItems';

interface KanbanListHeaderProps {
  list: KanbanBoardItem;
  collapsed: boolean;
  setCollapsed: Dispatch<SetStateAction<boolean>>;
}

const kanbanHeaderActions: KanbanDropdownItem[] = [
  {
    id: 1,
    label: 'Sort tasks',
    isNested: true
  },
  {
    id: 2,
    label: 'Sort all tasks'
  },
  {
    id: 3,
    label: 'Move all tasks',
    isNested: true
  },
  {
    id: 4,
    label: 'Remove all tasks'
  },
  {
    id: 5,
    hr: true
  },
  {
    id: 6,
    label: 'Import'
  },
  {
    id: 7,
    label: 'Export',
    isNested: true
  },
  {
    id: 8,
    hr: true
  },
  {
    id: 9,
    label: 'Move column',
    isNested: true
  },
  {
    id: 10,
    label: 'Duplicate column'
  },
  {
    id: 11,
    label: 'Delete column'
  },
  {
    id: 12,
    label: 'Archive column'
  },
  {
    id: 13,
    hr: true
  },
  {
    id: 14,
    label: 'Edit title & description'
  },
  {
    id: 15,
    label: 'Edit colour',
    isNested: true
  }
];

/** `.kanban-column-header` of apps/kanban/kanban.pug */
const KanbanListHeader = ({
  list,
  collapsed,
  setCollapsed
}: KanbanListHeaderProps) => {
  return (
    <div className="kanban-column-header px-6 hover-actions-trigger">
      <div
        className={cn('flex items-center border-b-3 py-4', list.borderClass)}
      >
        <h5 className="mb-0 kanban-column-title">
          {list.title}
          <span className="kanban-title-badge">{list.tasks.length}</span>
        </h5>
        <div className="hover-actions-trigger">
          <Dropdown>
            <Dropdown.Trigger asChild>
              <button
                className="btn btn-sm btn-phoenix-default kanban-header-dropdown-btn hover-actions"
                type="button"
              >
                <FontAwesomeIcon icon={faEllipsisH} />
              </button>
            </Dropdown.Trigger>
            <Dropdown.Content align="end" className="py-2 w-60">
              <KanbanDropdownItems items={kanbanHeaderActions} />
            </Dropdown.Content>
          </Dropdown>
        </div>
        {/* the kanban CSS shows one of the two depending on `.collapsed` */}
        <span
          className="uil uil-left-arrow-to-left text-base ms-auto kanban-collapse-icon"
          onClick={() => setCollapsed(!collapsed)}
        >
          <UilLeftArrowToLeft fill="currentColor" size={16} />
        </span>
        <span
          className="uil uil-arrow-from-right text-base ms-auto kanban-collapse-icon"
          onClick={() => setCollapsed(!collapsed)}
        >
          <UilArrowFromRight fill="currentColor" size={16} />
        </span>
      </div>
    </div>
  );
};

export default KanbanListHeader;
