import {
  faFacebookSquare,
  faTwitterSquare
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from 'components/common/Logo';
import { PropsWithChildren } from 'react';
import { Col, Row, Stack } from 'react-bootstrap';
import { Link } from 'react-router';

const LinkItem = ({ children, to }: PropsWithChildren<{ to: string }>) => {
  return (
    <Link to={to} className="text-subtle font-semibold text-md mb-1">
      {children}
    </Link>
  );
};

const EcommerceFooter = () => {
  return (
    <section className="bg-subtle dark__bg-gray-1100 py-16">
      <div className="container-small">
        <Row className="justify-between gy-6">
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
            <h5 className="font-black mb-4">About Phoenix</h5>
            <Stack>
              <LinkItem to="#!">Careers</LinkItem>
              <LinkItem to="#!">Affiliate Program</LinkItem>
              <LinkItem to="#!">Privacy Policy</LinkItem>
              <LinkItem to="#!">Terms & Conditions</LinkItem>
            </Stack>
          </Col>
          <Col xs={6} md="auto">
            <h5 className="font-black mb-4">Stay Connected</h5>
            <Stack>
              <LinkItem to="#!">Blogs</LinkItem>
              <Link to="#!" className="mb-1 font-semibold text-md">
                <FontAwesomeIcon
                  icon={faFacebookSquare}
                  className="text-primary me-2 text-base"
                />
                <span className="text-muted">Facebook</span>
              </Link>
              <Link to="#!" className="mb-1 font-semibold text-md">
                <FontAwesomeIcon
                  icon={faTwitterSquare}
                  className="text-info me-2 text-base"
                />
                <span className="text-muted">Twitter</span>
              </Link>
            </Stack>
          </Col>
          <Col xs={6} md="auto">
            <h5 className="font-black mb-4">Customer Service</h5>
            <Stack>
              <LinkItem to="#!">Help Desk</LinkItem>
              <LinkItem to="#!">Support, 24/7</LinkItem>
              <LinkItem to="#!">Community of Phoenix</LinkItem>
            </Stack>
          </Col>
          <Col xs={6} md="auto">
            <h5 className="font-black mb-4">Payment Method</h5>
            <Stack>
              <LinkItem to="#!">Cash on Delivery</LinkItem>
              <LinkItem to="#!">Online Payment</LinkItem>
              <LinkItem to="#!">PayPal</LinkItem>
              <LinkItem to="#!">Installment</LinkItem>
            </Stack>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default EcommerceFooter;
