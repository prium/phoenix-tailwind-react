import {
  faCalendarXmark,
  faCheckSquare,
  faCircle,
  faEllipsisH,
  faPaperclip
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Dropdown, cn } from '@hummingbirdui/react';
import Avatar from 'components/base/Avatar';
import { KanbanBoardItem, KanbanBoardTask } from 'data/kanban';
import KanbanTaskDetailsModal from './KanbanTaskDetailsModal';
import KanbanDropdownItems, { KanbanDropdownItem } from './KanbanDropdownItems';
import { useState } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface KanbanListItemCardProps {
  task: KanbanBoardTask;
  list: KanbanBoardItem;
  className?: string;
  columnId?: number;
}

const actions: KanbanDropdownItem[] = [
  {
    id: 1,
    label: 'Move',
    isNested: true
  },
  {
    id: 2,
    label: 'Duplicate'
  },
  {
    id: 3,
    label: 'Jump to top'
  },
  {
    id: 4,
    label: 'Jump to bottom'
  },
  {
    id: 5,
    hr: true
  },
  {
    id: 6,
    label: 'Print/Download'
  },
  {
    id: 7,
    label: 'Share',
    isNested: true
  },
  {
    id: 8,
    hr: true
  },
  {
    id: 9,
    label: 'Move to archive',
    isNested: true
  },
  {
    id: 10,
    label: 'Delete',
    className: 'text-danger'
  }
];

/** `.card.sortable-item` of apps/kanban/kanban.pug */
const KanbanListItemCard = ({
  task,
  list,
  className,
  columnId
}: KanbanListItemCardProps) => {
  const [openModal, setOpenModal] = useState(false);

  const {
    setNodeRef,
    listeners,
    attributes,
    isDragging,
    transform,
    transition
  } = useSortable({
    id: task.id,
    data: {
      type: 'task',
      item: task,
      columnId
    }
  });

  const styles = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0 : 1,
    cursor: isDragging ? 'grabbing' : 'pointer'
  };

  return (
    <div ref={setNodeRef} style={styles} {...attributes} {...listeners}>
      <Card
        className={cn(className, 'sortable-item hover-actions-trigger', {
          'bg-soft': isDragging
        })}
      >
        <Card.Body className="py-4 px-4">
          {task.coverImage && (
            <div className="relative mb-2 overflow-hidden rounded-md h-50 w-full">
              <div
                className="bg-holder"
                style={{ backgroundImage: `url(${task.coverImage})` }}
              />
            </div>
          )}
          <div className="kanban-status mb-1 relative leading-none">
            <FontAwesomeIcon
              icon={faCircle}
              transform="shrink-1 down-3"
              className={cn(
                'me-2 inline-block min-w-4 text-base',
                task.status.circleClass
              )}
            />
            <span
              className={cn(
                task.status.badgeClass,
                'badge items-center text-sm leading-none'
              )}
            >
              <span>{task.status.label}</span>
              <FontAwesomeIcon
                icon={task.status.icon}
                transform="up-2"
                className="size-[7.8px]! ms-1"
              />
            </span>
            <Dropdown>
              <Dropdown.Trigger asChild>
                <button
                  className="btn btn-sm btn-phoenix-default kanban-item-dropdown-btn hover-actions"
                  type="button"
                >
                  <FontAwesomeIcon
                    icon={faEllipsisH}
                    rotation={90}
                    transform="shrink-2"
                  />
                </button>
              </Dropdown.Trigger>
              <Dropdown.Content align="end" className="py-2 w-60">
                <KanbanDropdownItems items={actions} />
              </Dropdown.Content>
            </Dropdown>
          </div>
          <p
            className="mb-0 stretched-link text-base"
            onClick={() => setOpenModal(true)}
          >
            {task.title}
          </p>
          <div className="flex mt-2 items-center">
            {task.footerDate && (
              <p className="mb-0 text-subtle/85 text-md leading-none me-4 whitespace-nowrap">
                <FontAwesomeIcon
                  icon={faCalendarXmark}
                  className="min-w-4 text-md me-2 inline-block"
                />
                {task.footerDate}
              </p>
            )}
            {task.attachments && (
              <p className="mb-0 text-subtle/85 text-md leading-none">
                <FontAwesomeIcon
                  icon={faPaperclip}
                  className="min-w-4 text-md me-2 inline-block"
                />
                {task.attachments}
              </p>
            )}
            {task.footerChecked && (
              <p className="mb-0 text-subtle/85 text-md leading-none">
                <FontAwesomeIcon
                  icon={faCheckSquare}
                  className="min-w-4 text-md me-2 inline-block"
                />
                {task.footerChecked}
              </p>
            )}
            {task.users && (
              <div className="avatar-group ms-auto">
                {task.users.map((user, index) =>
                  user.more ? (
                    <div
                      className="avatar avatar-xs border border-subtle-subtle"
                      key={index}
                    >
                      <div
                        className={cn(
                          'avatar-name rounded-full',
                          user.contentClass
                        )}
                      >
                        <span>{user.more}</span>
                      </div>
                    </div>
                  ) : (
                    <Avatar
                      size="s"
                      src={user.img}
                      className="border border-subtle-subtle"
                      key={index}
                    />
                  )
                )}
              </div>
            )}
          </div>
        </Card.Body>
      </Card>

      <KanbanTaskDetailsModal
        show={openModal}
        handleClose={() => setOpenModal(false)}
        task={task}
        list={list}
      />
    </div>
  );
};

export default KanbanListItemCard;
