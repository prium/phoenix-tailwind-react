import { Col, Row } from '@hummingbirdui/react';
import Lightbox from 'components/base/Lightbox';
import { Image } from 'data/social/postsData';
import useLightbox from 'hooks/useLightbox';

interface PostGalleryProps {
  images: Image[];
}

/** Post image grid of `+Post` in mixins/social/Feed.pug */
const PostGallery = ({ images }: PostGalleryProps) => {
  const imageArray = images.map(image => image.src);
  const { lightboxProps, openLightbox } = useLightbox(imageArray);

  return (
    <>
      <Lightbox {...lightboxProps} />
      <Row className="g-1 mb-8">
        {images?.map((image, index) => (
          <Col key={index} xs={image.cols}>
            <img
              src={image.src}
              alt=""
              className="rounded-md h-full w-full cursor-pointer"
              onClick={() => openLightbox(index + 1)}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default PostGallery;
