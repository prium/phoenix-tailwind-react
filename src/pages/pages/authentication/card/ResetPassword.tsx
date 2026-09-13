import ResetPasswordForm from 'components/modules/auth/ResetPasswordForm';
import AuthCardLayout from 'layouts/AuthCardLayout';

const ResetPassword = () => {
  return (
    <AuthCardLayout>
      <ResetPasswordForm layout="card" />
    </AuthCardLayout>
  );
};

export default ResetPassword;
