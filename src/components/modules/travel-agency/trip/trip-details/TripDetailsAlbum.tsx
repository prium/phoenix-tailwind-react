import { HighlightItem } from 'data/travel-agency/customer/trip';
import useLightbox from 'hooks/useLightbox';
import { Row } from '@hummingbirdui/react';
import { Link } from 'react-router';
import Lightbox from 'components/base/LightBox';

interface TripDetailsAlbumProps {
  imageItems: HighlightItem[];
}

/** thumbnail grid in phoenix-tailwind mixins/travel-agency/trip/TripGallery.pug */
const TripDetailsAlbum = ({ imageItems }: TripDetailsAlbumProps) => {
  const { lightboxProps, openLightbox } = useLightbox(
    imageItems.map(image => image.largeImage)
  );

  return (
    <Row className="g-2 md:g-4">
      {imageItems.slice(0, 5).map((image, index) => (
        <div className="col-4" key={image.id}>
          <a
            className="cursor-pointer"
            data-gallery="trip-details-gallery"
            onClick={() => openLightbox(index + 1)}
          >
            <img src={image.image} alt="" className="rounded-md" />
          </a>
        </div>
      ))}
      <div className="col-4">
        <div className="relative rounded-md overflow-hidden">
          <a
            className="cursor-pointer"
            data-gallery="trip-details-gallery"
            onClick={() => openLightbox(imageItems.length)}
          >
            <img src={imageItems[5].image} alt="" height={43} />
          </a>
          <div className="absolute size-full left-0 top-0 flex flex-center bg-black/50">
            <Link
              to="/apps/travel-agency/hotel/customer/gallery"
              className="text-white stretched-link text-lg lg:text-2xl font-extrabold"
            >
              24+
            </Link>
          </div>
        </div>
      </div>
      <Lightbox {...lightboxProps} />
    </Row>
  );
};

export default TripDetailsAlbum;
