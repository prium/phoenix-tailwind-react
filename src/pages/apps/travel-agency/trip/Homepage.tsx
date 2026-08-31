import NavbarHome from 'components/navbars/travel-agency/NavbarHome';
import ResizableNavbar from 'components/navbars/travel-agency/ResizableNavbar';
import { tripNavItems } from 'data/travel-agency/resizableNav';
import TripHomepageHeroBanner from 'components/modules/travel-agency/trip/homepage/TripHomepageHeroBanner';
import TripHomepageTripList from 'components/modules/travel-agency/trip/homepage/TripHomepageTripList';
import { tripHomepageItems } from 'data/travel-agency/customer/trip';

/** phoenix-tailwind pug/apps/travel-agency/trip/homepage.pug */
const TripHomepage = () => {
  return (
    <>
      <ResizableNavbar navItems={tripNavItems} />
      <section className="py-0">
        <div className="container-small">
          <NavbarHome currentPage="Trip" />
        </div>
      </section>
      <TripHomepageHeroBanner />
      <TripHomepageTripList tripItems={tripHomepageItems} />
    </>
  );
};

export default TripHomepage;
