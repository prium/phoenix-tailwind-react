import { Col, Row } from '@hummingbirdui/react';
import error403Illustration from 'assets/img/spot-illustrations/403-illustration.png';
import dark403Illustration from 'assets/img/spot-illustrations/dark403-illustration.png';
import light403 from 'assets/img/spot-illustrations/403.png';
import dark403 from 'assets/img/spot-illustrations/dark_403.png';
import Button from 'components/base/Button';
import useSettingsMountEffect from 'hooks/useSettingsMountEffect';
import { Link } from 'react-router';

const Error403 = () => {
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
                src={error403Illustration}
                alt=""
                width={400}
              />
              <img
                className="md:w-1/2 lg:w-full hidden dark:block"
                src={dark403Illustration}
                alt=""
                width={540}
              />
            </Col>
            <Col xs={12} lg={6} className="text-center lg:text-start">
              <img
                className="mb-10 w-1/2 lg:w-3/4 dark:hidden"
                src={light403}
                alt=""
              />
              <img
                className="mb-10 w-1/2 lg:w-3/4 hidden dark:block"
                src={dark403}
                alt=""
              />
              <h2 className="text-muted font-extrabold mb-4">
                Access Forbidden!
              </h2>
              <p className="text-default mb-8">
                Halt! Thou art endeavouring to trespass upon a realm not granted
                unto thee.
                <br className="hidden md:block lg:hidden" />
                granted unto thee.
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

export default Error403;
