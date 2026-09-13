import PageBreadcrumb from 'components/common/PageBreadcrumb';
import { defaultBreadcrumbItems } from 'data/commonData';
import HotelGalleryImages from 'components/modules/travel-agency/hotel/HotelGalleryImages';
import { galleryItems } from 'data/travel-agency/customer/gallery';
import TravelFooter from 'components/footers/TravelFooter';
import ResizableNavbar from 'components/navbars/travel-agency/ResizableNavbar';
import { hotelNavItems } from 'data/travel-agency/resizableNav';

/** apps/travel-agency/hotel/customer/gallery.pug */
const HotelGallery = () => {
  return (
    <>
      <ResizableNavbar navItems={hotelNavItems} />
      <section className="pt-10 pb-16">
        <div className="container-medium">
          <PageBreadcrumb items={defaultBreadcrumbItems} className="mb-4" />
          <h2 className="mb-8">Gallery</h2>
          <HotelGalleryImages galleryItems={galleryItems} />
        </div>
      </section>
      <TravelFooter />
    </>
  );
};

export default HotelGallery;
