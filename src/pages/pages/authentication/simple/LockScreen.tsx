import AuthSimpleLayout from 'layouts/AuthSimpleLayout';
import LockScreenForm from 'components/modules/auth/LockScreenForm';

const LockScreen = () => {
  return (
    <AuthSimpleLayout logo={false} className="xl:col-5 2xl:col-3">
      <LockScreenForm />
    </AuthSimpleLayout>
  );
};

export default LockScreen;
