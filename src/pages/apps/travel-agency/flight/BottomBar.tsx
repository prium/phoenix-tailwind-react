import { Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const FlightBottomBar = () => {
  return (
    <div className="flight-bottom-bar bg-secondary" data-bs-theme="light">
      <Container fluid="small" className="py-4">
        <div className="flex gap-6 sm:gap-10 items-center justify-end">
          <h6 className="text-white mb-0">
            <span className="me-2">Total</span>
            <span className="me-2">:</span>
            <span>BDT</span>
            <span className="text-2xl ms-2">4,609</span>
          </h6>
          <Button
            variant="primary"
            className="flex-1 whitespace-nowrap"
            href="#!"
            style={{ maxWidth: '17rem' }}
          >
            Continue
            <FontAwesomeIcon icon={faChevronRight} className="text-md ms-2" />
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default FlightBottomBar;
