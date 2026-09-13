import {
  faFacebookSquare,
  faTwitterSquare
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from 'components/common/Logo';
import { Col, Row } from '@hummingbirdui/react';
import { PropsWithChildren } from 'react';
import { Link } from 'react-router';

const LinkItem = ({ children, to }: PropsWithChildren<{ to: string }>) => {
  return (
    <Link to={to} className="text-subtle font-semibold text-md mb-1">
      {children}
    </Link>
  );
};

/** `+EcomFooter` in phoenix-tailwind mixins/e-commerce/homepage/Footer.pug */
const EcommerceFooter = () => {
  return (
    <section className="bg-subtle dark:bg-soft py-16">
      <div className="container-small">
        <Row className="justify-between gy-4">
          <Col xs={12} lg={4}>
            <Logo className="mb-4" />
            <p className="text-subtle mb-1 font-semibold leading-sm text-md">
              Phoenix is an admin dashboard template with fascinating features
              and amazing layout. The template is responsive to all major
              browsers and is compatible with all available devices and screen
              sizes.
            </p>
          </Col>
          <Col xs={6} md="auto">
            <h5 className="font-extrabold mb-4">About Phoenix</h5>
            <div className="flex flex-col">
              <LinkItem to="#!">Careers</LinkItem>
              <LinkItem to="#!">Affiliate Program</LinkItem>
              <LinkItem to="#!">Privacy Policy</LinkItem>
              <LinkItem to="#!">Terms & Conditions</LinkItem>
            </div>
          </Col>
          <Col xs={6} md="auto">
            <h5 className="font-extrabold mb-4">Stay Connected</h5>
            <div className="flex flex-col">
              <LinkItem to="#!">Blogs</LinkItem>
              <Link to="#!" className="mb-1 font-semibold text-md flex">
                <FontAwesomeIcon
                  icon={faFacebookSquare}
                  className="text-primary me-2 text-base"
                />
                <span className="text-muted">Facebook</span>
              </Link>
              <Link to="#!" className="mb-1 font-semibold text-md flex">
                <FontAwesomeIcon
                  icon={faTwitterSquare}
                  className="text-info me-2 text-base"
                />
                <span className="text-muted">Twitter</span>
              </Link>
            </div>
          </Col>
          <Col xs={6} md="auto">
            <h5 className="font-extrabold mb-4">Customer Service</h5>
            <div className="flex flex-col">
              <LinkItem to="#!">Help Desk</LinkItem>
              <LinkItem to="#!">Support, 24/7</LinkItem>
              <LinkItem to="#!">Community of Phoenix</LinkItem>
            </div>
          </Col>
          <Col xs={6} md="auto">
            <h5 className="font-extrabold mb-4">Payment Method</h5>
            <div className="flex flex-col">
              <LinkItem to="#!">Cash on Delivery</LinkItem>
              <LinkItem to="#!">Online Payment</LinkItem>
              <LinkItem to="#!">PayPal</LinkItem>
              <LinkItem to="#!">Installment</LinkItem>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default EcommerceFooter;
