import { faReply } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '@hummingbirdui/react';
import Avatar from 'components/base/Avatar';
import { Comment } from 'data/social/postsData';
import { Link } from 'react-router';

interface PostCommentsProps {
  comments: Comment[];
  /** Gold adds `mb-5` on reply comments (`+Comments(reply).mb-5`). */
  className?: string;
}

/** `+Comments` in mixins/social/Feed.pug */
const PostComments = ({ comments, className }: PostCommentsProps) => {
  return (
    <>
      {comments.map((comment, index) => (
        <div key={index} className={cn('flex items-start', className)}>
          <Link to="/apps/social/profile">
            <Avatar size="m" src={comment.avatar} className="me-2" />
          </Link>
          <div className="flex-1">
            <div className="flex items-center">
              <Link
                to="/apps/social/profile"
                className="font-bold mb-0 text-emphasis"
              >
                {comment.name}
              </Link>
              <span className="text-subtle/85 font-semibold text-sm ms-2">
                {comment.time}
              </span>
            </div>
            <p className="-mb-1">{comment.comment}</p>
            {comment.reply && (
              <>
                <button
                  type="button"
                  className="btn btn-link p-0 text-default font-extrabold mb-2"
                >
                  <FontAwesomeIcon icon={faReply} className="text-sm me-1" />
                  <span className="font-bold text-sm">Reply</span>
                </button>
                <PostComments comments={comment.reply} className="mb-5" />
              </>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default PostComments;
