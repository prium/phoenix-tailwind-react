import { Col, Form, Row } from 'react-bootstrap';
import Lottie from 'lottie-react';
import comingSoonLight from 'assets/img/animated-icons/coming-soon-light.json';
import comingSoonDark from 'assets/img/animated-icons/coming-soon-dark.json';
import comingSoonText from 'assets/img/spot-illustrations/40.png';
import comingSoonTextDark from 'assets/img/spot-illustrations/dark_40.png';
import { useAppContext } from 'providers/AppProvider';
import Button from 'components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ComingSoon = () => {
  const {
    config: { theme }
  } = useAppContext();

  return (
    <Row className="flex-center content-min-h pb-16">
      <Col xs={12} xxl={10}>
        <Row className="xl:items-center g-2">
          <Col xs={12} xl={6} className="xl:order-1">
            <div className="flex flex-center">
              <Lottie
                animationData={
                  theme === 'light' ? comingSoonLight : comingSoonDark
                }
                loop={true}
                className="xl:w-full animation"
              />
            </div>
          </Col>
          <Col xs={12} xl={6}>
            <div className="flex justify-center xl:mt-30">
              <div className="text-container text-center xl:text-start">
                <img
                  src={comingSoonText}
                  alt=""
                  className="mb-8 w-3/4 lg:w-1/2 xl:w-3/4 2xl:w-full dark:hidden"
                  style={{ maxWidth: 415 }}
                />
                <img
                  src={comingSoonTextDark}
                  alt=""
                  className="mb-8 w-3/4 lg:w-1/2 xl:w-3/4 2xl:w-full hidden dark:block"
                  style={{ maxWidth: 415 }}
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
                    <Form.Control />
                  </Col>
                  <Col xs="auto" className="pe-0">
                    <Button
                      variant="primary"
                      endIcon={
                        <FontAwesomeIcon icon={faEnvelope} className="text-sm" />
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
