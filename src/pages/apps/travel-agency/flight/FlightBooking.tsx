import PageBreadcrumb from 'components/common/PageBreadcrumb';
import { defaultBreadcrumbItems } from 'data/commonData';
import FlightBookingWizard from '../payment/FlightBookingWizard';
import CountdownDisplay from '../payment/CountdownDisplay';
import FlightInfo from 'components/modules/travel-agency/flight/booking/FlightInfo';
import FlightDetails from 'components/modules/travel-agency/flight/booking/FlightDetails';
import CouponCard from 'components/modules/travel-agency/flight/booking/CouponCard';
import PaymentSummary from 'components/modules/travel-agency/flight/booking/PaymentSummary';
import TravelerDetails from 'components/modules/travel-agency/flight/booking/TravelerDetails';
import ResizableNavbar from 'components/navbars/travel-agency/ResizableNavbar';
import { flightNavItems } from 'data/travel-agency/resizableNav';
import FlightBottomBar from './FlightBottomBar';

/** apps/travel-agency/flight/booking.pug */
const FlightBooking = () => {
  return (
    <>
      <ResizableNavbar navItems={flightNavItems} />
      <section className="pt-10 pb-16">
        <div className="container-small">
          <PageBreadcrumb items={defaultBreadcrumbItems} className="mb-4" />
          <h2 className="mb-8">Booking</h2>
          <div className="row g-4 sm:items-center justify-between mb-8">
            <div className="sm:col">
              <FlightBookingWizard activeItem="Booking" />
            </div>
            <div className="sm:col sm:text-end">
              <CountdownDisplay />
            </div>
          </div>

          <FlightInfo className="mb-10" />
          <FlightDetails className="mb-10" />
          <form className="row justify-between">
            <div className="lg:col-8">
              <TravelerDetails />
              <PaymentSummary className="mb-6 lg:mb-16" />
            </div>
            <div className="lg:col-4">
              <CouponCard className="mb-16 lg:mb-0" />
            </div>
          </form>
        </div>
      </section>
      <FlightBottomBar to="/apps/travel-agency/flight/payment" />
    </>
  );
};

export default FlightBooking;
