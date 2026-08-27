import { Col, Form, Row } from 'react-bootstrap';
import visa from 'assets/img/logos/visa.png';
import discover from 'assets/img/logos/discover.png';
import mastercard from 'assets/img/logos/mastercard.png';
import american_express from 'assets/img/logos/american_express.png';
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
dayjs.extend(localeData);

export const PaymentMethod = () => {
  return (
    <>
      <h3 className="mb-8">Payment Method</h3>
      <Row className="g-6 mb-8">
        <Col xs={12}>
          <Row className="lg:gx-20">
            <Col xs={12} md="auto">
              <div className="flex">
                <Form.Check type="radio" id="creditCard" className="me-4">
                  <Form.Check.Input
                    value="credit_card"
                    type="radio"
                    name="paymentMethod"
                  />
                  <Form.Check.Label className="text-base text-default">
                    Credit card
                  </Form.Check.Label>
                </Form.Check>
                <img className="h-full me-2" src={visa} alt="visa" />
                <img className="h-full me-2" src={discover} alt="discover" />
                <img className="h-full me-2" src={mastercard} alt="mastercard" />
                <img
                  className="h-full"
                  src={american_express}
                  alt="american_express"
                />
              </div>
            </Col>
            <Col xs={12} md="auto">
              <Form.Check type="radio" id="paypal">
                <Form.Check.Input
                  value="paypal"
                  type="radio"
                  name="paymentMethod"
                />
                <Form.Check.Label className="text-base text-default">
                  Paypal
                </Form.Check.Label>
              </Form.Check>
            </Col>
            <Col xs={12} md="auto">
              <Form.Check type="radio" id="coupon">
                <Form.Check.Input
                  type="radio"
                  value="coupon"
                  name="paymentMethod"
                />
                <Form.Check.Label className="text-base text-default">
                  Coupon
                </Form.Check.Label>
              </Form.Check>
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <Form.Group as={Col}>
            <Form.Label className="text-base text-highlight ps-0 text-transform-none">
              Select card
            </Form.Label>
            <Form.Select className="text-emphasis">
              <option>Select a card</option>
              <option value="visa">Visa</option>
              <option value="discover">Discover</option>
              <option value="mastercard">Mastercard</option>
              <option value="american-express">American Express</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <h5 className="text-highlight mb-2"> Card number</h5>
            <Form.Control
              className="text-emphasis"
              type="number"
              placeholder="Enter card number"
            />
          </Form.Group>
        </Col>
        <Col xs={12}>
          <Form.Group as={Col}>
            <h5 className="text-highlight mb-2">Full name</h5>
            <Form.Control
              name="full_name"
              type="text"
              placeholder="Type your fullname"
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <h5 className="text-highlight mb-2">Expires on</h5>
          <div className="flex gap-4">
            <Form.Select className="text-emphasis" name="month">
              <option>Month</option>
              {dayjs.months().map(month => (
                <option value={month} key={month}>
                  {month}
                </option>
              ))}
            </Form.Select>

            <select className="form-select text-emphasis">
              <option>Year</option>
              <option value={2022}>2022</option>
              <option value={2023}>2023</option>
              <option value={2024}>2024</option>
              <option value={2025}>2025</option>
              <option value={2026}>2026</option>
            </select>
          </div>
        </Col>
        <Col md={6}>
          <Form.Group as={Col}>
            <h5 className="text-highlight mb-2">CVC</h5>
            <Form.Control
              className="text-emphasis input-spin-none"
              type="number"
              placeholder="Enter a valid CVC"
            />
          </Form.Group>
        </Col>
        <Col xs={12}>
          <Form.Check type="checkbox" id="gridCheck" className="me-4">
            <Form.Check.Input
              type="checkbox"
              value="save"
              name="paymentMethod"
            />
            <Form.Check.Label className="text-base text-emphasis">
              Save Card Details
            </Form.Check.Label>
          </Form.Check>
        </Col>
      </Row>
    </>
  );
};
