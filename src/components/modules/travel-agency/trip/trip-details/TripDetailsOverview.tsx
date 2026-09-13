import {
  faClock,
  faHeart,
  faLocationDot,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import GenerateStar from 'components/common/GenerateStar';
import TripDetailsAvailabilityModal from 'components/modals/TripDetailsAvailabilityModal';
import { TripOverview } from 'data/travel-agency/customer/trip';
import { currencyFormat, numberFormat } from 'helpers/utils';
import { useState } from 'react';
import { Link } from 'react-router';

interface TripDetailsOverviewProps {
  tripOverview: TripOverview;
}

/** overview block in phoenix-tailwind pug/apps/travel-agency/trip/trip-details.pug */
const TripDetailsOverview = ({ tripOverview }: TripDetailsOverviewProps) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className="flex items-center flex-wrap gap-4">
        <h2 className="me-4">
          {currencyFormat(tripOverview.cost)}{' '}
          <span className="text-base font-semibold text-subtle align-middle">
            / per person
          </span>
        </h2>
        <div className="me-4">
          <GenerateStar
            filledStars={tripOverview.totalRate}
            className="me-1 text-md"
          />
          <span className="font-semibold text-subtle">
            ( {numberFormat(tripOverview.totalReviews, 'standard')} reviews )
          </span>
        </div>
        <h5 className="font-semibold text-subtle me-4">
          <span className="p-2 inline-flex bg-danger-subtle rounded-full me-2">
            <FontAwesomeIcon
              icon={faHeart}
              className="text-md text-danger-light"
              transform="down-1"
            />
          </span>
          Recommended by {numberFormat(tripOverview.recommendBy, 'standard')}{' '}
          travellers
        </h5>
        <Button
          variant="primary"
          className="md:ms-auto"
          onClick={() => setModalShow(true)}
        >
          Check availability
        </Button>
      </div>
      <div className="p-6 bg-subtle rounded-md mt-4 mb-8">
        <Row className="gy-6">
          <Col md={4} lg={3} className="md:border-e">
            <h6 className="text-default font-semibold mb-2">
              <FontAwesomeIcon icon={faLocationDot} className="me-2" />
              {tripOverview.tripLocation}
            </h6>
            <h6 className="text-default font-semibold mb-2">
              <FontAwesomeIcon icon={faClock} className="me-2" />
              {tripOverview.tripDuration}
            </h6>
            <h6 className="text-default font-semibold mb-6">
              <FontAwesomeIcon icon={faUser} className="me-2" />
              From {tripOverview.minPeoples} to {tripOverview.maxPeoples} people
            </h6>
            {tripOverview.tripTags.map((tag, index) => (
              <Link
                key={tag}
                to="#!"
                className={
                  index !== tripOverview.tripTags.length - 1
                    ? 'badge badge-phoenix-secondary no-underline me-2'
                    : 'badge badge-phoenix-secondary no-underline'
                }
              >
                {tag}
              </Link>
            ))}
          </Col>
          <Col md={8} lg={9} className="lg:ps-12">
            <h4 className="text-default mb-4">Overview</h4>
            <p className="mb-0">
              {tripOverview.description}
              <Link to="#!">Read more</Link>
            </p>
          </Col>
        </Row>
      </div>
      <TripDetailsAvailabilityModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default TripDetailsOverview;
