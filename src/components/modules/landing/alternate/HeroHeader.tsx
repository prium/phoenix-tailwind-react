import { Col, Row } from 'react-bootstrap';
import Button from 'components/base/Button';
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import bg1 from 'assets/img/bg/bg-36.png';
import bg2 from 'assets/img/bg/bg-34.png';
import bg3 from 'assets/img/bg/bg-35.png';
import bg4 from 'assets/img/bg/bg-39.png';

const HeroHeader = () => {
  return (
    <section id="home" className="pb-14 overflow-hidden">
      <div className="hero-header-container-alternate relative">
        <div className="container-small lg:px-12 2xl:px-4">
          <Row className="items-center">
            <Col
              lg={6}
              className="pt-14 pb-10 relative z-5 text-center lg:text-start"
            >
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-black mb-6">
                <span className="text-gradient-info me-4">Elegance</span> for{' '}
                <br />
                your web app
              </h1>
              <p className="mb-8 xl:pe-18">
                Standard, modern and Elegant solution for your next web app so
                you don’t have to look further. Sign up or check the demo below.
              </p>
              <Button
                as={Link}
                to="#!"
                variant="primary"
                size="lg"
                className="rounded-full me-4"
              >
                Sign up
              </Button>
              <Button
                as={Link}
                to="#!"
                variant="link"
                endIcon={
                  <FontAwesomeIcon icon={faAngleRight} className="ms-2 text-md" />
                }
                className="me-2 text-base p-0"
              >
                Check Demo
              </Button>
            </Col>
            <Col lg="auto" className="hidden lg:block">
              <div className="hero-image-container absolute h-full end-0 flex items-center">
                <div className="relative">
                  <div className="absolute end-0 hero-image-container-overlay" />
                  <img
                    src={bg1}
                    alt=""
                    className="absolute end-0 hero-image-container-bg"
                  />
                  <img
                    src={bg2}
                    alt=""
                    className="w-full dark:hidden rounded-md hero-image-shadow"
                  />
                  <img
                    src={bg3}
                    alt=""
                    className="w-full hidden dark:block rounded-md hero-image-shadow"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="container-small md:px-14 mb-14 lg:hidden">
          <div className="relative">
            <div className="absolute end-0 hero-image-container-overlay" />
            <img
              src={bg4}
              alt=""
              className="absolute top-1/2 hero-image-container-bg"
            />
            <img
              src={bg2}
              alt=""
              className="img-fluid ms-auto dark:hidden rounded-md hero-image-shadow"
            />
            <img
              src={bg3}
              alt=""
              className="img-fluid ms-auto hidden dark:block rounded-md hero-image-shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHeader;
