import { cn } from '@hummingbirdui/react';
import { InputHTMLAttributes } from 'react';

interface CheckButtonProps {
  type?: 'checkbox' | 'radio';
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  label: string;
  id: string;
  /** Button variant suffix, e.g. `phoenix-secondary` → `btn-phoenix-secondary` */
  variant?: string;
  className?: string;
}

/** `input.btn-check + label.btn` toggle button */
const CheckButton = ({
  inputProps,
  label,
  id,
  type = 'radio',
  className,
  variant = 'phoenix-secondary'
}: CheckButtonProps) => {
  return (
    <>
      <input className="btn-check" type={type} id={id} {...inputProps} />
      <label
        className={cn(
          'btn',
          `btn-${variant}`,
          className,
          'hover:bg-default text-sm py-1 mb-0'
        )}
        htmlFor={id}
      >
        {label}
      </label>
    </>
  );
};

export default CheckButton;
