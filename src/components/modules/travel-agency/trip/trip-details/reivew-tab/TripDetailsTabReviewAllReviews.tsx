import React from 'react';
import { Col, Row } from 'react-bootstrap';
import type { TripOverallReview } from 'data/travel-agency/customer/trip';
import GenerateStar from 'components/common/GenerateStar';
import Badge from 'components/base/Badge';
import { numberFormat } from 'helpers/utils';
import classNames from 'classnames';
import TripDetailsReviewChart from 'components/charts/e-charts/TripDetailsReviewChart';

interface TripDetailsTabReviewAllReviewsProps {
  overallReview: TripOverallReview;
}

const TripDetailsTabReviewAllReviews = ({
  overallReview
}: TripDetailsTabReviewAllReviewsProps) => {
  return (
    <Row className="gy-8 items-center">
      <Col xl={5} xxl={4}>
        <div className="flex items-center gap-4 flex-wrap">
          <h3 className="mb-0">
            {numberFormat(overallReview.rating, 'standard', {
              minimumFractionDigits: 1
            })}
          </h3>
          <div className="pe-4 sm:border-e border-subtle">
            <GenerateStar filledStars={5} className="me-1 text-md" />
            <span className="font-semibold text-subtle">
              ( {overallReview.reviewCount} reviews )
            </span>
          </div>
          <Badge
            variant="phoenix"
            bg="success"
            className="border-0 px-4 py-2 text-base capitalize"
          >
            {overallReview.status}
          </Badge>
        </div>
      </Col>
      <Col xl={7} xxl={8}>
        <div className="flex gap-8 md:gap-10 xl:gap-14 2xl:gap-10 flex-wrap">
          {overallReview.reviewStates.map((statItem, index) => (
            <div
              key={statItem.id}
              className={classNames(
                'lg:flex xl:block 2xl:flex items-center gap-6',
                {
                  'xl:ms-auto': index === 0
                }
              )}
            >
              <div className="lg:order-1 xl:order-0 2xl:order-1">
                <TripDetailsReviewChart
                  stat={statItem.count}
                  className="mx-auto"
                />
              </div>
              <h5 className="mb-0 mt-2 lg:mt-0 xl:mt-2 2xl:mt-0 text-center">
                {statItem.name}
              </h5>
            </div>
          ))}
        </div>
      </Col>
    </Row>
  );
};

export default TripDetailsTabReviewAllReviews;
