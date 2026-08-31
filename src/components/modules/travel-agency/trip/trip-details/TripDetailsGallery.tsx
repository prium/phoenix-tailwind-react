import type { TripDetailsAlbum as TripDetailsAlbumProps } from 'data/travel-agency/customer/trip';
import { Col, Row } from '@hummingbirdui/react';
import TripDetailsMostHighlights from 'components/sliders/TripDetailsMostHighlights';
import TripDetailsAlbum from './TripDetailsAlbum';

interface TripDetailsGalleryProps {
  galleryItems: TripDetailsAlbumProps;
}

/** `+TripGallery` in phoenix-tailwind mixins/travel-agency/trip/TripGallery.pug */
const TripDetailsGallery = ({ galleryItems }: TripDetailsGalleryProps) => {
  return (
    <Row className="g-2 md:g-4">
      <Col md={6}>
        <TripDetailsMostHighlights items={galleryItems.mostHighlightedImage} />
      </Col>
      <Col md={6}>
        <TripDetailsAlbum imageItems={galleryItems.highlightImages} />
      </Col>
    </Row>
  );
};

export default TripDetailsGallery;
