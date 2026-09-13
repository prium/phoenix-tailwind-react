import Logo from 'components/common/Logo';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';

const PreFooter = () => {
  return (
    <section className="bg-subtle py-10">
      <div className="container-small">
        <Row className="items-center">
          <Col md={6} className="text-center md:text-start">
            <Logo className="flex-col md:flex-row mb-2" />
            <p className="md:pe-8">
              Thank you for downloading Phoenix to create, customize and grow
              with it! Enjoy Phoenix!
            </p>
          </Col>
          <Col md={6} className="lg:flex lg:justify-end text-center">
            <Link to="/documentation/getting-started" className="me-6">
              Documentation
            </Link>
            <Link to="mailto:support@themewagon.com" className="me-6">
              Support
            </Link>
            <Link to="/changelog">Changelog</Link>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default PreFooter;
