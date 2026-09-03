import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import { useState } from 'react';
import img30 from 'assets/img/generic/30.jpg';
import img31 from 'assets/img/generic/31.jpg';
import img32 from 'assets/img/generic/32.jpg';
import img33 from 'assets/img/generic/33.jpg';
import img34 from 'assets/img/generic/34.jpg';
import img35 from 'assets/img/generic/35.jpg';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import Swiper from 'components/base/Swiper';

const swiperWithThumbnailCode = `
import Swiper from 'components/base/Swiper';

function SwiperWithThumbnail(){
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  return (
    <div>
      <Swiper
        thumbs={{
          swiper:
            thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
        }}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {[img30, img31, img32, img33, img34, img35].map(
          (image, index) => (
            <SwiperSlide className="h-auto" key={index}>
              <div className="pb-1">
                <img src={image} alt="" className="w-full rounded-sm" />
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
      <Swiper
        onInit={setThumbsSwiper}
        spaceBetween={5}
        slidesPerView={5}
        freeMode={true}
        grabCursor={true}
        navigation={false}
      >
        {[img30, img31, img32, img33, img34, img35].map(
          (image, index) => (
            <SwiperSlide className="h-auto" key={index}>
              <img src={image} alt="" className="w-full rounded-sm" />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  )
}
`;
const swiperWithoutThumbnailCode = `
import Swiper from 'components/base/Swiper';

function SwiperWithoutThumbnail(){
  return (
    <div>
      <Swiper>
        {[img30, img31, img32, img33, img34, img35].map(
          (image, index) => (
            <SwiperSlide className="h-auto" key={index}>
              <div className="pb-1">
                <img src={image} alt="" className="w-full rounded-sm" />
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  )
}
`;
const withoutNavigationCode = `
import Swiper from 'components/base/Swiper';

function WithoutNavigation(){
  return (
    <div>
      <Swiper navigation={false}>
        {[img30, img31, img32, img33, img34, img35].map(
          (image, index) => (
            <SwiperSlide className="h-auto" key={index}>
              <div className="pb-1">
                <img src={image} alt="" className="w-full rounded-sm" />
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  )
}
`;

const SwiperCarousel = () => {
  return (
    <div className="mb-9">
      <DocPageHeader
        title="Swiper"
        description="Swiper is the most modern free mobile touch slider with hardware accelerated transitions and amazing native behavior. It is intended to be used in mobile websites, mobile web apps, and mobile native/hybrid apps."
        link={{
          text: 'Documentation for swiper',
          url: 'https://swiperjs.com/get-started'
        }}
      />
      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Swiper with thumbnail">
            <p className="mb-0">
              Register the <code>Thumbs</code> module and hand the thumbnail
              slider&apos;s instance to the main one through the{' '}
              <code>thumbs</code> prop. The strip is a second{' '}
              <code>Swiper</code>, so it takes every Swiper option of its own —
              here <code>freeMode</code>, <code>grabCursor</code> and{' '}
              <code>slidesPerView</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body
            code={swiperWithThumbnailCode}
            scope={{
              useState,
              Swiper,
              SwiperSlide,
              FreeMode,
              Navigation,
              Thumbs,
              img30,
              img31,
              img32,
              img33,
              img34,
              img35
            }}
          />
        </PhoenixDocCard>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Swiper without thumbnail">
            <p className="mb-0">
              For a swiper without a thumbnail strip, simply drop the{' '}
              <code>thumbs</code> prop and the second slider.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body
            code={swiperWithoutThumbnailCode}
            scope={{
              Swiper,
              SwiperSlide,
              img30,
              img31,
              img32,
              img33,
              img34,
              img35
            }}
          />
        </PhoenixDocCard>
        <PhoenixDocCard>
          <PhoenixDocCard.Header title="Swiper without navigation">
            <p className="mb-0">
              <code>
                navigation={'{'}false{'}'}
              </code>{' '}
              tells the <code>Swiper</code> wrapper to leave out the{' '}
              <code>.swiper-nav</code> arrows.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body
            code={withoutNavigationCode}
            scope={{
              Swiper,
              SwiperSlide,
              img30,
              img31,
              img32,
              img33,
              img34,
              img35
            }}
          />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default SwiperCarousel;
