import PageBreadcrumb from 'components/common/PageBreadcrumb';
import { defaultBreadcrumbItems } from 'data/commonData';
import FlightBookingWizard from '../payment/FlightBookingWizard';
import CountdownDisplay from '../payment/CountdownDisplay';
import FlightPaymentInfo from './FlightPaymentInfo';
import FlightPaymentForm from 'components/modules/travel-agency/flight/payment/FlightPaymentForm';
import FlightBottomBar from './FlightBottomBar';
import ResizableNavbar from 'components/navbars/travel-agency/ResizableNavbar';
import { flightNavItems } from 'data/travel-agency/resizableNav';

/** apps/travel-agency/flight/payment.pug */
const FlightPayment = () => {
  return (
    <>
      <ResizableNavbar navItems={flightNavItems} />
      <section className="pt-10 pb-16">
        <div className="container-small">
          <PageBreadcrumb items={defaultBreadcrumbItems} className="mb-4" />
          <h2 className="mb-8">Payment</h2>
          <div className="row g-4 sm:items-center justify-between mb-8">
            <div className="sm:col">
              <FlightBookingWizard activeItem="Payment" />
            </div>
            <div className="sm:col sm:text-end">
              <CountdownDisplay />
            </div>
          </div>

          <hr className="mt-8 mb-10 border-subtle" />
          <div className="row g-0 gap-10">
            <div className="lg:col">
              <FlightPaymentInfo />
            </div>
            <div className="lg:col">
              <FlightPaymentForm className="mb-16 lg:mb-0" />
            </div>
          </div>
          <hr className="mt-10 mb-16 hidden lg:block border-subtle" />
        </div>
      </section>
      <FlightBottomBar />
    </>
  );
};

export default FlightPayment;
