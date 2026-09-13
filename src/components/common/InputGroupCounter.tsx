import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import { useState } from 'react';

interface InputGroupCounterProps {
  id?: string;
  inputGap?: string;
  buttonClasses?: string;
  iconClasses?: string;
}

/** `div(data-quantity).input-group` counter used across the travel-agency gold pages */
const InputGroupCounter = ({
  id,
  inputGap = 'gap-1',
  buttonClasses = 'px-2 rounded-md',
  iconClasses = 'px-1'
}: InputGroupCounterProps) => {
  const [value, setValue] = useState(2);

  const handleCount = (type: string) => {
    if (type === 'increase') setValue(value + 1);
    if (type === 'decrease' && value >= 1) setValue(value - 1);
  };

  return (
    <div className={cn('input-group', inputGap)}>
      <Button
        variant="phoenix-primary"
        className={cn(buttonClasses)}
        onClick={() => handleCount('decrease')}
      >
        <FontAwesomeIcon icon={faMinus} className={cn(iconClasses)} />
      </Button>
      <input
        type="number"
        value={value}
        id={id}
        onChange={e => setValue(parseInt(e.target.value))}
        className="form-control border-subtle input-spin-none text-center rounded-md"
      />
      <Button
        variant="phoenix-primary"
        className={cn(buttonClasses)}
        onClick={() => handleCount('increase')}
      >
        <FontAwesomeIcon icon={faPlus} className={cn(iconClasses)} />
      </Button>
    </div>
  );
};

export default InputGroupCounter;
