import { cn } from '@hummingbirdui/react';
import Lightbox from 'components/base/LightBox';
import type { GalleryItem } from 'data/gallery';
import useLightbox from 'hooks/useLightbox';
import PackeryGrid from './PackeryGrid';

const GalleryGridItems = ({ gridItems }: { gridItems: GalleryItem[] }) => {
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
            className={cn(item.category, 'sm:col-6 md:col-4 xl:col-3')}
          >
            <div className="hoverbox img-zoom-hover rounded-md">
              <img src={item.image} alt="" />
              <div className="hoverbox-content flex-center flex-col">
                <h4 className="text-white">{item.title}</h4>
                <p className="mb-0 text-secondary-lighter capitalize">
                  {item.category.split('-').join(' ')}
                </p>
              </div>
            </div>
          </a>
        ))}
      </PackeryGrid>
      <Lightbox key={gridItems.length} {...lightboxProps} />
    </>
  );
};

export default GalleryGridItems;
