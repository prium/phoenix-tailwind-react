import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { Link } from 'react-router';

const KanbanAddBoardCard = () => {
  return (
    <Button
      variant="phoenix-primary"
      className="flex flex-center h-100 w-100 text-lg font-semibold"
      as={Link}
      to="/apps/kanban/create-board"
    >
      <FontAwesomeIcon icon={faPlusCircle} className="text-base me-2" />
      Create New Board
    </Button>
  );
};

export default KanbanAddBoardCard;
