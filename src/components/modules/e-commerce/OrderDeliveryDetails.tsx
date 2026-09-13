import OrderInfoItem from 'components/info-items/OrderInfoItem';
import { Col, Row } from '@hummingbirdui/react';
import { Link } from 'react-router';

export const BillingDetails = () => {
  return (
    <>
      <h4 className="mb-8">Billing details</h4>
      <Row className="g-6 sm:flex-col">
        <Col xs={6} sm={12}>
          <OrderInfoItem icon="user" label="Customer" />
          <Link className="text-md ms-6" to="#!">
            Shatinon Mekalan
          </Link>
        </Col>
        <Col xs={6} sm={12}>
          <OrderInfoItem icon="mail" label="Email" />
          <Link className="text-md ms-6" to="mailto:shatinon@jeemail.com">
            shatinon@jeemail.com
          </Link>
        </Col>
        <Col xs={6} sm={12}>
          <OrderInfoItem icon="phone" label="Phone" />
          <Link className="text-md ms-6" to="tel:+1234567890">
            +1234567890
          </Link>
        </Col>
        <Col xs={6} sm={12}>
          <OrderInfoItem icon="home" label="Address" />
          <div className="ms-6">
            <p className="text-muted mb-0 text-md">Shatinon Mekalan</p>
            <p className="text-muted mb-0 text-md">
              Vancouver, British Columbia,
              <br className="hidden sm:block" />
              Canada
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
};

export const ShippingDetails = () => {
  return (
    <>
      <h4 className="mb-8">Shipping details</h4>
      <Row className="g-6 sm:flex-col">
        <Col xs={6} sm={12}>
          <OrderInfoItem icon="mail" label="Email" />
          <Link className="text-md ms-6" to="mailto:shatinon@jeemail.com">
            shatinon@jeemail.com
          </Link>
        </Col>
        <Col xs={6} sm={12}>
          <OrderInfoItem icon="phone" label="Phone" />
          <Link className="text-md ms-6" to="tel:+1234567890">
            +1234567890
          </Link>
        </Col>
        <Col xs={6} sm={12}>
          <OrderInfoItem icon="calendar" label="Shipping Date" />
          <p className="mb-0 text-muted text-md ms-6">12 Nov, 2021</p>
        </Col>
        <Col xs={6} sm={12}>
          <OrderInfoItem icon="home" label="Address" />
          <div className="ms-6">
            <p className="text-muted mb-0 text-md">Shatinon Mekalan</p>
            <p className="text-muted mb-0 text-md">
              Vancouver, British Columbia,
              <br className="hidden sm:block" />
              Canada
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
};

export const OtherDetails = () => {
  return (
    <>
      <h4 className="mb-8">Other details</h4>
      <Row className="g-6 sm:flex-col">
        <Col xs={6} sm={12}>
          <OrderInfoItem icon="shopping-bag" label="Gift order" />
          <p className="mb-0 text-muted text-md ms-6">Yes</p>
        </Col>
        <Col xs={6} sm={12}>
          <OrderInfoItem icon="package" label="Wraping" />
          <p className="mb-0 text-muted text-md ms-6">Magic wrapper</p>
        </Col>
        <Col xs={6} sm={12}>
          <OrderInfoItem icon="file-text" label="Recipient" />
          <p className="mb-0 text-muted text-md ms-6">Recipient</p>
        </Col>
        <Col xs={6} sm={12}>
          <OrderInfoItem icon="mail" label="Gift Meassge" />
          <div className="ms-6">
            <p className="text-muted text-md mb-0">
              Happy Birthday Shiniga <br />
              Lots of Love Buga Buga!!
            </p>
            <p className="mb-0 text-muted text-md">
              Yours, <br />
              Mekalan
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
};
