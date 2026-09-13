import { Col, Row } from '@hummingbirdui/react';
import AuthLogoLink from 'components/common/AuthLogoLink';
import { PropsWithChildren } from 'react';

interface AuthSimpleLayoutProps {
  logo?: boolean;
  /** Replaces the default column width, exactly like the pug `columnClass`. */
  className?: string;
}

/** pug: layouts/LayoutSimpleAuth.pug — `mixin LayoutBasic`. */
const AuthSimpleLayout = ({
  logo = true,
  className = 'xl:col-5 2xl:col-3',
  children
}: PropsWithChildren<AuthSimpleLayoutProps>) => {
  return (
    <div className="container">
      <Row className="flex-center min-h-screen py-8">
        <Col sm={10} md={8} lg={5} className={className}>
          {logo && <AuthLogoLink />}
          {children}
        </Col>
      </Row>
    </div>
  );
};

export default AuthSimpleLayout;
