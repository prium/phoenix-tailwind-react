import { faFilter, faSort } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row, cn } from '@hummingbirdui/react';
import SearchBox from 'components/common/SearchBox';

interface TodoSearchBarProps {
  className?: string;
  justifyClassName?: string;
}

/** `+TodoSearchBar` in dashboard/project-management/ToDo.pug */
const TodoSearchBar = ({
  className,
  justifyClassName = 'justify-between'
}: TodoSearchBarProps) => (
  <Row className={cn('items-center g-0', justifyClassName, className)}>
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
);

export default TodoSearchBar;
