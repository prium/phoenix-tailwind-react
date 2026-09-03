import { Card, Col, Input, Row, Select } from '@hummingbirdui/react';
import { Link } from 'react-router';

const clothingOptions = (
  <>
    <option value="men-cloth">Men&apos;s Clothing</option>
    <option value="women-cloth">Womens&apos;s Clothing</option>
    <option value="kid-cloth">Kid&apos;s Clothing</option>
  </>
);

/** `+OrganizeCard` in mixins/e-commerce/add-product/OrganizeCard.pug */
const OrganizeFormCard = ({ className }: { className?: string }) => {
  return (
    <Card className={className}>
      <Card.Body>
        <h4 className="card-title text-lg mb-6">Organize</h4>
        <Row className="gx-3">
          <Col xs={12} sm={6} xl={12}>
            <div className="mb-6">
              <div className="flex flex-wrap flex-between-center mb-2">
                <h5 className="mb-0 text-highlight me-2">Category</h5>
                <Link className="font-bold text-md" to="#!">
                  Add new category
                </Link>
              </div>
              <Select className="mb-4" aria-label="category">
                {clothingOptions}
              </Select>
            </div>
          </Col>
          <Col xs={12} sm={6} xl={12}>
            <div className="mb-6">
              <div className="flex flex-wrap flex-between-center mb-2">
                <h5 className="mb-0 text-highlight me-2">Vendor</h5>
                <Link className="font-bold text-md" to="#!">
                  Add new vendor
                </Link>
              </div>
              <Select className="mb-4" aria-label="vendor">
                {clothingOptions}
              </Select>
            </div>
          </Col>
          <Col xs={12} sm={6} xl={12}>
            <div className="mb-6">
              <div className="flex flex-wrap mb-2 flex-between-center">
                <h5 className="mb-2 text-highlight">Collection</h5>
                <Link className="font-bold text-md" to="#!">
                  Add new collection
                </Link>
              </div>
              <Input type="text" placeholder="Collection" className="xl:mb-4" />
            </div>
          </Col>
          <Col xs={12} sm={6} xl={12}>
            <div className="flex flex-wrap flex-between-center mb-2">
              <h5 className="mb-0 text-highlight me-2">Tags</h5>
              <Link className="font-bold text-md leading-sm" to="#!">
                View all tags
              </Link>
            </div>
            <Select aria-label="tags">{clothingOptions}</Select>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default OrganizeFormCard;
