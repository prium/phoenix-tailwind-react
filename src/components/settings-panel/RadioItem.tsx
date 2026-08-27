import { ChangeEvent } from 'react';

interface RadioItemProps {
  name: string;
  value: string;
  thumb: string;
  label: string;
  checked?: boolean;
  disabled?: boolean;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

/** `input.btn-check + label.btn.btn-navbar-style` in SettingsPanel.pug */
const RadioItem = ({
  name,
  value,
  thumb,
  label,
  checked,
  handleChange,
  disabled
}: RadioItemProps) => {
  const id = `${name}-${value}`;
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
        className="btn inline-block! btn-navbar-style text-md"
      >
        <span className="mb-2 rounded-md block">
          <img className="img-prototype mb-0!" src={thumb} alt="" />
        </span>
        <span className="label-text">{label}</span>
      </label>
    </>
  );
};

export default RadioItem;
