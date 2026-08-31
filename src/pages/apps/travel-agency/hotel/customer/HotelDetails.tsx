import { Link } from 'react-router';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import { defaultBreadcrumbItems } from 'data/commonData';
import { Col, Row } from '@hummingbirdui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faMap,
  faMapMarkerAlt,
  faPhone
} from '@fortawesome/free-solid-svg-icons';
import HotelDetailsSummaryCard from 'components/cards/HotelDetailsSummaryCard';
import { hotelImages } from 'data/travel-agency/customer/hotelDetails';
import HotelDetailsTab from 'components/modules/travel-agency/hotel/hotel-details/HotelDetailsTab';
import HotelDetailsGallery from 'components/image-gallery/HotelDetailsGallery';
import { numberFormat } from 'helpers/utils';
import TravelFooter from 'components/footers/TravelFooter';
import ResizableNavbar from 'components/navbars/travel-agency/ResizableNavbar';
import { hotelNavItems } from 'data/travel-agency/resizableNav';

/** apps/travel-agency/hotel/customer/hotel-details.pug */
const HotelDetails = () => {
  return (
    <>
      <ResizableNavbar navItems={hotelNavItems} />
      <section className="pt-6 pb-16">
        <div className="container-medium">
          <PageBreadcrumb items={defaultBreadcrumbItems} className="mb-4" />
          <h2 className="mb-6">Hotel Details</h2>
          <Row className="g-6 flex-between-end mb-8">
            <Col md={8} lg={9}>
              <h1 className="mb-2 font-semibold">
                Radisson Blu Water Garden Hotel, Dhaka
              </h1>
              <div className="mb-1">
                <Link className="text-subtle" to="#!">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="me-2 text-default"
                  />
                  Airport Rd, Dhaka Cantonment, Dhaka, 1206, Bangladesh
                </Link>
              </div>
              <div className="mb-1">
                <a className="text-subtle" href="tel:+88029834555">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="me-2 text-default"
                  />
                  +880 29834555
                </a>
              </div>
              <div className="mb-1">
                <a
                  className="text-subtle"
                  href="mailto:sales.dhaka@radisson.com"
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="me-2 text-default"
                    transform="down-1"
                  />
                  sales.dhaka@radisson.com
                </a>
              </div>
            </Col>
            <Col md={4} lg={3}>
              <div className="flex md:flex-col items-center md:items-end gap-4">
                <h5 className="mb-0 text-nowrap">
                  <span className="text-subtle me-2 font-normal">Rated</span>
                  <span className="text-primary me-2">Good</span>
                  <span className="badge bg-primary">
                    {numberFormat(4.3, 'standard', {
                      minimumFractionDigits: 1,
                      maximumFractionDigits: 1
                    })}
                  </span>
                </h5>
                <a
                  href="#!"
                  className="btn btn-phoenix-primary text-center px-8 lg:px-14 w-full md:w-auto"
                >
                  <FontAwesomeIcon icon={faMap} className="me-2" />
                  Show in map
                </a>
              </div>
            </Col>
          </Row>
          <Row className="g-4">
            <Col xl={8}>
              <HotelDetailsGallery images={hotelImages} />
              <HotelDetailsTab />
            </Col>
            <Col xl={4}>
              <HotelDetailsSummaryCard
                showHotelInfo={false}
                className="mt-4 xl:mt-0"
              />
            </Col>
          </Row>
        </div>
      </section>
      <TravelFooter />
    </>
  );
};

export default HotelDetails;
