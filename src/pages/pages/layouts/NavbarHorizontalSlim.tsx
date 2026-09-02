import useConfigMountEffect from 'hooks/useConfigMountEffect';
import useSettingsMountEffect from 'hooks/useSettingsMountEffect';
import Ecommerce from 'pages/dashboard/ecommerce';

const NavbarHorizontalSlim = () => {
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
    navbarPosition: 'horizontal',
    navbarTopAppearance: 'darker'
  });

  return <Ecommerce />;
};

export default NavbarHorizontalSlim;
