import classNames from 'classnames';
import { Col, Row } from 'react-bootstrap';

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={classNames(className, 'footer')}>
      <Row className="g-1 justify-between items-center h-full">
        <Col xs={12} sm="auto" className="text-center">
          <p className="mb-0 mt-2 sm:mt-0 text-default">
            Thank you for creating with {import.meta.env.VITE_TITLE} React
            <span className="hidden sm:inline-block" />
            <span className="hidden sm:inline-block mx-1">|</span>
            <br className="sm:hidden" />
            {new Date().getFullYear()} &copy;{' '}
            <a href="https://themewagon.com" target="_blank" rel="noreferrer">
              Themewagon
            </a>
          </p>
        </Col>
        <Col xs={12} sm="auto" className="text-center">
          <p className="mb-0 text-subtle text-opacity-85">
            v{import.meta.env.VITE_VERSION}
          </p>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
