import {
  faAnglesDown,
  faBoxArchive,
  faCalendarXmark,
  faFilter,
  faPlus
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Select } from '@hummingbirdui/react';
import SearchBox from 'components/common/SearchBox';
import { privateBoards, recentBoards, yourBoards } from 'data/kanban';
import { Link } from 'react-router';
import KanbanBoardSection from 'components/modules/kanban/KanbanBoardSection';

/** apps/kanban/boards.pug */
const Boards = () => {
  return (
    <div className="mb-16">
      <div className="border-b border-subtle -mx-6 lg:-mx-10 px-6 lg:px-10 pb-8">
        <div className="row justify-between gy-6">
          <div className="col-auto">
            <h2>
              Kanban Boards{' '}
              <span className="text-subtle font-semibold">(8)</span>
            </h2>
          </div>
          <div className="col-auto flex flex-wrap gap-2">
            <button className="btn px-6 btn-phoenix-primary flex" type="button">
              <FontAwesomeIcon
                icon={faFilter}
                transform="up-1.25"
                className="me-1"
              />
              <span>Filter</span>
            </button>
            <Select className="w-auto" id="select-deals">
              <option>Sort by - Last visited</option>
              <option>Sort by - Name (A - Z)</option>
              <option>Sort by - Name (Z - A)</option>
              <option>Sort by - Category</option>
              <option> Sort by - Date created</option>
            </Select>
            <SearchBox placeholder="Search by name" />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 border-b border-subtle -mx-6 lg:-mx-10 px-6 lg:px-10 py-8">
        <Link
          to="/apps/kanban/create-board"
          className="btn btn-primary px-4 sm:px-8 md:px-18"
        >
          <FontAwesomeIcon icon={faPlus} className="me-2" />
          Create New Board
        </Link>
        <button
          className="btn btn-phoenix-primary px-4 sm:px-6 flex text-default"
          type="button"
        >
          <FontAwesomeIcon
            icon={faAnglesDown}
            transform="up-2.5"
            className="sm:me-2"
          />
          <span className="hidden sm:block">Import Bulk Tasks</span>
        </button>
        <Link
          to="/apps/calendar"
          className="btn btn-phoenix-primary px-4 sm:px-6 flex text-default"
        >
          <FontAwesomeIcon
            icon={faCalendarXmark}
            transform="up-2.5"
            className="sm:me-2"
          />
          <span className="hidden sm:block whitespace-nowrap">
            Upcoming Deadlines
          </span>
        </Link>
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
        <button className="btn btn-phoenix-primary mt-6" type="button">
          <FontAwesomeIcon icon={faBoxArchive} className="me-2" />
          Open Archive
        </button>
      </div>
    </div>
  );
};

export default Boards;
