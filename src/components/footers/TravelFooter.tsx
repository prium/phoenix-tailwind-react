import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
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
const TravelFooter = () => {
  return (
    <section className="py-0 mb-8 md:mb-12 lg:mb-16">
      <div className="container-medium-md px-0 md:px-4">
        <div className="p-8 sm:p-12 xl:py-24 xl:px-30 md:rounded-md overflow-hidden relative">
          <div
            className="bg-holder overlay bg-opacity-85"
            style={{
              backgroundImage: `url(${bg43})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}
          />
          <Row className="g-8 relative justify-between">
            <Col md={6} lg={3}>
              <h5 className="text-white mb-4">Discover</h5>
              <Row className="g-4">
                <Col>
                  <ul className="list-unstyled mb-0">
                    {footerList1.map((item, index) => (
                      <li key={index} className="mb-1">
                        <Link to="#!" className="text-secondary-lighter">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Col>
                <Col>
                  <ul className="list-unstyled mb-0">
                    {footerList2.map((item, index) => (
                      <li key={index} className="mb-1">
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
              <Link
                to="mailto:info@phoenixtravels.com"
                className="block text-secondary-lighter mb-1 whitespace-nowrap"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="me-2 lg:me-1 xl:me-2"
                />
                info@phoenixtravels.com
              </Link>
              <Link
                to="tel:+13134048290"
                className="block text-secondary-lighter mb-1"
              >
                <FontAwesomeIcon icon={faPhone} className="me-2" />
                +13134048290
              </Link>
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
                <div className="form-icon-container flex-1">
                  <Form.Control
                    id="PickPlace"
                    type="email"
                    placeholder="Your email address"
                    className="form-icon-input"
                  />
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="form-icon text-default text-md"
                    transform="up-2"
                  />
                </div>
                <Button variant="primary" className="rounded-md md:px-12">
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
