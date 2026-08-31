import { GalleryItemType } from 'data/travel-agency/customer/gallery';
import { cn, Col, Row } from '@hummingbirdui/react';
import useLightbox from 'hooks/useLightbox';
import Lightbox from 'components/base/LightBox';
import GalleryItem from './HotelGalleryItem';

interface HotelGalleryImagesProps {
  galleryItems: GalleryItemType[];
}

/** grid of apps/travel-agency/hotel/customer/gallery.pug */
const HotelGalleryImages = ({ galleryItems }: HotelGalleryImagesProps) => {
  const { lightboxProps, openLightbox } = useLightbox(
    galleryItems
      .map((el: GalleryItemType) => el.video || el.largeImg)
      .filter((item): item is string => !!item)
  );

  const item = (gallery: GalleryItemType, index: number) => (
    <GalleryItem
      galleryItem={gallery}
      key={gallery.id}
      onClick={() => openLightbox(index + 1)}
    />
  );

  return (
    <>
      <Row className="g-2 sm:g-4">
        <Col md={6}>
          <Row className="g-2 sm:g-4">
            {galleryItems.slice(0, 3).map((gallery, index) => (
              <div className={cn(gallery.classNames)} key={gallery.id}>
                {item(gallery, index)}
              </div>
            ))}
          </Row>
        </Col>
        <Col md={6}>{item(galleryItems[3], 3)}</Col>
        {galleryItems.slice(4, 7).map((gallery, index) => (
          <div className={cn(gallery.classNames)} key={gallery.id}>
            {item(gallery, index + 4)}
          </div>
        ))}
        <Col md={6}>
          <Row className="g-2 sm:g-4">
            {galleryItems.slice(7).map((gallery, index) => (
              <div className={cn(gallery.classNames)} key={gallery.id}>
                {item(gallery, index + 7)}
              </div>
            ))}
          </Row>
        </Col>
      </Row>
      <div>
        <Lightbox {...lightboxProps} />
      </div>
    </>
  );
};

export default HotelGalleryImages;
