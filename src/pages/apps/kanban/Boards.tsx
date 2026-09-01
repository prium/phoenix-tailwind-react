import {
  faAnglesDown,
  faBoxArchive,
  faCalendarXmark,
  faFilter,
  faPlus
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import SearchBox from 'components/common/SearchBox';
import { privateBoards, recentBoards, yourBoards } from 'data/kanban';
import { useMainLayoutContext } from 'providers/MainLayoutProvider';
import { useEffect } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import KanbanBoardSection from 'components/modules/kanban/KanbanBoardSection';

const Boards = () => {
  const { setContentClass } = useMainLayoutContext();

  useEffect(() => {
    setContentClass('kanban-boards-content');

    return () => {
      setContentClass('');
    };
  }, []);
  return (
    <div className="mb-16">
      <div className="border-b border-subtle px-6 lg:px-10 pb-8">
        <Row className="justify-between gy-6">
          <Col xs="auto">
            <h2>
              Kanban Boards{' '}
              <span className="text-subtle font-semibold">(8)</span>
            </h2>
          </Col>
          <Col xs="auto" className="flex flex-wrap gap-2">
            <Button
              variant="phoenix-primary"
              startIcon={<FontAwesomeIcon icon={faFilter} />}
              className="flex px-6"
            >
              Filter
            </Button>
            <Form.Select className="w-auto" id="select-deals">
              <option>Sort by - Last visited</option>
              <option>Sort by - Name (A - Z)</option>
              <option>Sort by - Name (Z - A)</option>
              <option>Sort by - Category</option>
              <option>Sort by - Date created</option>
            </Form.Select>
            <SearchBox placeholder="Search by name" />
          </Col>
        </Row>
      </div>
      <div className="flex flex-wrap gap-4 border-b border-subtle px-6 lg:px-10 py-8">
        <Button
          variant="primary"
          className="px-4 sm:px-8 md:px-18"
          as={Link}
          to="/apps/kanban/create-board"
          startIcon={<FontAwesomeIcon icon={faPlus} className="me-2" />}
        >
          Create New Board
        </Button>
        <Button
          variant="phoenix-primary"
          className="px-4 sm:px-6 flex text-default"
          as={Link}
          to="#!"
        >
          <FontAwesomeIcon icon={faAnglesDown} className="sm:me-2" />
          <span className="hidden sm:block whitespace-nowrap">
            Import Bulk Tasks
          </span>
        </Button>
        <Button
          variant="phoenix-primary"
          className="px-4 sm:px-6 flex text-default"
          as={Link}
          to="#!"
        >
          <FontAwesomeIcon icon={faCalendarXmark} className="sm:me-2" />
          <span className="hidden sm:block">Upcoming Deadlines</span>
        </Button>
      </div>
      <KanbanBoardSection
        title="Most Recent Boards"
        description="Boards you’ve visited recently. Can be private or public boards."
        changePreference={true}
        boards={recentBoards}
      />
      <KanbanBoardSection
        title="Your Boards"
        description="Boards where you are either an Admin or a Member."
        boards={yourBoards}
      />
      <KanbanBoardSection
        title="Private Boards"
        description="Your eyes only"
        boards={privateBoards}
      />
      <div className="text-center">
        <Button
          variant="phoenix-primary"
          startIcon={<FontAwesomeIcon icon={faBoxArchive} className="me-2" />}
          className="mt-6"
        >
          Open Archive
        </Button>
      </div>
    </div>
  );
};

export default Boards;
