import React, { Fragment } from 'react';
import { Link } from 'react-router';
import type { Rating, Review } from 'data/travel-agency/customer/hotelDetails';
import { Card, Col, ProgressBar, Row } from 'react-bootstrap';
import Badge from 'components/base/Badge';
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
import Button from 'components/base/Button';
import classNames from 'classnames';
import { numberFormat } from 'helpers/utils';

interface HotelReviewsProps {
  ratings: Rating[];
  reviews: Review[];
}

const HotelReviews = ({ ratings, reviews }: HotelReviewsProps) => {
  return (
    <>
      <h3 className="mb-5">Reviews</h3>
      <Row className="gx-md-6 gx-xl-8 gy-2">
        {ratings.map((item, index) => (
          <Col key={index} md={6} lg={5}>
            <Row className="align-items-center g-0">
              <Col xs={4}>
                <h5 className="mb-0 text-default text-nowrap">{item.name}</h5>
              </Col>
              <Col xs={8}>
                <div className="flex align-items-center gap-2">
                  <Badge bg="primary" className="text-base">
                    {numberFormat(item.rating, 'standard', {
                      minimumFractionDigits: 1,
                      maximumFractionDigits: 1
                    })}
                  </Badge>
                  <ProgressBar
                    now={parseFloat(item.rating.toString()) * 20}
                    className="w-100"
                  />
                </div>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
      <hr className="mt-5 mb-8" />
      {reviews.map((review, index) => (
        <Fragment key={index}>
          <div className="flex align-items-center relative gap-2 mb-3">
            <Avatar src={review.avatar} size="s" />
            <Link
              to="#!"
              className="font-semibold text-emphasis stretched-link"
            >
              {review.name}
            </Link>
            <img src={review.flag} alt="" />
          </div>
          <div className="flex align-items-center flex-wrap gap-5 mb-5">
            <div className="flex align-items-center gap-4">
              <div className="border-end pe-4">
                <Badge bg="primary" className="text-base">
                  {numberFormat(review.rating, 'standard', {
                    minimumFractionDigits: 1,
                    maximumFractionDigits: 1
                  })}
                </Badge>
              </div>
              <Link to="#!" className="text-subtle">
                <FontAwesomeIcon icon={faBed} className="me-2 text-md" />
                {review.service}
              </Link>
            </div>
            <div className="flex align-items-center gap-5">
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
          <div className="flex gap-3 mb-5">
            <FontAwesomeIcon
              icon={faThumbsUp}
              className="text-success"
              transform="down-5"
            />
            <p className="mb-0">{review.liked}</p>
          </div>
          <div className="flex gap-3 mb-5">
            <FontAwesomeIcon
              icon={faThumbsDown}
              className="text-soft"
              transform="down-5"
            />
            <p className="mb-0">{review.disLiked}</p>
          </div>
          <Card className="bg-subtle">
            <Card.Body>
              <h6 className="mb-2 font-black text-soft text-uppercase">
                <FontAwesomeIcon icon={faReply} className="me-2" />
                Hotel's Reply:
              </h6>
              <p className="mb-0">{review.hotelsReply}</p>
            </Card.Body>
          </Card>
          <hr
            className={classNames('mt-8', {
              'mb-8': index !== reviews.length - 1,
              'mb-0': index === reviews.length - 1
            })}
          />
        </Fragment>
      ))}
      <Button className="bg-default border-subtle text-soft font-black mt-n4">
        Show 2 more replies
      </Button>
    </>
  );
};

export default HotelReviews;
