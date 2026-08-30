import { UilCheckCircle } from '@iconscout/react-unicons';
import Unicon from 'components/base/Unicon';
import { Card, Col, Container, Row } from 'react-bootstrap';
import bg37 from 'assets/img/bg/37.png';
import bg38 from 'assets/img/bg/38.png';
import authIllustrations from 'assets/img/spot-illustrations/auth.png';
import authIllustrationsDark from 'assets/img/spot-illustrations/auth-dark.png';
import { PropsWithChildren } from 'react';
import { Link } from 'react-router';
import Logo from 'components/common/Logo';
import classNames from 'classnames';

interface AuthCardLayoutProps {
  logo?: boolean;
  className?: string;
}

const AuthCardLayout = ({
  logo = true,
  className,
  children
}: PropsWithChildren<AuthCardLayoutProps>) => {
  return (
    <Container fluid className="bg-highlight dark__bg-gray-1200">
      <div
        className="bg-holder bg-auth-card-overlay"
        style={{ backgroundImage: `url(${bg37})` }}
      />

      <Row className="flex-center relative min-h-screen g-0 py-8">
        <Col xs={11} sm={10} xl={8}>
          <Card className="border border-subtle auth-card">
            <Card.Body className="md:pe-0">
              <Row className="items-center gx-0 gy-12">
                <Col
                  xs="auto"
                  className="bg-subtle dark__bg-gray-1100 rounded-lg relative overflow-hidden auth-title-box"
                >
                  <div
                    className="bg-holder"
                    style={{ backgroundImage: `url(${bg38})` }}
                  />
                  <div
                    className={classNames(
                      className,
                      'relative px-10 lg:px-12 py-24 sm:pb-8 text-center md:text-start lg:pb-12'
                    )}
                  >
                    <h3 className="mb-4 text-emphasis text-lg">
                      Phoenix Authentication
                    </h3>
                    <p className="text-subtle">
                      Give yourself some hassle-free development process with
                      the uniqueness of Phoenix!
                    </p>
                    <ul className="list-unstyled mb-0 w-max-content md:w-auto mx-auto">
                      <li className="flex items-center gap-2">
                        <Unicon
                          fill='currentColor'
                          icon={UilCheckCircle}
                          className="text-success"
                          size={16}
                        />
                        <span className="text-subtle font-semibold">
                          Fast
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Unicon
                          fill='currentColor'
                          icon={UilCheckCircle}
                          className="text-success"
                          size={16}
                        />
                        <span className="text-subtle font-semibold">
                          Simple
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Unicon
                          fill='currentColor'
                          icon={UilCheckCircle}
                          className="text-success"
                          size={16}
                        />
                        <span className="text-subtle font-semibold">
                          Responsive
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="relative mb-10 hidden md:block text-center md:mt-30 -z-1">
                    <img
                      className="auth-title-box-img dark:hidden"
                      src={authIllustrations}
                      alt=""
                    />
                    <img
                      className="auth-title-box-img hidden dark:block"
                      src={authIllustrationsDark}
                      alt=""
                    />
                  </div>
                </Col>
                <Col className="mx-auto">
                  {logo && (
                    <div className="text-center">
                      <Link
                        to="/"
                        className="inline-block no-underline mb-6"
                      >
                        <Logo
                          text={false}
                          width={58}
                          className="font-black text-2xl inline-block"
                        />
                      </Link>
                    </div>
                  )}
                  <div className="auth-form-box">{children}</div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AuthCardLayout;
