import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Input, Row } from '@hummingbirdui/react';
import Lottie from 'lottie-react';
import comingSoonLight from 'assets/img/animated-icons/coming-soon-light.json';
import comingSoonDark from 'assets/img/animated-icons/coming-soon-dark.json';
import comingSoonImage from 'assets/img/spot-illustrations/42.png';
import comingSoonImageDark from 'assets/img/spot-illustrations/dark_42.png';
import Button from 'components/base/Button';

/** phoenix-tailwind `src/pug/coming-soon.pug` */
const ComingSoon = () => {
  return (
    <Row className="flex-center content-min-h pb-16 g-0">
      <Col xxl={10}>
        <Row className="xl:items-center g-2">
          <Col xl={6} className="xl:order-1">
            <div className="flex flex-center">
              <div className="xl:w-full animation">
                {/* both players are mounted and swapped by `dark:`, as in the gold */}
                <Lottie
                  animationData={comingSoonLight}
                  loop
                  className="lottie dark:hidden"
                />
                <Lottie
                  animationData={comingSoonDark}
                  loop
                  className="lottie hidden dark:block"
                />
              </div>
            </div>
          </Col>
          <Col xl={6}>
            <div className="flex justify-center xl:mt-30">
              <div className="text-container text-center xl:text-start">
                <img
                  src={comingSoonImage}
                  alt=""
                  className="dark:hidden mb-8 w-3/4 lg:w-1/2 xl:w-3/4 2xl:w-full max-w-[415px]"
                />
                <img
                  src={comingSoonImageDark}
                  alt=""
                  className="hidden dark:block mb-8 w-3/4 lg:w-1/2 xl:w-3/4 2xl:w-full max-w-[415px]"
                />
                <h2 className="text-muted xl:text-xl mb-4">
                  Get notified when we launch
                </h2>
                <p className="mb-10 2xl:w-3/4">
                  <b>Something in the way!</b> Subscribe to our newsletter to be
                  the first to know about upcoming features and discounts.
                </p>
                <Row className="g-4 md:w-3/4 xl:w-full 2xl:w-3/4 mx-auto xl:mx-0">
                  <Col className="ps-0">
                    <Input type="text" />
                  </Col>
                  <Col xs="auto" className="pe-0">
                    <Button
                      variant="primary"
                      endIcon={
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="text-sm"
                        />
                      }
                    >
                      Subscribe
                    </Button>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ComingSoon;
