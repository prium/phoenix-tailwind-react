import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router';

interface FlightBottomBarProps {
  /** where "Continue" leads (gold passes `flight-payment` on the booking page) */
  to?: string;
}

/** `+FlightBottomBar` in mixins/travel-agency/flight/FlightBottomBar.pug */
const FlightBottomBar = ({ to }: FlightBottomBarProps) => {
  return (
    <div className="flight-bottom-bar bg-gray-900" data-hb-theme="light">
      <div className="container-small py-4">
        <div className="flex gap-6 sm:gap-10 items-center justify-end">
          <h6 className="text-white">
            <span className="me-2">Total </span>
            <span className="me-2">: </span>BDT
            <span className="text-2xl ms-2">4,609</span>
          </h6>
          <Link
            className="btn btn-primary flex-1 text-center text-nowrap max-w-68"
            to={to ?? '#!'}
          >
            Continue
            <FontAwesomeIcon icon={faChevronRight} className="text-md ms-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FlightBottomBar;
