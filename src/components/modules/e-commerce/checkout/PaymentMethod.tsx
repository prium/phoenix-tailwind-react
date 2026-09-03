import { Col, Input, Row, Select } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import { currencyFormat } from 'helpers/utils';
import visa from 'assets/img/logos/visa.png';
import discover from 'assets/img/logos/discover.png';
import mastercard from 'assets/img/logos/mastercard.png';
import american_express from 'assets/img/logos/american_express.png';
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
dayjs.extend(localeData);

const FieldLabel = ({
  htmlFor,
  children
}: {
  htmlFor?: string;
  children: string;
}) => (
  <label
    htmlFor={htmlFor}
    className="form-label text-base text-highlight ps-0 normal-case"
  >
    {children}
  </label>
);

/** `+PaymentMethod` in phoenix-tailwind mixins/e-commerce/checkout/Checkout.pug */
export const PaymentMethod = () => {
  return (
    <>
      <h3 className="mb-8">Payment Method</h3>
      <Row className="g-6 mb-11">
        <Col xs={12}>
          <Row className="lg:gx-20">
            <Col md="auto">
              <div className="form-check mb-1.25">
                <input
                  type="radio"
                  id="creditCard"
                  name="paymentMethod"
                  value="credit_card"
                  className="form-check-input"
                  defaultChecked
                />
                <label
                  htmlFor="creditCard"
                  className="form-check-label text-base text-default whitespace-nowrap flex gap-2"
                >
                  Credit card
                  <img className="h-full" src={visa} alt="visa" />
                  <img className="h-full" src={discover} alt="discover" />
                  <img className="h-full" src={mastercard} alt="mastercard" />
                  <img
                    className="h-full"
                    src={american_express}
                    alt="american express"
                  />
                </label>
              </div>
            </Col>
            <Col xs={12} md="auto">
              <div className="form-check mb-1.25">
                <input
                  type="radio"
                  id="paypal"
                  name="paymentMethod"
                  value="paypal"
                  className="form-check-input"
                />
                <label
                  htmlFor="paypal"
                  className="form-check-label text-base text-default"
                >
                  Paypal
                </label>
              </div>
            </Col>
            <Col xs={12} md="auto">
              <div className="form-check mb-1.25">
                <input
                  type="radio"
                  id="coupon"
                  name="paymentMethod"
                  value="coupon"
                  className="form-check-input"
                />
                <label
                  htmlFor="coupon"
                  className="form-check-label text-base text-default"
                >
                  Coupon
                </label>
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <FieldLabel htmlFor="selectCard">Select card</FieldLabel>
          <Select id="selectCard" className="text-emphasis" defaultValue="">
            <option value="">Select a card</option>
            <option value="visa">Visa</option>
            <option value="discover">Discover</option>
            <option value="mastercard">Mastercard</option>
            <option value="american-express">American Express</option>
          </Select>
        </Col>
        <Col md={6}>
          <FieldLabel htmlFor="inputCardNumber">Card number</FieldLabel>
          <Input
            id="inputCardNumber"
            className="text-emphasis"
            type="number"
            placeholder="Enter card number"
          />
        </Col>
        <Col xs={12}>
          <FieldLabel htmlFor="inputName">Full name</FieldLabel>
          <Input
            id="inputName"
            name="full_name"
            type="text"
            placeholder="Ansolo Lazinatov"
          />
        </Col>
        <Col md={6}>
          <FieldLabel>Expires on</FieldLabel>
          <div className="flex">
            <Select className="text-emphasis me-4" name="month" defaultValue="">
              <option value="">Month</option>
              {dayjs.months().map(month => (
                <option value={month} key={month}>
                  {month}
                </option>
              ))}
            </Select>
            <Select className="text-emphasis" name="year" defaultValue="">
              <option value="">Year</option>
              {[2022, 2023, 2024, 2025, 2026].map(year => (
                <option value={year} key={year}>
                  {year}
                </option>
              ))}
            </Select>
          </div>
        </Col>
        <Col md={6}>
          <FieldLabel htmlFor="inputCardCVC">CVC</FieldLabel>
          <Input
            id="inputCardCVC"
            className="text-emphasis input-spin-none"
            type="number"
            placeholder="Enter a valid CVC"
          />
        </Col>
        <Col xs={12}>
          <div className="form-check">
            <input
              type="checkbox"
              id="gridCheck"
              value="save"
              className="form-check-input"
            />
            <label
              htmlFor="gridCheck"
              className="form-check-label text-emphasis text-base"
            >
              Save Card Details
            </label>
          </div>
        </Col>
      </Row>
      <Row className="g-2 mb-8 lg:mb-0">
        <Col md={8} lg={9} className="grid">
          <Button variant="primary" type="submit">
            Pay {currencyFormat(695.2, { minimumFractionDigits: 2 })}
          </Button>
        </Col>
        <Col md={4} lg={3} className="grid">
          <Button
            variant="phoenix"
            color="secondary"
            type="submit"
            className="whitespace-nowrap"
          >
            Save Order and Exit
          </Button>
        </Col>
      </Row>
    </>
  );
};
