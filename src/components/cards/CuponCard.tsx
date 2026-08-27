import React from 'react';
import { Card, InputGroup, Form, Button } from 'react-bootstrap';

const CouponCard = () => {
  return (
    <Card className="bg-info-subtle border-info-subtle coupon-card-sticky-top mb-16 lg:mb-0">
      <Card.Body>
        <h4>Have a coupon?</h4>
        <p className="mb-6 text-md text-subtle">
          Enter code to get a discount
        </p>
        <InputGroup className="gap-2">
          <Form.Control type="text" placeholder="Coupon Code" />
          <Button variant="primary" className="rounded-md">
            Submit
          </Button>
        </InputGroup>
      </Card.Body>
    </Card>
  );
};

export default CouponCard;
