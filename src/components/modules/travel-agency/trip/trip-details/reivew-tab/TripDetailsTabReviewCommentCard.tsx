import React from 'react';
import type { Comment } from 'data/travel-agency/customer/trip';
import { Card } from 'react-bootstrap';
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
            <div className="flex align-items-center gap-3">
              <div className="flex align-items-center gap-2 relative">
                <Avatar src={comment.profilePic} size="s" rounded="circle" />
                <Link
                  to="#!"
                  className="stretched-link font-semibold text-emphasis"
                >
                  {comment.commenter}
                </Link>
              </div>
              <div className="flex gap-2">
                <h6 className="text-subtle mb-0">
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    className="text-soft  me-1"
                  />
                  {comment.liked}
                </h6>
                <h6 className="text-subtle dark__ mb-0">
                  <FontAwesomeIcon
                    icon={faThumbsDown}
                    className="text-soft me-1"
                  />
                  {comment.disliked}
                </h6>
              </div>
            </div>
            <div className="flex my-3">
              <GenerateStar
                filledStars={comment.rate}
                className="me-1 text-md"
                emptyVariant="text-warning-light"
              />
            </div>
            <h4 className="mb-2">{comment.commentTitle}</h4>
            <p className="text-subtle">{comment.commentDate}</p>
            <p>{comment.commentDes}</p>
            {comment.uploadedImage && (
              <div className="flex flex-wrap gap-2">
                <TripDetailsReviewTabCommentUpload
                  uploadedCommentImage={comment.uploadedImage}
                />
              </div>
            )}
            {comment.replies.map((replyItem, idx) => (
              <div
                key={replyItem.id}
                className={classNames(
                  'mt-5 border-start border-subtle ps-4',
                  {
                    'mt-5': idx === 0,
                    'mb-3': idx !== comment.replies.length - 1
                  }
                )}
              >
                <Link to="#!" className="font-bold">
                  {replyItem.replier}
                </Link>
                <span className="text-soft"> replied</span>
                <p className="mt-2">{replyItem.reply}</p>
              </div>
            ))}
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default TripDetailsTabReviewCommentCard;
