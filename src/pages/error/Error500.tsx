import Button from 'components/base/Button';
import error500Illustration from 'assets/img/spot-illustrations/dark_500-illustration.png';
import dark500Illustration from 'assets/img/spot-illustrations/500-illustration.png';
import error500 from 'assets/img/spot-illustrations/500.png';
import darkError500 from 'assets/img/spot-illustrations/dark_500.png';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import useSettingsMountEffect from 'hooks/useSettingsMountEffect';

const Error500 = () => {
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
            <Row className="justify-center  g-8">
              <Col xs={12} lg={6} className="text-center lg:order-1">
                <img
                  src={error500Illustration}
                  alt=""
                  width={400}
                  className="img-fluid md:w-1/2 lg:w-full dark:hidden"
                />
                <img
                  src={dark500Illustration}
                  alt=""
                  width={540}
                  className="img-fluid lg:w-full hidden dark:block"
                />
              </Col>
              <Col xs={12} lg={6} className="text-center lg:text-start">
                <img
                  src={error500}
                  className="img-fluid mb-10 w-1/2 lg:w-3/4 dark:hidden"
                  alt=""
                />
                <img
                  src={darkError500}
                  className="img-fluid mb-10 w-1/2 lg:w-3/4 hidden dark:block"
                  alt=""
                />
                <h2 className="text-muted font-black mb-4">
                  Internal Error!
                </h2>
                <p className="text-default mb-8">
                  Uh-oh! It seems like our server is taking an unexpected coffee
                  break.
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

export default Error500;
