import React from 'react';
import error403Illustration from 'assets/img/spot-illustrations/403-illustration.png';
import dark403Illustration from 'assets/img/spot-illustrations/dark403-illustration.png';
import light403 from 'assets/img/spot-illustrations/403.png';
import dark403 from 'assets/img/spot-illustrations/dark_403.png';
import Button from 'components/base/Button';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import useSettingsMountEffect from 'hooks/useSettingsMountEffect';

const Error403 = () => {
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
                  src={error403Illustration}
                  alt=""
                  width={400}
                  className="img-fluid lg:w-full dark:hidden"
                />
                <img
                  src={dark403Illustration}
                  alt=""
                  width={540}
                  className="img-fluid md:w-1/2 lg:w-full hidden dark:block"
                />
              </Col>
              <Col xs={12} lg={6} className="text-center lg:text-start">
                <img
                  src={light403}
                  className="img-fluid mb-10 w-1/2 lg:w-3/4 dark:hidden"
                  alt=""
                />
                <img
                  src={dark403}
                  className="img-fluid mb-10 w-1/2 lg:w-3/4 hidden dark:block"
                  alt=""
                />
                <h2 className="text-muted font-black mb-4">
                  Access Forbidden!
                </h2>
                <p className="text-default mb-8">
                  You don’t have permission to access this resource.
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

export default Error403;
