import { useState } from 'react';
import NavbarHome from 'components/navbars/travel-agency/NavbarHome';
import bgIllustrations from 'assets/img/bg/44.png';
import FlightSearch from 'components/modules/travel-agency/flight/homepage/FlightSearch';
import FlightListing from 'components/modules/travel-agency/flight/homepage/FlightListing';
import FlightFooter from 'components/modules/travel-agency/flight/homepage/FlightFooter';
import FlightPromoModal from 'components/modals/FlightPromoModal';
import ResizableNavbar from 'components/navbars/travel-agency/ResizableNavbar';
import { flightNavItems } from 'data/travel-agency/resizableNav';

/** apps/travel-agency/flight/homepage.pug */
const FlightHomepage = () => {
  const [showPromoModal, setShowPromoModal] = useState(true);

  return (
    <>
      <ResizableNavbar navItems={flightNavItems} />
      <section className="py-0">
        <div className="container-small">
          <NavbarHome currentPage="Flight" />
        </div>
      </section>
      <section className="p-0">
        <div className="container-fluid px-0">
          <div className="relative h-76">
            <div
              className="bg-holder bg-cover! bg-center!"
              style={{ backgroundImage: `url(${bgIllustrations})` }}
            />
          </div>
          <div className="container-small mb-10 -mt-48">
            <FlightSearch />
            <FlightListing />
          </div>
          <FlightFooter className="mb-10" />
        </div>
      </section>
      <FlightPromoModal
        show={showPromoModal}
        handleClose={() => setShowPromoModal(false)}
      />
    </>
  );
};

export default FlightHomepage;
