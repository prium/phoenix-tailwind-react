import TestimonialCarousel from 'components/sliders/TestimonialCarousel';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import bg12 from 'assets/img/bg/bg-12.png';
import bg13 from 'assets/img/bg/13.png';

const Testimonial = () => {
  return (
    <div className="bg-default relative py-18">
      <div
        className="absolute h-full w-full top-0 bg-soft"
        style={{ transform: 'skew(0,-10deg)' }}
      />
      <div
        className="bg-holder z-2 hidden md:block"
        style={{
          backgroundImage: `url(${bg13})`,
          backgroundSize: 'auto',
          backgroundPosition: 'right'
        }}
      />
      <div
        className="bg-holder z-2 hidden md:block lg:hidden xl:block"
        style={{
          backgroundImage: `url(${bg12})`,
          backgroundSize: 'auto',
          backgroundPosition: 'left'
        }}
      />

      <section className="overflow-hidden static">
        <div className="container-small lg:px-12 2xl:px-4">
          <Row>
            <Col lg={6} className="text-center lg:text-start z-2">
              <div>
                <h4 className="text-primary font-black mb-4">Testimonial</h4>
                <h2 className="mb-4 text-emphasis">
                  More than 2 Millions happy
                  <br />
                  Customers and counting
                </h2>
                <p className="mb-8">
                  You may now concentrate on the functionality and other{' '}
                  <br className="hidden sm:block" />
                  aspects of your web products thanks to Phoenix's strength
                  <br className="hidden sm:block" />0 before leaving the UI
                  design to us. It is simple to complete
                  <br className="hidden sm:block" />
                  the work after checking and double-checking.
                </p>
              </div>
            </Col>
            <Col lg={6} className="z-2">
              <TestimonialCarousel />
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
