import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { NavigationOptions } from 'swiper/types';
import type { MostHighlightedImage } from 'data/travel-agency/customer/trip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';

interface TripDetailsMostHighlightsProps {
  items: MostHighlightedImage[];
}

/** slider half of `+TripGallery` in mixins/travel-agency/trip/TripGallery.pug */
const TripDetailsMostHighlights = ({
  items
}: TripDetailsMostHighlightsProps) => {
  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);
  return (
    <div className="swiper-theme-container rounded-md overflow-hidden">
      <Swiper
        className="theme-slider"
        slidesPerView={1}
        loop
        autoplay
        pagination={{
          clickable: true
        }}
        modules={[Autoplay, Pagination, Navigation]}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current
        }}
        onBeforeInit={swiper => {
          if (swiper.params.navigation) {
            const navigation = swiper.params.navigation as NavigationOptions;
            navigation.prevEl = navigationPrevRef.current;
            navigation.nextEl = navigationNextRef.current;
          }
        }}
      >
        {items.map(item => (
          <SwiperSlide key={item.id}>
            <img
              src={item.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-nav swiper-nav-inside">
        <div
          className="swiper-button-next bg-transparent! border-0! text-white!"
          ref={navigationNextRef}
        >
          <FontAwesomeIcon icon={faChevronRight} className="nav-icon" />
        </div>
        <div
          className="swiper-button-prev bg-transparent! border-0! text-white!"
          ref={navigationPrevRef}
        >
          <FontAwesomeIcon icon={faChevronLeft} className="nav-icon" />
        </div>
      </div>
    </div>
  );
};

export default TripDetailsMostHighlights;
