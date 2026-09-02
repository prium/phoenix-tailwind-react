import { Ref } from 'react';
import { Col, Row } from 'react-bootstrap';
import bg13 from 'assets/img/bg/bg-13.png';
import bgRight21 from 'assets/img/bg/bg-right-21.png';
import bgLeft21 from 'assets/img/bg/bg-left-21.png';
import capterra from 'assets/img/generic/capterra.png';
import CountUp from 'react-countup';

const FunFacts = () => {
  return (
    <div className="pb-30">
      <div className="relative py-18">
        <div
          className="bg-holder z-1 world-map-bg"
          style={{
            transform: 'skew(0,-10deg)',
            backgroundImage: `url(${bg13})`
          }}
        />
        <div
          className="bg-holder z-2 opacity-25"
          style={{
            backgroundImage: `url(${bgRight21})`,
            backgroundSize: 'auto',
            backgroundPosition: 'right'
          }}
        />
        <div
          className="bg-holder z-2 mt-16 opacity-25"
          style={{
            backgroundImage: `url(${bgLeft21})`,
            backgroundSize: 'auto',
            backgroundPosition: 'left'
          }}
        />

        <section className="overflow-hidden z-2">
          <div
            className="container-small lg:px-12 2xl:px-4"
            data-bs-theme="light"
          >
            <div className="relative">
              <Row className="row mb-10">
                <div className="xl:col-6 text-center md:text-start">
                  <h2 className="text-white mb-2">
                    Being used by millions of users
                  </h2>
                  <h1 className="md:text-4xl xl:text-5xl font-black text-gradient-info uppercase mb-6 md:mb-0">
                    WORLDWIDE
                  </h1>
                </div>
                <div className="xl:col-6 text-center md:text-start">
                  <p className="text-white">
                    You can get all the reports, data analysis, and growth maps
                    you need with the help of Phoenix's power, and you may
                    review and modify them whenever you want. These features
                    make this dashboard outstanding.
                  </p>
                </div>
              </Row>

              <Row>
                <Col xl={8} className="text-center md:text-start mb-10 xl:mb-0">
                  <div className="md:flex md:justify-between">
                    <div className="mb-10 md:mb-0 me-6">
                      <CountUp
                        end={125}
                        duration={5}
                        suffix="+"
                        enableScrollSpy
                      >
                        {({ countUpRef }) => (
                          <div>
                            <h1
                              className="display-1 text-white font-black"
                              ref={countUpRef as Ref<HTMLHeadingElement>}
                            />
                          </div>
                        )}
                      </CountUp>
                      <p className="text-white">
                        Every month, there are more
                        <br className="md:hidden lg:block" />
                        than 125+ sales.
                      </p>
                    </div>
                    <div className="mb-10 md:mb-0 me-6">
                      <CountUp
                        end={308}
                        duration={5}
                        suffix="k"
                        enableScrollSpy
                      >
                        {({ countUpRef }) => (
                          <div>
                            <h1
                              className="display-1 text-white font-black"
                              ref={countUpRef as Ref<HTMLHeadingElement>}
                            />
                          </div>
                        )}
                      </CountUp>
                      <p className="text-white">
                        We have 308+ active paid.
                        <br className="md:hidden lg:block" />
                        subscribers.
                      </p>
                    </div>
                    <div className="mb-10 md:mb-0 me-6">
                      <CountUp end={12} duration={5} enableScrollSpy>
                        {({ countUpRef }) => (
                          <div>
                            <h1
                              className="display-1 text-white font-black"
                              ref={countUpRef as Ref<HTMLHeadingElement>}
                            />
                          </div>
                        )}
                      </CountUp>

                      <p className="text-white">
                        We have won 12 awards so
                        <br className="md:hidden lg:block" />
                        far with great success.{' '}
                      </p>
                    </div>
                  </div>
                </Col>
                <Col xl={4} className="text-center md:text-start">
                  <img className="img-fluid" src={capterra} alt="" />
                </Col>
              </Row>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FunFacts;
