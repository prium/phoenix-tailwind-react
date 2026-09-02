import Rating from 'components/base/Rating';
import { Testimonial, testimonials } from 'data/landing/testimonial';
import { Col, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import bg2 from 'assets/img/bg/bg-2.png';

const TestimonialItem = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <Row className="g-1 lg:g-0 xl:g-1 lg:pb-4 xl:pb-0 lg:ps-1 xl:ps-0">
      <Col lg={6} xl={5} className="text-center">
        <div className="testimonial-avatar-container inline-block relative">
          <div
            className="bg-holder"
            style={{
              backgroundImage: `url(${bg2})`,
              backgroundSize: 'contain'
            }}
          />

          <img
            src={testimonial.avatar}
            alt=""
            height={153}
            width={153}
            className="rounded-lg lg:mb-0 opacity-100 relative"
          />
        </div>
      </Col>
      <Col lg={6} xl={7} className="text-center lg:text-start">
        <div className="mb-6" data-bs-theme="light">
          <Rating
            readonly
            initialValue={testimonial.rating}
            fillIconColor="primary"
            emptyIconColor="primary-light"
          />
        </div>
        <h3 className="text-lg xl:text-xl mb-8 leading-sm md:me-12 lg:me-0">
          {testimonial.comment}
        </h3>
        <h6>{testimonial.name}</h6>
        <h6 className="font-normal">{testimonial.occupation}</h6>
      </Col>
    </Row>
  );
};

const TestimonialCarousel = () => {
  return (
    <Carousel controls={false} indicators={false} interval={3000}>
      {testimonials.map(testimonial => (
        <Carousel.Item key={testimonial.id}>
          <TestimonialItem testimonial={testimonial} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default TestimonialCarousel;
