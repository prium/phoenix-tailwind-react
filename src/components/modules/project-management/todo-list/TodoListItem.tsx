import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '@hummingbirdui/react';
import { ChangeEvent, MouseEvent, useState } from 'react';
import { ToDoItem } from 'data/project-management/todoListData';
import {
  faEdit,
  faPaperclip,
  faTasks,
  faTrash
} from '@fortawesome/free-solid-svg-icons';

interface TodoListItemProps {
  todo: ToDoItem;
  index?: number;
  isLast?: boolean;
  className?: string;
  /** legacy props kept so board/card view modals keep compiling */
  labelClassName?: string;
  halfLayoutBreakpoints?: string[];
  fullLayoutBreakpoints?: string[];
  /** `dashboard` = `+DashboardTodoListItem` (ToDo.pug), `page` = `+TodoPageListItem` (ToDoList.pug) */
  layout?: 'dashboard' | 'page';
  onClick?: (item: ToDoItem) => void;
}

const stop = (e: MouseEvent) => e.stopPropagation();

const TodoListItem = ({
  todo,
  index = 0,
  isLast,
  className,
  layout = 'page',
  onClick
}: TodoListItemProps) => {
  const [selected, setSelected] = useState(false);
  const handleSelectionChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSelected(e.target.checked);
  const borderClass = isLast ? 'border-t border-b' : 'border-t';

  if (layout === 'dashboard') {
    return (
      <div
        className={cn(
          'flex hover-actions-trigger py-4 border-subtle',
          borderClass,
          className
        )}
      >
        <input
          className="form-check-input form-check-input-todolist shrink-0 my-1 me-2"
          type="checkbox"
          id={`checkbox-todo-${index}`}
          checked={selected}
          onChange={handleSelectionChange}
          onClick={stop}
        />
        <div
          className="row my-auto justify-between md:items-center btn-reveal-trigger border-subtle gx-0 flex-1 cursor-pointer"
          onClick={() => onClick?.(todo)}
        >
          <div className="col-12 mt-0 md:col-auto xl:col-12 2xl:col-auto">
            <div className="mb-1 md:mb-0 flex items-center">
              <label className="form-check-label mb-1 md:mb-0 xl:mb-1 2xl:mb-0 text-base me-2 line-clamp-1 text-default leading-none cursor-pointer">
                {todo.task}
              </label>
              {todo.badge && (
                <span
                  className={`${todo.badge.className} badge ms-auto text-sm`}
                >
                  {todo.badge.label}
                </span>
              )}
            </div>
          </div>
          <div className="col-12 md:col-auto xl:col-12 2xl:col-auto mt-0">
            <div className="flex items-center">
              {todo.attachment && (
                <a
                  href="#!"
                  className="text-subtle font-bold text-sm me-2 leading-none"
                >
                  <FontAwesomeIcon icon={faPaperclip} className="me-1" />
                  {todo.attachment}
                </a>
              )}
              {todo.listitems && (
                <a
                  href="#!"
                  className="text-warning font-bold text-sm me-2 leading-none"
                >
                  <FontAwesomeIcon icon={faTasks} className="me-1" />
                  {todo.listitems}
                </a>
              )}
              <p className="text-subtle text-sm md:mb-0 me-2 md:me-4 xl:me-2 2xl:me-4 leading-none mb-0">
                {todo.date}
              </p>
              <div className="hover-md-hide hover-xl-show hover-xxl-hide">
                <p className="text-subtle text-sm font-bold md:mb-0 mb-0 md:ps-4 xl:ps-0 2xl:ps-4 md:border-s xl:border-0 2xl:border-s leading-none border-start-xxl">
                  {todo.time}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block xl:hidden 2xl:block top-[23%] end-0 absolute">
          <div className="hover-actions end-0">
            <button
              type="button"
              className="btn btn-phoenix-secondary btn-square btn-sm text-default px-0 me-1"
            >
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button
              type="button"
              className="btn btn-phoenix-secondary btn-square btn-sm text-danger px-0"
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        borderClass,
        'row justify-between md:items-center hover-actions-trigger btn-reveal-trigger border-subtle py-4 gx-0 cursor-pointer',
        className
      )}
      onClick={() => onClick?.(todo)}
    >
      <div className="col-12 md:col-auto flex-1">
        <div>
          <div className="form-check mb-0">
            <input
              type="checkbox"
              id={`checkbox-todo-${index}`}
              className="form-check-input shrink-0 form-check-line-through mt-0 me-2"
              checked={selected}
              onChange={handleSelectionChange}
              onClick={stop}
            />
            <label className="form-check-label relative top-0.25 text-base me-2 line-clamp-1 grow md:grow-0 cursor-pointer">
              {todo.task}
            </label>
            {todo.badge && (
              <span className={`${todo.badge.className} badge text-sm`}>
                {todo.badge.label}
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="col-12 md:col-auto">
        <div className="flex ms-6 items-center">
          {todo.attachment && (
            <button
              type="button"
              className="btn btn-link p-0 text-subtle text-sm me-2"
            >
              <FontAwesomeIcon icon={faPaperclip} className="me-1" />
              {todo.attachment}
            </button>
          )}
          {todo.listitems && (
            <button
              type="button"
              className="btn btn-link p-0 text-warning text-sm me-2"
            >
              <FontAwesomeIcon icon={faTasks} className="me-1" />
              {todo.listitems}
            </button>
          )}
          <p className="text-subtle text-sm md:mb-0 me-2 md:me-4 leading-none mb-0">
            {todo.date}
          </p>
          <div className="hidden md:block top-[23%] end-0 absolute">
            <div className="hover-actions end-0">
              <button
                type="button"
                className="btn btn-phoenix-secondary btn-square h-8 w-8 me-1 text-sm text-default px-0"
                onClick={stop}
              >
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <button
                type="button"
                className="btn btn-phoenix-secondary btn-square h-8 w-8 text-sm text-danger px-0"
                onClick={stop}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
          <div className="hover-md-hide hover-lg-show hover-xl-hide">
            <p className="text-subtle text-sm md:ps-4 leading-none md:border-s font-bold md:mb-0 mb-0">
              {todo.time}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoListItem;
