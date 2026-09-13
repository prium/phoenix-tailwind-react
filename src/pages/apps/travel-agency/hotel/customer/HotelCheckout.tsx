import { Link } from 'react-router';
import TravelFooter from 'components/footers/TravelFooter';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import { defaultBreadcrumbItems } from 'data/commonData';
import { Col, Row } from '@hummingbirdui/react';
import HotelDetailsSummaryCard from 'components/cards/HotelDetailsSummaryCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faCircle } from '@fortawesome/free-solid-svg-icons';
import ResizableNavbar from 'components/navbars/travel-agency/ResizableNavbar';
import { hotelNavItems } from 'data/travel-agency/resizableNav';

interface InlineRadioProps {
  id: string;
  name: string;
  value: string;
  label: string;
  defaultChecked?: boolean;
  className?: string;
}

const InlineRadio = ({
  id,
  name,
  value,
  label,
  defaultChecked,
  className
}: InlineRadioProps) => (
  <div className={className ?? 'form-check-inline'}>
    <input
      className="form-check-input"
      id={id}
      type="radio"
      name={name}
      value={value}
      defaultChecked={defaultChecked}
    />
    <label className="form-check-label" htmlFor={id}>
      {label}
    </label>
  </div>
);

interface StayCheckboxProps {
  id: string;
  label: string;
  helper: string;
  className?: string;
}

const StayCheckbox = ({ id, label, helper, className }: StayCheckboxProps) => (
  <div className={className ?? 'form-check items-start'}>
    <input className="form-check-input mt-1" id={id} type="checkbox" />
    <label
      className="form-check-label font-normal text-base text-default"
      htmlFor={id}
    >
      {label}
      <span className="block text-md text-subtle">{helper}</span>
    </label>
  </div>
);

interface LabeledInputProps {
  id: string;
  label: string;
  type?: string;
}

const LabeledInput = ({ id, label, type = 'text' }: LabeledInputProps) => (
  <>
    <label htmlFor={id} className="font-bold text-highlight mb-1">
      {label}
    </label>
    <input className="form-control" type={type} id={id} placeholder={label} />
  </>
);

/** apps/travel-agency/hotel/customer/checkout.pug */
const HotelCheckout = () => {
  return (
    <>
      <ResizableNavbar navItems={hotelNavItems} />
      <section className="pt-10 pb-16">
        <div className="container-medium">
          <PageBreadcrumb items={defaultBreadcrumbItems} className="mb-4" />
          <h2 className="mb-8">Check out</h2>
          <Row className="justify-between">
            <Col lg={7} xl={6}>
              <form id="checkoutForm1" onSubmit={e => e.preventDefault()}>
                <hr className="mt-0 mb-12" />
                <h3 className="font-bold mb-8">Enter your details</h3>
                <h5 className="mb-5">Are you travelling for work?</h5>
                <InlineRadio
                  id="no"
                  name="tripTypeRadio"
                  value="no"
                  label="No"
                  defaultChecked
                  className="form-check-inline me-6"
                />{' '}
                <InlineRadio
                  id="yes"
                  name="tripTypeRadio"
                  value="yes"
                  label="Yes"
                />
                <Row className="g-4 mb-8 mt-1">
                  <Col sm={6}>
                    <LabeledInput id="first-name" label="First name" />
                  </Col>
                  <Col sm={6}>
                    <LabeledInput id="last-name" label="Last name" />
                  </Col>
                </Row>
                <Row className="g-4">
                  <Col sm={6}>
                    <LabeledInput
                      id="email-address"
                      label="Email address"
                      type="email"
                    />
                  </Col>
                  <Col sm={6}>
                    <LabeledInput
                      id="confirm-email-address"
                      label="Confirm email address"
                      type="email"
                    />
                  </Col>
                </Row>
                <h5 className="mb-5 mt-12">Who are you booking for?</h5>
                <InlineRadio
                  id="me"
                  name="bookingPersonRadio"
                  value="no"
                  label="I am the main guest"
                  defaultChecked
                  className="form-check-inline me-6"
                />{' '}
                <InlineRadio
                  id="else"
                  name="bookingPersonRadio"
                  value="yes"
                  label="I am booking for somebody else"
                />
                <h5 className="mb-4 mt-10">Add to your stay</h5>
                <StayCheckbox
                  id="airportShuttle"
                  label="I am interested in requesting an airport shuttle"
                  helper="We'll tell your accommodation what you're interested in so they can provide details and costs."
                  className="form-check items-start mb-6"
                />
                <StayCheckbox
                  id="rentingCar"
                  label="I'm interested in renting a car"
                  helper="Make the most of your trip and check the car rental options in your booking confirmation."
                />
                <h5 className="mb-4 mt-10">Your arrival time</h5>
                <Row className="gx-2">
                  <Col xs={6} sm={3}>
                    <select className="form-select" defaultValue="1">
                      <option value="1">12:00</option>
                      <option value="2">03:00</option>
                      <option value="3">06:00</option>
                      <option value="4">09:00</option>
                    </select>
                  </Col>
                  <Col xs={6} sm={3}>
                    <select className="form-select" defaultValue="am">
                      <option value="am">AM</option>
                      <option value="pm">PM</option>
                    </select>
                  </Col>
                </Row>
                <h5 className="mb-4 mt-12">Review house rules</h5>
                <p>
                  Your host would like you to agree to the following house
                  rules:
                </p>
                <p className="mb-2">
                  <FontAwesomeIcon
                    icon={faCircle}
                    className="text-soft text-sm me-2"
                    transform="up-2"
                  />
                  No smoking
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faCircle}
                    className="text-soft text-sm me-2"
                    transform="up-2"
                  />
                  Pets are not allowed
                </p>
                <p className="text-info mb-12">
                  By continuing to the next step, you are agreeing to these
                  house rules.
                </p>
                <h5 className="mb-4">Special requests</h5>
                <p className="text-md text-subtle mb-6">
                  Special requests cannot be guaranteed, but the property will
                  do its best to meet your needs. You can always make a special
                  request after your booking is complete!
                </p>
                <textarea
                  className="form-control"
                  name="requestText"
                  rows={5}
                  id="requestText"
                  placeholder="Type your request"
                />
                <hr className="mt-12 mb-8" />
                <Link
                  to="/apps/travel-agency/hotel/customer/payment"
                  className="btn btn-primary"
                >
                  Final details
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="ms-2"
                    transform="shrink-3"
                  />
                </Link>
              </form>
            </Col>
            <Col lg={5} xl={4}>
              <HotelDetailsSummaryCard
                showHotelInfo={true}
                className="mt-8 lg:mt-0"
              />
            </Col>
          </Row>
        </div>
      </section>
      <TravelFooter />
    </>
  );
};

export default HotelCheckout;
