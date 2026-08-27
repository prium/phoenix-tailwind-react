import { faPencil, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Button from 'components/base/Button';
import { SubTaskItem } from 'data/project-management/todoListData';
import { snakeCase } from 'helpers/utils';
import React from 'react';
import { Form } from 'react-bootstrap';

const SubTask = ({
  task,
  className
}: {
  task: SubTaskItem;
  className?: string;
}) => {
  return (
    <div
      className={classNames(
        className,
        'flex flex-between-center hover-actions-trigger py-3 border-bottom'
      )}
    >
      <Form.Check
        type="checkbox"
        id={snakeCase(task.task)}
        className="mb-1 mb-md-0 flex align-items-center lh-1 min-h-auto"
      >
        <Form.Check.Input
          type="checkbox"
          className="form-check-line-through mt-0 me-3"
        />
        <Form.Check.Label className="mb-0 text-base"> {task.task}</Form.Check.Label>
      </Form.Check>

      <div className="hover-actions end-0">
        <Button
          variant=""
          size="sm"
          className="me-1 text-subtle px-0 me-3"
        >
          <FontAwesomeIcon icon={faPencil} className="text-sm" />
        </Button>
        <Button size="sm" className="text-subtle px-0">
          <FontAwesomeIcon icon={faXmark} className="text-base" />
        </Button>
      </div>
    </div>
  );
};

export default SubTask;
