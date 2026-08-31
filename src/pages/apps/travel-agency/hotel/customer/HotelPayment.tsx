import PageBreadcrumb from 'components/common/PageBreadcrumb';
import { defaultBreadcrumbItems } from 'data/commonData';
import { Container, Row, Col, Form } from 'react-bootstrap';
import HotelDetailsSummaryCard from 'components/cards/HotelDetailsSummaryCard';
import PaymentMethodForm from 'components/forms/PaymentMethodForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import Button from 'components/base/Button';
import { Link } from 'react-router';
import TravelFooter from 'components/footers/TravelFooter';
import ResizableNavbar from 'components/navbars/travel-agency/ResizableNavbar';
import { hotelNavItems } from 'data/travel-agency/resizableNav';

const HotelPayment = () => {
  return (
    <>
      <ResizableNavbar navItems={hotelNavItems} />
      <section className="pt-10 pb-16">
        <Container fluid="medium">
          <PageBreadcrumb items={defaultBreadcrumbItems} className="mb-4" />
          <h2 className="mb-8">Payment</h2>
          <Row className="justify-between">
            <Col lg={7} xl={6}>
              <Form onSubmit={e => e.preventDefault()}>
                <Link to="/apps/travel-agency/hotel/customer/checkout">
                  <Button
                    variant="phoenix-primary"
                    startIcon={
                      <FontAwesomeIcon
                        icon={faChevronLeft}
                        className="me-2"
                        transform="shrink-3"
                      />
                    }
                  >
                    Go back
                  </Button>
                </Link>
                <hr className="mt-8 mb-12" />
                <h3 className="mb-8">Enter your address</h3>
                <Row className="g-4 mb-8">
                  <Col sm={3}>
                    <label
                      htmlFor="country"
                      className="font-bold text-highlight mb-1"
                    >
                      Country
                    </label>
                    <Form.Select id="country">
                      <option value="1">India</option>
                      <option value="2">USA</option>
                      <option value="3">UAE</option>
                    </Form.Select>
                  </Col>
                  <Col sm={5} lg={4}>
                    <label
                      htmlFor="phone-number"
                      className="font-bold text-highlight mb-1"
                    >
                      Phone number
                    </label>
                    <Form.Control
                      type="number"
                      id="phone-number"
                      placeholder="Enter phone number"
                      className="input-spin-none"
                    />
                  </Col>
                </Row>
                <Row className="g-4">
                  <Col sm={8} lg={7}>
                    <label
                      htmlFor="email"
                      className="font-bold text-highlight mb-1"
                    >
                      Email address
                    </label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter email address"
                      id="email"
                    />
                  </Col>
                </Row>
                <PaymentMethodForm />
                <hr className="mt-10 mb-8" />
                <Link to="/apps/travel-agency/hotel/customer/checkout">
                  <Button
                    variant="phoenix-primary"
                    className="me-4"
                    startIcon={
                      <FontAwesomeIcon
                        icon={faChevronLeft}
                        className="me-2"
                        transform="shrink-3"
                      />
                    }
                  >
                    Go back
                  </Button>
                </Link>
                <Button variant="primary" className="sm:px-30">
                  Confirm booking
                </Button>
              </Form>
            </Col>
            <Col lg={5} xl={4}>
              <HotelDetailsSummaryCard
                showHotelInfo={true}
                className="mt-8 lg:mt-0"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <TravelFooter />
    </>
  );
};

export default HotelPayment;
