import { Card } from 'react-bootstrap';
import plane from 'assets/img/spot-illustrations/air-plane.png';
import planeDark from 'assets/img/spot-illustrations/air-plane-dark.png';
import Button from 'components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const PricingOffer = () => {
  return (
    <Card className="rounded-2xl border-0 offer-card">
      <Card.Body className="md:flex items-center gap-6 py-8">
        <img
          src={plane}
          alt=""
          className="mb-6 md:mb-0 dark:hidden"
          width={155}
        />
        <img
          src={planeDark}
          alt=""
          className="mb-6 md:mb-0 hidden dark:block"
          width={155}
        />
        <div>
          <p>
            Business Starter, Business Standard, and Business Plus plans can be
            purchased for a maximum of 300 users. There is no minimum or maximum
            user limit for Enterprise plans.
          </p>
          <p className="mb-10">
            Phoenix customers may have access to additional features for a
            limited promotional period
          </p>
          <Button
            variant="link"
            className="me-2 p-0 text-md"
            endIcon={<FontAwesomeIcon icon={faAngleRight} transform="down-1" />}
          >
            Contact Support
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PricingOffer;
