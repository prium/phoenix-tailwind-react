import { Navigation } from 'swiper/modules';
import {
  Swiper as ReactSwiper,
  SwiperProps as ReactSwiperProps
} from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { CSSProperties, PropsWithChildren, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
  // Element state, not refs: the nav renders AFTER the slider (see the note
  // below), so a ref is still null when Swiper initialises and Navigation never
  // receives its elements — it then cannot tell that the arrows are
  // unnecessary, so `swiper-button-lock` was never applied and a slider whose
  // slides all fit kept showing live arrows. Callback refs put the real nodes
  // into state, which re-renders Swiper with them and lets it lock properly.
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);
  return (
    <div className={cn('swiper-theme-container', parentClassName)}>
      <ReactSwiper
        className="theme-slider"
        modules={[Navigation]}
        navigation={{
          prevEl,
          nextEl,
          disabledClass: 'swiper-button-disabled'
        }}
        {...rest}
      >
        {children}
      </ReactSwiper>
      {/* `.swiper-nav` is what plugins/swiper.css positions the arrows in.
          It must come AFTER the slider: the buttons and `.swiper` are both
          positioned at `z-index: 1` in the same stacking context, so DOM order
          decides which paints on top. With the nav first, a flush-bleed slide
          image covered the left half of the arrow — the gold emits it last. */}
      {navigation && (
        <div className={cn('swiper-nav', navClassName)}>
          <button
            type="button"
            className={cn('swiper-button-next', navButtonClassName)}
            style={navigationPosition}
            ref={setNextEl}
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
            ref={setPrevEl}
          >
            <FontAwesomeIcon
              icon={faChevronLeft}
              className={navIconClassName}
              transform={navIconTransform}
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default Swiper;
