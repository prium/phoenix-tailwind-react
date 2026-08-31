import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';
import logo1 from 'assets/img/icons/logo-1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBehance,
  faFacebookF,
  faLinkedinIn,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import bg41 from 'assets/img/bg/41.jpg';
import classNames from 'classnames';

interface footerItems {
  title: string;
  link: string;
}
const footerItems: footerItems[] = [
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

const Footer = () => {
  return (
    <section className="booking-footer pb-10 md:pb-20 pt-30">
      <div
        className="bg-holder"
        style={{
          backgroundImage: `linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.8) 0%,
            rgba(0, 0, 0, 0.8) 100%
          ),
          url(${bg41})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          zIndex: '-1'
        }}
      />
      <div className="container-medium">
        <Row className="gy-4 justify-between items-center">
          <Col xs="auto">
            <Link to="#!">
              <img src={logo1} alt="" />
            </Link>
          </Col>
          <Col xs="auto">
            <ul className="mb-0 list-unstyled flex flex-wrap">
              {footerItems.map((item, index) => (
                <li
                  key={index}
                  className={classNames('', {
                    'sm:me-8 me-6': index !== footerItems.length - 1
                  })}
                >
                  <Link to={item.link} className="text-base font-bold text-white">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
        <hr className="my-6" />
        <Row className="gy-4 justify-between">
          <Col xs="auto">
            <Link to="#!" className="me-6 text-white">
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
            <Link to="#!" className="me-6 text-white">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link to="#!" className="me-6 text-white">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>
            <Link to="#!" className="text-white">
              <FontAwesomeIcon icon={faBehance} />
            </Link>
          </Col>
          <Col xs="auto">
            <p className="mb-0 text-white">
              Thank you for creating with Phoenix | 2023 ©{' '}
              <Link to="https://themewagon.com/" className="text-white">
                Themewagon
              </Link>
            </p>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Footer;
