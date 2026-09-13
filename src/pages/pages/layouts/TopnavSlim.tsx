import useConfigMountEffect from 'hooks/useConfigMountEffect';
import useSettingsMountEffect from 'hooks/useSettingsMountEffect';
import Ecommerce from 'pages/dashboard/ecommerce/Ecommerce';

const TopnavSlim = () => {
  useSettingsMountEffect({
    disableNavigationType: true,
    disableHorizontalNavbarAppearance: true,
    disableVerticalNavbarAppearance: true,
    disableHorizontalNavbarShape: true,
    disableResetButton: true
  });

  // the gold demo page sets `phoenixNavbarTopStyle: 'darker'` alongside the
  // slim shape (see ../phoenix-tailwind/public/demo/*.html config.set block)
  useConfigMountEffect({
    navbarTopShape: 'slim',
    navbarTopAppearance: 'darker'
  });

  return <Ecommerce />;
};

export default TopnavSlim;
