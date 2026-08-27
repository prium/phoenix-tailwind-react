import { ReactNode } from 'react';

export interface CheckboxItemProps {
  type?: 'checkbox' | 'radio';
  name: string;
  label: string | ReactNode;
  value: string | number;
  defaultChecked?: boolean;
}

/** `div.form-check.items-start.mb-1.25` in apps/e-commerce/landing/products-filter.pug */
const CheckboxItem = ({
  type = 'checkbox',
  name,
  label,
  value,
  defaultChecked
}: CheckboxItemProps) => {
  const id = `${name}-${value}`;
  return (
    <div className="form-check items-start mb-1.25">
      <input
        type={type}
        id={id}
        value={value}
        name={name}
        defaultChecked={defaultChecked}
        className="form-check-input mt-0"
      />
      <label
        htmlFor={id}
        className="form-check-label block leading-sm text-base text-default font-normal mb-0"
      >
        {label}
      </label>
    </div>
  );
};

export default CheckboxItem;
