import { cn } from '@hummingbirdui/react';
import { Comment as CommentType } from 'data/project-management/comments';
import { Link } from 'react-router';

interface CommentProps {
  comment: CommentType;
  className?: string;
}

/** one row of `+ModalNotification` in mixins/project-management/ProjectDetailsModal.pug */
const Comment = ({ comment, className }: CommentProps) => {
  return (
    <div
      className={cn(
        className,
        'row justify-contnet-between g-0 py-6 items-start'
      )}
    >
      <div className="col-12 sm:col">
        <p
          className={cn('text-md text-muted mb-0', {
            'mb-2': comment.attachment
          })}
        >
          <Link
            to={comment.user.url}
            className={cn('font-semibold', {
              'text-highlight no-underline': comment.own
            })}
          >
            {comment.own ? 'You' : comment.user.name}
          </Link>{' '}
          {comment.text}
        </p>

        {comment.attachment && (
          <img
            src={comment.attachment}
            alt=""
            width={220}
            className="rounded-md mb-2"
          />
        )}
      </div>
      <div className="col-12 sm:col-auto order-1 sm:order-0">
        <p className="text-muted font-semibold text-sm mb-0">
          Oct 4 at 12:18 pm
        </p>
      </div>
      {comment.details && <div className="col-12">{comment.details}</div>}
    </div>
  );
};

export default Comment;
