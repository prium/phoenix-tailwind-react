import { useRef } from 'react';
import { Col, Row } from '@hummingbirdui/react';
import illustrations31 from 'assets/img/spot-illustrations/31.png';
import section1 from 'assets/img/sections/1.webp';
import section2 from 'assets/img/sections/2.webp';
import section3 from 'assets/img/sections/3.webp';
import section4 from 'assets/img/sections/4.webp';
import section5 from 'assets/img/sections/5.webp';
import section6 from 'assets/img/sections/6.webp';
import section7 from 'assets/img/sections/7.webp';
import section8 from 'assets/img/sections/8.webp';
import section9 from 'assets/img/sections/9.webp';
import section10 from 'assets/img/sections/10.webp';
import section11 from 'assets/img/sections/11.webp';
import section12 from 'assets/img/sections/12.webp';
import section13 from 'assets/img/sections/13.webp';
import section14 from 'assets/img/sections/14.webp';
import section15 from 'assets/img/sections/15.webp';
import section16 from 'assets/img/sections/16.webp';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useParallaxHooks from 'hooks/useParallaxHooks';

gsap.registerPlugin(ScrollTrigger);

const AdvanceFeatures = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const parallaxElRef = useRef<(HTMLImageElement | null)[]>([]);

  // the gold triggers every gallery tween off `section.gsap` itself
  useParallaxHooks(containerRef, parallaxElRef, () => ({
    scrollTrigger: {
      trigger: containerRef.current,
      start: '+=450 bottom'
    }
  }));

  return (
    <section className="gsap pb-0 overflow-hidden" ref={containerRef}>
      <div className="lg:container">
        <Row className="justify-center mb-20">
          <Col xs={12} xl={7} className="text-center">
            <h2 className="text-highlight font-normal leading-sm">
              Beautiful blending of <br />
              card and cardless designs of{' '}
              <span className="text-primary relative font-black inline-flex ms-2">
                advanced forms
                <img
                  src={illustrations31}
                  alt=""
                  className="text-illustration-underline"
                />
              </span>
            </h2>
          </Col>
        </Row>

        <Row className="g-2 showcase-gallery mx-auto w-386.25">
          <Col xs={3} className="self-end mb-2">
            <Row className="g-2">
              <Col xs={12}>
                <img
                  className="w-full z-3 layer-4 max-w-93.75"
                  ref={el => {
                    parallaxElRef.current?.push(el);
                  }}
                  data-parallax={JSON.stringify({
                    y: '-480'
                  })}
                  src={section1}
                  alt=""
                />
              </Col>
              <Col xs={6}>
                <img
                  className="w-full z-5 layer-6 max-w-45.75"
                  ref={el => {
                    parallaxElRef.current?.push(el);
                  }}
                  data-parallax={JSON.stringify({
                    y: '-600'
                  })}
                  src={section2}
                  alt=""
                />
              </Col>
              <Col xs={6}>
                <img
                  className="w-full z-2 layer-3 max-w-45.75"
                  ref={el => {
                    parallaxElRef.current?.push(el);
                  }}
                  data-parallax={JSON.stringify({
                    y: '-420'
                  })}
                  src={section3}
                  alt=""
                />
              </Col>
              <Col xs={12} className="text-end">
                <img
                  className="w-full z-3 layer-4 max-w-58.5"
                  ref={el => {
                    parallaxElRef.current?.push(el);
                  }}
                  data-parallax={JSON.stringify({
                    y: '-480'
                  })}
                  src={section4}
                  alt=""
                />
              </Col>
            </Row>
          </Col>
          <Col xs={9}>
            <Row className="g-2 items-end mb-2">
              <Col xs="auto">
                <img
                  className="z-4 layer-5 max-w-113.5"
                  ref={el => {
                    parallaxElRef.current?.push(el);
                  }}
                  data-parallax={JSON.stringify({
                    y: '-540'
                  })}
                  src={section5}
                  alt=""
                />
              </Col>
              <Col xs="auto">
                <img
                  className="z-2 layer-3 max-w-75.75"
                  ref={el => {
                    parallaxElRef.current?.push(el);
                  }}
                  data-parallax={JSON.stringify({
                    y: '-420'
                  })}
                  src={section8}
                  alt=""
                />
              </Col>
              <Col xs="auto">
                <img
                  className="z-4 layer-5 max-w-94"
                  ref={el => {
                    parallaxElRef.current?.push(el);
                  }}
                  data-parallax={JSON.stringify({
                    y: '-540'
                  })}
                  src={section12}
                  alt=""
                />
              </Col>
            </Row>
            <Row className="g-2 mb-2">
              <Col xs="auto">
                <img
                  className="layer-1 max-w-111"
                  ref={el => {
                    parallaxElRef.current?.push(el);
                  }}
                  data-parallax={JSON.stringify({
                    y: '-300'
                  })}
                  src={section6}
                  alt=""
                />
              </Col>
              <Col xs="auto">
                <img
                  className="z-4 layer-5 max-w-41.25"
                  ref={el => {
                    parallaxElRef.current?.push(el);
                  }}
                  data-parallax={JSON.stringify({
                    y: '-540'
                  })}
                  src={section9}
                  alt=""
                />
              </Col>
              <Col xs="auto">
                <img
                  className="z-1 layer-2 max-w-41.25"
                  ref={el => {
                    parallaxElRef.current?.push(el);
                  }}
                  data-parallax={JSON.stringify({
                    y: '-360'
                  })}
                  src={section10}
                  alt=""
                />
              </Col>
              <Col xs="auto">
                <img
                  className="z-2 layer-3 max-w-85.75"
                  ref={el => {
                    parallaxElRef.current?.push(el);
                  }}
                  data-parallax={JSON.stringify({
                    y: '-420'
                  })}
                  src={section13}
                  alt=""
                />
              </Col>
            </Row>
            <Row className="g-2 mb-2">
              <Col xs="auto">
                <img
                  className="z-5 layer-6 max-w-127.5"
                  ref={el => {
                    parallaxElRef.current?.push(el);
                  }}
                  data-parallax={JSON.stringify({
                    y: '-600'
                  })}
                  src={section7}
                  alt=""
                />
              </Col>
              <Col xs="auto">
                <img
                  className="mb-2 block layer-1 max-w-88.75"
                  ref={el => {
                    parallaxElRef.current?.push(el);
                  }}
                  data-parallax={JSON.stringify({
                    y: '-300'
                  })}
                  src={section11}
                  alt=""
                />
                <img
                  className="z-2 layer-3 max-w-88.75"
                  ref={el => {
                    parallaxElRef.current?.push(el);
                  }}
                  data-parallax={JSON.stringify({
                    y: '-420'
                  })}
                  src={section16}
                  alt=""
                />
              </Col>
              <Col xs="auto">
                <img
                  className="z-5 mb-2 block layer-6 max-w-34.25"
                  ref={el => {
                    parallaxElRef.current?.push(el);
                  }}
                  data-parallax={JSON.stringify({
                    y: '-600'
                  })}
                  src={section14}
                  alt=""
                />
                <img
                  className="z-5 layer-6 max-w-34.25"
                  ref={el => {
                    parallaxElRef.current?.push(el);
                  }}
                  data-parallax={JSON.stringify({
                    y: '-600'
                  })}
                  src={section15}
                  alt=""
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default AdvanceFeatures;
