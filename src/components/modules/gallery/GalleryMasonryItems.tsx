import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '@hummingbirdui/react';
import Lightbox from 'components/base/LightBox';
import type { GalleryItem } from 'data/gallery';
import useLightbox from 'hooks/useLightbox';
import { useRef, type MouseEvent } from 'react';
import PackeryGrid from './PackeryGrid';

const GalleryMasonryItems = ({
  galleryItems
}: {
  galleryItems: GalleryItem[];
}) => {
  const { lightboxProps, openLightbox } = useLightbox(
    galleryItems.map(item => item.largeImage)
  );

  return (
    <>
      <PackeryGrid className="row g-4" id="gallery-masonry">
        {galleryItems.map((item, index) => (
          <div key={item.id} className={cn(item.className, item.category)}>
            <div className="img-zoom-hover relative rounded-md overflow-hidden">
              <MasonryMedia
                item={item}
                onClick={() => openLightbox(index + 1)}
              />
            </div>
          </div>
        ))}
      </PackeryGrid>
      <Lightbox key={galleryItems.length} {...lightboxProps} />
    </>
  );
};

export default GalleryMasonryItems;

const Caption = ({ item }: { item: GalleryItem }) => (
  <div className="backdrop-faded absolute w-full bottom-0 start-0 p-4!">
    <h4 className="text-white">{item.title}</h4>
    <p className="mb-0 text-secondary-lighter capitalize">
      {item.category.split('-').join(' ')}
    </p>
  </div>
);

interface MasonryMediaProps {
  item: GalleryItem;
  onClick: () => void;
}

const MasonryMedia = ({ item, onClick }: MasonryMediaProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const handleClick = (event: MouseEvent) => {
    event.preventDefault();
    onClick();
  };

  if (item.video) {
    return (
      <a className="video-container" href={item.video} onClick={handleClick}>
        <video
          className="video block h-full w-full overflow-hidden rounded-md"
          muted
          poster={item.image}
          ref={videoRef}
          onMouseEnter={() => videoRef.current?.play()}
          onMouseOut={() => videoRef.current?.pause()}
        >
          <source src={item.video} type="video/mp4" />
        </video>
        <div className="circle-icon-item absolute top-1/2 left-1/2 -translate-1/2 bg-soft/50 rounded-full">
          <FontAwesomeIcon
            icon={faVideo}
            className="text-default text-md sm:text-base"
          />
        </div>
        <Caption item={item} />
      </a>
    );
  }

  return (
    <a href={item.largeImage} onClick={handleClick}>
      <img
        className="rounded-md w-full h-full object-cover"
        src={item.image}
        alt=""
      />
      <Caption item={item} />
    </a>
  );
};
