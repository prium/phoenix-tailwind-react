import { useRef, useState } from 'react';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Lightbox from 'components/base/LightBox';
import { GalleryMasonryItem } from 'data/gallery';
import useLightbox from 'hooks/useLightbox';

interface GalleryMasonryItemsProps {
  galleryItems: GalleryMasonryItem[];
}

const GalleryMasonryItems = ({ galleryItems }: GalleryMasonryItemsProps) => {
  const [items] = useState(galleryItems);

  const { lightboxProps, openLightbox } = useLightbox(
    items
      .map((el: GalleryMasonryItem) => el.video || el.largeImage)
      .filter((item): item is string => !!item)
  );
  return (
    <>
      <div
        className="grid grid-cols-12 gap-4"
      >
        {galleryItems.map((item, index) => (
          <GalleryItem
            key={item.id}
            item={item}
            onClick={() => openLightbox(index + 1)}
          />
        ))}
      </div>
      <Lightbox key={galleryItems.length} {...lightboxProps} />
    </>
  );
};

export default GalleryMasonryItems;

interface GalleryItemProps {
  item: GalleryMasonryItem;
  onClick: () => void;
}

const GalleryItem = ({ item, onClick }: GalleryItemProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseOut = () => {
    videoRef.current?.pause();
  };
  return (
    <div onClick={onClick} className={classNames(item.className)}>
      <div className="img-zoom-hover relative rounded-md overflow-hidden cursor-pointer">
        {item.srcType === 'video' ? (
          <div className="video-container relative">
            <video
              className="video block h-full w-full overflow-hidden rounded-md"
              muted
              poster={item.image}
              onMouseEnter={handleMouseEnter}
              onMouseOut={handleMouseOut}
              ref={videoRef}
            >
              <source src={item.video} type="video/mp4" />
            </video>
            <div className="video-icon absolute top-1/2 start-1/2 top-1/2 left-1/2 -translate-1/2 bg-soft rounded-full bg-opacity-50">
              <FontAwesomeIcon
                icon={faVideo}
                className="text-default text-md sm:text-base"
              />
            </div>
          </div>
        ) : (
          <>
            <img
              src={item.image}
              alt={item.title}
              className="rounded-md w-full h-full object-cover"
            />
          </>
        )}
        <div className="backdrop-faded absolute w-full bottom-0 start-0 p-4">
          <h4 className="text-white">{item.title}</h4>
          <p className="mb-0 text-secondary-lighter capitalize">
            {item.categoryTitle}
          </p>
        </div>
      </div>
    </div>
  );
};
