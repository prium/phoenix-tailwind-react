import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CountdownDisplay = () => {
  return (
    <div>
      <p className="mb-2 text-info">Book before time runs out</p>
      <h3 className="mb-0 text-info font-bold flex gap-2 items-center sm:justify-end">
        <FontAwesomeIcon icon={faClock} className="text-base" />
        <span>29</span>
        <span className="text-md font-normal">min</span>
        <span>50</span>
        <span className="text-md font-normal">sec</span>
      </h3>
    </div>
  );
};

export default CountdownDisplay;
