import { faFilter, faPlus, faSort } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from '@hummingbirdui/react';
import SearchBox from 'components/common/SearchBox';
import TodoListItem from 'components/modules/project-management/todo-list/TodoListItem';
import { ToDoItem } from 'data/project-management/todoListData';

/** `#tab-task` + `+TasksList` (mixins/crm/LeadDetails.pug) — the search bar is
 *  `+TodoSearchBar('justify-start')` from dashboard/project-management/ToDo.pug */
const DealDetailsTask = ({ tasks }: { tasks: ToDoItem[] }) => {
  return (
    <>
      <h2 className="mb-6">Tasks</h2>
      <Row className="items-center g-0 justify-start mb-4">
        <Col xs={12} sm="auto">
          <SearchBox
            placeholder="Search tasks"
            className="w-full mb-2 sm:mb-0 max-w-55"
          />
        </Col>
        <Col xs="auto" className="flex">
          <p className="mb-0 sm:ms-4 text-md text-subtle font-bold">
            <FontAwesomeIcon icon={faFilter} className="me-1 text-sm" />
            23 tasks
          </p>
          <button
            type="button"
            className="btn btn-link p-0 ms-4 text-md text-primary font-bold"
          >
            <FontAwesomeIcon icon={faSort} className="me-1 text-sm" />
            Sorting
          </button>
        </Col>
      </Row>
      {tasks.map((task, index) => (
        <TodoListItem
          key={task.task}
          todo={task}
          index={index}
          isLast={index === tasks.length - 1}
          defaultChecked={task.completed}
        />
      ))}
      <a href="#!" className="font-bold text-md mt-6">
        <FontAwesomeIcon icon={faPlus} className="me-1" />
        Add new task
      </a>
    </>
  );
};

export default DealDetailsTask;
