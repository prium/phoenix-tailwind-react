import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import SearchBox from 'components/common/SearchBox';
import React, { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import TodoListItem from './TodoListItem';
import { ToDoItem, todoList } from 'data/project-management/todoListData';
import classNames from 'classnames';
import TodoItemDetailsModal from './TodoItemDetailsModal';
import { faFilter, faPlus, faSort } from '@fortawesome/free-solid-svg-icons';

const TodoList = () => {
  const [selectedItem, setSelectedItem] = useState<ToDoItem | null>(null);
  return (
    <>
      <Card className="h-full todo-list">
        <Card.Header className="border-b-0 pb-0">
          <Row className="justify-between items-center mb-6 gy-2">
            <Col xs="auto">
              <h3 className="text-emphasis">To do</h3>
              <p className="mb-0 text-subtle">Task assigned to me</p>
            </Col>
            <Col xs="auto" className="w-full md:w-auto">
              <div className="flex justify-between items-center flex-wrap gap-x-4 gap-y-4">
                <SearchBox
                  placeholder="Search tasks"
                  style={{ maxWidth: '30rem' }}
                />
                <div>
                  <Button
                    variant="link"
                    className="p-0 text-md text-subtle no-underline me-4"
                    startIcon={
                      <FontAwesomeIcon icon={faFilter} className="text-sm me-1" />
                    }
                  >
                    23 tasks
                  </Button>
                  <Button
                    variant="link"
                    className="p-0 text-md text-primary no-underline"
                    startIcon={
                      <FontAwesomeIcon icon={faSort} className="text-sm" />
                    }
                  >
                    Sorting
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Card.Header>
        {/* <Scrollbar style={{ minHeight: 300 }}> */}
        <Card.Body className="py-0 scrollbar to-do-list-body">
          {todoList.map((todo, index) => (
            <TodoListItem
              key={todo.task}
              todo={todo}
              className={classNames({
                'border-t border-subtle': index === 0
              })}
              labelClassName="text-default"
              fullLayoutBreakpoints={['md', 'xxl']}
              halfLayoutBreakpoints={['xl']}
              onClick={setSelectedItem}
            />
          ))}
        </Card.Body>
        {/* </Scrollbar> */}
        <Card.Footer className="border-0">
          <Button
            startIcon={<FontAwesomeIcon icon={faPlus} />}
            variant="link"
            className="no-underline p-0"
          >
            Add new task
          </Button>
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
