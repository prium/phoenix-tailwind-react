import SettingsPanel from 'components/settings-panel/SettingsPanel';
import SettingsToggle from 'components/settings-panel/SettingsToggle';
import useToggleStyle from 'hooks/useToggleStyle';
import { useAppContext } from 'providers/AppProvider';
import { useSettingsPanelContext } from 'providers/SettingsPanelProvider';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';

const App = () => {
  useToggleStyle();
  const { pathname } = useLocation();

  const {
    settingsPanelConfig: { showSettingPanelButton },
    setSettingsPanelConfig
  } = useSettingsPanelContext();

  const {
    config: { isRTL }
  } = useAppContext();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setSettingsPanelConfig({
      openSettingPanel: false
    });
  }, [isRTL]);

  return (
    <>
      <Outlet />
      {showSettingPanelButton && (
        <>
          <SettingsToggle />
          <SettingsPanel />
        </>
      )}
    </>
  );
};

export default App;
