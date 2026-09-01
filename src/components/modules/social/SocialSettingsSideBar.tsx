import { cn } from '@hummingbirdui/react';

interface SettingsCheckItemProps {
  id: string;
  name: string;
  label: string;
  type: 'radio' | 'checkbox';
  defaultChecked?: boolean;
  className?: string;
}

/**
 * Gold `div.form-check > input.form-check-input + label.form-check-label.text-base`
 * — mixin `LeftSidebar` in `../phoenix-tailwind/src/pug/mixins/social/Settings.pug`.
 */
const SettingsCheckItem = ({
  id,
  name,
  label,
  type,
  defaultChecked,
  className
}: SettingsCheckItemProps) => (
  <div className={cn('form-check', className)}>
    <input
      className="form-check-input"
      id={id}
      type={type}
      name={name}
      defaultChecked={defaultChecked}
    />
    <label className="form-check-label text-base" htmlFor={id}>
      {label}
    </label>
  </div>
);

const SocialSettingsSideBar = () => {
  return (
    <>
      <div className="border-b border-subtle border-dashed pb-4 mb-6">
        <h5 className="text-default mb-4">
          Who will be able to see your profile?
        </h5>
        <SettingsCheckItem
          className="mb-1.25"
          id="onlyMe"
          type="radio"
          name="profiileVisibility"
          label="Only me"
          defaultChecked
        />
        <SettingsCheckItem
          className="mb-1.25"
          id="myFollowers"
          type="radio"
          name="profiileVisibility"
          label="My followers"
        />
        <SettingsCheckItem
          className="mb-1.25"
          id="everyone"
          type="radio"
          name="profiileVisibility"
          label="Everyone"
        />
      </div>
      <div className="border-b border-subtle border-dashed pb-4 mb-6">
        <h5 className="text-default mb-4">Who can tag you?</h5>
        <SettingsCheckItem
          className="mb-1.5"
          id="tagGroupMembers"
          type="radio"
          name="tagPermission"
          label="Group Members"
          defaultChecked
        />
        <SettingsCheckItem
          className="mb-1.5"
          id="tagEveryone"
          type="radio"
          name="tagPermission"
          label="Everyone"
        />
      </div>
      <div className="border-b border-subtle border-dashed pb-4 mb-6">
        <SettingsCheckItem
          className="mb-1.25"
          id="showEmail"
          type="checkbox"
          name="showEmail"
          label="Allow users to show your email"
        />
        <SettingsCheckItem
          className="mb-1.25"
          id="showExperiences"
          type="checkbox"
          name="showExperiences"
          label="Allow users to show your experiences"
        />
        <SettingsCheckItem
          className="mb-1.25"
          id="showFollowers"
          type="checkbox"
          name="showFollowers"
          label="Allow users to show your followers"
          defaultChecked
        />
      </div>
      <div className="mb-6">
        <SettingsCheckItem
          className="form-switch mb-1.5"
          id="showPhone"
          type="checkbox"
          name="showPhone"
          label="Show your phone number"
          defaultChecked
        />
        <SettingsCheckItem
          className="form-switch mb-1.5"
          id="permitFollow"
          type="checkbox"
          name="permitFollow"
          label="Permit users to follow you."
          defaultChecked
        />
      </div>
    </>
  );
};

export default SocialSettingsSideBar;
