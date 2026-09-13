import ForgotPasswordForm from 'components/modules/auth/ForgotPasswordForm';
import AuthCardLayout from 'layouts/AuthCardLayout';

const ForgotPassword = () => {
  return (
    <AuthCardLayout page="forgot-password">
      <ForgotPasswordForm layout="card" />
    </AuthCardLayout>
  );
};

export default ForgotPassword;
