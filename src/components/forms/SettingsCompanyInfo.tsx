import FloatingIconField from 'components/base/FloatingIconField';

/** Gold: mixin `CompanyInfo` in `../phoenix-tailwind/src/pug/mixins/social/Settings.pug` */
const SettingsCompanyInfo = () => {
  return (
    <>
      <h4 className="mb-6">Company Info</h4>
      <FloatingIconField
        className="mb-4"
        id="companyName"
        icon="fa-solid fa-building"
        type="text"
        placeholder="Company Name"
        label="COMPANY NAME"
      />
      <FloatingIconField
        id="website"
        icon="fa-solid fa-globe"
        type="text"
        placeholder="Website"
        label="Website"
      />
    </>
  );
};

export default SettingsCompanyInfo;
