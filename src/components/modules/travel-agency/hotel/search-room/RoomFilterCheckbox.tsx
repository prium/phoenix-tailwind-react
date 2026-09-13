import { ReactNode } from 'react';

export interface CheckboxItemProps {
  type?: 'checkbox' | 'radio';
  name: string;
  label: string | ReactNode;
  value: string | number;
}

/** gold `.form-check.mt-4` items of RoomFilterOffcanvas.pug */
const RoomFilterCheckbox = ({
  type = 'checkbox',
  name,
  label,
  value
}: CheckboxItemProps) => {
  const id = String(value);
  return (
    <div className="form-check mt-4">
      <input
        className="form-check-input"
        type={type}
        value=""
        name={name}
        id={id}
      />
      <label className="form-check-label text-base text-highlight" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default RoomFilterCheckbox;
