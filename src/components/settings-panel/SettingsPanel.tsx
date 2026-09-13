import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Drawer } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import { useAppContext } from 'providers/AppProvider';
import NavigationType from './NavigationType';
import HorizontalNavbarShape from './HorizontalNavbarShape';
import ColorScheme from './ColorScheme';
import VerticalNavbarAppearance from './VerticalNavbarAppearance';
import TopNavbarAppearance from './TopNavbarAppearance';
import RTLMode from './RTLMode';
import { useSettingsPanelContext } from 'providers/SettingsPanelProvider';
import {
  faArrowsRotate,
  faPalette,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import ChatWidgetVisibility from './ChatWidgetVisibility';
import { RESET } from 'reducers/ConfigReducer';

/** `+SettingsPanel` in phoenix-tailwind SettingsPanel.pug */
const SettingsPanel = () => {
  const {
    config: { isRTL },
    configDispatch
  } = useAppContext();

  const {
    settingsPanelConfig: { openSettingPanel, disableResetButton },
    setSettingsPanelConfig
  } = useSettingsPanelContext();

  const handleClose = () => {
    setSettingsPanelConfig({ openSettingPanel: false });
  };
  const handleResetToDefault = () => {
    configDispatch({ type: RESET });
  };

  return (
    <Drawer
      direction={isRTL ? 'left' : 'right'}
      open={openSettingPanel}
      onOpenChange={open => setSettingsPanelConfig({ openSettingPanel: open })}
    >
      <Drawer.Content
        className="settings-panel border-0"
        aria-describedby={undefined}
      >
        <Drawer.Title className="sr-only">Theme Customizer</Drawer.Title>
        <Drawer.Header className="items-start border-b flex-col border-subtle">
          <div className="pt-1 w-full mb-10 flex justify-between items-start">
            <div>
              <h5 className="mb-2 me-2 leading-sm">
                <FontAwesomeIcon icon={faPalette} className="me-2 text-base" />
                Theme Customizer
              </h5>
              <p className="mb-0 text-md">
                Explore different styles according to your preferences
              </p>
            </div>
            <button
              type="button"
              className="btn p-1 font-black"
              aria-label="Close"
              onClick={handleClose}
            >
              <FontAwesomeIcon icon={faTimes} className="text-base" />
            </button>
          </div>
          <Button
            variant="phoenix"
            color="secondary"
            className="w-full"
            onClick={handleResetToDefault}
            disabled={disableResetButton}
          >
            <FontAwesomeIcon icon={faArrowsRotate} className="me-2 text-sm" />
            Reset to default
          </Button>
        </Drawer.Header>
        <Drawer.Body className="scrollbar px-card">
          <ColorScheme />
          <RTLMode />
          <ChatWidgetVisibility />
          <NavigationType />
          <VerticalNavbarAppearance />
          <HorizontalNavbarShape />
          <TopNavbarAppearance />
          <Button
            asChild
            variant="primary"
            className="grid mb-4 text-white mt-8"
          >
            <a
              target="_blank"
              rel="noreferrer"
              href={`${import.meta.env.VITE_PURCHASE_LINK}`}
            >
              Purchase template
            </a>
          </Button>
        </Drawer.Body>
      </Drawer.Content>
    </Drawer>
  );
};

export default SettingsPanel;
