import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Col, Row } from '@hummingbirdui/react';
import EcomCartSummaryCard from 'components/cards/EcomCartSummaryCard';
import BillingDetails from 'components/modules/e-commerce/checkout/BillingDetails';
import DeliveryType from 'components/modules/e-commerce/checkout/DeliveryType';
import { PaymentMethod } from 'components/modules/e-commerce/checkout/PaymentMethod';
import EcomCartTable from 'components/tables/EcomCartTable';
import { cartItems } from 'data/e-commerce/products';
import WidgetsSectionTitle from './WidgetsSectionTitle';

/** `+ECommerce` in mixins/widgets/ECommerce.pug */
const WidgetECommerce = () => {
  return (
    <>
      <WidgetsSectionTitle
        title="E-commerce"
        subtitle="Find more cards which are dedicatedly made for E-commerce."
        icon={faCartPlus}
        transform="shrink-4"
        className="mb-8 pt-12"
      />
      <div>
        <h3 className="mb-4">Cart</h3>
        <EcomCartTable products={cartItems} />
      </div>
      <div className="my-10">
        <Row className="g-8">
          <Col xl={8}>
            <PaymentMethod />
          </Col>
          <Col xl={4}>
            <EcomCartSummaryCard />
          </Col>
        </Row>
      </div>
      <Row className="g-10">
        <Col xl={6}>
          <DeliveryType />
        </Col>
        <Col xl={6}>
          <BillingDetails />
        </Col>
      </Row>
    </>
  );
};

export default WidgetECommerce;
