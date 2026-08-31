import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faLocationDot,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { numberFormat } from 'helpers/utils';
import { TripHomepageItems } from 'data/travel-agency/customer/trip';

interface TripShowcaseItemProps {
  showcaseItem: TripHomepageItems;
}

const TripShowcaseItem = ({ showcaseItem }: TripShowcaseItemProps) => {
  return (
    <Col md={6} xl={4}>
      <div className="hoverbox rounded-md">
        <Link to="/apps/travel-agency/trip/trip-details">
          <img src={showcaseItem.image} alt="" className="img-fluid" />
          <div className="backdrop-faded">
            <h3 className="text-underline text-lg lg:text-xl text-white font-bold mb-2 pt-6">
              {showcaseItem.title}
            </h3>
            <h5 className="text-secondary-lighter font-normal mb-4">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-primary me-2"
              />
              {showcaseItem.location}
            </h5>
            <div className="sm:flex md:block lg:flex flex-between-center pb-6">
              <h3 className="text-white font-bold mb-4 sm:mb-0 md:mb-4 lg:mb-0 text-lg lg:text-xl">
                $ {numberFormat(showcaseItem.price)}
              </h3>
              <div className="flex gap-4">
                <h5 className="text-secondary-lighter font-normal">
                  <FontAwesomeIcon icon={faClock} className="text-md me-2" />
                  {showcaseItem.days} days
                </h5>
                <h5 className="text-secondary-lighter font-normal">
                  <FontAwesomeIcon icon={faUser} className="text-md me-2" />
                  From 1 to people
                </h5>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </Col>
  );
};

export default TripShowcaseItem;
