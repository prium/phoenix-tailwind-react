import { Input, cn } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import PasswordField from 'components/base/PasswordField';
import AuthLogoLink from 'components/common/AuthLogoLink';
import AuthSocialButtons from 'components/common/AuthSocialButtons';
import { Link } from 'react-router';
import { AuthLayout } from './SignInForm';

/** pug: pages/authentication/{simple,split,card}/sign-up.pug */
const SignUpForm = ({ layout }: { layout: AuthLayout }) => {
  return (
    <>
      <div className="text-center mb-12">
        {layout === 'card' && <AuthLogoLink />}
        <h3 className="text-highlight">Sign Up</h3>
        <p className="text-subtle">Create your account today</p>
      </div>
      <AuthSocialButtons title="Sign up" />
      <div className="relative mt-6">
        <hr className="bg-muted" />
        <div
          className={cn('divider-content-center', {
            'bg-soft': layout === 'card'
          })}
        >
          or use email
        </div>
      </div>
      <form>
        <div className="mb-4 text-start">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <Input id="name" type="text" placeholder="Name" />
        </div>
        <div className="mb-4 text-start">
          <label className="form-label" htmlFor="email">
            Email address
          </label>
          <Input id="email" type="email" placeholder="name@example.com" />
        </div>
        <div className="row g-4 mb-4">
          <div className="sm:col-6">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <PasswordField
              id="password"
              placeholder="Password"
              inputClassName="form-icon-input pe-10"
            />
          </div>
          <div className="sm:col-6">
            <label className="form-label" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <PasswordField
              id="confirmPassword"
              placeholder="Confirm Password"
              inputClassName="form-icon-input pe-10"
            />
          </div>
        </div>
        <div className="form-check mb-4 py-1">
          <input
            className="form-check-input"
            id="termsService"
            type="checkbox"
          />
          <label
            className="form-label text-md normal-case"
            htmlFor="termsService"
          >
            I accept the <Link to="#!">terms </Link>and{' '}
            <Link to="#!">privacy policy</Link>
          </label>
        </div>
        <Button variant="primary" className="w-full mb-4">
          Sign up
        </Button>
        <div className="text-center">
          <Link
            to={`/pages/authentication/${layout}/sign-in`}
            className="text-md font-bold"
          >
            Sign in to an existing account
          </Link>
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
