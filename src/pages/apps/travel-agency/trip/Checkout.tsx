import TripSummaryCard from 'components/cards/TripSummaryCard';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import ResizableNavbar from 'components/navbars/travel-agency/ResizableNavbar';
import { defaultBreadcrumbItems } from 'data/commonData';
import { tripNavItems } from 'data/travel-agency/resizableNav';
import { Col, Row } from '@hummingbirdui/react';
import { selectedTrip } from 'data/travel-agency/customer/trip';
import TripCheckoutForm from 'components/forms/TripCheckoutForm';

/** phoenix-tailwind pug/apps/travel-agency/trip/checkout.pug */
const TripCheckout = () => {
  return (
    <>
      <ResizableNavbar navItems={tripNavItems} />
      <section className="pt-8 pb-15">
        <div className="container-medium">
          <form onSubmit={e => e.preventDefault()}>
            <Row className="justify-between gy-8 lg:gx-0">
              <Col lg={6}>
                <PageBreadcrumb
                  items={defaultBreadcrumbItems}
                  className="mb-4"
                />
                <h2 className="mb-0">Check out</h2>
                <TripCheckoutForm />
              </Col>
              <Col lg={5} xl={4}>
                <TripSummaryCard selectedTrip={selectedTrip} />
                <button type="submit" className="btn btn-primary w-full mt-4">
                  Book now
                </button>
              </Col>
            </Row>
          </form>
        </div>
      </section>
    </>
  );
};

export default TripCheckout;
