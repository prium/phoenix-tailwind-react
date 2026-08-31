import React from 'react';
import { Row, Col } from 'react-bootstrap';
import useLightbox from 'hooks/useLightbox';
import Lightbox from 'components/base/LightBox';

interface HotelDetailsRoomImageGalleryProps {
  images: string[];
}

interface RoomImageItemProps {
  item: string;
  handleClick: () => void;
}

const RoomImageItem = ({ item, handleClick }: RoomImageItemProps) => {
  return (
    <div className="cursor-pointer h-full" onClick={handleClick}>
      <img
        src={item}
        alt=""
        className="w-full h-full object-cover rounded-md"
      />
    </div>
  );
};

const HotelDetailsRoomImageGallery = ({
  images
}: HotelDetailsRoomImageGalleryProps) => {
  const { lightboxProps, openLightbox } = useLightbox(images);

  return (
    <>
      <Row className="gx-2 h-full">
        {images.map((imageItem, index) => (
          <Col key={index}>
            <RoomImageItem
              item={imageItem}
              handleClick={() => openLightbox(index + 1)}
            />
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
