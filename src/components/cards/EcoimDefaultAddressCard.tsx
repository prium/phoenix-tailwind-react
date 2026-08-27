import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { Card } from 'react-bootstrap';

const EcoimDefaultAddressCard = () => {
  return (
    <Card className="h-full">
      <Card.Body>
        <div className="border-b border-dashed mb-6">
          <h4 className="mb-4 leading-sm lh-xl-1">
            Default Address
            <Button variant="link" className="p-0 ms-4" type="button">
              <FontAwesomeIcon icon={faEdit} className="text-soft" />
            </Button>
          </h4>
        </div>
        <div className="pb-12 lg:pb-6 xl:pb-12 mb-6 border-b border-dashed">
          <div className="flex flex-wrap justify-between">
            <h5 className="text-highlight">Address</h5>
            <p className="text-muted">
              Vancouver, British Columbia
              <br />
              Canada
            </p>
          </div>
        </div>
        <div>
          <div className="flex justify-between gap-2 mb-4">
            <h5 className="text-highlight mb-0">Email</h5>
            <a className="leading-none" href="mailto:shatinon@jeemail.com">
              shatinon@jeemail.com
            </a>
          </div>
          <div className="flex justify-between items-center gap-2">
            <h5 className="text-highlight mb-0">Phone</h5>
            <a href="tel:+1234567890">+1234567890</a>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default EcoimDefaultAddressCard;
