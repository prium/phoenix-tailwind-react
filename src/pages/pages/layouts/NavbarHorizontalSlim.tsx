import useConfigMountEffect from 'hooks/useConfigMountEffect';
import useSettingsMountEffect from 'hooks/useSettingsMountEffect';
import ProjectManagement from 'pages/dashboard/ProjectManagement';

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

  // the gold `demo/horizontal-slim.html` demos this layout over the project
  // management dashboard, not the e-commerce one
  return <ProjectManagement />;
};

export default NavbarHorizontalSlim;
