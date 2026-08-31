import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import bg47 from 'assets/img/bg/47.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/base/Button';
import { Link } from 'react-router';

interface URlItem {
  id: number;
  label: string;
  url: string;
}
const urlList: URlItem[] = [
  {
    id: 1,
    label: 'Home',
    url: '#!'
  },
  {
    id: 2,
    label: 'Terms',
    url: '#!'
  },
  {
    id: 3,
    label: 'Talent & culture',
    url: '#!'
  },
  {
    id: 4,
    label: 'Destination',
    url: '#!'
  },
  {
    id: 5,
    label: 'Refund Policy',
    url: '#!'
  },
  {
    id: 6,
    label: 'Sitemap',
    url: '#!'
  },
  {
    id: 7,
    label: 'EMI Policy',
    url: '#!'
  },
  {
    id: 8,
    label: 'Privacy Policy',
    url: '#!'
  }
];

const TripCommonCTASection = () => {
  return (
    <footer className="relative overflow-hidden mb-6">
      <Container fluid="medium">
        <div className="">
          <div
            className="bg-holder overlay bg-opacity-75"
            style={{
              backgroundImage: `url(${bg47})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}
          />
          <Row className="relative flex-center gy-4 py-10">
            <Col xxl={4} className="order-1 2xl:order-0">
              <ul className="list-unstyled flex flex-wrap justify-center 2xl:justify-start gap-4 2xl:gap-6 mb-0">
                {urlList.slice(0, 4).map(item => (
                  <li key={item.id}>
                    <Link to={item.url} className="text-secondary-lighter">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Col>
            <Col sm={8} md={7} lg={5} xl={4} className="mb-4 2xl:mb-0 mx-auto">
              <h2 className="mb-6 font-semibold text-white text-center leading-sm">
                Subscribe to get notified about the latest news
              </h2>
              <div className="flex gap-2">
                <div className="form-icon-container flex-1">
                  <Form.Control
                    type="text"
                    placeholder="Your email address"
                    name="email"
                    className="form-icon-input"
                  />
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="form-icon text-default text-md"
                  />
                </div>
                <Button variant="primary" className="rounded-md">
                  Sign up
                </Button>
              </div>
            </Col>
            <Col xxl={4} className="order-2 2xl:order-0">
              <ul className="list-unstyled flex flex-wrap justify-center 2xl:justify-end gap-4 2xl:gap-6 mb-0">
                {urlList.slice(4).map(item => (
                  <li key={item.id}>
                    <Link to={item.url} className="text-secondary-lighter">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};

export default TripCommonCTASection;
