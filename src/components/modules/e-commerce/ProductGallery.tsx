import { useBreakpoints } from 'providers/BreakpointsProvider';
import { useState } from 'react';
import { Col, Row } from '@hummingbirdui/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const ProductGallery = ({ images }: { images: string[] }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const { breakpoints } = useBreakpoints();

  return (
    <Row className="mb-4 g-4">
      <Col xs={12} md={2} lg={12} xl={2}>
        <Swiper
          direction={
            (breakpoints.down('md') && !breakpoints.up('md')) ||
            (breakpoints.up('lg') && breakpoints.down('xl'))
              ? 'horizontal'
              : 'vertical'
          }
          onInit={setThumbsSwiper}
          loop={true}
          spaceBetween={16}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[Thumbs]}
          className="swiper-products-thumb theme-slider overflow-visible md:h-121 lg:h-auto xl:h-121"
        >
          {images.map((image, index) => (
            <SwiperSlide className="h-auto" key={index}>
              <div className="product-thumb-container p-2 sm:p-4 xl:p-2">
                <img src={image} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Col>
      <Col xs={12} md={10} lg={12} xl={10}>
        <div className="flex items-center border border-subtle rounded-lg text-center p-8 h-full">
          <Swiper
            loop={true}
            spaceBetween={10}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
            }}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt="" className="w-full" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Col>
    </Row>
  );
};

export default ProductGallery;
