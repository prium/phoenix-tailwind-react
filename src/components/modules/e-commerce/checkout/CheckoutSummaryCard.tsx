import Button from 'components/base/Button';
import { cartItems } from 'data/e-commerce/products';
import { currencyFormat } from 'helpers/utils';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const CheckoutSummaryCard = () => {
  return (
    <Card>
      <Card.Body>
        <div className="flex items-center justify-between mb-6">
          <h3 className="mb-0">Summary</h3>
          <Button variant="link" className="pe-0" type="button">
            Edit cart
          </Button>
        </div>
        <div className="border-dashed border-b border-light mb-6">
          <div className="-ms-2 mb-8">
            {cartItems.map(item => (
              <Row className="items-center g-4 mb-2" key={item.id}>
                <Col xs={8} md={7} lg={8}>
                  <div className="flex items-center">
                    <img
                      className="me-2 ms-1"
                      src={item.image}
                      width={40}
                      alt={item.name}
                    />
                    <h6 className="font-semibold text-highlight leading-base line-clamp-2">
                      {item.name}
                    </h6>
                  </div>
                </Col>
                <Col xs={2} md={3} lg={2}>
                  <h6 className="text-sm mb-0">x1</h6>
                </Col>
                <Col xs={2} className="ps-0">
                  <h5 className="mb-0 font-semibold text-end">
                    {currencyFormat(item.price * item.quantity)}
                  </h5>
                </Col>
              </Row>
            ))}
          </div>
        </div>

        <div className="border-dashed border-b border-light mb-4">
          <div className="flex justify-between mb-2">
            <h5 className="text-default font-semibold">Items subtotal: </h5>
            <h5 className="text-default font-semibold">$691</h5>
          </div>
          <div className="flex justify-between mb-2">
            <h5 className="text-default font-semibold">Discount: </h5>
            <h5 className="text-danger font-semibold">-$59</h5>
          </div>
          <div className="flex justify-between mb-2">
            <h5 className="text-default font-semibold">Tax: </h5>
            <h5 className="text-default font-semibold">$126.20</h5>
          </div>
          <div className="flex justify-between mb-2">
            <h5 className="text-default font-semibold">Subtotal </h5>
            <h5 className="text-default font-semibold">$665</h5>
          </div>
          <div className="flex justify-between mb-4">
            <h5 className="text-default font-semibold">Shipping Cost </h5>
            <h5 className="text-default font-semibold">$30 </h5>
          </div>
        </div>

        <div className="flex justify-between">
          <h4 className="mb-0">Total :</h4>
          <h4 className="mb-0">$695.20</h4>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CheckoutSummaryCard;
