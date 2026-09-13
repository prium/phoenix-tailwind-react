import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, cn } from '@hummingbirdui/react';
import Button from 'components/base/Button';

/** `+AddressCard` in mixins/e-commerce/customer-details/CustomerCards.pug */
const CustomerDefaultAddressCard = ({ className }: { className?: string }) => {
  return (
    <Card className={cn('h-full', className)}>
      <Card.Body>
        <div className="flex items-center mb-4">
          <h3 className="me-1">Default Address</h3>
          <Button variant="link" className="p-0">
            <FontAwesomeIcon
              icon={faPen}
              className="text-base ms-4 text-soft"
            />
          </Button>
        </div>
        <h5 className="text-muted">Address</h5>
        <p className="text-muted">
          Shatinon Mekalan
          <br />
          Vancouver, British Columbia
          <br />
          Canada
        </p>
        <div className="mb-4">
          <h5 className="text-muted">Email</h5>
          <a href="mailto:shatinon@jeemail.com">shatinon@jeemail.com</a>
        </div>
        <h5 className="text-muted">Phone</h5>
        <a href="tel:+1234567890" className="text-muted">
          +1234567890
        </a>
      </Card.Body>
    </Card>
  );
};

export default CustomerDefaultAddressCard;
