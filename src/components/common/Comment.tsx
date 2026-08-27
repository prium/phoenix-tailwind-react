import classNames from 'classnames';
import { Comment as CommentType } from 'data/project-management/comments';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';

interface CommentProps {
  comment: CommentType;
  className?: string;
}

const Comment = ({ comment, className }: CommentProps) => {
  return (
    <Row
      className={classNames(
        className,
        'justify-contnet-between g-0 py-6 items-start'
      )}
    >
      <Col xs={12} sm>
        <p
          className={classNames('text-md text-muted mb-0', {
            'mb-2': comment.attachment
          })}
        >
          <Link
            to={comment.user.url}
            className={classNames('font-semibold', {
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
      </Col>
      <Col xs={{ span: 12, order: 1 }} sm={{ span: 'auto', order: 0 }}>
        <p className="text-muted font-semibold text-sm mb-0">
          Oct 4 at 12:18 pm
        </p>
      </Col>
      {comment.details && <Col xs={12}>{comment.details}</Col>}
    </Row>
  );
};

export default Comment;
