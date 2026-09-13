import { faPlus, faShuffle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChangeEvent, useState } from 'react';
import { getRandomNumber } from 'helpers/utils';
import { useWizardFormContext } from 'providers/WizardFormProvider';
import { CreateBoardFormData } from './CreateBoardWizardForm';
import { colors } from './BackgroundColorForm';

/**
 * Gold swatch pair `input.btn-check.kanban-swatch-radio + label.btn.btn-primary
 * .kanban-swatch-label.kanban-swatch-btn-shadow` — the checked ring comes from
 * the `.kanban-swatch-radio:checked + .kanban-swatch-btn-shadow` CSS sibling
 * selector, so input and label must stay adjacent siblings of the flex grid.
 * Pug: `Step3` in `../phoenix-tailwind/src/pug/mixins/kanban/KanbanWizardForm.pug`.
 */
export const ColorSwatch = ({
  color,
  index
}: {
  color: string;
  index: number;
}) => {
  const { formData, setFormData } = useWizardFormContext<CreateBoardFormData>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setFormData({
        ...formData,
        backgroundImage: undefined,
        backgroundColor: color
      });
    }
  };

  return (
    <>
      <input
        className="btn-check kanban-swatch-radio"
        type="radio"
        value={color}
        name="board-bg"
        id={`color${index}`}
        checked={formData.backgroundColor === color}
        onChange={handleChange}
      />
      <label
        className="btn btn-primary kanban-swatch-label kanban-swatch-btn-shadow"
        htmlFor={`color${index}`}
        style={{ backgroundColor: color }}
      />
    </>
  );
};

/** Gold CUSTOM COLOR picker pill of `Step3` (KanbanWizardForm.pug). */
export const CustomColorButton = () => {
  const { formData, setFormData } = useWizardFormContext<CreateBoardFormData>();
  const [color, setColor] = useState('#eeeeee');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
    setFormData({
      ...formData,
      backgroundImage: undefined,
      backgroundColor: e.target.value
    });
  };

  return (
    <>
      <input
        className="btn-check hidden"
        data-custom-color-radio
        type="radio"
        value={color}
        name="board-bg"
        checked={formData.backgroundColor === color}
        readOnly
      />
      <input
        className="btn-check"
        data-custom-color-input
        type="color"
        id="customColorInput"
        onChange={handleChange}
      />
      <label
        className="btn btn-outline-secondary self-start rounded-full kanban-swatch-btn-shadow hover:text-(--btn-color) hover:border-(--btn-color)"
        htmlFor="customColorInput"
      >
        <FontAwesomeIcon icon={faPlus} transform="shrink-3" className="me-2" />
        CUSTOM COLOR
      </label>
    </>
  );
};

/** Gold RANDOM color pill of `Step3` (KanbanWizardForm.pug). */
export const RandomColorButton = () => {
  const { formData, setFormData } = useWizardFormContext<CreateBoardFormData>();
  const [color, setColor] = useState('');

  const handleChange = () => {
    const value = colors[getRandomNumber(0, colors.length - 1)];
    setColor(value);
    setFormData({
      ...formData,
      backgroundImage: undefined,
      backgroundColor: value
    });
  };

  return (
    <>
      <input
        className="btn-check kanban-swatch-radio"
        type="radio"
        data-random-color
        name="board-bg"
        value=""
        id="Randomcolor"
        checked={!!color && formData.backgroundColor === color}
        onClick={handleChange}
        readOnly
      />
      <label
        className="btn btn-outline-danger self-start rounded-full kanban-swatch-btn-shadow hover:text-(--btn-color)"
        htmlFor="Randomcolor"
      >
        <FontAwesomeIcon
          icon={faShuffle}
          transform="shrink-3"
          className="me-2"
        />
        RANDOM
      </label>
    </>
  );
};
