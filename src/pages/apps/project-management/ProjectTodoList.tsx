import { faFilter, faPlus, faSort } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from '@hummingbirdui/react';
import SearchBox from 'components/common/SearchBox';
import TodoItemDetailsOffcanvas from 'components/modules/project-management/todo-list/TodoItemDetailsOffcanvas';
import TodoListItem from 'components/modules/project-management/todo-list/TodoListItem';
import { ToDoItem, todoList } from 'data/project-management/todoListData';
import { useState } from 'react';

/** apps/project-management/todo-list.pug */
const ProjectTodoList = () => {
  const [selected, setSelected] = useState<{
    item: ToDoItem;
    index: number;
  } | null>(null);
  const items = todoList.slice(0, 9);

  return (
    <div className="mb-16">
      <h2 className="mb-6">
        Todo list<span className="text-subtle font-normal">(23)</span>
      </h2>
      <Row className="items-center g-4 mb-4">
        <Col sm="auto">
          <SearchBox placeholder="Search tasks" />
        </Col>
        <Col sm="auto">
          <div className="flex">
            <a
              href="#!"
              className="btn btn-link p-0 sm:ms-4 text-md text-subtle font-bold"
            >
              <FontAwesomeIcon
                icon={faFilter}
                className="me-1 fw-extra-bold text-sm"
              />
              23 tasks
            </a>
            <a
              href="#!"
              className="btn btn-link p-0 ms-4 text-md text-subtle font-bold"
            >
              <FontAwesomeIcon
                icon={faSort}
                className="me-1 fw-extra-bold text-sm"
              />
              Sorting
            </a>
          </div>
        </Col>
      </Row>
      <div className="mb-6 todo-list">
        {items.map((todo, index) => (
          <TodoListItem
            key={todo.task}
            todo={todo}
            index={index}
            isLast={index === todoList.length - 1}
            layout="page"
            onClick={item => setSelected({ item, index })}
          />
        ))}
      </div>
      <a href="#!" className="font-bold text-md mt-6">
        <FontAwesomeIcon icon={faPlus} className="me-1" />
        Add new task
      </a>
      <TodoItemDetailsOffcanvas
        handleClose={() => setSelected(null)}
        item={selected?.item ?? null}
        index={selected?.index}
      />
    </div>
  );
};

export default ProjectTodoList;
