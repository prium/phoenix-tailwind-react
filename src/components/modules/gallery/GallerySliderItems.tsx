import { useEffect, useRef, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { faEllipsisH, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Swiper from 'components/base/Swiper';
import { GallerySliderItem } from 'data/gallery';
import useLightbox from 'hooks/useLightbox';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { SwiperClass, SwiperSlide } from 'swiper/react';
import Lightbox from 'components/base/LightBox';

interface GallerySliderItemsProps {
  galleryItems: GallerySliderItem[];
}

const GallerySliderItems = ({ galleryItems }: GallerySliderItemsProps) => {
  const [items, setItems] = useState<GallerySliderItem[]>([]);

  const { lightboxProps, openLightbox } = useLightbox(
    items
      .map((el: GallerySliderItem) =>
        el.srcType === 'video' ? el.video : el.image
      )
      .filter((item): item is string => !!item)
  );

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  useEffect(() => {
    setItems(galleryItems);
  }, [galleryItems]);
  return (
    <>
      <Swiper
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        speed={500}
        spaceBetween={16}
        slidesPerView="auto"
        simulateTouch={false}
        centeredSlides={true}
        initialSlide={1}
        className="theme-slider"
        parentClassName="swiper-slider-gallery"
        wrapperClass="align-items-center"
      >
        {items.map((item, index) => (
          <SwiperSlide
            key={item.id}
            className={classNames(
              'position-relative rounded-2 overflow-hidden',
              item.className
            )}
          >
            <GalleryItems item={item} onClick={() => openLightbox(index + 1)} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onInit={setThumbsSwiper}
        centerInsufficientSlides={true}
        spaceBetween={8}
        slidesPerView={4}
        freeMode={true}
        navigation={false}
        loop={items.length > 9}
        watchSlidesProgress={true}
        grabCursor={true}
        breakpoints={{
          540: {
            slidesPerView: 7
          },
          768: {
            slidesPerView: 8
          },
          1200: {
            slidesPerView: 9
          }
        }}
        parentClassName="swiper-slider-gallery"
        className="swiper-thumbs thumb"
      >
        {items.map(item => (
          <SwiperSlide key={item.id} className="h-auto">
            <img src={item.image} alt="" className="img-fluid rounded mt-2" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Lightbox key={items.length} {...lightboxProps} />
    </>
  );
};

export default GallerySliderItems;

interface GalleryItemsProps {
  item: GallerySliderItem;
  onClick: () => void;
}

const GalleryItems = ({ item, onClick }: GalleryItemsProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseOut = () => {
    videoRef.current?.pause();
  };
  return (
    <div onClick={onClick} className="cursor-pointer h-100">
      {item.srcType === 'video' ? (
        <div className="video-container h-100">
          <video
            className="video w-100 h-100 object-fit-cover overflow-hidden rounded-2"
            muted
            poster={item.image}
            ref={videoRef}
            onMouseEnter={handleMouseEnter}
            onMouseOut={handleMouseOut}
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
        <img className="w-100 h-100 object-fit-cover" src={item.image} />
      )}
      <div className="backdrop-faded d-flex justify-content-between p-5">
        <div>
          <h3 className="text-white mb-2">{item.title}</h3>
          <p className="mb-0 text-secondary-light">{item.subtitle}</p>
        </div>
        <Dropdown
          onClick={e => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <Dropdown.Toggle
            variant=""
            size="sm"
            className="p-1 dropdown-caret-none"
          >
            <FontAwesomeIcon icon={faEllipsisH} className="text-white" />
          </Dropdown.Toggle>
          <Dropdown.Menu align="end" className="py-2">
            <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
            <Dropdown.Item eventKey="2" className="text-danger">
              Delete
            </Dropdown.Item>
            <Dropdown.Item eventKey="2">Download</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};
