import useConfigMountEffect from 'hooks/useConfigMountEffect';
import useSettingsMountEffect from 'hooks/useSettingsMountEffect';
import ProjectManagement from 'pages/dashboard/ProjectManagement';

const SidenavCollapse = () => {
  useSettingsMountEffect({
    disableNavigationType: true,
    disableHorizontalNavbarAppearance: true,
    disableVerticalNavbarAppearance: true,
    disableHorizontalNavbarShape: true,
    disableResetButton: true
  });

  useConfigMountEffect({
    isNavbarVerticalCollapsed: true
  });

  // the gold `demo/sidenav-collapse.html` demos this layout over the project
  // management dashboard, not the e-commerce one
  return <ProjectManagement />;
};

export default SidenavCollapse;
