import { faFilter, faPlus, faSort } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Button from 'components/base/Button';
import SearchBox from 'components/common/SearchBox';
import TodoListItem from 'components/modules/project-management/todo-list/TodoListItem';
import { Task } from 'data/crm/dealDetailsData';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

const DealDetailsTask = ({ tasks }: { tasks: Task[] }) => {
  return (
    <>
      <h2 className="mb-4">Tasks</h2>
      <Row className="align-items-center g-0 mb-3">
        <Col sm="auto">
          <SearchBox
            placeholder="Search tasks"
            className="w-100 mb-2 mb-sm-0"
            style={{ maxWidth: '30rem' }}
          />
        </Col>
        <Col xs="auto">
          <div className="flex ms-sm-3">
            <p className="mb-0 text-md text-subtle font-bold">
              <FontAwesomeIcon
                icon={faFilter}
                className="me-1 fw-extra-bold text-sm"
              />
              23 tasks
            </p>
            <Button
              variant="link"
              className="p-0 ms-3 text-md text-primary font-bold"
              startIcon={<FontAwesomeIcon icon={faSort} className="text-sm" />}
            >
              Sorting
            </Button>
          </div>
        </Col>
      </Row>
      {tasks.map((task, index) => (
        <TodoListItem
          key={task.id}
          todo={task}
          className={classNames('border-subtle', {
            'border-top': index === 0,
            'border-bottom-0': index === tasks.length - 1
          })}
          fullLayoutBreakpoints={['lg']}
        />
      ))}
      <Button
        variant="link"
        className="p-0"
        startIcon={<FontAwesomeIcon icon={faPlus} />}
      >
        Add new task
      </Button>
    </>
  );
};

export default DealDetailsTask;
