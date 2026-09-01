import { Input, Select, Textarea } from '@hummingbirdui/react';
import PhoenixFloatingLabel from 'components/base/PhoenixFloatingLabel';
import { useWizardFormContext } from 'providers/WizardFormProvider';
import { CreateBoardFormData } from './CreateBoardWizardForm';

/**
 * Step 1 — board name / type / description. Gold: `Step1` in
 * `../phoenix-tailwind/src/pug/mixins/kanban/KanbanWizardForm.pug`.
 */
const BoardForm = () => {
  const { formData, onChange, formRefs } =
    useWizardFormContext<CreateBoardFormData>();
  return (
    <>
      <p className="mb-6">
        This will be the <strong className="font-extrabold">Name</strong> and
        description of your Kanban board. You and other admins can edit the name
        in future. The name can contain letters, numbers &amp; punctuation.{' '}
      </p>
      <form
        id="createBoardForm1"
        data-wizard-form="1"
        noValidate
        ref={el => {
          formRefs.current[0] = el;
        }}
        onSubmit={e => e.preventDefault()}
      >
        <PhoenixFloatingLabel
          label="BOARD NAME"
          htmlFor="create-boardwizard-name"
        >
          <Input
            type="text"
            name="name"
            id="create-boardwizard-name"
            placeholder="Event title"
            value={formData.name ?? ''}
            onChange={onChange}
          />
        </PhoenixFloatingLabel>
        <PhoenixFloatingLabel
          className="mt-6"
          label="BOARD TYPE"
          htmlFor="create-boardwizard-type"
        >
          <Select
            name="type"
            id="create-boardwizard-type"
            value={formData.type ?? ''}
            onChange={onChange}
          >
            <option disabled value="">
              Select event type
            </option>
            <option value="1">technical</option>
            <option value="2">external</option>
            <option value="3">organizational</option>
          </Select>
        </PhoenixFloatingLabel>
        <PhoenixFloatingLabel
          className="mt-6"
          label="DESCRIPTION (OPTIONAL)"
          htmlFor="create-board-wizard-des"
        >
          <Textarea
            className="h-32!"
            placeholder="Leave a comment here"
            name="description"
            id="create-board-wizard-des"
            value={formData.description ?? ''}
            onChange={onChange}
          />
        </PhoenixFloatingLabel>
      </form>
    </>
  );
};

export default BoardForm;
