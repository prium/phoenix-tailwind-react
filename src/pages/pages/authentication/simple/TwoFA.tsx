import TwoFAForm from 'components/modules/auth/TwoFAForm';
import AuthSimpleLayout from 'layouts/AuthSimpleLayout';

const TwoFA = () => {
  return (
    <AuthSimpleLayout className="2xl:col-4">
      <TwoFAForm layout="simple" />
    </AuthSimpleLayout>
  );
};

export default TwoFA;
