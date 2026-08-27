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
        className="d-grid grid-cols-12 gap-3"
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
      <div className="img-zoom-hover position-relative rounded-2 overflow-hidden cursor-pointer">
        {item.srcType === 'video' ? (
          <div className="video-container position-relative">
            <video
              className="video d-block h-100 w-100 overflow-hidden rounded-2"
              muted
              poster={item.image}
              onMouseEnter={handleMouseEnter}
              onMouseOut={handleMouseOut}
              ref={videoRef}
            >
              <source src={item.video} type="video/mp4" />
            </video>
            <div className="video-icon position-absolute top-50 start-50 translate-middle bg-body-emphasis rounded-pill bg-opacity-50">
              <FontAwesomeIcon
                icon={faVideo}
                className="text-body fs-9 fs-sm-8"
              />
            </div>
          </div>
        ) : (
          <>
            <img
              src={item.image}
              alt={item.title}
              className="rounded-2 w-100 h-100 object-fit-cover"
            />
          </>
        )}
        <div className="backdrop-faded position-absolute w-100 bottom-0 start-0 p-3">
          <h4 className="text-white">{item.title}</h4>
          <p className="mb-0 text-secondary-lighter text-capitalize">
            {item.categoryTitle}
          </p>
        </div>
      </div>
    </div>
  );
};
