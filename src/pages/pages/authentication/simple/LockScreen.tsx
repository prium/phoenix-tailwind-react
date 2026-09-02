import LockScreenForm from 'components/modules/auth/LockScreenForm';
import AuthSimpleLayout from 'layouts/AuthSimpleLayout';

const LockScreen = () => {
  return (
    <AuthSimpleLayout logo={false}>
      <LockScreenForm layout="simple" />
    </AuthSimpleLayout>
  );
};

export default LockScreen;
