import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { Card, Col, Row } from '@hummingbirdui/react';

/** `+AddressCard` in phoenix-tailwind mixins/e-commerce/profile/ProfileCards.pug */
const EcoimDefaultAddressCard = () => {
  return (
    <Card className="h-full">
      <Card.Body>
        <div className="border-b border-dashed">
          <h4 className="mb-3.5">
            Default Address
            <Button variant="link" className="p-0" type="button">
              <FontAwesomeIcon
                icon={faEdit}
                className="text-md ms-2.75 text-soft"
                transform="up-2.5"
              />
            </Button>
          </h4>
        </div>
        <div className="pt-6 mb-12 lg:mb-6 xl:mb-12">
          <Row className="justify-between">
            <Col xs="auto">
              <h5 className="text-highlight">Address</h5>
            </Col>
            <Col xs="auto">
              <p className="text-muted">
                Vancouver, British Columbia
                <br />
                Canada
              </p>
            </Col>
          </Row>
        </div>
        <div className="border-t border-dashed pt-6">
          <Row className="flex-between-center mb-2">
            <Col xs="auto">
              <h5 className="text-highlight mb-0">Email</h5>
            </Col>
            <Col xs="auto">
              <a className="leading-none" href="mailto:shatinon@jeemail.com">
                shatinon@jeemail.com
              </a>
            </Col>
          </Row>
          <Row className="flex-between-center">
            <Col xs="auto">
              <h5 className="text-highlight mb-0">Phone</h5>
            </Col>
            <Col xs="auto">
              <a href="tel:+1234567890">+1234567890</a>
            </Col>
          </Row>
        </div>
      </Card.Body>
    </Card>
  );
};

export default EcoimDefaultAddressCard;
