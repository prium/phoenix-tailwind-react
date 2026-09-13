import {
  faChevronLeft,
  faChevronRight,
  faEllipsisH,
  faVideo
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown, cn } from '@hummingbirdui/react';
import Lightbox from 'components/base/Lightbox';
import type { GallerySliderItem } from 'data/gallery';
import useLightbox from 'hooks/useLightbox';
import { useRef, useState, type MouseEvent } from 'react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import {
  Swiper as ReactSwiper,
  SwiperSlide,
  type SwiperClass
} from 'swiper/react';

interface GallerySliderItemsProps {
  galleryItems: GallerySliderItem[];
  /** gold `data-gallery` suffix — `gallery-slider-<category>` */
  category: string;
}

/**
 * `GallerySlider` mixin of `apps/gallery/gallery-slider.pug`. The thumbnail
 * strip lives inside the same `.swiper-theme-container.swiper-slider-gallery`
 * as the main slider (the gold's `swiperInit` appends it there), which is why
 * this page builds the container by hand instead of using `components/base/Swiper`.
 */
const GallerySliderItems = ({
  galleryItems,
  category
}: GallerySliderItemsProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const navigationPrevRef = useRef<HTMLDivElement>(null);
  const navigationNextRef = useRef<HTMLDivElement>(null);

  const { lightboxProps, openLightbox } = useLightbox(
    galleryItems.map(item => item.video ?? item.image)
  );

  return (
    <>
      <div className="swiper-theme-container swiper-slider-gallery">
        <ReactSwiper
          className="theme-slider"
          wrapperClass="swiper-wrapper items-center"
          modules={[FreeMode, Navigation, Thumbs]}
          speed={500}
          spaceBetween={16}
          slidesPerView="auto"
          simulateTouch={false}
          centeredSlides
          initialSlide={1}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
          }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
            disabledClass: 'swiper-button-disabled'
          }}
          onBeforeInit={swiper => {
            const navigation = swiper.params.navigation;
            if (navigation && typeof navigation !== 'boolean') {
              navigation.prevEl = navigationPrevRef.current;
              navigation.nextEl = navigationNextRef.current;
            }
          }}
        >
          {galleryItems.map((item, index) => (
            <SwiperSlide
              key={item.id}
              className={cn(
                'relative rounded-md overflow-hidden',
                item.aspect,
                item.category
              )}
            >
              <SlideMedia
                item={item}
                category={category}
                onClick={() => openLightbox(index + 1)}
              />
              <div className="backdrop-faded flex justify-between p-8!">
                <div>
                  <h3 className="text-white mb-2">{item.title}</h3>
                  <p className="mb-0 text-secondary-light">Description text</p>
                </div>
                <div className="dropdown">
                  <Dropdown>
                    <Dropdown.Trigger asChild>
                      <button
                        className="btn p-1 dropdown-toggle dropdown-caret-none text-white"
                        type="button"
                      >
                        <FontAwesomeIcon icon={faEllipsisH} />
                      </button>
                    </Dropdown.Trigger>
                    <Dropdown.Content align="end" className="py-2">
                      <Dropdown.Item asChild>
                        <a href="#!">Edit</a>
                      </Dropdown.Item>
                      <Dropdown.Item asChild>
                        <a href="#!" className="text-danger">
                          Delete
                        </a>
                      </Dropdown.Item>
                      <Dropdown.Item asChild>
                        <a href="#!">Download</a>
                      </Dropdown.Item>
                    </Dropdown.Content>
                  </Dropdown>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </ReactSwiper>
        <div className="swiper-nav">
          <div className="swiper-button-next" ref={navigationNextRef}>
            <FontAwesomeIcon icon={faChevronRight} className="nav-icon" />
          </div>
          <div className="swiper-button-prev" ref={navigationPrevRef}>
            <FontAwesomeIcon icon={faChevronLeft} className="nav-icon" />
          </div>
        </div>
        <ReactSwiper
          className="swiper-thumbs thumb"
          onSwiper={setThumbsSwiper}
          modules={[FreeMode, Thumbs]}
          spaceBetween={8}
          slidesPerView={4}
          freeMode
          loop={galleryItems.length > 9}
          watchSlidesProgress
          grabCursor
          breakpoints={{
            540: { slidesPerView: 7 },
            768: { slidesPerView: 8 },
            1200: { slidesPerView: 9 }
          }}
        >
          {galleryItems.map(item => (
            <SwiperSlide key={item.id}>
              <img className="rounded-md mt-2" src={item.image} alt="" />
            </SwiperSlide>
          ))}
        </ReactSwiper>
      </div>
      <Lightbox key={galleryItems.length} {...lightboxProps} />
    </>
  );
};

export default GallerySliderItems;

interface SlideMediaProps {
  item: GallerySliderItem;
  category: string;
  onClick: () => void;
}

const SlideMedia = ({ item, category, onClick }: SlideMediaProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const handleClick = (event: MouseEvent) => {
    event.preventDefault();
    onClick();
  };

  if (item.video) {
    return (
      <a
        href={item.video}
        data-gallery={`gallery-slider-${category}`}
        onClick={handleClick}
      >
        <div className="video-container h-full">
          <video
            className="video size-full object-cover overflow-hidden rounded-md"
            muted
            poster={item.image}
            ref={videoRef}
            onMouseEnter={() => videoRef.current?.play()}
            onMouseOut={() => videoRef.current?.pause()}
          >
            <source src={item.video} type="video/mp4" />
          </video>
          <div className="circle-icon-item absolute top-1/2 left-1/2 -translate-1/2 bg-soft rounded-full bg-opacity-50">
            <FontAwesomeIcon
              icon={faVideo}
              className="text-default text-md sm:text-base"
            />
          </div>
        </div>
      </a>
    );
  }

  return (
    <a
      href={item.image}
      data-gallery={`gallery-slider-${category}`}
      onClick={handleClick}
    >
      <img className="size-full object-cover" src={item.image} alt="" />
    </a>
  );
};
