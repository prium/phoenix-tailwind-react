import { Col, Row } from '@hummingbirdui/react';
import error404Illustration from 'assets/img/spot-illustrations/404-illustration.png';
import dark404Illustration from 'assets/img/spot-illustrations/dark_404-illustration.png';
import light404 from 'assets/img/spot-illustrations/404.png';
import dark404 from 'assets/img/spot-illustrations/dark_404.png';
import Button from 'components/base/Button';
import useSettingsMountEffect from 'hooks/useSettingsMountEffect';
import { Link } from 'react-router';

const Error404 = () => {
  useSettingsMountEffect({
    disableNavigationType: true,
    disableHorizontalNavbarAppearance: true,
    disableVerticalNavbarAppearance: true,
    disableHorizontalNavbarShape: true
  });
  return (
    <div className="px-4">
      <Row className="min-h-screen flex-center p-8">
        <Col xs={12} xl={10} xxl={8}>
          <Row className="justify-center items-center g-8">
            <Col xs={12} lg={6} className="text-center lg:order-1">
              <img
                className="lg:w-full dark:hidden"
                src={error404Illustration}
                alt=""
                width={400}
              />
              <img
                className="md:w-1/2 lg:w-full hidden dark:block"
                src={dark404Illustration}
                alt=""
                width={540}
              />
            </Col>
            <Col xs={12} lg={6} className="text-center lg:text-start">
              <img
                className="mb-10 w-1/2 lg:w-3/4 dark:hidden"
                src={light404}
                alt=""
              />
              <img
                className="mb-10 w-1/2 lg:w-3/4 hidden dark:block"
                src={dark404}
                alt=""
              />
              <h2 className="text-muted font-extrabold mb-4">Page Missing!</h2>
              <p className="text-default mb-8">
                But no worries! Our ostrich is looking everywhere{' '}
                <br className="hidden sm:block" />
                while you wait safely.{' '}
              </p>
              <Button variant="primary" size="lg" asChild>
                <Link to="/">Go Home</Link>
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Error404;
