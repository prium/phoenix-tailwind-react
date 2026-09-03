import { Col, Row } from '@hummingbirdui/react';
import useLightbox from 'hooks/useLightbox';
import Lightbox from 'components/base/Lightbox';

interface HotelDetailsRoomImageGalleryProps {
  images: string[];
}

/** Room image row of `+RoomInfo` (HotelDetailsTabContent.pug) */
const HotelDetailsRoomImageGallery = ({
  images
}: HotelDetailsRoomImageGalleryProps) => {
  const { lightboxProps, openLightbox } = useLightbox(images);

  return (
    <>
      <Row className="gx-2 h-full">
        {images.map((imageItem, index) => (
          <Col xs={4} key={index}>
            <a
              href={imageItem}
              className="cursor-pointer"
              onClick={e => {
                e.preventDefault();
                openLightbox(index + 1);
              }}
            >
              <img
                src={imageItem}
                alt=""
                className="size-full object-cover rounded-md"
              />
            </a>
          </Col>
        ))}
      </Row>
      <div>
        <Lightbox {...lightboxProps} />
      </div>
    </>
  );
};

export default HotelDetailsRoomImageGallery;
