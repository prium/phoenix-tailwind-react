import classNames from 'classnames';
import Logo from 'components/common/Logo';
import { PropsWithChildren } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';

interface AuthSimpleLayoutProps {
  logo?: boolean;
  className?: string;
}

const AuthSimpleLayout = ({
  logo = true,
  className='xl:col-5 2xl:col-3',
  children
}: PropsWithChildren<AuthSimpleLayoutProps>) => {
  return (
    <div className="container">
      <Row className="flex-center min-h-screen py-8">
        <Col sm={10} md={8} lg={5} className={classNames(className)}>
          {logo && (
            <Link
              to="/"
              className="flex flex-center no-underline mb-6"
            >
              <Logo
                text={false}
                width={58}
                className="font-black text-2xl inline-block"
              />
            </Link>
          )}
          {children}
        </Col>
      </Row>
    </div>
  );
};

export default AuthSimpleLayout;
