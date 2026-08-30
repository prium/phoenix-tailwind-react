import { useAppContext } from 'providers/AppProvider';
import { ChangeEvent } from 'react';
import { Col, Row } from '@hummingbirdui/react';
import defaultLight from 'assets/img/generic/default-light.png';
import defaultDark from 'assets/img/generic/default-dark.png';
import verticalLighter from 'assets/img/generic/vertical-lighter.png';
import verticalDarker from 'assets/img/generic/vertical-darker.png';
import RadioItem from './RadioItem';
import { NavbarAppearanceVariant } from 'config';
import WarningMessage from 'components/common/WarningMessage';
import { useSettingsPanelContext } from 'providers/SettingsPanelProvider';

const VerticalNavbarAppearance = () => {
  const {
    config: { navbarVerticalAppearance },
    setConfig
  } = useAppContext();

  const {
    settingsPanelConfig: { disableVerticalNavbarAppearance }
  } = useSettingsPanelContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setConfig({
      navbarVerticalAppearance: value as NavbarAppearanceVariant
    });
  };

  return (
    <div className="setting-panel-item">
      <h5 className="setting-panel-item-title">Vertical Navbar Appearance</h5>
      <Row className="gx-2">
        <Col xs={6}>
          <RadioItem
            label="Default"
            name="vertical-navbar-appearance"
            value="default"
            thumb={{ light: defaultLight, dark: defaultDark }}
            variant="block"
            checked={navbarVerticalAppearance === 'default'}
            handleChange={handleChange}
            disabled={disableVerticalNavbarAppearance}
          />
        </Col>
        <Col xs={6}>
          <RadioItem
            label="Darker"
            darkLabel="Lighter"
            name="vertical-navbar-appearance"
            value="darker"
            thumb={{ light: verticalDarker, dark: verticalLighter }}
            variant="block"
            checked={navbarVerticalAppearance === 'darker'}
            handleChange={handleChange}
            disabled={disableVerticalNavbarAppearance}
          />
        </Col>
      </Row>
      {disableVerticalNavbarAppearance && (
        <WarningMessage message="You can't update vertical navbar appearance in this page" />
      )}
    </div>
  );
};

export default VerticalNavbarAppearance;
