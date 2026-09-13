import avatar from 'assets/img/team/30.webp';
import Avatar from 'components/base/Avatar';
import Button from 'components/base/Button';
import PasswordField from 'components/base/PasswordField';
import { Link } from 'react-router';
import { AuthLayout } from './SignInForm';

/** pug: pages/authentication/{simple,split,card}/lock-screen.pug */
const LockScreenForm = ({ layout }: { layout: AuthLayout }) => {
  return (
    <>
      <div className="text-center mb-8">
        <Avatar size="4xl" src={avatar} className="mb-6" />
        <h2 className="text-highlight">
          {' '}
          <span className="font-normal">Hello </span>John Smith
        </h2>
        <p className="text-subtle">
          {layout === 'card' ? (
            <>
              {'Enter your password to access '}
              <br className="sm:hidden md:block 2xl:hidden" />
              the admin
            </>
          ) : (
            'Enter your password to access the admin'
          )}
        </p>
      </div>
      <PasswordField
        id="password"
        placeholder="Enter Password"
        inputClassName="mb-4"
      />
      <Button variant="primary" className="text-center w-full" asChild>
        <Link to="/">Sign In</Link>
      </Button>
    </>
  );
};

export default LockScreenForm;
