import Section from 'components/base/Section';
import EcomCartSummaryCard from 'components/cards/EcomCartSummaryCard';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import EcomCartTable from 'components/tables/EcomCartTable';
import { defaultBreadcrumbItems } from 'data/commonData';
import { cartItems } from 'data/e-commerce/products';
import { Col, Row } from '@hummingbirdui/react';

const Cart = () => {
  return (
    <div className="pt-8 mb-16">
      <Section small className="py-0" containerClassName="cart">
        <PageBreadcrumb items={defaultBreadcrumbItems} />
        <h2 className="mb-10">Cart</h2>
        <Row className="g-8">
          <Col xs={12} lg={8}>
            <EcomCartTable products={cartItems} />
          </Col>
          <Col xs={12} lg={4}>
            <EcomCartSummaryCard />
          </Col>
        </Row>
      </Section>
    </div>
  );
};

export default Cart;
