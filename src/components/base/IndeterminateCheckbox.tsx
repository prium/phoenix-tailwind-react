import { cn } from '@hummingbirdui/react';
import { InputHTMLAttributes, useEffect, useRef } from 'react';

export interface IndeterminateCheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  indeterminate?: boolean;
  /** Classes for the `.form-check` wrapper. */
  className?: string;
  /** Classes for the `<input>` itself. */
  inputClassName?: string;
}

/**
 * `div.form-check.mb-0 > input.form-check-input` exactly as in
 * phoenix-tailwind's bulk-select tables. Deliberately does NOT use
 * Hummingbird's `Checkbox`, whose `form-check-input-wrapper` span adds a
 * 10px hover/focus halo that phoenix tables don't have.
 */
const IndeterminateCheckbox = ({
  indeterminate,
  className,
  inputClassName,
  checked,
  ...rest
}: IndeterminateCheckboxProps) => {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (ref.current) ref.current.indeterminate = !checked && !!indeterminate;
  }, [checked, indeterminate]);

  return (
    <div className={cn('form-check mb-0', className)}>
      <input
        ref={ref}
        type="checkbox"
        checked={checked}
        className={cn('form-check-input', inputClassName)}
        {...rest}
      />
    </div>
  );
};

export default IndeterminateCheckbox;
