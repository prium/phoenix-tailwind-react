import { Card, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router';

const OrganizeFormCard = ({ className }: { className?: string }) => {
  return (
    <Card className={className}>
      <Card.Body>
        <h4 className="mb-6">Organize</h4>
        <Row className="gx-4 gy-6">
          <Col xs={12} sm={6} xl={12}>
            <div className="flex flex-wrap flex-between-center gap-2 mb-2">
              <h5 className="mb-0 text-highlight">Category</h5>
              <Link className="font-bold text-md" to="#!">
                Add new category
              </Link>
            </div>
            <Form.Select aria-label="category">
              <option value="men-cloth">Men's Clothing</option>
              <option value="women-cloth">Womens's Clothing</option>
              <option value="kid-cloth">Kid's Clothing</option>
            </Form.Select>
          </Col>
          <Col xs={12} sm={6} xl={12}>
            <div className="flex flex-wrap flex-between-center gap-2 mb-2">
              <h5 className="mb-0 text-highlight">Vendor</h5>
              <Link className="font-bold text-md" to="#!">
                Add new vendor
              </Link>
            </div>
            <Form.Select aria-label="vendor">
              <option value="men-cloth">Men's Clothing</option>
              <option value="women-cloth">Womens's Clothing</option>
              <option value="kid-cloth">Kid's Clothing</option>
            </Form.Select>
          </Col>
          <Col xs={12} sm={6} xl={12}>
            <div className="flex flex-wrap flex-between-center gap-2 mb-2">
              <h5 className="mb-2 text-highlight">Collection</h5>
              <Link className="font-bold text-md" to="#!">
                Add new collection
              </Link>
            </div>
            <Form.Control placeholder="Collection" />
          </Col>
          <Col xs={12} sm={6} xl={12}>
            <div className="flex flex-wrap flex-between-center gap-2 mb-2">
              <h5 className="mb-0 text-highlight">Tags</h5>
              <Link className="font-bold text-md leading-sm" to="#!">
                View all tags
              </Link>
            </div>
            <Form.Select aria-label="vendor">
              <option value="men-cloth">Men's Clothing</option>
              <option value="women-cloth">Womens's Clothing</option>
              <option value="kid-cloth">Kid's Clothing</option>
            </Form.Select>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default OrganizeFormCard;
