import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import boltIlls from 'assets/img/icons/illustrations/bolt.png';
import pie from 'assets/img/icons/illustrations/pie.png';
import { defaultFeatures } from 'data/landing/default-landing-data';
import FeatureSection from './FeatureSection';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Features = () => {
  return (
    <section className="bg-default pt-30 pb-18" id="features">
      <div className="container-small lg:px-12 2xl:px-4">
        <div className="relative z-2">
          <Row className="mb-24">
            <Col lg={6} className="text-center lg:text-start 2xl:pe-4">
              <h4 className="text-primary font-black mb-6">Features</h4>
              <h2 className="mb-4 text-emphasis leading-base">
                A fully integrated suite
                <br />
                of payments products
              </h2>
              <p className="mb-8">
                With the power of Phoenix, you can now focus only on
                functionaries for your digital products, while leaving the UI
                design on us!With the power of Phoenix, you can now focus only
                on functionaries for your digital products, while leaving the UI
                design on us!
              </p>
              <Button
                as={Link}
                to="#!"
                size="lg"
                variant="outline-primary"
                className="rounded-full me-2"
                endIcon={
                  <FontAwesomeIcon icon={faAngleRight} className="ms-2" />
                }
              >
                Find out more
              </Button>
            </Col>
            <Col sm={6} lg={3} className="mt-12 text-center lg:text-start">
              <div className="h-full flex flex-col justify-between">
                <div className="lg:border-s border-dashed border-subtle ps-6">
                  <img
                    className="mb-6"
                    src={boltIlls}
                    width={48}
                    height={48}
                    alt=""
                  />
                  <div>
                    <h5 className="font-black mb-2">Lightning Speed</h5>
                    <p className="font-semibold leading-sm">
                      Present everything you need in one place within minutes!
                      Grow with Phoenix!
                    </p>
                  </div>
                  <Link to="#!" className="me-2 p-0 text-md font-bold">
                    Check Demo
                    <FontAwesomeIcon icon={faAngleRight} className="ms-2" />
                  </Link>
                </div>
              </div>
            </Col>
            <Col sm={6} lg={3} className="mt-12 text-center lg:text-start">
              <div className="h-full flex flex-col">
                <div className="lg:border-s border-dashed border-subtle ps-6">
                  <img
                    className="mb-6"
                    src={pie}
                    width={48}
                    height={48}
                    alt=""
                  />
                  <div>
                    <h5 className="font-black mb-2">All-in-one solution</h5>
                    <p className="font-semibold leading-sm">
                      Show your production and growth graph in one place with
                      Phoenix!
                    </p>
                  </div>
                  <Link to="#!" className="me-2 p-0 text-md font-bold">
                    Check Demo
                    <FontAwesomeIcon icon={faAngleRight} className="ms-2" />
                  </Link>
                </div>
              </div>
            </Col>
          </Row>

          {defaultFeatures.map((feature, index) => (
            <FeatureSection
              key={feature.label}
              feature={feature}
              orderReverse={index === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
