import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { useAppContext } from 'providers/AppProvider';
import { Offcanvas } from 'react-bootstrap';
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

const SettingsPanel = () => {
  const { configDispatch } = useAppContext();

  const {
    settingsPanelConfig: { openSettingPanel, disableResetButton },
    setSettingsPanelConfig
  } = useSettingsPanelContext();

  const handleClose = () => {
    setSettingsPanelConfig({
      openSettingPanel: !openSettingPanel
    });
  };
  const handleResetToDefault = () => {
    configDispatch({
      type: RESET
    });
  };

  return (
    <Offcanvas
      className="settings-panel border-0"
      show={openSettingPanel}
      onHide={handleClose}
      placement="end"
    >
      <Offcanvas.Header className="items-start border-b border-light flex-col">
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
          <button className="btn p-1 font-black" onClick={handleClose}>
            <FontAwesomeIcon icon={faTimes} className="text-base" />
          </button>
        </div>
        <Button
          variant="phoenix-secondary"
          className="w-full"
          onClick={handleResetToDefault}
          disabled={disableResetButton}
        >
          <FontAwesomeIcon icon={faArrowsRotate} className="me-2 text-sm" />
          Reset to default
        </Button>
      </Offcanvas.Header>
      <Offcanvas.Body className="px-card scrollbar">
        <ColorScheme />
        <RTLMode />
        <ChatWidgetVisibility />
        <NavigationType />
        <VerticalNavbarAppearance />
        <HorizontalNavbarShape />
        <TopNavbarAppearance className="mb-8" />
        <Button
          as="a"
          target="_blank"
          href={`${import.meta.env.VITE_PURCHASE_LINK}`}
          className="w-full mb-4 text-white"
          variant="primary"
        >
          Purchase template
        </Button>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default SettingsPanel;
