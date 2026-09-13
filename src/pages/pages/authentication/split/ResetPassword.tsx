import bg from 'assets/img/bg/35.png';
import ResetPasswordForm from 'components/modules/auth/ResetPasswordForm';
import AuthSplitLayout from 'layouts/AuthSplitLayout';

const ResetPassword = () => {
  return (
    <AuthSplitLayout bg={bg}>
      <ResetPasswordForm layout="split" />
    </AuthSplitLayout>
  );
};

export default ResetPassword;
