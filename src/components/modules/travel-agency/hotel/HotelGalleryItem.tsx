import { useRef } from 'react';
import { GalleryItemType } from 'data/travel-agency/customer/gallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';

interface HotelGalleryItemProps {
  galleryItem: GalleryItemType;
  onClick: () => void;
}

/** one `a[data-gallery]` entry of apps/travel-agency/hotel/customer/gallery.pug */
const HotelGalleryItem = ({ galleryItem, onClick }: HotelGalleryItemProps) => {
  const ref = useRef<HTMLVideoElement | null>(null);

  if (galleryItem.video) {
    return (
      <div className="video-container h-full">
        <a
          href={galleryItem.video}
          onClick={e => {
            e.preventDefault();
            onClick();
          }}
        >
          <video
            className="video w-full h-full object-cover overflow-hidden rounded-md"
            muted
            onMouseEnter={() => ref.current?.play()}
            onMouseLeave={() => ref.current?.pause()}
            ref={ref}
          >
            <source src={galleryItem.video} type="video/mp4" />
          </video>
          <div className="circle-icon-item absolute inset-s-1/2 top-1/2 left-1/2 -translate-1/2 bg-soft/50 rounded-full">
            <FontAwesomeIcon
              icon={faVideo}
              className="text-default text-md sm:text-base"
            />
          </div>
        </a>
      </div>
    );
  }

  return (
    <a
      href={galleryItem.largeImg}
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      <img src={galleryItem.img} alt="" className="rounded-md" />
    </a>
  );
};

export default HotelGalleryItem;
