import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Input, Row, cn } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import PasswordField from 'components/base/PasswordField';
import AuthLogoLink from 'components/common/AuthLogoLink';
import AuthSocialButtons from 'components/common/AuthSocialButtons';
import { Link } from 'react-router';

export type AuthLayout = 'simple' | 'card' | 'split';

/** pug: pages/authentication/{simple,split,card}/sign-in.pug */
const SignInForm = ({ layout }: { layout: AuthLayout }) => {
  return (
    <>
      <div className="text-center mb-12">
        {layout === 'card' && <AuthLogoLink />}
        <h3 className="text-highlight">Sign In</h3>
        <p className="text-subtle">Get access to your account</p>
      </div>
      <AuthSocialButtons title="Sign in" />
      <div className="relative">
        <hr className="bg-muted mt-8 mb-6" />
        <div
          className={cn('divider-content-center', {
            'bg-soft': layout === 'card'
          })}
        >
          or use email
        </div>
      </div>
      <div className="mb-4 text-start">
        <label className="form-label" htmlFor="email">
          Email address
        </label>
        <div className="input-group-icon">
          <FontAwesomeIcon
            icon={faUser}
            className="text-default text-md form-control-icon-start"
          />
          <Input id="email" type="email" placeholder="name@example.com" />
        </div>
      </div>
      <div className="mb-4 text-start">
        <label className="form-label" htmlFor="password">
          Password
        </label>
        <PasswordField
          className="input-group-icon"
          id="password"
          placeholder="Password"
          inputClassName="pe-10"
          startIcon={
            <FontAwesomeIcon
              icon={faKey}
              className="text-default text-md form-control-icon-start"
            />
          }
        />
      </div>
      <Row className="flex-between-center mb-12">
        <Col xs="auto">
          <div className="form-check mb-0">
            <input
              className="form-check-input"
              id="basic-checkbox"
              type="checkbox"
              defaultChecked
            />
            <label className="form-check-label mb-0" htmlFor="basic-checkbox">
              Remember me
            </label>
          </div>
        </Col>
        <Col xs="auto">
          <Link
            to={`/pages/authentication/${layout}/forgot-password`}
            className="text-md font-semibold"
          >
            Forgot Password?
          </Link>
        </Col>
      </Row>
      <Button variant="primary" className="w-full mb-4">
        Sign In
      </Button>
      <div className="text-center">
        <Link
          to={`/pages/authentication/${layout}/sign-up`}
          className="text-md font-bold"
        >
          Create an account
        </Link>
      </div>
    </>
  );
};

export default SignInForm;
