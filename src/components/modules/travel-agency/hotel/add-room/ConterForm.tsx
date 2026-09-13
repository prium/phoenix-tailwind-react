import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input, InputGroup } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import { AddRoomWizardFormData } from 'data/travel-agency/addRoom';
import { useWizardFormContext } from 'providers/WizardFormProvider';
import { useEffect, useState } from 'react';

/** gold `.input-group(data-quantity)` counter of RoomDetailsForm.pug */
const ConterForm = ({ name, id }: { name: string; id?: string }) => {
  const methods = useWizardFormContext<AddRoomWizardFormData>();
  const { formData, setFormData } = methods;
  const [value, setValue] = useState(2);

  const handleCount = (type: string) => {
    if (type === 'increase') setValue(value + 1);
    if (type === 'decrease' && value >= 1) setValue(value - 1);
  };

  useEffect(() => {
    setFormData({ ...formData, [name]: value });
  }, [value]);

  return (
    <InputGroup>
      <Button
        className="border border-default px-4 bg-soft hover:bg-default leading-none"
        onClick={() => handleCount('decrease')}
      >
        <FontAwesomeIcon icon={faMinus} />
      </Button>
      <Input
        id={id}
        type="number"
        name={name}
        value={value}
        onChange={e => setValue(parseInt(e.target.value) || 0)}
        className="input-spin-none text-center"
      />
      <Button
        className="border border-default px-4 bg-soft hover:bg-default leading-none"
        onClick={() => handleCount('increase')}
      >
        <FontAwesomeIcon icon={faPlus} />
      </Button>
    </InputGroup>
  );
};

export default ConterForm;
