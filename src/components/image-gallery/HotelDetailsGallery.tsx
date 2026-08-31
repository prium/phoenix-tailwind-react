import { Col, Row } from '@hummingbirdui/react';
import { Link } from 'react-router';
import { HotelImageType } from 'data/travel-agency/customer/hotelDetails';
import useLightbox from 'hooks/useLightbox';
import Lightbox from 'components/base/LightBox';

interface HotelDetailsGalleryProps {
  images: HotelImageType[];
}

interface GalleryLinkProps {
  item: HotelImageType;
  onOpen: () => void;
  imgClassName?: string;
}

const GalleryLink = ({
  item,
  onOpen,
  imgClassName = 'rounded-md'
}: GalleryLinkProps) => (
  <a
    href={item.largeImg}
    onClick={e => {
      e.preventDefault();
      onOpen();
    }}
  >
    <img src={item.img} alt="" className={imgClassName} />
  </a>
);

/** `+DetailsGallery` in mixins/travel-agency/hotel/DetailsGallery.pug */
const HotelDetailsGallery = ({ images }: HotelDetailsGalleryProps) => {
  const { lightboxProps, openLightbox } = useLightbox(
    images.map((item: HotelImageType) => item.largeImg)
  );

  return (
    <>
      <Row className="g-4 mb-4">
        <Col md={6}>
          <GalleryLink item={images[0]} onOpen={() => openLightbox(1)} />
        </Col>
        <Col xs={6} className="hidden md:block">
          <Row className="g-4">
            {images.slice(1, 4).map((item, index) => (
              <Col xs={index === 0 ? 12 : 6} key={item.id}>
                <GalleryLink
                  item={item}
                  onOpen={() => openLightbox(index + 2)}
                />
              </Col>
            ))}
          </Row>
        </Col>
        {images.slice(4, 7).map((item, index) => (
          <Col xs={3} className="hidden md:block" key={item.id}>
            <GalleryLink item={item} onOpen={() => openLightbox(index + 5)} />
          </Col>
        ))}
        <Col md={3}>
          <div className="relative rounded-md overflow-hidden">
            <GalleryLink
              item={images[7]}
              onOpen={() => openLightbox(8)}
              imgClassName="w-full h-11 md:h-full object-cover"
            />
            <div className="absolute size-full left-0 top-0 flex flex-center bg-black/50">
              <Link
                to="/apps/travel-agency/hotel/customer/gallery"
                className="text-white stretched-link"
              >
                Show all
              </Link>
            </div>
          </div>
        </Col>
      </Row>
      <div>
        <Lightbox {...lightboxProps} />
      </div>
    </>
  );
};

export default HotelDetailsGallery;
