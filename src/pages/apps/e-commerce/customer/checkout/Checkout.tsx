import Button from 'components/base/Button';
import Section from 'components/base/Section';
import { Col, Row } from '@hummingbirdui/react';
import EcomAddressTable from 'components/tables/EcomAddressTable';
import { shippingDetailsAddress } from 'data/e-commerce';
import DeliveryType from 'components/modules/e-commerce/checkout/DeliveryType';
import { PaymentMethod } from 'components/modules/e-commerce/checkout/PaymentMethod';
import { currencyFormat } from 'helpers/utils';
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
              <h3>Billing Details</h3>
              <div className="form-check">
                <input
                  type="checkbox"
                  id="sameAsShipping"
                  className="form-check-input"
                  defaultChecked
                />
                <label
                  htmlFor="sameAsShipping"
                  className="form-check-label text-base font-normal"
                >
                  Same as shipping address
                </label>
              </div>
              <EcomAddressTable data={shippingDetailsAddress} />
              <hr className="my-10" />
              <DeliveryType />
              <hr className="my-10" />
              <PaymentMethod />

              <Row className="g-2 mb-8 lg:mb-0">
                <Col md={8} lg={9} className="grid">
                  <Button variant="primary" type="submit">
                    Pay {currencyFormat(695.2, { minimumFractionDigits: 2 })}
                  </Button>
                </Col>
                <Col md={4} lg={3} className="grid">
                  <Button
                    variant="phoenix"
                    color="secondary"
                    type="submit"
                    className="whitespace-nowrap"
                  >
                    Save Order and Exit
                  </Button>
                </Col>
              </Row>
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
