import { cn, Input } from '@hummingbirdui/react';
import { KanbanBoardItem, kanbanStatuses } from 'data/kanban';
import React, { useState } from 'react';
import KanbanListItemCard from './KanbanListItemCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import KanbanListHeader from './KanbanListHeader';
import { v4 as uuid } from 'uuid';
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy
} from '@dnd-kit/sortable';
import { useKanbanContext } from 'providers/KanbanProvider';

interface KanbanListProps {
  list: KanbanBoardItem;
  columnId?: number;
}

/** `.kanban-column` of apps/kanban/kanban.pug */
const KanbanList = ({ list, columnId }: KanbanListProps) => {
  const { kanbanDispatch } = useKanbanContext();
  const [collapsed, setCollapsed] = useState(!!list.isCollapsed);
  const [taskTitle, setTaskTitle] = useState('');
  const { setNodeRef, listeners, attributes } = useSortable({
    id: list.id,
    data: {
      type: 'column'
    }
  });
  const handleNewTaskAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const randomNumber = parseInt(uuid().replace(/-/g, '').slice(0, 12), 16);
    const newTask = {
      id: randomNumber,
      status: kanbanStatuses.undefined,
      title: taskTitle,
      attachments: 1,
      priority: 'Low' as const
    };
    if (taskTitle && columnId) {
      kanbanDispatch({
        type: 'ADD_NEW_TASK',
        payload: { newTask, columnId }
      });
    }
    setTaskTitle('');
  };

  return (
    <div
      className={cn('kanban-column overflow-x-hidden scrollbar', {
        collapsed
      })}
    >
      <KanbanListHeader
        list={list}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />
      <div
        className="kanban-items-container"
        ref={setNodeRef}
        {...listeners}
        {...attributes}
      >
        <SortableContext
          items={list.tasks.map(item => item.id)}
          strategy={verticalListSortingStrategy}
        >
          {list.tasks.map(task => (
            <div
              className="sortable-item-wrapper border-b border-subtle px-2 py-2"
              key={task.id}
            >
              <KanbanListItemCard list={list} task={task} columnId={columnId} />
            </div>
          ))}
        </SortableContext>
      </div>
      <form onSubmit={handleNewTaskAdd} className="py-4 px-6 kanban-add-task">
        <button className="btn bg-sm bg-highlight me-2 px-0" type="submit">
          <FontAwesomeIcon
            icon={faPlus}
            transform="grow-4 down-1"
            className="text-white dark:text-gray-400"
          />
        </button>
        <Input
          className="search-input rounded-lg px-4"
          placeholder="Add new task"
          value={taskTitle}
          onChange={e => setTaskTitle(e.target.value)}
        />
      </form>
    </div>
  );
};

export default KanbanList;
