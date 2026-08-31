import React from 'react';
import { IncludeOrExclude } from 'data/travel-agency/customer/trip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircle,
  faThumbsDown,
  faThumbsUp
} from '@fortawesome/free-solid-svg-icons';

interface TripDetailsTabDetailsIncludedProps {
  includedItems: IncludeOrExclude;
}

const TripDetailsTabDetailsIncluded = ({
  includedItems
}: TripDetailsTabDetailsIncludedProps) => {
  return (
    <div className="px-6 py-10">
      <h5 className="mb-4 text-highlight">
        <FontAwesomeIcon icon={faThumbsUp} className="me-2" />
        Included
      </h5>
      <ul className="list-unstyled mb-6">
        {includedItems.include.map(item => (
          <li key={item.id} className="mb-1 flex">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-secondary-light me-4 text-xs"
              transform="down-13 shrink-4"
            />
            {item.encompass}
          </li>
        ))}
      </ul>
      <h5 className="mb-4 text-highlight">
        <FontAwesomeIcon icon={faThumbsDown} className="me-2" />
        Excluded
      </h5>
      <ul className="list-unstyled mb-0">
        {includedItems.exclude.map(item => (
          <li key={item.id} className="mb-1 flex">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-secondary-light me-4 text-xs"
              transform="down-13 shrink-4"
            />
            {item.encompass}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TripDetailsTabDetailsIncluded;
