import FloatingIconField from 'components/base/FloatingIconField';

/** Gold: mixin `ChangePassword` in `../phoenix-tailwind/src/pug/mixins/social/Settings.pug` */
const SettingsChangePassword = () => {
  return (
    <>
      <h4 className="mb-6">Change Password</h4>
      <FloatingIconField
        className="mb-4"
        id="oldPassword"
        icon="fa-solid fa-lock"
        type="password"
        placeholder="Old password"
        label="Old Password"
      />
      <FloatingIconField
        className="mb-4"
        id="newPassword"
        icon="fa-solid fa-key"
        type="password"
        placeholder="New password"
        label="New Password"
      />
      <FloatingIconField
        id="newPassword2"
        icon="fa-solid fa-key"
        type="password"
        placeholder="Confirm New password"
        label="Confirm New Password"
      />
    </>
  );
};

export default SettingsChangePassword;
