import Button from 'components/base/Button';
import ProductVariant from 'components/forms/ProductVariant';
import { Card, Col, Row } from 'react-bootstrap';

const VariantFormCard = ({ className }: { className?: string }) => {
  return (
    <Card className={className}>
      <Card.Body>
        <h4 className="mb-6">Variants</h4>

        <Row className="gx-4 gy-6 mb-4">
          <Col xs={12} sm={6} xl={12}>
            <ProductVariant title='Option 1' className="border-b border-light border-dashed sm:border-0 xl:border-b pb-6" />
          </Col>
          <Col xs={12} sm={6} xl={12}>
            <ProductVariant title='Option 2' />
          </Col>
        </Row>
        <Button variant="phoenix-primary" className="w-full">
          Add another option
        </Button>
      </Card.Body>
    </Card>
  );
};

export default VariantFormCard;
