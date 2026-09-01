import {
  faCalendarXmark,
  faComment,
  faListCheck
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, cn } from '@hummingbirdui/react';
import Avatar from 'components/base/Avatar';
import { KanbanBoard } from 'data/kanban';
import { Link } from 'react-router';

/** `+Board` in apps/kanban/boards.pug */
const KanbanBoardCard = ({ board }: { board: KanbanBoard }) => {
  return (
    <Link to="/apps/kanban/kanban" className="no-underline">
      <Card className="overflow-hidden bg-transparent h-full">
        <div className="relative">
          {board.coverImage ? (
            <img src={board.coverImage} alt="" className="w-full h-32" />
          ) : (
            <div className={cn(board.bgClass, 'h-32')} />
          )}
          <div className="avatar-group absolute bottom-4 start-8">
            {board.users.map((user, index) => (
              <Avatar
                size="m"
                src={user}
                className="border border-subtle-subtle"
                key={index}
              />
            ))}
          </div>
        </div>
        <Card.Body className="flex flex-col justify-between">
          <div>
            <h3 className="text-default">{board.title}</h3>
            <p className="text-base text-subtle mb-6">{board.category}</p>
          </div>
          <div className="flex gap-6">
            <h5 className="text-default">
              <FontAwesomeIcon
                icon={faListCheck}
                className="text-subtle me-1"
              />
              {board.totalTasks}
            </h5>
            <h5 className="text-default">
              <FontAwesomeIcon icon={faComment} className="text-subtle me-1" />
              {board.comments}
            </h5>
            <h5 className="text-default">
              <FontAwesomeIcon
                icon={faCalendarXmark}
                className="text-subtle me-1"
              />
              {board.deadlines}
            </h5>
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default KanbanBoardCard;
