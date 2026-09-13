import bg from 'assets/img/bg/33.png';
import LockScreenForm from 'components/modules/auth/LockScreenForm';
import AuthSplitLayout from 'layouts/AuthSplitLayout';

const LockScreen = () => {
  return (
    <AuthSplitLayout bg={bg} logo={false}>
      <LockScreenForm layout="split" />
    </AuthSplitLayout>
  );
};

export default LockScreen;
