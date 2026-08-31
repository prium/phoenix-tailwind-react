import { useRef } from 'react';
import { GalleryItemType } from 'data/travel-agency/customer/gallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

interface HotelGalleryItemProps {
  galleryItem: GalleryItemType;
  onClick: () => void;
}

const HotelGalleryItem = ({ galleryItem, onClick }: HotelGalleryItemProps) => {
  const ref = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    ref.current?.play();
  };

  const handleMouseOut = () => {
    ref.current?.pause();
  };
  return (
    <div
      className={classNames(galleryItem.classNames, 'cursor-pointer')}
      onClick={onClick}
    >
      {galleryItem.video ? (
        <div className="video-container relative h-full">
          <video
            className="w-full h-full object-cover overflow-hidden rounded-md"
            src={galleryItem.video}
            muted
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseOut}
            ref={ref}
          />
          <div className="video-icon absolute top-1/2 start-1/2 top-1/2 left-1/2 -translate-1/2 bg-soft rounded-full bg-opacity-50">
            <FontAwesomeIcon icon={faVideo} />
          </div>
        </div>
      ) : (
        <img
          src={galleryItem.img}
          alt=""
          className="rounded-md h-full w-full object-cover"
        />
      )}
    </div>
  );
};

export default HotelGalleryItem;
