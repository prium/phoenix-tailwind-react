import type { Comment } from 'data/travel-agency/customer/trip';
import { Card } from '@hummingbirdui/react';
import classNames from 'classnames';
import Avatar from 'components/base/Avatar';
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import GenerateStar from 'components/common/GenerateStar';
import TripDetailsReviewTabCommentUpload from 'components/image-gallery/TripDetailsReviewTabCommentUpload';

interface TripDetailsTabReviewCommentCardProps {
  comments: Comment[];
}

/** review cards in phoenix-tailwind mixins/travel-agency/trip/TripReview.pug */
const TripDetailsTabReviewCommentCard = ({
  comments
}: TripDetailsTabReviewCommentCardProps) => {
  return (
    <>
      {comments.map((comment, index) => (
        <Card
          key={comment.id}
          className={classNames('bg-transparent', {
            'mb-3': index !== comments.length - 1
          })}
        >
          <Card.Body>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 relative">
                <Avatar src={comment.profilePic} size="s" rounded="circle" />
                <Link
                  to="#!"
                  className="text-emphasis text-base font-semibold stretched-link"
                >
                  {comment.commenter}
                </Link>
              </div>
              <div className="flex gap-2">
                <h6 className="text-subtle mb-0">
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    className="text-soft me-1"
                  />
                  {comment.liked}
                </h6>
                <h6 className="text-subtle mb-0">
                  <FontAwesomeIcon
                    icon={faThumbsDown}
                    className="text-muted-light me-1"
                  />
                  {comment.disliked}
                </h6>
              </div>
            </div>
            <div className="flex my-4">
              <GenerateStar
                filledStars={comment.rate}
                className="me-1 text-md"
                emptyVariant="text-warning-light"
              />
            </div>
            <h4 className="mb-2">{comment.commentTitle}</h4>
            <p className="text-subtle text-base">{comment.commentDate}</p>
            <p className="text-base">{comment.commentDes}</p>
            {comment.uploadedImage && (
              <div className="flex gap-2 flex-wrap">
                <TripDetailsReviewTabCommentUpload
                  uploadedCommentImage={comment.uploadedImage}
                />
              </div>
            )}
            {comment.replies.map(replyItem => (
              <div
                key={replyItem.id}
                className="mt-8 border-s border-subtle ps-6"
              >
                <Link to="#!" className="text-base font-bold">
                  {replyItem.replier}
                </Link>
                <span className="ms-1 text-base text-soft">replied</span>
                <p className="mt-2 text-base">{replyItem.reply}</p>
              </div>
            ))}
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default TripDetailsTabReviewCommentCard;
