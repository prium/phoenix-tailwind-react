import bgLeft28 from 'assets/img/bg/bg-left-28.png';
import bgRight28 from 'assets/img/bg/bg-right-28.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faHotel,
  faTreeCity
} from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import { Link } from 'react-router';
import { placesData } from 'data/travel-agency/landing';

SwiperCore.use([Autoplay]);

const BestPlaces = () => {
  return (
    <section className="pb-18 pt-0">
      <div
        className="bg-holder hidden md:block bg-size-[7%]! bg-position-[left_27%]!"
        style={{ backgroundImage: `url(${bgLeft28})` }}
      />
      <div
        className="bg-holder hidden md:block bg-size-[16%]! bg-position-[right_-25px]!"
        style={{ backgroundImage: `url(${bgRight28})` }}
      />
      <div className="container-medium text-center mb-20 relative">
        <h3 className="mb-2 text-emphasis">Travel more, spend less</h3>
        <p className="text-subtle mb-0">
          Working with Phoenix means you’ll have all the plans and the perfect
          price list to help you plan.
        </p>
      </div>

      <div className="container-fluid sm:px-0">
        <div className="swiper-theme-container swiper-slide-nav-top">
          <div className="swiper-nav">
            <div className="swiper-button-next">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-primary"
                transform="shrink-3"
              />
            </div>
            <div className="swiper-button-prev">
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="text-primary"
                transform="shrink-3"
              />
            </div>
          </div>
          <Swiper
            loop
            autoplay
            spaceBetween={16}
            slidesPerView={1}
            speed={1500}
            breakpoints={{
              576: {
                slidesPerView: 'auto'
              }
            }}
            className="theme-slider"
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }}
            modules={[Navigation]}
          >
            {placesData.map((data, index) => (
              <SwiperSlide className="sm:w-auto!" key={index}>
                <Link
                  to="#!"
                  className="relative rounded-lg overflow-hidden block"
                >
                  <img
                    src={data.img}
                    alt=""
                    className="w-full h-55 sm:w-auto object-cover"
                  />
                  <div className="img-backdrop-faded">
                    <div className="image-reveal-content mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <FontAwesomeIcon
                          icon={faHotel}
                          className="text-gray-100"
                        />
                        <h6 className="text-gray-100 mb-0 font-semibold">
                          {data.hotels} Hotels
                        </h6>
                      </div>
                      <div className="flex items-center gap-2">
                        <FontAwesomeIcon
                          icon={faTreeCity}
                          className="text-gray-100"
                        />
                        <h6 className="text-gray-100 mb-0 font-semibold">
                          {data.packages} Tour Package
                        </h6>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src={data.flag} alt="" />
                      <h4 className="mb-0 text-white">{data.country}</h4>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BestPlaces;
