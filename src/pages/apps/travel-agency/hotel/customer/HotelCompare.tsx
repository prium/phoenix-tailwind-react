import PageBreadcrumb from 'components/common/PageBreadcrumb';
import { defaultBreadcrumbItems } from 'data/commonData';
import EcomTopRegionsMap from 'components/leaflet-maps/EcomTopRegionsMap';
import { mapMarkerPoints } from 'data/mapMarkerPoints';
import CollapsibleContainer from 'components/common/CollapsibleContainer';
import CompareHotelDetails from 'components/modules/travel-agency/hotel/hotel-compare/CompareHotelDetails';
import {
  hotelInfo,
  popularAmenitiesFields,
  reviewFields
} from 'data/travel-agency/customer/hotelCompare';
import CompareRoomDetails from 'components/modules/travel-agency/hotel/hotel-compare/CompareRoomDetails';
import HotelActions from 'components/modules/travel-agency/hotel/HotelActions';
import TravelFooter from 'components/footers/TravelFooter';
import ResizableNavbar from 'components/navbars/travel-agency/ResizableNavbar';
import { hotelNavItems } from 'data/travel-agency/resizableNav';

/** apps/travel-agency/hotel/customer/hotel-compare.pug */
const HotelCompare = () => {
  return (
    <>
      <ResizableNavbar navItems={hotelNavItems} />
      <section className="pt-10 pb-16">
        <div className="container-medium">
          <PageBreadcrumb items={defaultBreadcrumbItems} className="mb-4" />
          <h2 className="mb-6">Hotel Compare</h2>
          <HotelActions background={false} />
          <div className="h-full w-full border rounded-lg overflow-hidden my-8">
            <EcomTopRegionsMap
              data={mapMarkerPoints}
              className="h-full bg-soft min-h-55"
            />
          </div>
          <div className="relative scrollbar">
            <CollapsibleContainer
              collapseTitle="Hotel Details"
              id="hotelDetailsCollapse"
              containerSize="base"
            >
              <CompareHotelDetails
                hotelInfo={hotelInfo}
                reviewFields={reviewFields}
              />
            </CollapsibleContainer>
            <CollapsibleContainer
              collapseTitle="Room Details"
              id="roomDetailsCollapse"
              className="mt-14"
              containerSize="base"
            >
              <CompareRoomDetails
                hotelInfo={hotelInfo}
                reviewFields={popularAmenitiesFields}
              />
            </CollapsibleContainer>
          </div>
        </div>
      </section>
      <TravelFooter />
    </>
  );
};

export default HotelCompare;
