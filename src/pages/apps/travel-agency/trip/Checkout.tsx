import TripSummaryCard from 'components/cards/TripSummaryCard';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import ResizableNavbar from 'components/navbars/travel-agency/ResizableNavbar';
import { defaultBreadcrumbItems } from 'data/commonData';
import { tripNavItems } from 'data/travel-agency/resizableNav';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { selectedTrip } from 'data/travel-agency/customer/trip';
import Button from 'components/base/Button';
import TripCheckoutForm from 'components/forms/TripCheckoutForm';

const TripCheckout = () => {
  return (
    <>
      <ResizableNavbar navItems={tripNavItems} />
      <section className="py-8 md:pb-12 lg:pb-16">
        <Container fluid="medium">
          <Form onSubmit={e => e.preventDefault()}>
            <Row className="gy-8 lg:gx-0 justify-between">
              <Col lg={6}>
                <PageBreadcrumb
                  items={defaultBreadcrumbItems}
                  className="mb-4"
                />
                <h2 className="mb-8">Check out</h2>
                <TripCheckoutForm />
              </Col>
              <Col lg={5} xl={4}>
                <div className="lg:sticky lg:top-0 lg:z-1020 z-0" style={{ top: '10rem' }}>
                  <TripSummaryCard selectedTrip={selectedTrip} />
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full mt-4"
                  >
                    Book now
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
        </Container>
      </section>
    </>
  );
};

export default TripCheckout;
