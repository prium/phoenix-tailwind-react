import PageBreadcrumb from 'components/common/PageBreadcrumb';
import { defaultBreadcrumbItems } from 'data/commonData';
import { Card, Col, Container, Row } from 'react-bootstrap';
import FlightBookingWizard from '../payment/FlightBookingWizard';
import CountdownDisplay from '../payment/CountdownDisplay';
import FlightPaymentInfo from './PaymentInfo';
import PaymentMethodForm from 'components/forms/PaymentMethodForm';
import FlightBottomBar from './BottomBar';
import ResizableNavbar from 'components/navbars/travel-agency/ResizableNavbar';
import { flightNavItems } from 'data/travel-agency/resizableNav';

const FlightPayment = () => {
  return (
    <>
      <ResizableNavbar navItems={flightNavItems} />
      <Container fluid="small" className="pt-10 pb-16">
        <PageBreadcrumb items={defaultBreadcrumbItems} className="mb-4" />
        <h2 className="mb-8">Payment</h2>
        <Row className="g-4 sm:items-center justify-between mb-8">
          <Col sm>
            <FlightBookingWizard activeItem="Payment" />
          </Col>
          <Col sm className="sm:text-end">
            <CountdownDisplay />
          </Col>
        </Row>
        <hr className="mt-8 mb-10" />
        <Row className="g-0 gap-10">
          <Col lg>
            <FlightPaymentInfo />
          </Col>
          <Col lg>
            <Card>
              <Card.Body>
                <PaymentMethodForm marginTop="short" />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <hr className="mt-10 mb-16 hidden lg:block" />
      </Container>
      <FlightBottomBar />
    </>
  );
};

export default FlightPayment;
