import SignInForm from 'components/modules/auth/SignInForm';
import AuthCardLayout from 'layouts/AuthCardLayout';

const SignIn = () => {
  return (
    <AuthCardLayout page="sign-in">
      <SignInForm layout="card" />
    </AuthCardLayout>
  );
};

export default SignIn;
