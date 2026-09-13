import { faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '@hummingbirdui/react';
import Lightbox from 'components/base/Lightbox';
import type { GalleryItem } from 'data/gallery';
import useLightbox from 'hooks/useLightbox';
import PackeryGrid from './PackeryGrid';

const GalleryGridWithTitleItems = ({
  gridItems
}: {
  gridItems: GalleryItem[];
}) => {
  const { lightboxProps, openLightbox } = useLightbox(
    gridItems.map(item => item.largeImage)
  );

  return (
    <>
      <PackeryGrid className="row g-4" id="image_gallery">
        {gridItems.map((item, index) => (
          <a
            key={item.id}
            href={item.largeImage}
            onClick={event => {
              event.preventDefault();
              openLightbox(index + 1);
            }}
            className={cn(
              item.category,
              'sm:col-6 md:col-4 xl:col-3 text-center no-underline img-zoom-hover'
            )}
          >
            <div className="hoverbox rounded-md">
              <img src={item.image} alt="" />
              <div className="hoverbox-content flex-center">
                <div className="rounded-full bg-white flex flex-center size-9.5">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlassPlus}
                    className="text-secondary"
                  />
                </div>
              </div>
            </div>
            <h4 className="title mt-2">{item.title}</h4>
            <p className="mb-0 text-subtle capitalize">
              {item.category.split('-').join(' ')}
            </p>
          </a>
        ))}
      </PackeryGrid>
      <Lightbox key={gridItems.length} {...lightboxProps} />
    </>
  );
};

export default GalleryGridWithTitleItems;
