import { Dropdown, cn } from '@hummingbirdui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdjust, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { useAppContext } from 'providers/AppProvider';
import Button from 'components/base/Button';
import { ThemeVariant } from 'config';

const OPTIONS: { value: ThemeVariant; label: string; icon: IconDefinition }[] =
  [
    { value: 'light', label: 'Light', icon: faSun },
    { value: 'dark', label: 'Dark', icon: faMoon },
    { value: 'auto', label: 'Auto', icon: faAdjust }
  ];

/**
 * A colour-scheme picker, shown on the dark-mode documentation page as one of
 * the ways to drive the theme. It writes through `setTheme`, which is backed
 * by hb-react's `useThemeMode` — the same path the settings panel and the
 * navbar toggler take, so all three stay in step.
 */
const ThemeDropdown = () => {
  const {
    config: { theme },
    setTheme
  } = useAppContext();

  const active = OPTIONS.find(option => option.value === theme) ?? OPTIONS[0];

  return (
    <Dropdown>
      <Dropdown.Trigger asChild>
        <Button
          variant="phoenix"
          color="secondary"
          size="sm"
          className="dropdown-caret-none min-w-10"
          aria-label={`Colour scheme: ${active.label}`}
        >
          <FontAwesomeIcon icon={active.icon} />
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Content align="end" className="py-2">
        {OPTIONS.map(option => (
          <Dropdown.Item
            key={option.value}
            onClick={() => setTheme(option.value)}
            className={cn('flex items-center gap-2', {
              active: option.value === theme
            })}
          >
            <FontAwesomeIcon icon={option.icon} />
            {option.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Content>
    </Dropdown>
  );
};

export default ThemeDropdown;
