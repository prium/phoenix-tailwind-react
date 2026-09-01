import { cn } from '@hummingbirdui/react';
import Lightbox from 'components/base/LightBox';
import type { GalleryItem } from 'data/gallery';
import useLightbox from 'hooks/useLightbox';
import PackeryGrid from './PackeryGrid';

/**
 * The gold appends up to three `span.gallery-column-separator-N` rules to the
 * grid (see `isotopeInit` in phoenix-tailwind `src/js/theme/isotope.js`).
 */
const ColumnSeparators = ({ count }: { count: number }) => (
  <>
    {Array.from({ length: Math.max(0, Math.min(count, 4) - 1) }, (_, i) => (
      <span
        key={i}
        className={`gallery-column-separator gallery-column-separator-${i + 1}`}
      />
    ))}
  </>
);

const GalleryColumnItems = ({
  columnItems
}: {
  columnItems: GalleryItem[];
}) => {
  const { lightboxProps, openLightbox } = useLightbox(
    columnItems.map(item => item.largeImage)
  );

  return (
    <>
      <div className="relative">
        <PackeryGrid
          className="row gx-12 gy-8 overflow-hidden"
          id="image_gallery"
          after={<ColumnSeparators count={columnItems.length} />}
        >
          {columnItems.map((item, index) => (
            <a
              key={item.id}
              href={item.largeImage}
              onClick={event => {
                event.preventDefault();
                openLightbox(index + 1);
              }}
              className={cn(
                item.category,
                'sm:col-6 md:col-4 xl:col-3 img-zoom-hover no-underline'
              )}
            >
              <div className="overflow-hidden rounded-md">
                <img src={item.image} alt="" />
              </div>
              <div className="flex mt-4">
                <div>
                  <h4 className="title">{item.title}</h4>
                  <p className="mb-0 capitalize text-default">
                    {item.category.split('-').join(' ')}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </PackeryGrid>
      </div>
      <Lightbox key={columnItems.length} {...lightboxProps} />
    </>
  );
};

export default GalleryColumnItems;
