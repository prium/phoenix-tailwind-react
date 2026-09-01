import { faPencil, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Badge, { BadgeBg } from 'components/base/Badge';
import Button from 'components/base/Button';
import FeatherIcon from 'feather-icons-react';
import { CreateBoardFormData } from './CreateBoardWizardForm';
import { useWizardFormContext } from 'providers/WizardFormProvider';

const TagsForm = () => {
  const { formData } = useWizardFormContext<CreateBoardFormData>();

  return (
    <div>
      <p className="mb-6">
        These will be the <b>Tags</b> for your tasks/cards of your Kanban board.
        Tags are labels to allow easy &amp; simpler classification of tasks.
      </p>
      <div className="flex flex-col gap-8">
        {formData.tags.map(tag => (
          <div className="relative kanban-tag" key={tag.label}>
            <Badge
              variant="phoenix"
              bg={tag.color as BadgeBg}
              className="flex flex-between-center text-md px-6 py-2 kanban-tag-badge"
              iconPosition="end"
            >
              <span className="badge-label capitalize leading-base">
                {tag.label}
              </span>
              <FeatherIcon icon={tag.icon} size={12} className="ms-1" />
            </Badge>
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
        ))}
        <Button
          variant="phoenix-secondary"
          startIcon={<FontAwesomeIcon icon={faPlus} className="me-2" />}
          className="w-full bg-subtle text-md"
        >
          Create Custom Tag
        </Button>
      </div>
    </div>
  );
};

export default TagsForm;
