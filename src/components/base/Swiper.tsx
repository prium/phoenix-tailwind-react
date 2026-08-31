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
  /** extra classes on `.swiper-nav` (gold travel pages use `swiper-nav-inside`) */
  navClassName?: string;
  /** extra classes on the arrow buttons (gold compare table: `bg-transparent! border-0!`) */
  navButtonClassName?: string;
  /** classes for the arrow glyphs (gold default `nav-icon`; some pages use `text-primary`) */
  navIconClassName?: string;
  /** FontAwesome transform for the arrow glyphs (e.g. `shrink-3`) */
  navIconTransform?: string;
}

const Swiper = ({
  children,
  navigation = true,
  navigationPosition,
  parentClassName,
  navClassName,
  navButtonClassName,
  navIconClassName = 'nav-icon',
  navIconTransform,
  ...rest
}: PropsWithChildren<SwiperProps>) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <div className={cn('swiper-theme-container', parentClassName)}>
      {/* `.swiper-nav` is what plugins/swiper.css positions the arrows in */}
      {navigation && (
        <div className={cn('swiper-nav', navClassName)}>
          <button
            type="button"
            className={cn('swiper-button-next', navButtonClassName)}
            style={navigationPosition}
            ref={navigationNextRef}
          >
            <FontAwesomeIcon
              icon={faChevronRight}
              className={navIconClassName}
              transform={navIconTransform}
            />
          </button>
          <button
            type="button"
            className={cn('swiper-button-prev', navButtonClassName)}
            style={navigationPosition}
            ref={navigationPrevRef}
          >
            <FontAwesomeIcon
              icon={faChevronLeft}
              className={navIconClassName}
              transform={navIconTransform}
            />
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
