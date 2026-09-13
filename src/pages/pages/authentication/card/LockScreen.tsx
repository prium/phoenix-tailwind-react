import LockScreenForm from 'components/modules/auth/LockScreenForm';
import AuthCardLayout from 'layouts/AuthCardLayout';

const LockScreen = () => {
  return (
    <AuthCardLayout>
      <LockScreenForm layout="card" />
    </AuthCardLayout>
  );
};

export default LockScreen;
