import PageBreadcrumb from 'components/common/PageBreadcrumb';
import { defaultBreadcrumbItems } from 'data/commonData';
import { Container, Row, Col } from 'react-bootstrap';
import FlightBookingWizard from '../payment/FlightBookingWizard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import FlightInfo from 'components/modules/travel-agency/flight/booking/FlightInfo';
import FlightDetails from 'components/modules/travel-agency/flight/booking/FlightDetails';
import CouponCard from 'components/cards/CuponCard';
import PaymentSummary from 'components/modules/travel-agency/flight/booking/PaymentSummary';
import TravelerDetails from 'components/modules/travel-agency/flight/booking/TravelerDetails';
import ResizableNavbar from 'components/navbars/travel-agency/ResizableNavbar';
import { flightNavItems } from 'data/travel-agency/resizableNav';
import FlightBottomBar from './BottomBar';

const FlightBooking = () => {
  return (
    <>
      <ResizableNavbar navItems={flightNavItems} />
      <Container fluid="small" className="pt-10 pb-10 pb-16">
        <PageBreadcrumb items={defaultBreadcrumbItems} className="mb-4" />
        <h2 className="mb-8">Booking</h2>
        <Row className="g-4 sm:items-center justify-between mb-8">
          <Col sm>
            <FlightBookingWizard activeItem="Booking" />
          </Col>
          <Col sm className="sm:text-end">
            <div>
              <p className="mb-2 text-info">Book before time runs out</p>
              <h3 className="mb-0 text-info font-bold flex gap-2 items-center sm:justify-end">
                <FontAwesomeIcon icon={faClock} className="text-base" />
                <span>29</span>
                <span className="text-md font-normal">min</span>
                <span>50</span>
                <span className="text-md font-normal">sec</span>
              </h3>
            </div>
          </Col>
        </Row>
        <FlightInfo />
        <FlightDetails />
        <Row className="justify-between">
          <Col lg={8}>
            <TravelerDetails />
            <PaymentSummary />
          </Col>
          <Col lg={4}>
            <CouponCard />
          </Col>
        </Row>
      </Container>
      <FlightBottomBar />
    </>
  );
};

export default FlightBooking;
