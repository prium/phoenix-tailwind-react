import { UilCheckCircle } from '@iconscout/react-unicons';
import { Card, Col, Row, cn } from '@hummingbirdui/react';
import Unicon from 'components/base/Unicon';
import bg37 from 'assets/img/bg/37.png';
import bg38 from 'assets/img/bg/38.png';
import authIllustration from 'assets/img/spot-illustrations/auth.png';
import authIllustrationDark from 'assets/img/spot-illustrations/auth-dark.png';
import { PropsWithChildren } from 'react';

interface AuthCardLayoutProps {
  /** Mirrors the pug `config.page`, which picks the title-box paddings. */
  page?: 'sign-in' | 'sign-up' | 'forgot-password';
}

const FEATURES = ['Fast', 'Simple', 'Responsive'];

/** pug: layouts/LayoutCardAuth.pug — `mixin LayoutCardBasic`. */
const AuthCardLayout = ({
  page,
  children
}: PropsWithChildren<AuthCardLayoutProps>) => {
  return (
    <div className="container-fluid bg-highlight dark:bg-default">
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
                  className="bg-subtle dark:bg-soft rounded-lg relative overflow-hidden auth-title-box z-1"
                >
                  <div
                    className="bg-holder"
                    style={{ backgroundImage: `url(${bg38})` }}
                  />
                  <div
                    className={cn(
                      {
                        'card-sign-up': page === 'sign-up',
                        'md:pb-12': page === 'sign-in'
                      },
                      'relative px-6 lg:px-12 pt-12 pb-12 sm:pb-8 text-center md:text-start lg:pb-12'
                    )}
                  >
                    <h3 className="mb-4 text-emphasis text-lg">
                      Phoenix Authentication
                    </h3>
                    <p className="text-subtle">
                      Give yourself some hassle-free development process with
                      the uniqueness of Phoenix!
                    </p>
                    <ul className="list-none ps-0 mb-0 w-max md:w-auto">
                      {FEATURES.map(feature => (
                        <li className="flex items-center" key={feature}>
                          <Unicon
                            icon={UilCheckCircle}
                            size={16}
                            fill="currentColor"
                            className="text-success me-2"
                          />
                          <span className="text-subtle font-semibold">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={cn(
                      page === 'forgot-password' ? 'md:mt-8' : 'md:mt-30',
                      'relative mb-10 hidden md:block text-center -z-1'
                    )}
                  >
                    <img
                      className="auth-title-box-img dark:hidden"
                      src={authIllustration}
                      alt=""
                    />
                    <img
                      className="auth-title-box-img hidden dark:block"
                      src={authIllustrationDark}
                      alt=""
                    />
                  </div>
                </Col>
                <Col className="mx-auto">
                  <div className="auth-form-box">{children}</div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AuthCardLayout;
