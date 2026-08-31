import { faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TodoSearchBar from '../project-management/board-view/TodoSearchBar';
import { leadTasks } from 'data/crm/leadsData';
import { ToDoItem } from 'data/project-management/todoListData';

/**
 * `+TodoListItem` as rendered in apps/crm/lead-details.html — this variant
 * (py-5, lg: breakpoints, leading-none checkbox row) differs from the
 * project-management todo-list one, so the gold markup is kept verbatim here.
 */
const LeadTaskItem = ({ todo, index }: { todo: ToDoItem; index: number }) => (
  <div className="border-t row justify-between md:items-center hover-actions-trigger btn-reveal-trigger border-subtle py-5 gx-0">
    <div className="col-12 lg:col-auto flex-1">
      <div>
        <div className="form-check mb-1 md:mb-0 flex items-center leading-none">
          <input
            className="form-check-input shrink-0 form-check-line-through mt-0 me-2"
            type="checkbox"
            id={`checkbox-todo-${index}`}
            defaultChecked={todo.completed}
          />
          <label
            className="form-check-label mb-0 text-base me-2 line-clamp-1 flex-1"
            htmlFor={`checkbox-todo-${index}`}
          >
            {todo.task}
          </label>
        </div>
      </div>
    </div>
    <div className="col-12 lg:col-auto mt-1 lg:mt-0">
      <div className="flex ms-6 leading-none items-center">
        <p className="text-subtle text-sm md:mb-0 me-2 lg:me-4 mb-0">
          {todo.date}
        </p>
        <div className="hidden lg:flex end-0 absolute top-[23%]">
          <div className="hover-actions end-0">
            <button
              type="button"
              className="btn btn-square btn-sm btn-phoenix-secondary text-sm text-default px-0 me-1 shrink-0!"
            >
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button
              type="button"
              className="btn btn-square btn-sm btn-phoenix-secondary text-sm text-danger px-0 shrink-0!"
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
        <div className="hover-lg-hide">
          <p className="text-subtle text-sm lg:ps-4 lg:border-s font-bold md:mb-0 mb-0">
            {todo.time}
          </p>
        </div>
      </div>
    </div>
  </div>
);

/** `+TasksList` in mixins/crm/LeadDetails.pug */
const Tasks = () => {
  return (
    <div>
      <h2 className="mb-6">Tasks</h2>
      <TodoSearchBar justifyClassName="justify-start" className="mb-4" />
      {leadTasks.map((todo, index) => (
        <LeadTaskItem key={todo.task} todo={todo} index={index} />
      ))}
      <a href="#!" className="font-bold text-md mt-6">
        <FontAwesomeIcon icon={faPlus} className="me-1" />
        Add new task
      </a>
    </div>
  );
};

export default Tasks;
