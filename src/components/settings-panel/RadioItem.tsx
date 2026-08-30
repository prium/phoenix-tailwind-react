import { ChangeEvent } from 'react';
import { cn } from '@hummingbirdui/react';

export interface RadioThumb {
  light: string;
  /** Shown instead of `light` in dark mode via `dark:hidden` / `hidden dark:block`. */
  dark?: string;
}

interface RadioItemProps {
  name: string;
  value: string;
  thumb: RadioThumb;
  label: string;
  /** Label used in dark mode (gold shows e.g. "Lighter" instead of "Darker"). */
  darkLabel?: string;
  checked?: boolean;
  disabled?: boolean;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  /**
   * Markup variant from SettingsPanel.pug:
   * - `inline`  : `label.btn.inline-block!.btn-navbar-style > span.mb-2.rounded-md.block > img.mb-0!`
   * - `inline-tight`: same but the span has no `mb-2` and the img keeps its default margin (Navigation Type)
   * - `block`   : `label.btn.block!.w-full.btn-navbar-style > img` (+NavbarStyle mixin)
   */
  variant?: 'inline' | 'inline-tight' | 'block';
}

/** `input.btn-check + label.btn.btn-navbar-style` in phoenix-tailwind SettingsPanel.pug */
const RadioItem = ({
  name,
  value,
  thumb,
  label,
  darkLabel,
  checked,
  handleChange,
  disabled,
  variant = 'inline'
}: RadioItemProps) => {
  const id = `${name}-${value}`;
  const imgClass = cn('img-prototype', variant === 'inline' && 'mb-0!');
  const images = thumb.dark ? (
    <>
      <img className={cn(imgClass, 'dark:hidden')} src={thumb.light} alt="" />
      <img
        className={cn(imgClass, 'hidden dark:block')}
        src={thumb.dark}
        alt=""
      />
    </>
  ) : (
    <img className={imgClass} src={thumb.light} alt="" />
  );
  const labels = darkLabel ? (
    <>
      <span className="label-text dark:hidden">{label}</span>
      <span className="label-text hidden dark:block">{darkLabel}</span>
    </>
  ) : (
    <span className="label-text">{label}</span>
  );

  return (
    <>
      <input
        className="btn-check"
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
      />
      <label
        htmlFor={id}
        className={cn(
          'btn btn-navbar-style text-md',
          variant === 'block' ? 'block! w-full' : 'inline-block!'
        )}
      >
        {variant === 'block' ? (
          images
        ) : (
          <span
            className={cn('rounded-md block', variant === 'inline' && 'mb-2')}
          >
            {images}
          </span>
        )}
        {labels}
      </label>
    </>
  );
};

export default RadioItem;
