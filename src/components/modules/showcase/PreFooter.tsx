import Logo from 'components/common/Logo';
import { Col, Row } from '@hummingbirdui/react';
import { Link } from 'react-router';

/** `mixins/showcase/Prefooter.pug` */
const PreFooter = () => {
  return (
    <section className="bg-subtle py-10">
      <div className="container-small">
        <Row className="items-center">
          <Col md={6} className="text-center md:text-start">
            <Logo
              displayClass="md:flex"
              className="mb-2"
              textClass="text-subtle/85"
            />
            <p className="md:pe-8">
              Thank you for downloading Phoenix to create, customize and grow
              with it! Enjoy Phoenix!
            </p>
          </Col>
          <Col md={6}>
            <div className="lg:flex lg:justify-end text-center">
              <Link to="/documentation/getting-started" className="me-6">
                Documentation
              </Link>
              <a href="mailto:support@themewagon.com" className="me-6">
                Support
              </a>
              <Link to="/changelog">Changelog</Link>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default PreFooter;
