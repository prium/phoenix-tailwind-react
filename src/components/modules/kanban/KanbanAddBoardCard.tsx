import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router';

/** last slide of `+BoardSlider` in apps/kanban/boards.pug */
const KanbanAddBoardCard = () => {
  return (
    <Link
      to="/apps/kanban/create-board"
      className="btn btn-phoenix-primary flex flex-center h-full w-full text-lg font-semibold text-truncate"
    >
      <FontAwesomeIcon icon={faPlusCircle} className="text-base me-2" />
      Create New Board
    </Link>
  );
};

export default KanbanAddBoardCard;
