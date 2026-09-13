import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from '@hummingbirdui/react';
import Lottie from 'lottie-react';
import { Link } from 'react-router';
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
                  className="dark:hidden mb-8 xl:mb-18 w-3/4 lg:w-1/2 xl:w-3/4 2xl:w-full"
                />
                <img
                  src={comingSoonImageDark}
                  alt=""
                  className="hidden dark:block mb-8 xl:mb-18 w-3/4 lg:w-1/2 xl:w-3/4 2xl:w-full"
                />
                <h2 className="text-muted xl:text-xl mb-4">
                  This page is on the way !
                </h2>
                <p className="mb-10">
                  Our developers are on the last stage of developing this page.
                  We&apos;re just ironing out the kinks. You&apos;ll receive it
                  on the next update. Lets go!
                </p>
                <Button variant="primary" size="lg" asChild>
                  <Link to="/">
                    <FontAwesomeIcon icon={faChevronLeft} className="me-2" />
                    Go to Homepage
                  </Link>
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ComingSoon;
