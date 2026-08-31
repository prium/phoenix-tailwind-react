import { Col, Row, cn } from '@hummingbirdui/react';
import { Link } from 'react-router';
import logo1 from 'assets/img/icons/logo-1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBehance,
  faFacebookF,
  faLinkedinIn,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

interface FooterItem {
  title: string;
  link: string;
}

const footerItems: FooterItem[] = [
  {
    title: 'Home',
    link: '#!'
  },
  {
    title: 'About',
    link: '#!'
  },
  {
    title: 'Contact',
    link: '#!'
  },
  {
    title: 'FAQ',
    link: '#!'
  },
  {
    title: 'Gallery',
    link: '#!'
  }
];

/** `+FooterLanding` — the `.booking-footer` background/clip-path comes from
 * assets/css/components/landing.css */
const Footer = () => {
  return (
    <section className="booking-footer pb-10 md:pb-20 pt-30">
      <div className="container-medium">
        <Row className="gy-4 justify-between items-center">
          <Col xs="auto">
            <Link to="#!">
              <img src={logo1} alt="" />
            </Link>
          </Col>
          <Col xs="auto">
            <ul className="p-0 mb-0 list-none flex flex-wrap">
              {footerItems.map((item, index) => (
                <li
                  key={index}
                  className={cn({
                    'me-4 sm:me-8': index !== footerItems.length - 1
                  })}
                >
                  <Link
                    to={item.link}
                    className="text-base font-bold text-white"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
        <hr className="my-6 border-subtle" />
        <Row className="gy-4 justify-between">
          <Col xs="auto">
            <Link to="#!" className="text-white me-6">
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
            <Link to="#!" className="text-white me-6">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link to="#!" className="text-white me-6">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>
            <Link to="#!" className="text-white">
              <FontAwesomeIcon icon={faBehance} />
            </Link>
          </Col>
          <Col xs="auto">
            <p className="mb-0 text-white">
              Thank you for creating with Phoenix | 2026 ©{' '}
              <Link to="https://themewagon.com/" className="text-white">
                ThemeWagon
              </Link>
            </p>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Footer;
