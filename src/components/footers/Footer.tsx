import { Col, Row, cn } from '@hummingbirdui/react';

interface FooterProps {
  className?: string;
}

/** `+Footer` in phoenix-tailwind mixins/common/Footer.pug */
const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={cn(className, 'footer')}>
      <Row className="g-0 justify-between items-center h-full">
        <Col xs={12} sm="auto" className="text-center">
          <p className="mb-0 mt-2 sm:mt-0 text-default">
            Thank you for creating with {import.meta.env.VITE_TITLE} React
            <span className="hidden sm:inline-block" />
            <span className="hidden sm:inline-block mx-1">|</span>
            <span className="block sm:inline">
              {new Date().getFullYear()} &copy;{' '}
              <a
                className="mx-1"
                href="https://themewagon.com"
                target="_blank"
                rel="noreferrer"
              >
                Themewagon
              </a>
            </span>
          </p>
        </Col>
        <Col xs={12} sm="auto" className="text-center">
          <p className="mb-0 text-subtle/85">v{import.meta.env.VITE_VERSION}</p>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
