import classNames from 'classnames';
import Lightbox from 'components/base/LightBox';
import { GalleryColumnItemType } from 'data/gallery';
import useLightbox from 'hooks/useLightbox';
import { Masonry } from 'react-plock';

interface ColumnItemProps {
  galleryItem: GalleryColumnItemType;
  onClick: () => void;
}

const ColumnItem = ({ galleryItem, onClick }: ColumnItemProps) => {
  return (
    <div
      className={classNames(
        'img-zoom-hover cursor-pointer',
        galleryItem.className
      )}
      onClick={onClick}
    >
      <div className="overflow-hidden rounded">
        <img src={galleryItem.image} alt="image" className="img-fluid" />
      </div>
      <div className="mt-3">
        <h4 className="title">{galleryItem.title}</h4>
        <p className="text-body text-capitalize mb-0">{galleryItem.type}</p>
      </div>
    </div>
  );
};

const GalleryColumnItems = ({
  columnItems
}: {
  columnItems: GalleryColumnItemType[];
}) => {
  const { lightboxProps, openLightbox } = useLightbox(
    columnItems.map(item => item.image)
  );
  return (
    <>
      <div className="position-relative">
        <Masonry
          items={columnItems}
          config={{
            columns: [1, 2, 3, 4],
            gap: 0,
            media: [575, 767, 1199, 1200],
            useBalancedLayout: true
          }}
          className="masonry-items row gx-7"
          render={(item, index) => {
            const realIndex = columnItems.findIndex(i => i.id === item.id);

            return (
              <ColumnItem
                galleryItem={item}
                key={item.id}
                onClick={() => openLightbox(realIndex + 1)}
              />
            );
          }}
        />
      </div>
      <Lightbox key={columnItems.length} {...lightboxProps} />
    </>
  );
};

export default GalleryColumnItems;
