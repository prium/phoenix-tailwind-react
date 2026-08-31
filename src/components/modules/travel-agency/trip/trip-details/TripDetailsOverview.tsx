import {
  faClock,
  faHeart,
  faLocationDot,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Badge from 'components/base/Badge';
import Button from 'components/base/Button';
import GenerateStar from 'components/common/GenerateStar';
import TextTruncate from 'components/common/TextTruncate';
import TripDetailsAvailabilityModal from 'components/modals/TripDetailsAvailabilityModal';
import { TripOverview } from 'data/travel-agency/customer/trip';
import { currencyFormat, numberFormat } from 'helpers/utils';
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';

interface TripDetailsOverviewProps {
  tripOverview: TripOverview;
}

const TripDetailsOverview = ({ tripOverview }: TripDetailsOverviewProps) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className="flex flex-wrap items-center gap-4">
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
            <div className="flex flex-wrap">
              {tripOverview.tripTags.map(tag => (
                <Link key={tag} to="#!" className="me-2">
                  <Badge variant="phoenix" bg="secondary">
                    {tag}
                  </Badge>
                </Link>
              ))}
            </div>
          </Col>
          <Col md={8} lg={9} className="lg:ps-12">
            <h4 className="text-default mb-4">Overview</h4>
            <p className="mb-0">
              <TextTruncate text={tripOverview.description} maxLength={313} />
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
