import { faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
      className={classNames(
        'cursor-pointer text-center img-zoom-hover',
        galleryItem.className
      )}
      onClick={onClick}
    >
      <div className="hoverbox rounded-2">
        <img
          src={galleryItem.image}
          alt={galleryItem.title}
          className="img-fluid"
        />
        <div className="hoverbox-content flex-center">
          <div
            className="rounded-pill bg-white d-flex flex-center"
            style={{ width: 38, height: 38 }}
          >
            <FontAwesomeIcon
              icon={faMagnifyingGlassPlus}
              className="text-secondary"
            />
          </div>
        </div>
      </div>
      <h4 className="title mt-2">{galleryItem.title}</h4>
      <p className="mb-0 text-body-tertiary text-capitalize">
        {galleryItem.type}
      </p>
    </Col>
  );
};

const GalleryGridWithTitleItems = ({
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

export default GalleryGridWithTitleItems;
