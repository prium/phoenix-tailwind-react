import { faPencil, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '@hummingbirdui/react';
import { SubTaskItem, subTasks } from 'data/project-management/todoListData';

interface SubTaskProps {
  task: SubTaskItem;
  id: string;
  className?: string;
}

/** one row of `+SubTasks` in mixins/project-management/ToDoList.pug */
const SubTask = ({ task, id, className }: SubTaskProps) => {
  return (
    <div
      className={cn(
        'flex flex-between-center hover-actions-trigger py-4 border-t',
        className
      )}
    >
      <div className="form-check mb-1 md:mb-0 flex items-center min-h-auto">
        <input
          className="subtask-checkbox form-check-input form-check-line-through mt-0 me-4"
          type="checkbox"
          id={id}
        />
        <label
          className="form-check-label mb-0 text-base leading-none"
          htmlFor={id}
        >
          {task.task}
        </label>
      </div>
      <div className="hover-actions end-0">
        <button
          type="button"
          className="btn btn-sm text-sm text-subtle px-0 me-4"
        >
          <FontAwesomeIcon icon={faPencil} />
        </button>
        <button type="button" className="btn btn-sm text-subtle px-0">
          <FontAwesomeIcon icon={faXmark} className="text-base" />
        </button>
      </div>
    </div>
  );
};

/** `+SubTasks(index)` — heading, rows and the "Add subtask" link */
export const SubTasks = ({ index = 0 }: { index?: number }) => (
  <>
    <h4 className="mb-4">Subtasks</h4>
    {subTasks.map((task, i) => (
      <SubTask
        key={task.task}
        task={task}
        id={`subtask${index}${i + 1}`}
        className={i === subTasks.length - 1 ? 'border-b mb-4' : undefined}
      />
    ))}
    <a href="#!" className="font-bold text-md">
      <FontAwesomeIcon icon={faPlus} className="me-1" />
      Add subtask
    </a>
  </>
);

export default SubTask;
