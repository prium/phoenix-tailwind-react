import { useAppContext } from 'providers/AppProvider';
import { ChangeEvent } from 'react';
import { Col, Row } from '@hummingbirdui/react';
import topDefault from 'assets/img/generic/top-default.png';
import topDefaultDarker from 'assets/img/generic/top-style-darker.png';
import navTopLight from 'assets/img/generic/navbar-top-style-light.png';
import navTopLighter from 'assets/img/generic/top-style-lighter.png';
import RadioItem from './RadioItem';
import { NavbarAppearanceVariant } from 'config';
import { cn } from '@hummingbirdui/react';
import WarningMessage from 'components/common/WarningMessage';
import { useSettingsPanelContext } from 'providers/SettingsPanelProvider';

interface TopNavbarAppearanceProps {
  className?: string;
}

const TopNavbarAppearance = ({ className }: TopNavbarAppearanceProps) => {
  const {
    config: { navbarTopAppearance },
    setConfig
  } = useAppContext();

  const {
    settingsPanelConfig: { disableHorizontalNavbarAppearance }
  } = useSettingsPanelContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setConfig({
      navbarTopAppearance: value as NavbarAppearanceVariant
    });
  };

  return (
    <div className={cn(className, 'setting-panel-item')}>
      <h5 className="setting-panel-item-title">Horizontal Navbar Appearance</h5>
      <Row className="gx-2">
        <Col xs={6}>
          <RadioItem
            label="Default"
            name="top-navbar-appearance"
            value="default"
            thumb={{ light: topDefault, dark: topDefaultDarker }}
            checked={navbarTopAppearance === 'default'}
            handleChange={handleChange}
            disabled={disableHorizontalNavbarAppearance}
          />
        </Col>
        <Col xs={6}>
          <RadioItem
            label="Darker"
            darkLabel="Lighter"
            name="top-navbar-appearance"
            value="darker"
            thumb={{ light: navTopLight, dark: navTopLighter }}
            checked={navbarTopAppearance === 'darker'}
            handleChange={handleChange}
            disabled={disableHorizontalNavbarAppearance}
          />
        </Col>
      </Row>
      {disableHorizontalNavbarAppearance && (
        <WarningMessage message="You can't update horizontal navbar appearance in this page" />
      )}
    </div>
  );
};

export default TopNavbarAppearance;
