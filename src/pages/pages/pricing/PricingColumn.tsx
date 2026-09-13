import { Col, Row } from '@hummingbirdui/react';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import PricingColumnItem from 'components/pricing-items/PricingColumnItem';
import { pricingBreadcrumbItems, pricingColumnItems } from 'data/pricing';

const PricingColumn = () => {
  return (
    <>
      <PageBreadcrumb items={pricingBreadcrumbItems} />
      <h2 className="mb-12">Pricing</h2>
      <Row className="g-12 lg:g-20 mb-12">
        {pricingColumnItems.map(item => (
          <Col key={item.id} xs={12} sm={6} xxl={3}>
            <PricingColumnItem pricing={item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default PricingColumn;
