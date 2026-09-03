import Button from 'components/base/Button';
import ProductVariant from 'components/forms/ProductVariant';
import { Card, Col, Row } from '@hummingbirdui/react';

/** `+VariantCard` in mixins/e-commerce/add-product/VariantCard.pug */
const VariantFormCard = ({ className }: { className?: string }) => {
  return (
    <Card className={className}>
      <Card.Body>
        <h4 className="card-title mb-6">Variants</h4>

        <Row className="g-4">
          <Col xs={12} sm={6} xl={12}>
            <ProductVariant
              title="Option 1"
              className="border-b border-subtle border-dashed sm:border-0 xl:border-b pb-6"
            />
          </Col>
          <Col xs={12} sm={6} xl={12}>
            <ProductVariant title="Option 2" selectMenuClassName="mb-4" />
          </Col>
        </Row>
        <Button
          variant="phoenix"
          color="primary"
          className="w-full"
          type="button"
        >
          Add another option
        </Button>
      </Card.Body>
    </Card>
  );
};

export default VariantFormCard;
