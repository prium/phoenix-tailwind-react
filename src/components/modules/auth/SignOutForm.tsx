import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import lightImg from 'assets/img/spot-illustrations/1.png';
import darkImg from 'assets/img/spot-illustrations/dark_1.png';
import Button from 'components/base/Button';
import { Link } from 'react-router';
import { AuthLayout } from './SignInForm';

/** pug: pages/authentication/{simple,split,card}/sign-out.pug */
const SignOutForm = ({ layout }: { layout: AuthLayout }) => {
  return (
    <div className="text-center mb-10 mx-auto">
      <img className="mb-12 dark:hidden" src={lightImg} alt="phoenix" />
      <img className="mb-12 hidden dark:block" src={darkImg} alt="phoenix" />
      <div className="mb-10">
        <h4 className="text-highlight">Come back soon!</h4>
        <p className="text-subtle">
          {'Thanks for using Phoenix. '}
          <br className="lg:hidden" />
          {layout === 'card' ? (
            <>
              {'You are now successfully '}
              <br className="sm:hidden" />
              signed out.
            </>
          ) : (
            'You are now successfully signed out.'
          )}
        </p>
      </div>
      <div className="grid">
        <Button variant="primary" asChild>
          <Link to={`/pages/authentication/${layout}/sign-in`}>
            <FontAwesomeIcon icon={faAngleLeft} className="me-2" />
            Go to sign in page
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default SignOutForm;
