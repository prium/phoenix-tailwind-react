import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from '@hummingbirdui/react';
import TripCheckoutFormDatePicker from 'components/modules/travel-agency/trip/checkout/TripCheckoutFormDatePicker';
import TripCheckoutFormTimePicker from 'components/modules/travel-agency/trip/checkout/TripCheckoutFormTimePicker';
import { ComponentProps } from 'react';
import { Link } from 'react-router';
import PaymentMethodForm from './PaymentMethodForm';

interface TextInputFieldProps extends ComponentProps<'input'> {
  id: string;
  label: string;
  endIcon?: boolean;
}

const TextInputField = ({
  id,
  label,
  endIcon,
  ...rest
}: TextInputFieldProps) => {
  return (
    <>
      <label htmlFor={id} className="font-bold text-highlight mb-1">
        {label}
      </label>
      {endIcon ? (
        <div className="relative">
          <input id={id} className="form-control pe-10" {...rest} />
          <FontAwesomeIcon
            icon={faLocationCrosshairs}
            className="absolute top-0 end-0 mt-2 me-4 text-soft"
            transform="down-3"
          />
        </div>
      ) : (
        <input id={id} className="form-control" {...rest} />
      )}
    </>
  );
};

/** checkout column in phoenix-tailwind pug/apps/travel-agency/trip/checkout.pug */
const TripCheckoutForm = () => {
  return (
    <>
      <hr className="mt-8 mb-12 border-subtle" />
      <h3 className="mb-8">Contact details</h3>
      <Row className="g-4 mb-4">
        <Col sm={6}>
          <TextInputField
            id="email"
            label="Email"
            name="email"
            type="text"
            placeholder="Enter email address"
          />
        </Col>
        <Col sm={6}>
          <TextInputField
            id="phone-number"
            label="Phone number"
            name="phoneNumber"
            type="text"
            placeholder="Enter phone number"
          />
        </Col>
      </Row>
      <div className="form-check">
        <input
          className="form-check-input"
          id="recieveUpdate"
          type="checkbox"
        />
        <label
          className="form-check-label font-normal text-base text-default"
          htmlFor="recieveUpdate"
        >
          Get booking updates via SMS.
        </label>
        <Link to="#!" className="text-nowrap">
          {' '}
          Terms apply
        </Link>
      </div>
      <hr className="my-12 border-subtle" />
      <h3 className="mb-4">Traveler details</h3>
      <div className="form-check mb-8">
        <input
          className="form-check-input"
          id="anotherCountry"
          type="checkbox"
        />
        <label
          className="form-check-label font-normal text-base text-default"
          htmlFor="anotherCountry"
        >
          I am travelling from another country
        </label>
      </div>
      <Row className="gx-4 gy-6">
        <Col sm={6}>
          <TextInputField
            id="first-name"
            label="First name"
            name="firstName"
            type="text"
            placeholder="Enter first name"
          />
        </Col>
        <Col sm={6}>
          <TextInputField
            id="last-name"
            label="Last name"
            name="lastName"
            type="text"
            placeholder="Enter last name"
          />
        </Col>
        <Col sm={6}>
          <TripCheckoutFormDatePicker
            id="date-of-birth"
            label="Date of birth"
          />
        </Col>
        <Col sm={6}>
          <TextInputField
            id="passport-number"
            label="Passport number"
            name="passportNumber"
            type="text"
            placeholder="Enter passport number"
          />
        </Col>
        <Col sm={6}>
          <TextInputField
            id="country"
            label="Country"
            name="country"
            type="text"
            placeholder="Enter country name"
          />
        </Col>
        <Col sm={6}>
          <TripCheckoutFormDatePicker
            id="expiration-date"
            label="Expiration date"
          />
        </Col>
      </Row>
      <hr className="my-12 border-subtle" />
      <h3 className="mb-8">Tour specifics</h3>
      <Row className="gx-4 gy-6">
        <Col sm={6}>
          <TextInputField
            id="arrival-airline"
            label="Arrival airline"
            name="arrivalAirline"
            type="text"
            placeholder="Enter arrival airline"
          />
        </Col>
        <Col sm={6}>
          <TextInputField
            id="arrival-flight-no"
            label="Arrival flight no"
            name="arrivalFlightNo"
            type="text"
            placeholder="Enter flight no."
          />
        </Col>
        {/* gold puts "Arrival time" on its own nested row */}
        <Col xs={12}>
          <Row>
            <Col sm={6}>
              <TripCheckoutFormTimePicker
                id="arrival-time"
                label="Arrival time"
              />
            </Col>
          </Row>
        </Col>
        <Col sm={6}>
          <TripCheckoutFormTimePicker id="cruise-time" label="Cruise time" />
        </Col>
        <Col sm={6}>
          <TripCheckoutFormTimePicker
            id="disemberkation-time"
            label="Disemberkation time"
          />
        </Col>
        <Col sm={6}>
          <TextInputField
            id="departure-flight-no"
            label="Departure flight no"
            name="departureFlightNo"
            type="text"
            placeholder="Enter flight no."
          />
        </Col>
        <Col sm={6}>
          <TripCheckoutFormDatePicker
            id="departure-date"
            label="Departure date"
          />
        </Col>
        <Col sm={6}>
          <TripCheckoutFormTimePicker
            id="departure-time"
            label="Departure time"
          />
        </Col>
        <Col sm={6}>
          <TextInputField
            id="departure-airline"
            label="Departure airline"
            name="departureAirline"
            type="text"
            placeholder="Enter name"
          />
        </Col>
        <Col sm={6}>
          <TextInputField
            id="pick-up-location"
            label="Pick up location"
            endIcon
            name="pickupLocation"
            type="text"
            placeholder="Enter location"
          />
        </Col>
        <Col sm={6}>
          <TextInputField
            id="drop-off-location"
            label="Drop off location"
            endIcon
            name="dropOffLocation"
            type="text"
            placeholder="Enter location"
          />
        </Col>
      </Row>
      <hr className="my-12 border-subtle" />
      <h5 className="mb-2">Special requests</h5>
      <p className="text-subtle text-md">
        Special requests cannot be guaranteed-but the property will do its best
        to meet your needs. You can always make a special request after your
        booking is complete!
      </p>
      <textarea
        className="form-control"
        id="request"
        name="request"
        placeholder="Type your request"
        rows={5}
      />
      <PaymentMethodForm />
    </>
  );
};

export default TripCheckoutForm;
