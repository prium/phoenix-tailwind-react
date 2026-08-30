import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Col, Row } from '@hummingbirdui/react';
import SearchBox from 'components/common/SearchBox';
import { useState } from 'react';
import TodoListItem from './TodoListItem';
import { ToDoItem, todoList } from 'data/project-management/todoListData';
import TodoItemDetailsModal from './TodoItemDetailsModal';
import { faFilter, faPlus, faSort } from '@fortawesome/free-solid-svg-icons';

/** `+CardToDoListManagement` in mixins/dashboard/project-management/ToDo.pug */
const TodoList = () => {
  const [selectedItem, setSelectedItem] = useState<ToDoItem | null>(null);
  return (
    <>
      <Card className="todo-list h-full">
        <Card.Header className="border-b-0 pb-0">
          <Row className="justify-between items-center mb-6">
            <Col xs="auto">
              <h3 className="mb-1 text-emphasis">To do</h3>
              <p className="mb-2 md:mb-0 lg:mb-2 text-base text-subtle">
                Task assigned to me
              </p>
            </Col>
            <Col xs="auto" className="w-full md:w-auto">
              <Row className="items-center g-0 justify-between">
                <Col xs={12} sm="auto">
                  <SearchBox
                    placeholder="Search tasks"
                    className="w-full mb-2 sm:mb-0 max-w-55"
                  />
                </Col>
                <Col xs="auto" className="flex">
                  <p className="mb-0 sm:ms-4 text-md text-subtle font-bold">
                    <FontAwesomeIcon
                      icon={faFilter}
                      className="me-1 fw-extra-bold text-sm"
                    />
                    23 tasks
                  </p>
                  <button
                    type="button"
                    className="btn btn-link p-0 ms-4 text-md text-primary font-bold"
                  >
                    <FontAwesomeIcon
                      icon={faSort}
                      className="me-1 fw-extra-bold text-sm"
                    />
                    Sorting
                  </button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body className="py-0 scrollbar xl:h-67.5">
          {todoList.map((todo, index) => (
            <TodoListItem
              key={todo.task}
              todo={todo}
              index={index}
              isLast={index === todoList.length - 1}
              layout="dashboard"
              onClick={setSelectedItem}
            />
          ))}
        </Card.Body>
        <Card.Footer className="border-0">
          <a href="#!" className="font-bold text-md mt-6">
            <FontAwesomeIcon icon={faPlus} className="me-1" />
            Add new task
          </a>
        </Card.Footer>
      </Card>

      <TodoItemDetailsModal
        handleClose={() => setSelectedItem(null)}
        item={selectedItem}
      />
    </>
  );
};

export default TodoList;
