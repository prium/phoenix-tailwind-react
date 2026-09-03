import { useAppContext } from 'providers/AppProvider';
import { ChangeEvent } from 'react';
import { Col, Row } from '@hummingbirdui/react';
import defaultLight from 'assets/img/generic/default-light.png';
import defaultDark from 'assets/img/generic/default-dark.png';
import auto from 'assets/img/generic/auto.png';
import RadioItem from './RadioItem';
import { ThemeVariant } from 'config';

const ColorScheme = () => {
  const {
    config: { theme },
    setTheme
  } = useAppContext();

  // `setTheme` goes through hb-react's useThemeMode rather than writing the
  // config directly, so the choice persists, resolves `auto` against the OS
  // and syncs to other tabs
  const handleThemeChange = (e: ChangeEvent<HTMLInputElement>) =>
    setTheme(e.target.value as ThemeVariant);

  return (
    <div className="setting-panel-item mt-0!">
      <h5 className="setting-panel-item-title">Color Scheme</h5>
      <Row className="gx-2">
        <Col xs={4}>
          <RadioItem
            label="Light"
            name="theme"
            value="light"
            thumb={{ light: defaultLight }}
            checked={theme === 'light'}
            handleChange={handleThemeChange}
          />
        </Col>
        <Col xs={4}>
          <RadioItem
            label="Dark"
            name="theme"
            value="dark"
            thumb={{ light: defaultDark }}
            checked={theme === 'dark'}
            handleChange={handleThemeChange}
          />
        </Col>
        <Col xs={4}>
          <RadioItem
            label="Auto"
            name="theme"
            value="auto"
            thumb={{ light: auto }}
            checked={theme === 'auto'}
            handleChange={handleThemeChange}
          />
        </Col>
      </Row>
    </div>
  );
};

export default ColorScheme;
