import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import logo from 'assets/img/icons/logo-white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faLinkedinIn,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <section data-bs-theme="dark" className="bg-dark dark__bg-gray-1000">
      <div className="container-small lg:px-12 2xl:px-4">
        <Row className="2xl:gx-14 gy-8 items-center mb-8">
          <Col xl="auto" className="text-center">
            <Link to="/">
              <img src={logo} alt="" height={48} />
            </Link>
          </Col>
          <Col xl="auto" className="flex-1">
            <ul className="list-unstyled flex justify-center flex-wrap mb-0 xl:border-e border-dashed gap-4 xl:gap-14 xl:pe-8 2xl:pe-14 w-3/4 md:w-full mx-auto">
              {[
                'Contact us',
                'Newsroom',
                'Opportunities',
                'Login',
                'Sign Up',
                'Support',
                'FAQ'
              ].map(item => (
                <li key={item}>
                  <a href="#!" className="text-light text-opacity-75">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
          <Col xl="auto">
            <div className="flex items-center justify-center gap-14">
              <Link to="#!" className="text-white">
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
              <Link to="#!" className="text-white">
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
              <Link to="#!" className="text-white">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </Link>
            </div>
          </Col>
        </Row>
        <hr className="border-t" />
        <div className="sm:flex flex-between-center text-center">
          <p className="text-subtle mb-0">Copyright © Company Name</p>
          <p className="text-subtle mb-0">
            Made with love by{' '}
            <Link to="https://themewagon.com">ThemeWagon</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
