import { Col, Row } from '@hummingbirdui/react';
import type { TripOverallReview } from 'data/travel-agency/customer/trip';
import GenerateStar from 'components/common/GenerateStar';
import Badge from 'components/base/Badge';
import { numberFormat } from 'helpers/utils';
import classNames from 'classnames';
import TripDetailsReviewChart from 'components/charts/e-charts/TripDetailsReviewChart';

interface TripDetailsTabReviewAllReviewsProps {
  overallReview: TripOverallReview;
}

/** review summary row in phoenix-tailwind mixins/travel-agency/trip/TripReview.pug */
const TripDetailsTabReviewAllReviews = ({
  overallReview
}: TripDetailsTabReviewAllReviewsProps) => {
  return (
    <Row className="items-center gy-8">
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
            // gold prepends the (dead) `ms-xl-auto` class on the first item
            <div
              key={statItem.id}
              className={classNames(
                'lg:flex xl:block 2xl:flex items-center gap-4',
                { 'ms-xl-auto': index === 0 }
              )}
            >
              <TripDetailsReviewChart
                stat={statItem.count}
                className="lg:order-1 xl:order-0 2xl:order-1 mx-auto size-15"
              />
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
