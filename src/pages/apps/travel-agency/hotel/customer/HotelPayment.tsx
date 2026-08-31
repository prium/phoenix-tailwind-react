import PageBreadcrumb from 'components/common/PageBreadcrumb';
import { defaultBreadcrumbItems } from 'data/commonData';
import { Col, Row } from '@hummingbirdui/react';
import HotelDetailsSummaryCard from 'components/cards/HotelDetailsSummaryCard';
import PaymentMethodForm from 'components/forms/PaymentMethodForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';
import TravelFooter from 'components/footers/TravelFooter';
import ResizableNavbar from 'components/navbars/travel-agency/ResizableNavbar';
import { hotelNavItems } from 'data/travel-agency/resizableNav';

const GoBackButton = ({ className }: { className?: string }) => (
  <Link
    to="/apps/travel-agency/hotel/customer/checkout"
    className={`btn btn-phoenix-primary${className ? ` ${className}` : ''}`}
  >
    <FontAwesomeIcon
      icon={faChevronLeft}
      className="me-2"
      transform="shrink-3"
    />
    Go back
  </Link>
);

/** apps/travel-agency/hotel/customer/payment.pug */
const HotelPayment = () => {
  return (
    <>
      <ResizableNavbar navItems={hotelNavItems} />
      <section className="pt-10 pb-16">
        <div className="container-medium">
          <PageBreadcrumb items={defaultBreadcrumbItems} className="mb-4" />
          <h2 className="mb-8">Payment</h2>
          <Row className="justify-between">
            <Col lg={7} xl={6}>
              <form id="checkoutForm2" onSubmit={e => e.preventDefault()}>
                <GoBackButton />
                <hr className="mt-8 mb-12 border-subtle" />
                <h3 className="mb-8">Enter your address</h3>
                <Row className="g-4 mb-8">
                  <Col sm={3}>
                    <label
                      htmlFor="country"
                      className="font-bold text-highlight mb-1"
                    >
                      Country
                    </label>
                    <select
                      id="country"
                      className="form-select"
                      defaultValue="1"
                    >
                      <option value="1">India</option>
                      <option value="2">USB</option>
                      <option value="3">UAE</option>
                    </select>
                  </Col>
                  <Col sm={5} lg={4}>
                    <label
                      htmlFor="phone-number"
                      className="font-bold text-highlight mb-1"
                    >
                      Phone number
                    </label>
                    <input
                      type="number"
                      id="phone-number"
                      placeholder="Enter phone number"
                      className="form-control input-spin-none"
                    />
                  </Col>
                </Row>
                <Row className="g-4">
                  <Col sm={8} lg={7}>
                    <label
                      htmlFor="phone-number-type"
                      className="font-bold text-highlight mb-1"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      placeholder="Email address"
                      id="phone-number-type"
                      className="form-control input-spin-none"
                    />
                  </Col>
                </Row>
                <PaymentMethodForm />
                <hr className="mt-10 mb-8 border-subtle" />
                <GoBackButton className="me-3" />{' '}
                <button className="btn btn-primary sm:px-30" type="button">
                  Confirm booking
                </button>
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

export default HotelPayment;
