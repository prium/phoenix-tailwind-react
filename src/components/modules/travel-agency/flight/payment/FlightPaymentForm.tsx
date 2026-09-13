import { Card, cn } from '@hummingbirdui/react';
import visa from 'assets/img/logos/visa.png';
import discover from 'assets/img/logos/discover.png';
import mastercard from 'assets/img/logos/mastercard.png';
import americanExpress from 'assets/img/logos/american_express.png';

const cardLogos = [visa, discover, mastercard, americanExpress];

const months = ['January', 'February', 'March'];
const years = Array.from({ length: 2023 - 1990 }, (_, i) => 1990 + i);

/** `+FlightPaymentForm` in mixins/travel-agency/flight/payment/FlightPaymentForm.pug */
const FlightPaymentForm = ({ className }: { className?: string }) => {
  return (
    <Card className={cn(className)}>
      <Card.Body>
        <form id="flightCheckoutForm">
          <h3 className="mb-8">Payment Method</h3>
          <div className="row 2xl:gx-10 mb-7">
            <div className="md:col-auto">
              <div className="form-check">
                <input
                  className="form-check-input"
                  id="creditCard"
                  type="radio"
                  name="paymentMethod"
                  defaultChecked
                />
                <label
                  className="form-check-label text-base text-default text-nowrap flex gap-2"
                  htmlFor="creditCard"
                >
                  Credit card
                  {cardLogos.map(logo => (
                    <img key={logo} className="h-full" src={logo} alt="" />
                  ))}
                </label>
              </div>
            </div>
            <div className="md:col-auto">
              <div className="form-check">
                <input
                  className="form-check-input"
                  id="paypal"
                  type="radio"
                  name="paymentMethod"
                />
                <label
                  className="form-check-label text-base text-default text-nowrap"
                  htmlFor="paypal"
                >
                  Paypal
                </label>
              </div>
            </div>
            <div className="md:col-auto">
              <div className="form-check">
                <input
                  className="form-check-input"
                  id="coupon"
                  type="radio"
                  name="paymentMethod"
                />
                <label
                  className="form-check-label text-base text-default text-nowrap"
                  htmlFor="coupon"
                >
                  Coupon
                </label>
              </div>
            </div>
          </div>
          <div className="row gx-4 gy-6">
            <div className="md:col-6">
              <label
                className="font-bold text-highlight mb-1"
                htmlFor="selectCard"
              >
                Select card
              </label>
              <select
                id="selectCard"
                className="form-select text-emphasis"
                defaultValue="Select a card"
              >
                <option>Select a card</option>
                <option value="visa">Visa</option>
                <option value="discover">Discover</option>
                <option value="mastercard">Mastercard</option>
                <option value="american-express">American Express</option>
              </select>
            </div>
            <div className="md:col-6">
              <label
                className="font-bold text-highlight mb-1"
                htmlFor="inputCardNumber"
              >
                Card number
              </label>
              <input
                id="inputCardNumber"
                className="form-control"
                type="number"
                placeholder="Enter card number"
                aria-label="Card number"
              />
            </div>
            <div className="col-12">
              <label
                className="font-bold text-highlight mb-1"
                htmlFor="inputName"
              >
                Full name
              </label>
              <input
                id="inputName"
                className="form-control"
                type="text"
                placeholder="Ansolo Lazinatov"
                aria-label="Full name"
              />
            </div>
            <div className="md:col-6">
              <label className="font-bold text-highlight mb-1">
                Expires on
              </label>
              <div className="flex">
                <select
                  className="form-select text-emphasis me-4"
                  defaultValue="Month"
                >
                  <option>Month</option>
                  {months.map(month => (
                    <option key={month}>{month}</option>
                  ))}
                </select>
                <select
                  className="form-select text-emphasis"
                  defaultValue="Year"
                >
                  <option>Year</option>
                  {years.map(year => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="md:col-6">
              <label
                className="font-bold text-highlight mb-1"
                htmlFor="inputCardCVC"
              >
                CVC
              </label>
              <input
                id="inputCardCVC"
                className="form-control"
                type="number"
                placeholder="Enter a valid CVC"
                aria-label="CVC"
              />
            </div>
            <div className="col-12">
              <div className="form-check">
                <input
                  id="gridCheck"
                  className="form-check-input"
                  type="checkbox"
                />
                <label
                  className="form-check-label text-emphasis text-base"
                  htmlFor="gridCheck"
                >
                  Save Card Details
                </label>
              </div>
            </div>
          </div>
        </form>
      </Card.Body>
    </Card>
  );
};

export default FlightPaymentForm;
