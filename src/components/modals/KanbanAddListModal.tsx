import boardIcon from 'assets/img/kanban/board.png';
import Button from 'components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faCircleXmark,
  faPlus,
  faXmark
} from '@fortawesome/free-solid-svg-icons';
import { Dialog, FloatingLabel, Input, Select } from '@hummingbirdui/react';
import { useKanbanContext } from 'providers/KanbanProvider';
import PhoenixFloatingLabel from 'components/base/PhoenixFloatingLabel';
import usePhoenixForm from 'hooks/usePhoenixForm';
import { FormEvent } from 'react';
import { ADD_NEW_LIST, TOGGLE_ADD_LIST_MODAL } from 'reducers/KanbanReducer';
import { getRandomNumber } from 'helpers/utils';

interface AddColumnFormData {
  name: string;
  columnNo: number;
  color: string;
}

const initialFormData = {
  name: '',
  columnNo: 1,
  color: '#000000'
};

const KanbanAddListModal = () => {
  const { boardLists, openAddListModal, kanbanDispatch } = useKanbanContext();

  const { formData, setFormData, onChange } =
    usePhoenixForm<AddColumnFormData>(initialFormData);

  const handleClose = () => {
    kanbanDispatch({
      type: TOGGLE_ADD_LIST_MODAL,
      payload: false
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const list = {
      id: getRandomNumber(20, 100),
      title: formData.name,
      borderClass: 'border-primary',
      underlineClass: 'after:bg-(--color-primary)',
      tasks: []
    };

    kanbanDispatch({
      type: ADD_NEW_LIST,
      payload: {
        list,
        columnNo: formData.columnNo
      }
    });
    setFormData(initialFormData);
  };

  return (
    <Dialog
      open={openAddListModal}
      onOpenChange={open => !open && handleClose()}
    >
      <Dialog.Content centered aria-describedby={undefined}>
        <div className="modal-header p-6 flex gap-2 border-0">
          <img src={boardIcon} height={24} width={18} alt="" />
          <Dialog.Title asChild>
            <h3 className="mb-0 text-emphasis font-semibold flex-1">
              Phoenix Kanban
            </h3>
          </Dialog.Title>
          <Button className="p-0 ms-auto" onClick={handleClose}>
            <FontAwesomeIcon icon={faXmark} className="text-lg" />
          </Button>
        </div>
        <div className="modal-body p-6 pt-0">
          <form onSubmit={handleSubmit}>
            <div className="row g-4 mb-6">
              <div className="col-12">
                <PhoenixFloatingLabel
                  label="Column Name"
                  className="flex-1"
                  htmlFor="kanbanAddListName"
                  startComponent={
                    <FontAwesomeIcon
                      icon={faBars}
                      className="form-control-icon-start text-subtle text-md"
                    />
                  }
                  endComponent={
                    <button
                      className="btn p-0 leading-none absolute top-1/2 -translate-y-1/2 end-4"
                      type="button"
                      onClick={() => setFormData({ ...formData, name: '' })}
                    >
                      <FontAwesomeIcon
                        className="text-light"
                        icon={faCircleXmark}
                      />
                    </button>
                  }
                >
                  <Input
                    id="kanbanAddListName"
                    type="text"
                    placeholder="Board Name"
                    name="name"
                    value={formData.name}
                    onChange={onChange}
                  />
                </PhoenixFloatingLabel>
              </div>
              <div className="sm:col-6">
                <FloatingLabel
                  label="Column No."
                  htmlFor="kanbanAddListColumnNo"
                >
                  <Select
                    id="kanbanAddListColumnNo"
                    name="columnNo"
                    value={formData.columnNo}
                    onChange={onChange}
                  >
                    {boardLists.map((list, index) => (
                      <option key={list.id} value={index + 1}>
                        {index + 1}
                      </option>
                    ))}
                    <option value={boardLists.length + 1}>
                      {boardLists.length + 1}
                    </option>
                  </Select>
                </FloatingLabel>
              </div>
              <div className="sm:col-6">
                <FloatingLabel label="Color" htmlFor="kanbanAddListColor">
                  <Input
                    id="kanbanAddListColor"
                    type="color"
                    className="kanban-color-picker"
                    name="color"
                    value={formData.color}
                    onChange={onChange}
                  />
                </FloatingLabel>
              </div>
            </div>
            <div className="flex gap-4 flex-between-center">
              <Button variant="link" className="p-0" type="button">
                Edit Columns
              </Button>
              <Button
                variant="primary"
                startIcon={<FontAwesomeIcon icon={faPlus} />}
                type="submit"
              >
                Add Column
              </Button>
            </div>
          </form>
        </div>
      </Dialog.Content>
    </Dialog>
  );
};

export default KanbanAddListModal;
