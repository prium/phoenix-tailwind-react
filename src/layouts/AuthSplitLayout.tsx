import Logo from 'components/common/Logo';
import { PropsWithChildren } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';

interface AuthSplitLayoutProps {
  logo?: boolean;
  bg: string;
}

const AuthSplitLayout = ({
  logo = true,
  bg,
  children
}: PropsWithChildren<AuthSplitLayoutProps>) => {
  return (
    <Row className="h-screen g-0">
      <Col lg={6} className="relative hidden lg:block">
        <div
          className="bg-holder"
          style={{
            backgroundImage: `url(${bg})`
          }}
        />
      </Col>
      <Col lg={6}>
        <Row className="flex-center h-full g-0 px-6 sm:px-0">
          <Col sm={6} lg={7} xl={6}>
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
            {children}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default AuthSplitLayout;
