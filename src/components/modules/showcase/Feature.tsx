import { Col, Row } from '@hummingbirdui/react';
import thumbsUpIcon from 'assets/img/icons/thumbs-up.png';
import bg26 from 'assets/img/bg/26.png';
import section63 from 'assets/img/sections/63.webp';
import { useRef } from 'react';
import useParallaxHooks from 'hooks/useParallaxHooks';

/** `mixins/showcase/Feature.pug` */
const Feature = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const parallaxElRef = useRef<HTMLDivElement | null>(null);

  useParallaxHooks(containerRef, parallaxElRef);

  return (
    <section
      className="section overflow-hidden py-0 bg-[linear-gradient(94.41deg,#193D91_-6.4%,#091F51_105.25%)]"
      ref={containerRef}
    >
      <div
        className="bg-holder opacity-50 bg-position-[14%]! bg-contain! h-[150%]!"
        style={{ backgroundImage: `url(${bg26})` }}
        ref={parallaxElRef}
        data-parallax={JSON.stringify({ y: '-40%' })}
      />
      <div className="container-small relative py-14">
        <Row className="items-center 2xl:gx-26">
          <Col lg={6} className="mb-10 z-1">
            <img src={section63} alt="" className="max-w-full" />
          </Col>
          <Col lg={6}>
            <h1 className="text-light font-normal mb-6 text-center lg:text-start">
              Coded for
              <br className="hidden lg:block xl:hidden" />
              <span className="text-primary-light font-extrabold">
                any screen size
                <img src={thumbsUpIcon} alt="" className="mb-2 ms-2" />
              </span>
            </h1>
            <p className="text-light text-center lg:text-start">
              Built with all top-notch technologies, this admin dashboard is
              fully responsive, and the clean codebase helps it to stay intact
              without breaking down the layout around any device or screen size
              or web browser.
            </p>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Feature;
