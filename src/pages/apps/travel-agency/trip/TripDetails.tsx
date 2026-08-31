import React from 'react';
import useSettingsMountEffect from 'hooks/useSettingsMountEffect';
import ResizableNavbar from 'components/navbars/travel-agency/ResizableNavbar';
import { tripNavItems } from 'data/travel-agency/resizableNav';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import { defaultBreadcrumbItems } from 'data/commonData';
import { Container, Row } from 'react-bootstrap';
import TripDetailsOverview from 'components/modules/travel-agency/trip/trip-details/TripDetailsOverview';
import TripDetailsGallery from 'components/modules/travel-agency/trip/trip-details/TripDetailsGallery';
import {
  tripDetailsAlbum,
  tripHomepageItems,
  tripOverview
} from 'data/travel-agency/customer/trip';
import TripDetailsTab from 'components/modules/travel-agency/trip/trip-details/TripDetailsTab';
import TripShowcaseItem from 'components/modules/travel-agency/trip/TripShowcaseItem';
import { Link } from 'react-router';

const TripDetails = () => {
  useSettingsMountEffect({
    disableNavigationType: true,
    disableHorizontalNavbarAppearance: true,
    disableVerticalNavbarAppearance: true,
    disableHorizontalNavbarShape: true
  });
  return (
    <>
      <ResizableNavbar navItems={tripNavItems} />
      <section className="pt-8 pb-8 md:pb-10 lg:pb-16">
        <Container fluid="medium">
          <PageBreadcrumb items={defaultBreadcrumbItems} className="mb-4" />
          <h2 className="mb-8">Trip Details</h2>
          <h1 className="font-bold">
            Walk where the king walked once in Wakanda{' '}
            <span className="align-middle whitespace-nowrap text-base">
              <span className="text-soft">by </span>
              <Link to="#!" className="text-subtle">
                Panther Travels Limited
              </Link>
            </span>
          </h1>
          <hr className="bg-secondary-lighter" />
          <TripDetailsOverview tripOverview={tripOverview} />
          <TripDetailsGallery galleryItems={tripDetailsAlbum} />
          <TripDetailsTab />
          <h2 className="mt-8 mb-4">Similar tours</h2>
          <Row className="g-4">
            {tripHomepageItems
              .slice(tripHomepageItems.length - 3)
              .map(tripItem => (
                <TripShowcaseItem showcaseItem={tripItem} key={tripItem.id} />
              ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default TripDetails;
