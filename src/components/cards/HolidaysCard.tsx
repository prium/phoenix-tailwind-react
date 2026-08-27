import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from 'react-bootstrap';
import Button from 'components/base/Button';

import { Link } from 'react-router';
import HolidaysNextMonth from 'components/charts/e-charts/HolidaysNextMonth';

export const HolidaysCard = () => {
  return (
    <Card className="h-full">
      <Card.Header className="border-0 pb-2 md:flex flex-wrap justify-between items-start">
        <div className="mb-4 md:mb-0 lg:mb-4">
          <h3 className="text-highlight">Holidays</h3>
          <p className="sm:mb-0 text-subtle">
            Increase or decrease your pricing accordingly
          </p>
        </div>
        <Button
          variant="phoenix-secondary"
          size="sm"
          as={Link}
          to={`#!`}
          endIcon={
            <FontAwesomeIcon icon={faChevronRight} className="ms-2 text-sm" />
          }
        >
          Go to Calender
        </Button>
      </Card.Header>
      <Card.Body>
        <HolidaysNextMonth
          style={{ height: '100%', minHeight: '300px', width: '100%' }}
        />
      </Card.Body>
    </Card>
  );
};
