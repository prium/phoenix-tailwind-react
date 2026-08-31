import bgLeft33 from 'assets/img/bg/bg-left-33.png';
import bgRight33 from 'assets/img/bg/bg-right-33.png';
import iPhone from 'assets/img/spot-illustrations/i-phone.png';
import iPhoneDark from 'assets/img/spot-illustrations/i-phone-dark.png';
import spotIllustration41 from 'assets/img/spot-illustrations/41.png';
import spotIllustrationDark41 from 'assets/img/spot-illustrations/dark_41.png';
import { Col, Row } from '@hummingbirdui/react';
import { Link } from 'react-router';
import playStore from 'assets/img/generic/play-store.png';
import appStore from 'assets/img/generic/app-store.png';

const GetApp = () => {
  return (
    <section className="pt-16 pb-18">
      <div
        className="bg-holder hidden xl:block bg-auto! bg-position-[-8%_38px]!"
        style={{ backgroundImage: `url(${bgLeft33})` }}
      />
      <div
        className="bg-holder hidden xl:block bg-size-[18%]! bg-right!"
        style={{ backgroundImage: `url(${bgRight33})` }}
      />
      <div className="bg-get-app" />
      <div className="container-medium relative">
        <Row className="g-0 justify-center">
          <Col lg={10} xl={8} xxl={7}>
            <div className="md:flex items-center gap-8 text-center md:text-start">
              <img src={iPhone} alt="" className="max-h-135 dark:hidden" />
              <img
                src={iPhoneDark}
                alt=""
                className="max-h-135 hidden dark:block"
              />
              <div className="mt-8 md:mt-0">
                <div className="hidden md:block">
                  <img
                    src={spotIllustration41}
                    alt=""
                    className="dark:hidden w-50"
                  />
                  <img
                    src={spotIllustrationDark41}
                    alt=""
                    className="hidden dark:block w-50"
                  />
                </div>
                <h3 className="font-extrabold mt-6">Get The App Now</h3>
                <p className="text-subtle">
                  Designed to provide the best user experience possible to all
                  our customers with activities ranging from anything thinkable
                  to the unthinkables.
                </p>
                <Link to="#!" className="me-2">
                  <img src={playStore} alt="" className="h-8" />
                </Link>
                <Link to="#!">
                  <img src={appStore} alt="" className="h-8" />
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default GetApp;
