import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import { Link } from 'react-router';
import bg43 from 'assets/img/bg/43.png';

const footerList1: string[] = [
  'Home',
  'Terms',
  'Talent & culture',
  'Destination',
  'Sitemap'
];
const footerList2: string[] = ['Refund policy', 'EMI Policy', 'Privacy Policy'];

/** `+HotelFooter` in phoenix-tailwind mixins/travel-agency/hotel/HotelFooter.pug */
const TravelFooter = () => {
  return (
    <section className="py-0 mb-8 md:mb-12 lg:mb-16">
      <div className="md:container-medium px-0 md:px-4">
        <div className="p-8 sm:p-12 xl:py-24 xl:px-30 md:rounded-md overflow-hidden relative">
          <div
            className="bg-holder overlay before:bg-(--color-black)/85! bg-cover! bg-center!"
            style={{ backgroundImage: `url(${bg43})` }}
          />
          <Row className="g-8 relative justify-between">
            <Col md={6} lg={3}>
              <h5 className="text-white mb-4">Discover</h5>
              <Row className="g-4">
                <Col>
                  <ul className="list-none mb-0 p-0">
                    {footerList1.map(item => (
                      <li key={item} className="mb-1">
                        <Link to="#!" className="text-secondary-lighter">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Col>
                <Col>
                  <ul className="list-none mb-0 p-0">
                    {footerList2.map(item => (
                      <li key={item} className="mb-1">
                        <Link to="#!" className="text-secondary-lighter">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Col>
              </Row>
            </Col>
            <Col md={6} lg={3}>
              <h5 className="text-white mb-4">Contact</h5>
              <a
                href="mailto:info@phoenixtravels.com"
                className="block text-secondary-lighter mb-1 text-nowrap"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="me-2 lg:me-1 xl:me-2"
                />
                info@phoenixtravels.com
              </a>
              <a
                href="tel:+13134048290"
                className="block text-secondary-lighter mb-1"
              >
                <FontAwesomeIcon
                  icon={faPhone}
                  className="me-2 lg:me-1 xl:me-2"
                />
                +13134048290
              </a>
            </Col>
            <Col lg={5}>
              <h2 className="text-white mb-2 font-semibold">
                Enjoy your trip to the fullest
              </h2>
              <p className="mb-8 text-secondary-lighter">
                Sign up and get notified
                <br /> about best deals immediately
              </p>
              <div className="flex gap-2">
                <div className="input-group-icon flex-1">
                  <input
                    type="text"
                    placeholder="Your email address"
                    className="form-control"
                  />
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="form-control-icon-start text-default text-md"
                    transform="up-2"
                  />
                </div>
                <Button variant="primary" className="rounded-md">
                  Sign up
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default TravelFooter;
