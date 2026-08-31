import React from 'react';
import { Expectation } from 'data/travel-agency/customer/trip';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons';

interface TripDetailsTabDetailsExpectationProps {
  expectations: Expectation[];
}

const TripDetailsTabDetailsExpectation = ({
  expectations
}: TripDetailsTabDetailsExpectationProps) => {
  return (
    <div className="py-10 px-6">
      {expectations.map((expectation, index) => (
        <div
          key={expectation.id}
          className={classNames({
            'mb-14': expectations.length - 1 !== index
          })}
        >
          <div className="flex items-center gap-2">
            <span
              className="bg-secondary rounded-full flex flex-center text-white"
              style={{ width: 27, height: 27 }}
            >
              {index + 1}
            </span>
            <h5 className="text-highlight mb-0">{expectation.event}</h5>
          </div>
          <p className="my-2">{expectation.description}</p>
          <div className="flex gap-4 xl:gap-6 flex-wrap">
            <h5 className="text-highlight font-semibold mb-0">
              <FontAwesomeIcon
                icon={faClock}
                className="text-soft me-2"
              />
              Duration :{' '}
              <span className="text-subtle font-normal">
                {expectation.duration}
              </span>
            </h5>
            <h5 className="text-highlight font-semibold mb-0">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-soft me-2"
              />
              Location :{' '}
              <span className="text-subtle font-normal">
                {expectation.location}
              </span>
            </h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TripDetailsTabDetailsExpectation;
