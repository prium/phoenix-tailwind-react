import Button from 'components/base/Button';
import PasswordField from 'components/base/PasswordField';
import AuthLogoLink from 'components/common/AuthLogoLink';
import { AuthLayout } from './SignInForm';

/** pug: pages/authentication/{simple,split,card}/reset-password.pug */
const ResetPasswordForm = ({ layout }: { layout: AuthLayout }) => {
  const isCard = layout === 'card';

  const form = (
    <form className="mt-8">
      <PasswordField
        className="relative mb-2"
        id="password"
        placeholder="Type new password"
        inputClassName="form-icon-input pe-10"
      />
      <PasswordField
        className="relative mb-6"
        id="confirmPassword"
        // The gold's simple/split pug carries this typo; the card page fixed it.
        placeholder={isCard ? 'Confirm new password' : 'Cofirm new password'}
        inputClassName="form-icon-input pe-10"
      />
      <Button variant="primary" className="w-full" type="submit">
        Set Password
      </Button>
    </form>
  );

  // The card variant closes its heading block before the form; simple and
  // split keep the form inside it.
  return isCard ? (
    <>
      <div className="text-center mb-12">
        <AuthLogoLink />
        <h4 className="text-highlight">Reset new password</h4>
        <p className="text-subtle">Type your new password</p>
      </div>
      {form}
    </>
  ) : (
    <div className="text-center mb-10">
      <h4 className="text-highlight">Reset new password</h4>
      <p className="text-subtle">Type your new password</p>
      {form}
    </div>
  );
};

export default ResetPasswordForm;
