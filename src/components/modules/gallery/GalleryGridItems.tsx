import classNames from 'classnames';
import Lightbox from 'components/base/LightBox';
import { GalleryColumnItemType } from 'data/gallery';
import useLightbox from 'hooks/useLightbox';
import { Col, Row } from 'react-bootstrap';

interface GridItemProps {
  galleryItem: GalleryColumnItemType;
  onClick: () => void;
}

const GridItem = ({ galleryItem, onClick }: GridItemProps) => {
  return (
    <Col
      sm={6}
      md={4}
      xl={3}
      className={classNames('cursor-pointer', galleryItem.className)}
      onClick={onClick}
    >
      <div className="hoverbox img-zoom-hover rounded-2">
        <img src={galleryItem.image} alt={galleryItem.title} className='img-fluid' />
        <div className="hoverbox-content flex-column flex-center">
          <h4 className="text-white">{galleryItem.title}</h4>
          <p className="mb-0 text-secondary-lighter text-capitalize">
            {galleryItem.type}
          </p>
        </div>
      </div>
    </Col>
  );
};

const GalleryGridItems = ({
  gridItems
}: {
  gridItems: GalleryColumnItemType[];
}) => {
  const { lightboxProps, openLightbox } = useLightbox(
    gridItems.map(item => item.image)
  );
  return (
    <>
      <Row className="g-3">
        {gridItems.map((item, index) => (
          <GridItem
            galleryItem={item}
            onClick={() => openLightbox(index + 1)}
          />
        ))}
      </Row>
      <Lightbox key={gridItems.length} {...lightboxProps} />
    </>
  );
};

export default GalleryGridItems;
