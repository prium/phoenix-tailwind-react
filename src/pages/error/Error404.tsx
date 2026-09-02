import Button from 'components/base/Button';
import errorIllustration from 'assets/img/spot-illustrations/404-illustration.png';
import dark404illustrations from 'assets/img/spot-illustrations/dark_404-illustration.png';
import error404 from 'assets/img/spot-illustrations/404.png';
import darkError40 from 'assets/img/spot-illustrations/dark_404.png';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import useSettingsMountEffect from 'hooks/useSettingsMountEffect';

const Error404 = () => {
  useSettingsMountEffect({
    disableNavigationType: true,
    disableHorizontalNavbarAppearance: true,
    disableVerticalNavbarAppearance: true,
    disableHorizontalNavbarShape: true
  });
  return (
    <div>
      <div className="px-4">
        <Row className="min-h-screen flex-center p-8">
          <Col xs={12} xl={10} xxl={8}>
            <Row className="justify-center items-center g-8">
              <Col xs={12} lg={6} className="text-center lg:order-1">
                <img
                  src={errorIllustration}
                  alt=""
                  width={400}
                  className="img-fluid lg:w-full dark:hidden"
                />
                <img
                  src={dark404illustrations}
                  alt=""
                  width={540}
                  className="img-fluid md:w-1/2 lg:w-full hidden dark:block"
                />
              </Col>
              <Col xs={12} lg={6} className="text-center lg:text-start">
                <img
                  src={error404}
                  className="img-fluid mb-10 w-1/2 lg:w-3/4 dark:hidden"
                  alt=""
                />
                <img
                  src={darkError40}
                  className="img-fluid mb-10 w-1/2 lg:w-3/4 hidden dark:block"
                  alt=""
                />
                <h2 className="text-muted font-black mb-4">
                  Page Missing!
                </h2>
                <p className="text-default mb-8">
                  But no worries! Our ostrich is looking everywhere
                  <br className="hidden sm:block" />
                  while you wait safely.
                </p>
                <Button variant="primary" size="lg" as={Link} to="/">
                  Go Home
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Error404;
