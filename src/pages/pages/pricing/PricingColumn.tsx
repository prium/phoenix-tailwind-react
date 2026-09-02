import PageBreadcrumb from 'components/common/PageBreadcrumb';
import PricingColumnItem from 'components/pricing-items/PricingColumnItem';
import { pricingBreadcrumbItems, pricingColumnItems } from 'data/pricing';
import { Row } from 'react-bootstrap';

const PricingColumn = () => {
  return (
    <>
      <PageBreadcrumb items={pricingBreadcrumbItems} />
      <h2 className="mb-12">Pricing</h2>
      <Row className="g-12 lg:g-20 mb-12">
        {pricingColumnItems.map(item => (
          <PricingColumnItem key={item.id} pricing={item} />
        ))}
      </Row>
    </>
  );
};

export default PricingColumn;
