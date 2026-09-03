import { Col, Row } from '@hummingbirdui/react';
import { Link } from 'react-router';
import useLightbox from 'hooks/useLightbox';
import Lightbox from 'components/base/Lightbox';

interface SocialPhotosProps {
  className?: string;
  photos: string[];
}

/** `+Photos` in mixins/social/Feed.pug */
const SocialPhotos = ({ className, photos }: SocialPhotosProps) => {
  const { lightboxProps, openLightbox } = useLightbox(photos);
  return (
    <div className={className}>
      <div className="flex pb-6 items-end">
        <h3 className="flex-1 mb-0">Photos</h3>
        <Link to="#!" className="font-bold text-md me-6">
          Albums
        </Link>
        <Link to="#!" className="font-bold text-md">
          See all
        </Link>
      </div>
      <Lightbox {...lightboxProps} />
      <Row className="g-4">
        {photos.map((img, index) => (
          <Col key={img} xs={4}>
            <img
              src={img}
              alt=""
              className="w-full rounded-lg cursor-pointer"
              onClick={() => openLightbox(index + 1)}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SocialPhotos;
