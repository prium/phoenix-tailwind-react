import SignOutForm from 'components/modules/auth/SignOutForm';
import AuthSimpleLayout from 'layouts/AuthSimpleLayout';

const SignOut = () => {
  return (
    <AuthSimpleLayout logo={false} className="xl:col-4 2xl:col-3">
      <SignOutForm layout="simple" />
    </AuthSimpleLayout>
  );
};

export default SignOut;
