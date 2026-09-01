import { faReply } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar from 'components/base/Avatar';
import Button from 'components/base/Button';
import { Comment } from 'data/social/postsData';
import React from 'react';
import { Link } from 'react-router';

interface PostCommentsProps {
  comments: Comment[];
}

const PostComments = ({ comments }: PostCommentsProps) => {
  return (
    <>
      {comments.map((comment, index) => (
        <div key={index} className="flex items-start">
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
              <span className="text-subtle text-opacity-85 font-semibold text-sm ms-2">
                {comment.time}
              </span>
            </div>
            <p className="mb-0">{comment.comment}</p>
            {comment.reply && (
              <div className="mb-4">
                <Button
                  variant="link"
                  className="p-0 text-default mb-2 text-sm"
                  startIcon={
                    <FontAwesomeIcon icon={faReply} className="me-1" />
                  }
                >
                  Reply
                </Button>
                <PostComments comments={comment.reply} />
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default PostComments;
