import { Fragment } from 'react';
import { Link } from 'react-router';
import type { Rating, Review } from 'data/travel-agency/customer/hotelDetails';
import { Card, cn, Col, Row } from '@hummingbirdui/react';
import Avatar from 'components/base/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBed,
  faCalendar,
  faReply,
  faThumbsDown,
  faThumbsUp,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { numberFormat } from 'helpers/utils';

interface HotelReviewsProps {
  ratings: Rating[];
  reviews: Review[];
}

const formatRating = (rating: number) =>
  numberFormat(rating, 'standard', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1
  });

/** `+Reviews` in mixins/travel-agency/hotel/HotelDetailsTabContent.pug */
const HotelReviews = ({ ratings, reviews }: HotelReviewsProps) => {
  return (
    <>
      <h3 className="mb-8">Reviews</h3>
      <Row className="md:gx-10 xl:gx-14 gy-2">
        {ratings.map((item, index) => (
          <Col key={index} md={6} lg={5}>
            <Row className="items-center g-0">
              <Col xs={4}>
                <h5 className="mb-0 text-default text-nowrap">{item.name}</h5>
              </Col>
              <Col xs={8}>
                <div className="flex items-center gap-2">
                  <span className="badge text-white bg-primary text-base">
                    {formatRating(item.rating)}
                  </span>
                  <div
                    className="progress w-full h-1.25"
                    role="progressbar"
                    aria-label="review"
                    aria-valuenow={0}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar rounded-md"
                      style={{ width: `${item.rating * 20}%` }}
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
      <hr className="mt-8 mb-14 border-subtle" />
      {reviews.map((review, index) => (
        <Fragment key={index}>
          <div className="flex items-center relative gap-2 mb-4">
            <Avatar src={review.avatar} size="s" />
            <Link
              to="#!"
              className="font-semibold text-emphasis stretched-link"
            >
              {review.name}
            </Link>
            <img src={review.flag} alt="" />
          </div>
          <div className="flex items-center flex-wrap gap-8 mb-8">
            <div className="flex items-center gap-6">
              <div className="border-e pe-6">
                <span className="badge text-white bg-primary text-base">
                  {formatRating(review.rating)}
                </span>
              </div>
              <Link to="#!" className="text-subtle">
                <FontAwesomeIcon icon={faBed} className="me-2 text-md" />
                {review.service}
              </Link>
            </div>
            <div className="flex items-center gap-8">
              <h5 className="font-normal text-subtle">
                <FontAwesomeIcon icon={faCalendar} className="me-2 text-md" />
                {review.date}
              </h5>
              <h5 className="font-normal text-subtle">
                <FontAwesomeIcon icon={faUser} className="me-2 text-md" />
                {review.travelerType}
              </h5>
            </div>
          </div>
          <div className="flex gap-4 mb-8">
            <FontAwesomeIcon
              icon={faThumbsUp}
              className="text-success"
              transform="down-5"
            />
            <p className="mb-0">{review.liked}</p>
          </div>
          <div className="flex gap-4 mb-8">
            <FontAwesomeIcon
              icon={faThumbsDown}
              className="text-soft"
              transform="down-5"
            />
            <p className="mb-0">{review.disLiked}</p>
          </div>
          <Card className="bg-subtle">
            <Card.Body>
              <h6 className="mb-2 font-black text-soft uppercase">
                <FontAwesomeIcon icon={faReply} className="me-2" />
                Hotel's Reply:
              </h6>
              <p className="mb-0">{review.hotelsReply}</p>
            </Card.Body>
          </Card>
          <hr
            className={cn('my-14', {
              'mb-0': index === reviews.length - 1
            })}
          />
        </Fragment>
      ))}
      <button className="btn bg-default border-subtle text-soft font-black -translate-y-4.5">
        Show 2 more replies
      </button>
    </>
  );
};

export default HotelReviews;
