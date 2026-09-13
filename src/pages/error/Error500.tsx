import { Col, Row } from '@hummingbirdui/react';
import light500Illustration from 'assets/img/spot-illustrations/500-illustration.png';
import dark500Illustration from 'assets/img/spot-illustrations/dark_500-illustration.png';
import light500 from 'assets/img/spot-illustrations/500.png';
import dark500 from 'assets/img/spot-illustrations/dark_500.png';
import Button from 'components/base/Button';
import useSettingsMountEffect from 'hooks/useSettingsMountEffect';
import { Link } from 'react-router';

const Error500 = () => {
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
          <Row className="justify-center g-8">
            {/* The gold swaps the two 500 illustrations: the file named
                `500-illustration` is the dark-mode one and vice versa. */}
            <Col xs={12} lg={6} className="text-center lg:order-1">
              <img
                className="w-100 lg:w-full hidden dark:block"
                src={light500Illustration}
                alt=""
              />
              <img
                className="w-135 md:w-1/2 lg:w-full dark:hidden"
                src={dark500Illustration}
                alt=""
              />
            </Col>
            <Col xs={12} lg={6} className="text-center lg:text-start">
              <img
                className="mb-10 w-1/2 lg:w-3/4 dark:hidden"
                src={light500}
                alt=""
              />
              <img
                className="mb-10 w-1/2 lg:w-3/4 hidden dark:block"
                src={dark500}
                alt=""
              />
              <h2 className="text-muted font-extrabold mb-4">Unknown error!</h2>
              <p className="text-default mb-8">
                But relax! Our cat is here to play you some music.
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

export default Error500;
