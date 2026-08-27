import { Navigation } from 'swiper/modules';
import {
  Swiper as ReactSwiper,
  SwiperProps as ReactSwiperProps
} from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { CSSProperties, PropsWithChildren, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavigationOptions } from 'swiper/types';
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { cn } from '@hummingbirdui/react';

interface SwiperProps extends ReactSwiperProps {
  navigationPosition?: CSSProperties;
  centeredSlide?: boolean;
  parentClassName?: string;
}

const Swiper = ({
  children,
  navigation = true,
  navigationPosition,
  parentClassName,
  ...rest
}: PropsWithChildren<SwiperProps>) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <div className={cn('swiper-theme-container', parentClassName)}>
      {/* `.swiper-nav` is what plugins/swiper.css positions the arrows in */}
      {navigation && (
        <div className="swiper-nav">
          <button
            type="button"
            className="swiper-button-next"
            style={navigationPosition}
            ref={navigationNextRef}
          >
            <FontAwesomeIcon icon={faChevronRight} className="nav-icon" />
          </button>
          <button
            type="button"
            className="swiper-button-prev"
            style={navigationPosition}
            ref={navigationPrevRef}
          >
            <FontAwesomeIcon icon={faChevronLeft} className="nav-icon" />
          </button>
        </div>
      )}
      <ReactSwiper
        className="theme-slider"
        modules={[Navigation]}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
          disabledClass: 'swiper-button-disabled'
        }}
        onBeforeInit={swiper => {
          if (swiper.params.navigation) {
            const navigation = swiper.params.navigation as NavigationOptions;
            navigation.prevEl = navigationPrevRef.current;
            navigation.nextEl = navigationNextRef.current;
          }
        }}
        {...rest}
      >
        {children}
      </ReactSwiper>
    </div>
  );
};

export default Swiper;
