import { Fragment } from 'react';
import { faPencil, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import FeatherIcon from 'feather-icons-react';
import { CreateBoardFormData } from './CreateBoardWizardForm';
import { useWizardFormContext } from 'providers/WizardFormProvider';

/**
 * Step 4 — board tags. Gold: `Step4` in
 * `../phoenix-tailwind/src/pug/mixins/kanban/KanbanWizardForm.pug`
 * (`.relative.kanban-tag` badge rows with hover action icons; the
 * `badge-phoenix-*` classes are phoenix component classes from
 * assets/css/components/badge.css, safe to build from tag data).
 */
const TagsForm = () => {
  const { formData, formRefs } = useWizardFormContext<CreateBoardFormData>();

  return (
    <>
      <p className="mb-6">
        These will be the <strong className="font-extrabold">Tags</strong> for
        your tasks/cards of your Kanban board. Tags are labels to allow easy
        &amp; simpler classification of tasks.
      </p>
      <form
        id="createBoardForm4"
        data-wizard-form="4"
        noValidate
        ref={el => {
          formRefs.current[3] = el;
        }}
        onSubmit={e => e.preventDefault()}
      >
        {formData.tags.map((tag, index) => (
          <Fragment key={tag.label}>
            <input
              className="hidden"
              name={`tag${index + 1}`}
              value={JSON.stringify(tag)}
              readOnly
            />
            <div className="relative kanban-tag">
              <span
                className={`badge-phoenix-${tag.color} badge flex flex-between-center mb-8 text-md px-6 py-2 kanban-tag-badge`}
              >
                <span className="badge-label capitalize leading-base">
                  {tag.label}
                </span>
                <FeatherIcon
                  icon={tag.icon}
                  size={12}
                  className="ms-1 h-[15.8px] w-[12.8px]"
                />
              </span>
              <div className="absolute top-0 end-0 flex">
                <Button
                  variant="phoenix-secondary"
                  className="text-md bg-transparent leading-none kanban-tag-action-icons me-1"
                >
                  <FontAwesomeIcon icon={faPencil} transform="shrink-5" />
                </Button>
                <Button
                  variant="phoenix-danger"
                  className="text-md bg-transparent leading-none kanban-tag-action-icons"
                >
                  <FontAwesomeIcon icon={faTrash} transform="shrink-5" />
                </Button>
              </div>
            </div>
          </Fragment>
        ))}
      </form>
      <div className="grid">
        <Button
          variant="phoenix-secondary"
          className="text-md bg-subtle py-2 leading-normal"
        >
          <FontAwesomeIcon
            icon={faPlus}
            transform="shrink-3"
            className="me-2"
          />
          Create Custom Tag
        </Button>
      </div>
    </>
  );
};

export default TagsForm;
