import { ReactNode } from 'react';
import { cn } from '@hummingbirdui/react';

export interface InlineCheckItemProps {
  id: string;
  name: string;
  label: ReactNode;
  type?: 'radio' | 'checkbox';
  value?: string;
  defaultChecked?: boolean;
  /** Extra classes on the `.form-check-inline` wrapper, e.g. `me-4` */
  className?: string;
}

/**
 * Gold inline check/radio:
 * `.form-check-inline > input.form-check-input + label.form-check-label`.
 * Pug: mixins/events/CreateEvent.pug (Online/Offline/Both, Free/Paid),
 * travel-agency add-room Pricing/Breakfast.
 */
const InlineCheckItem = ({
  id,
  name,
  label,
  type = 'radio',
  value,
  defaultChecked,
  className
}: InlineCheckItemProps) => {
  return (
    <div className={cn('form-check-inline', className)}>
      <input
        className="form-check-input"
        type={type}
        id={id}
        name={name}
        value={value}
        defaultChecked={defaultChecked}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default InlineCheckItem;
