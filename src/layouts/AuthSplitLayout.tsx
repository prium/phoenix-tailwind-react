import { Col, Row } from '@hummingbirdui/react';
import AuthLogoLink from 'components/common/AuthLogoLink';
import { PropsWithChildren } from 'react';

interface AuthSplitLayoutProps {
  logo?: boolean;
  bg: string;
}

/** pug: layouts/LayoutSplitAuth.pug — `mixin LayoutSplitBasic`. */
const AuthSplitLayout = ({
  logo = true,
  bg,
  children
}: PropsWithChildren<AuthSplitLayoutProps>) => {
  return (
    <Row className="h-screen g-0">
      <Col lg={6} className="relative hidden lg:block">
        <div className="bg-holder" style={{ backgroundImage: `url(${bg})` }} />
      </Col>
      <Col lg={6}>
        <Row className="flex-center h-full g-0 px-6 sm:px-0">
          <Col xs sm={6} lg={7} xl={6}>
            {logo && <AuthLogoLink />}
            {children}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default AuthSplitLayout;
