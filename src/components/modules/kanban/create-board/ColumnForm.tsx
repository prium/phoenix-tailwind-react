import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import PhoenixFloatingLabel from 'components/base/PhoenixFloatingLabel';
import { useWizardFormContext } from 'providers/WizardFormProvider';
import { ChangeEvent, useState } from 'react';
import { CreateBoardFormData } from './CreateBoardWizardForm';
import { DndContext, DragOverlay } from '@dnd-kit/core';
import type {
  DragEndEvent,
  DragStartEvent,
  UniqueIdentifier
} from '@dnd-kit/core';
import {
  SortableContext,
  useSortable,
  arrayMove,
  verticalListSortingStrategy
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { getRandomNumber } from 'helpers/utils';
import { useGetDndSensor } from 'hooks/useGetDndSensor';

interface ColumnItemProps {
  index: number;
  columnItem: FormDataColumnProps;
  cursor?: boolean;
}

interface FormDataColumnProps {
  id: UniqueIdentifier;
  name: string;
  color: string;
}

/**
 * Gold `.kanban-column-item` row: draggable bars icon + floating input +
 * clear icon + color picker. Pug: `Step2` in
 * `../phoenix-tailwind/src/pug/mixins/kanban/KanbanWizardForm.pug`.
 */
const ColumnItem = ({ index, columnItem, cursor }: ColumnItemProps) => {
  const { formData, setFormData } = useWizardFormContext<CreateBoardFormData>();
  const [isFocused, setIsFocused] = useState(false);

  const {
    setNodeRef,
    attributes,
    listeners,
    isDragging,
    transition,
    transform
  } = useSortable({
    id: columnItem.id,
    data: {
      type: 'column',
      item: columnItem,
      index
    },
    disabled: isFocused
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: 'name' | 'color'
  ) => {
    setFormData(prev => ({
      ...prev,
      columns: prev.columns.map(column =>
        column.id === columnItem.id
          ? { ...column, [field]: e.target.value }
          : column
      )
    }));
  };

  const handleClear = () => {
    setFormData({
      ...formData,
      columns: formData.columns.filter(column => column.id !== columnItem.id)
    });
  };

  const styles = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0 : 1,
    cursor: cursor ? 'grabbing' : 'pointer'
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      style={styles}
      className="kanban-column-item"
    >
      <div className="kanban-column-input-container grow">
        <PhoenixFloatingLabel
          label={`COLUMN ${index + 1}`}
          htmlFor={`create-board-wizard-column${index + 1}`}
          startComponent={
            <span
              className="fa-solid fa-bars kanban-column-icon form-control-icon-start text-subtle text-md"
              {...listeners}
            />
          }
          endComponent={
            <span
              className="fa-solid fa-circle-xmark text-subtle/50 absolute top-1/2 end-0 -translate-y-1/2 me-2"
              role="button"
              onClick={handleClear}
            />
          }
        >
          <Input
            type="text"
            name={`column${index + 1}`}
            placeholder={`column${index + 1}`}
            id={`create-board-wizard-column${index + 1}`}
            value={columnItem.name}
            onBlur={() => setIsFocused(false)}
            onMouseDownCapture={() => setIsFocused(true)}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange(e, 'name')
            }
          />
        </PhoenixFloatingLabel>
      </div>
      <div className="ms-4">
        <input
          className="kanban-color-picker"
          type="color"
          name={`column${index + 1}Color`}
          id={`create-board-wizard-color-column${index + 1}`}
          value={columnItem.color}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleChange(e, 'color')
          }
        />
      </div>
    </div>
  );
};

/**
 * Step 2 — kanban columns. Gold: `Step2` in
 * `../phoenix-tailwind/src/pug/mixins/kanban/KanbanWizardForm.pug`.
 */
const ColumnForm = () => {
  const { formData, setFormData, formRefs } =
    useWizardFormContext<CreateBoardFormData>();
  const [activeItem, setActiveItem] = useState<FormDataColumnProps | null>(
    null
  );
  const [activeColumnIndex, setActiveColumnIndex] = useState<number | null>(
    null
  );

  const sensor = useGetDndSensor();

  const handleAddNewColumn = () => {
    setFormData(prev => ({
      ...prev,
      columns: [
        ...prev.columns,
        {
          id: getRandomNumber(100, 10000),
          name: '',
          color: '#000000'
        }
      ]
    }));
  };

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    setActiveItem(active.data.current?.item);
    setActiveColumnIndex(active.data.current?.index);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const activeIndex = formData.columns.findIndex(
        item => item.id === active.id
      );
      const overIndex = formData.columns.findIndex(item => item.id === over.id);

      const reorderedItem = arrayMove(formData.columns, activeIndex, overIndex);

      setFormData({ ...formData, columns: reorderedItem });
    }
  };

  return (
    <>
      <p className="mb-6">
        These will be the <strong className="font-extrabold">Columns</strong> of
        your Kanban board. They represent discrete stages in work process.
        Columns can be Edited, Removed, Rearranged or Added in future.
      </p>
      <form
        id="createBoardForm2"
        data-wizard-form="2"
        noValidate
        ref={el => {
          formRefs.current[1] = el;
        }}
        onSubmit={e => e.preventDefault()}
      >
        <DndContext
          sensors={sensor}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          {formData.columns?.map((column, index) => (
            <SortableContext
              key={column.id}
              items={formData.columns.map(item => item.id)}
              strategy={verticalListSortingStrategy}
            >
              <ColumnItem key={column.id} index={index} columnItem={column} />
            </SortableContext>
          ))}
          <DragOverlay>
            {activeItem && activeColumnIndex !== null && (
              <ColumnItem
                index={activeColumnIndex}
                columnItem={activeItem}
                cursor={true}
              />
            )}
          </DragOverlay>
        </DndContext>
      </form>
      <div className="grid">
        <Button
          variant="phoenix-secondary"
          size="lg"
          className="text-md bg-subtle"
          onClick={handleAddNewColumn}
        >
          <FontAwesomeIcon
            icon={faPlus}
            transform="shrink-3"
            className="me-2"
          />
          Add New Column
        </Button>
      </div>
    </>
  );
};

export default ColumnForm;
