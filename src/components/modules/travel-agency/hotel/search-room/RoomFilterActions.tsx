import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input, InputGroup } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import { useState } from 'react';

/** gold `.input-group.gap-2(data-quantity)` counter of RoomFilterOffcanvas.pug */
const RoomFilterActions = ({ id }: { id?: string }) => {
  const [value, setValue] = useState(2);

  const handleCount = (type: string) => {
    if (type === 'increase') setValue(value + 1);
    if (type === 'decrease' && value >= 1) setValue(value - 1);
  };
  return (
    <InputGroup className="gap-2">
      <Button
        variant="phoenix-primary"
        className="px-4 rounded-md"
        onClick={() => handleCount('decrease')}
        disabled={value === 0}
      >
        <FontAwesomeIcon icon={faMinus} className="px-1" />
      </Button>
      <Input
        id={id}
        type="number"
        size="lg"
        value={value}
        onChange={e => setValue(parseInt(e.target.value))}
        className="border-subtle input-spin-none text-center rounded-md"
      />
      <Button
        variant="phoenix-primary"
        className="px-4 rounded-md"
        onClick={() => handleCount('increase')}
      >
        <FontAwesomeIcon icon={faPlus} className="px-1" />
      </Button>
    </InputGroup>
  );
};

export default RoomFilterActions;
