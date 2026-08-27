import { Tooltip, cn } from '@hummingbirdui/react';
import { useAppContext } from 'providers/AppProvider';
import FeatherIcon from 'feather-icons-react';
import { useId } from 'react';

interface ThemeTogglerProps {
  slim?: boolean;
  className?: string;
}

/**
 * `+ToggleThemeBtn` in phoenix-tailwind ToggleThemeBtn.pug.
 * The hidden checkbox drives which label is visible via
 * `.theme-control-toggle-input:checked ~ …` in navbar-top.css.
 */
const ThemeToggler = ({ slim, className }: ThemeTogglerProps) => {
  const {
    config: { isDark, isRTL },
    toggleTheme
  } = useAppContext();
  const id = useId();

  const label = (mode: 'light' | 'dark', icon: 'moon' | 'sun') => (
    <label
      htmlFor={id}
      className={cn(
        'mb-0 theme-control-toggle-label',
        `theme-control-toggle-${mode}`,
        !slim && 'size-8'
      )}
    >
      {slim ? (
        <>
          <span className="hidden sm:flex flex-center size-4">
            <FeatherIcon icon={icon} size={10} className="me-1 icon" />
          </span>
          <span className="text-md font-bold">
            {mode === 'light' ? 'Dark' : 'Light'}
          </span>
        </>
      ) : (
        <FeatherIcon icon={icon} size={16} className="icon" />
      )}
    </label>
  );

  return (
    <Tooltip>
      <Tooltip.Trigger asChild>
        <div
          className={cn('theme-control-toggle', className, {
            'theme-control-toggle-slim pe-2': slim
          })}
        >
          <input
            id={id}
            type="checkbox"
            value="dark"
            className="form-check-input ms-0 theme-control-toggle-input"
            checked={isDark}
            onChange={() => toggleTheme()}
          />
          {label('light', 'moon')}
          {label('dark', 'sun')}
        </div>
      </Tooltip.Trigger>
      <Tooltip.Content side={slim ? 'bottom' : isRTL ? 'right' : 'left'}>
        {slim
          ? 'Switch theme'
          : isDark
            ? 'Switch to light theme'
            : 'Switch to dark theme'}
      </Tooltip.Content>
    </Tooltip>
  );
};

export default ThemeToggler;
