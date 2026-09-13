import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from '@hummingbirdui/react';
import { Link } from 'react-router';
import HolidaysNextMonth from 'components/charts/e-charts/HolidaysNextMonth';

export const HolidaysCard = () => {
  return (
    <Card className="h-full">
      <Card.Header className="border-0 pb-2 flex justify-between items-start">
        <div>
          <h3 className="text-highlight">Holidays</h3>
          <p className="sm:mb-0 text-subtle text-base">Holidays next month</p>
        </div>
        <Link
          to="#!"
          className="btn btn-sm btn-phoenix-secondary flex items-center w-max"
        >
          <span className="text-nowrap">Calender</span>
          <FontAwesomeIcon icon={faChevronRight} className="ms-2 text-sm" />
        </Link>
      </Card.Header>
      <Card.Body>
        <div className="echart-holidays-next-month size-full min-h-75">
          <HolidaysNextMonth style={{ height: '100%', width: '100%' }} />
        </div>
      </Card.Body>
    </Card>
  );
};
