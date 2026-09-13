import FeatherIcon from 'feather-icons-react';
import bgLeft31 from 'assets/img/bg/bg-left-31.png';
import bgRight31 from 'assets/img/bg/bg-right-31.png';
import gallery48 from 'assets/img/gallery/48.png';
import gallery49 from 'assets/img/gallery/49.png';
import gallery50 from 'assets/img/gallery/50.png';
import gallery64 from 'assets/img/gallery/64.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router';
import SwiperCore from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faStar
} from '@fortawesome/free-solid-svg-icons';

SwiperCore.use([Autoplay]);

interface Post {
  title: string;
  date: string;
  rating: string;
  img: string;
}

const posts: Post[] = [
  {
    title: "Beautiful Frence, Let's Travelling!",
    date: 'Monday, Nov 07, 2022',
    rating: '4.8',
    img: gallery48
  },
  {
    title: 'Man Standing on Watching Mountain',
    date: 'Monday, Nov 06, 2022',
    rating: '4.5',
    img: gallery49
  },
  {
    title: "Beautiful Bali Indonesia, Let's Travelling!",
    date: 'Monday, Nov 05, 2022',
    rating: '4.2',
    img: gallery50
  },
  {
    title: 'Chasing sunsets, making memories worldwide.',
    date: 'Monday, Nov 04, 2022',
    rating: '4.5',
    img: gallery64
  }
];

const LatestPosts = () => {
  return (
    <section className="pb-12 pt-0 overflow-x-hidden">
      <div
        className="bg-holder hidden xl:block bg-size-[22%]! bg-left! z-1"
        style={{ backgroundImage: `url(${bgLeft31})` }}
      />
      <div
        className="bg-holder hidden xl:block bg-size-[15%]! bg-bottom-right! z-1"
        style={{ backgroundImage: `url(${bgRight31})` }}
      />
      <div className="bg-latest-posts" />
      <div className="container-medium text-center relative z-2">
        <h3 className="mb-2 text-emphasis">Our Latest Posts For Travellers</h3>
        <p className="mb-0 text-subtle mb-26">
          Find the best travel memories from our past tours and get a clear idea
          of what we do.
        </p>
      </div>
      <div className="swiper-theme-container swiper-zooming-slider">
        <Swiper
          loop
          autoplay
          centeredSlides
          centeredSlidesBounds
          simulateTouch={false}
          spaceBetween={32}
          slidesPerView={1.3}
          speed={2000}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }}
          modules={[Navigation]}
          breakpoints={{
            540: {
              slidesPerView: 1.5
            },
            768: {
              slidesPerView: 1.8
            },
            1200: {
              slidesPerView: 2
            },
            1530: {
              slidesPerView: 2.8
            }
          }}
          className="swiper-container theme-slider"
        >
          {posts.map((data, index) => (
            <SwiperSlide className="rounded-lg overflow-hidden" key={index}>
              <div className="relative w-full h-full">
                <img
                  src={data.img}
                  className="w-full h-full object-cover"
                  alt=""
                />
                <div className="backdrop-faded p-6 md:p-10!">
                  <div className="flex items-center mb-2">
                    <FeatherIcon
                      icon="calendar"
                      size={16}
                      className="me-2 text-gray-100"
                    />
                    <h6 className="mb-0 font-semibold pe-4 me-4 border-end text-gray-100">
                      {data.date}
                    </h6>
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-warning text-md me-2"
                    />
                    <h6 className="mb-0 font-semibold text-gray-100">
                      {data.rating}
                    </h6>
                  </div>
                  <Link to="#!" className="text-white font-bold text-lg">
                    {data.title}
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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
      </div>
      <div className="text-center mt-24 relative z-2">
        <button className="btn btn-link p-0 text-base">
          View all
          <FontAwesomeIcon
            icon={faChevronRight}
            className="ms-2"
            transform="shrink-1"
          />
        </button>
      </div>
    </section>
  );
};

export default LatestPosts;
