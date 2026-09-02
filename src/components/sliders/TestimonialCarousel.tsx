import { Carousel } from '@hummingbirdui/react';
import type { CSSProperties } from 'react';

import bg2 from 'assets/img/bg/bg-2.png';
import Rating from 'components/base/Rating';
import { testimonials, type Testimonial } from 'data/landing/testimonial';

/**
 * The gold's sliding carousel has no gutter between slides; Hummingbird's
 * `carousel-container` defaults to `--carousel-item-spacing: 1rem` plus a
 * compensating negative inline-start margin.
 */
const NO_SLIDE_GAP = { '--carousel-item-spacing': '0px' } as CSSProperties;

const TestimonialItem = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="row g-1 lg:g-0 xl:g-1 lg:pb-4 xl:pb-0 lg:ps-1 xl:ps-0">
    <div className="lg:col-6 xl:col-5 text-center">
      <div className="testimonial-avatar-container inline-block relative">
        <div
          className="bg-holder bg-contain!"
          style={{ backgroundImage: `url(${bg2})` }}
        />
        <img
          className="rounded-lg lg:mb-0 opacity-100 relative"
          src={testimonial.avatar}
          width={testimonial.avatarWidth}
          height={testimonial.avatarHeight}
          alt=""
        />
      </div>
    </div>
    <div className="lg:col-6 xl:col-7 text-center lg:text-start">
      <div className="mb-6" data-hb-theme="light">
        <Rating
          readonly
          initialValue={testimonial.rating}
          fillIconColor="primary"
        />
      </div>
      <h3 className="text-lg xl:text-xl mb-8 leading-sm md:me-12 lg:me-0">
        {testimonial.comment}
      </h3>
      <h6>{testimonial.name}</h6>
      <h6 className="font-normal">{testimonial.occupation}</h6>
    </div>
  </div>
);

/**
 * `#carouselExampleIndicators` in landing-1/Testimonial.pug. The gold autoplays
 * through `data-bs-ride`; the React port stays on the first slide so the page
 * renders deterministically (and so the visual suite compares like with like).
 */
const TestimonialCarousel = () => (
  <Carousel id="carouselExampleIndicators" className="slide">
    <Carousel.Content style={NO_SLIDE_GAP}>
      {testimonials.map(testimonial => (
        <Carousel.Item key={testimonial.id}>
          <TestimonialItem testimonial={testimonial} />
        </Carousel.Item>
      ))}
    </Carousel.Content>
  </Carousel>
);

export default TestimonialCarousel;
