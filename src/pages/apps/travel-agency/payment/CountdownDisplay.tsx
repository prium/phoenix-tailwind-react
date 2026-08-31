import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/** "Book before time runs out" block in apps/travel-agency/flight/{booking,payment}.pug */
const CountdownDisplay = () => {
  return (
    <>
      <p className="mb-2 text-info">Book before time runs out</p>
      <h3 className="mb-0 text-info font-bold flex gap-2 items-center sm:justify-end">
        <FontAwesomeIcon icon={faClock} className="text-base" />
        29 <span className="text-md font-normal">min</span> 50{' '}
        <span className="text-md font-normal">sec</span>
      </h3>
    </>
  );
};

export default CountdownDisplay;
