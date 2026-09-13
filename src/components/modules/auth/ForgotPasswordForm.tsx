import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import AuthLogoLink from 'components/common/AuthLogoLink';
import { Link } from 'react-router';
import { AuthLayout } from './SignInForm';

/**
 * pug: pages/authentication/{simple,split,card}/forgot-password.pug. The three
 * variants only differ in their wrapper and in where the copy breaks.
 */
const ForgotPasswordForm = ({ layout }: { layout: AuthLayout }) => {
  const content = (
    <div className={layout === 'simple' ? 'text-center mb-10' : 'text-center'}>
      {layout === 'card' && <AuthLogoLink />}
      <h4 className="text-highlight">Forgot your password?</h4>
      <p className="text-subtle mb-8">
        {layout === 'card' ? (
          <>
            {'Enter your email below and we will '}
            <br className="md:hidden" />
            {'send you '}
            <br className="hidden 2xl:block" />a reset link
          </>
        ) : (
          <>
            {'Enter your email below and we will send '}
            <br className={layout === 'split' ? '2xl:hidden' : 'sm:hidden'} />
            you a reset link
          </>
        )}
      </p>
      <form className="flex items-center mb-8">
        <Input id="email" type="email" className="flex-1" placeholder="Email" />
        <Button variant="primary" className="ms-2">
          Send
          <FontAwesomeIcon icon={faChevronRight} className="ms-2" />
        </Button>
      </form>
      <Link to="#!" className="text-md font-bold">
        Still having problems?
      </Link>
    </div>
  );

  return layout === 'simple' ? (
    <div className="2xl:px-8">{content}</div>
  ) : (
    content
  );
};

export default ForgotPasswordForm;
