import { Feature, services } from 'data/landing/alternate-landing-data';
import Lottie from 'lottie-react';
import { useAppContext } from 'providers/AppProvider';
import { Col, Row } from 'react-bootstrap';
import earthLight from 'assets/img/animated-icons/rotating-earth.json';
import earthDark from 'assets/img/animated-icons/rotating-earth-dark.json';
import earthPlane from 'assets/img/spot-illustrations/earth-plane.png';
import earthPlaneDark from 'assets/img/spot-illustrations/earth-plane-dark.png';

const ServiceItem = ({ service }: { service: Feature }) => {
  return (
    <div className="text-center lg:text-start">
      <img src={service.lightImg} alt="" className="mb-6 dark:hidden" />
      <img src={service.darkImg} alt="" className="mb-6 hidden dark:block" />
      <h4 className="mb-2">{service.title}</h4>
      <p>{service.description}</p>
    </div>
  );
};

const OneStopSolution = () => {
  const {
    config: { theme }
  } = useAppContext();
  return (
    <section className="overflow-hidden rotating-earth-container pb-8 md:pb-0 pt-24">
      <div className="container-small lg:px-12 2xl:px-4">
        <Row>
          <Col lg={6} className="text-center lg:text-start">
            <h5 className="text-info mb-4">One-stop solution</h5>
            <h2 className="mb-2 leading-base">Used by millions of users</h2>
            <h1 className="text-3xl sm:text-5xl mb-4 text-gradient-info font-black">
              WORLDWIDE
            </h1>
            <p className="mb-18">
              Keep it simple with Phoenix and help your organization grow with
              the abundance you look for.
            </p>
            <Row className="gy-10">
              {services.map(service => (
                <Col key={service.id} sm={6}>
                  <ServiceItem service={service} />
                </Col>
              ))}
            </Row>
          </Col>
          <Col lg="auto">
            <div className="relative lg:absolute rotating-earth">
              <Lottie
                animationData={theme === 'light' ? earthLight : earthDark}
                className="lottie"
              />
              <img
                src={earthPlane}
                alt=""
                className="absolute dark:hidden"
              />
              <img
                src={earthPlaneDark}
                alt=""
                className="absolute hidden dark:block"
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default OneStopSolution;
