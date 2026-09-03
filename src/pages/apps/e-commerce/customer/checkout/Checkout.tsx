import Button from 'components/base/Button';
import Section from 'components/base/Section';
import { Col, Row } from '@hummingbirdui/react';
import EcomAddressTable from 'components/tables/EcomAddressTable';
import { shippingDetailsAddress } from 'data/e-commerce';
import DeliveryType from 'components/modules/e-commerce/checkout/DeliveryType';
import { PaymentMethod } from 'components/modules/e-commerce/checkout/PaymentMethod';
import BillingDetails from 'components/modules/e-commerce/checkout/BillingDetails';
import CheckoutSummaryCard from 'components/modules/e-commerce/checkout/CheckoutSummaryCard';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import { defaultBreadcrumbItems } from 'data/commonData';

/** apps/e-commerce/landing/checkout.pug */
const Checkout = () => {
  return (
    <div className="pt-8 mb-16">
      <Section small className="py-0">
        <PageBreadcrumb items={defaultBreadcrumbItems} />
        <h2 className="mb-8">Check out</h2>
        <Row className="justify-between">
          <Col lg={7}>
            <form>
              <div className="flex items-end">
                <h3 className="mb-0 me-4">Shipping Details</h3>
                <Button variant="link" className="p-0" type="button">
                  Edit
                </Button>
              </div>
              <EcomAddressTable data={shippingDetailsAddress} />
              <hr className="my-10" />
              <BillingDetails />
              <hr className="my-10" />
              <DeliveryType />
              <hr className="my-10" />
              <PaymentMethod />
            </form>
          </Col>
          <Col lg={5} xl={4}>
            <CheckoutSummaryCard />
          </Col>
        </Row>
      </Section>
    </div>
  );
};

export default Checkout;
