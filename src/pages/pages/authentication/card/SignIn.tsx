import SignInForm from 'components/modules/auth/SignInForm';
import AuthCardLayout from 'layouts/AuthCardLayout';

const SignIn = () => {
  return (
    <AuthCardLayout className="md:pb-12">
      <SignInForm layout="card" />
    </AuthCardLayout>
  );
};

export default SignIn;
