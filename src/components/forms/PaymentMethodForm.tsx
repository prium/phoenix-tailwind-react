import { Col, Row } from '@hummingbirdui/react';
import visaCardImage from 'assets/img/logos/visa.png';
import discoverImage from 'assets/img/logos/discover.png';
import masterCardImage from 'assets/img/logos/mastercard.png';
import americanExpressImage from 'assets/img/logos/american_express.png';
import classNames from 'classnames';

type marginTop = 'short' | 'default' | 'long';

interface PaymentMethodFormProps {
  className?: string;
  marginTop?: marginTop;
}

/**
 * "Payment Method" block shared by the trip checkout, flight payment and hotel
 * payment gold pages (`h3.mt-12.mb-8` — flight renders it flush: `mt-0`).
 */
const PaymentMethodForm = ({
  className,
  marginTop = 'default'
}: PaymentMethodFormProps) => {
  const start_year = 1990;
  const end_year = 2022; // gold: `while n < 2023`
  return (
    <div className={className}>
      <h3
        className={classNames('mb-8', {
          'mt-0': marginTop === 'short',
          'mt-12': marginTop === 'default',
          'mt-14': marginTop === 'long'
        })}
      >
        Payment Method
      </h3>
      <Row className="2xl:gx-10 mb-7">
        <Col md="auto">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="paymentMethod"
              id="creditCard"
              defaultChecked
            />
            <label
              className="form-check-label text-base text-default text-nowrap flex gap-2"
              htmlFor="creditCard"
            >
              Credit card
              <img src={visaCardImage} alt="" className="h-full" />
              <img src={discoverImage} alt="" className="h-full" />
              <img src={masterCardImage} alt="" className="h-full" />
              <img src={americanExpressImage} alt="" className="h-full" />
            </label>
          </div>
        </Col>
        <Col md="auto">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="paymentMethod"
              id="paypal"
            />
            <label
              className="form-check-label text-base text-default"
              htmlFor="paypal"
            >
              Paypal
            </label>
          </div>
        </Col>
        <Col md="auto">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="paymentMethod"
              id="coupon"
            />
            <label
              className="form-check-label text-base text-default"
              htmlFor="coupon"
            >
              Coupon
            </label>
          </div>
        </Col>
      </Row>
      <Row className="gx-4 gy-6">
        <Col md={6}>
          <label htmlFor="selectCard" className="font-bold text-highlight mb-1">
            Select card
          </label>
          <select className="form-select text-emphasis" id="selectCard">
            <option>Select a card</option>
            <option value="visa">Visa</option>
            <option value="discover">Discover</option>
            <option value="mastercard">Mastercard</option>
            <option value="american-express">American Express</option>
          </select>
        </Col>
        <Col md={6}>
          <label
            htmlFor="inputCardNumber"
            className="font-bold text-highlight mb-1"
          >
            Card number
          </label>
          <input
            className="form-control"
            type="number"
            placeholder="Enter card number"
            aria-label="Card number"
            id="inputCardNumber"
          />
        </Col>
        <Col xs={12}>
          <label htmlFor="inputName" className="font-bold text-highlight mb-1">
            Full name
          </label>
          <input
            className="form-control"
            type="text"
            name="inputName"
            placeholder="Ansolo Lazinatov"
            id="inputName"
            aria-label="Full name"
          />
        </Col>
        <Col md={6}>
          <label className="font-bold text-highlight mb-1">Expires on</label>
          <div className="flex">
            <select className="form-select text-emphasis me-4" defaultValue="">
              <option value="">Month</option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
            </select>
            <select className="form-select text-emphasis" defaultValue="">
              <option value="">Year</option>
              {Array.from({ length: end_year - start_year + 1 }).map(
                (_, index) => {
                  const year = start_year + index;
                  return (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  );
                }
              )}
            </select>
          </div>
        </Col>
        <Col md={6}>
          <label
            htmlFor="inputCardCVC"
            className="font-bold text-highlight mb-1"
          >
            CVC
          </label>
          <input
            className="form-control"
            type="number"
            name="CVC"
            id="inputCardCVC"
            placeholder="Enter a valid CVC"
            aria-label="CVC"
          />
        </Col>
        <Col xs={12}>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label
              className="form-check-label text-emphasis text-base"
              htmlFor="gridCheck"
            >
              Save Card Details
            </label>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PaymentMethodForm;
