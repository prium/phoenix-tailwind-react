import { Input, cn } from '@hummingbirdui/react';
import { UilEye, UilEyeSlash } from '@iconscout/react-unicons';
import Unicon from 'components/base/Unicon';
import { ComponentPropsWithoutRef, ReactNode, useState } from 'react';

export interface PasswordFieldProps
  extends Omit<
    ComponentPropsWithoutRef<'input'>,
    'type' | 'className' | 'color' | 'size'
  > {
  /** Classes for the `[data-password]` wrapper, verbatim from the gold
   *  (`relative`, `relative mb-2`, `input-group-icon` …). */
  className?: string;
  /** Classes for the `input.form-control` itself (`pe-10`, `mb-4` …). */
  inputClassName?: string;
  /** Rendered before the input — e.g. a `.form-control-icon-start` icon. */
  startIcon?: ReactNode;
}

/**
 * The gold password field: `div[data-password] > input[data-password-input] +
 * button[data-password-toggle]`, whose eye/eye-slash icons phoenix CSS shows
 * and hides through `.show` / `.hide` / `.show-password`
 * (assets/css/components/mixed.css). `passwordToggleInit()` in the gold's
 * phoenix.js swaps the input type; here React state does.
 *
 * Used by every authentication form (sign-in, sign-up, reset-password,
 * lock-screen) in all three layouts.
 */
const PasswordField = ({
  className = 'relative',
  inputClassName,
  startIcon,
  ...inputProps
}: PasswordFieldProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className={className} data-password="data-password">
      {startIcon}
      <Input
        type={visible ? 'text' : 'password'}
        className={inputClassName}
        data-password-input="data-password-input"
        {...inputProps}
      />
      <button
        type="button"
        className={cn(
          'btn px-4 py-0 h-full absolute top-0 end-0 text-lg text-subtle',
          { 'show-password': visible }
        )}
        data-password-toggle="data-password-toggle"
        onClick={() => setVisible(prev => !prev)}
      >
        <Unicon icon={UilEye} size={20} className="show relative -top-0.5" />
        <Unicon
          icon={UilEyeSlash}
          size={20}
          className="hide relative -top-0.5"
        />
      </button>
    </div>
  );
};

export default PasswordField;
