import {
  faComment,
  faPencil,
  faTrash
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '@hummingbirdui/react';
import { FileAttachment } from 'components/common/AttachmentPreview';
import { getFileIcon } from 'helpers/utils';

interface KanbanAttachmentProps {
  attachment: FileAttachment;
  className?: string;
}

/** ATTACHMENTS rows of mixins/kanban/kanban/KanbanModal.pug */
const KanbanAttachment = ({ attachment, className }: KanbanAttachmentProps) => {
  return (
    <div className={cn('border-b border-subtle flex flex-row pb-4', className)}>
      {attachment.preview ? (
        <a href={attachment.preview}>
          <img
            src={attachment.preview}
            width={64}
            height={64}
            alt=""
            className="rounded-lg"
          />
        </a>
      ) : (
        <div className="border border-subtle rounded-lg flex-center flex size-16">
          <FontAwesomeIcon
            icon={getFileIcon(attachment.format)}
            className="fa-2x text-soft/75"
          />
        </div>
      )}
      <div className="flex-1 ms-4 flex flex-col">
        <h5 className="leading-sm">{attachment.name}</h5>
        <p className="leading-none text-md text-subtle font-medium mb-0">
          {attachment.date}
        </p>
        <div className="flex mt-auto">
          <button className="btn p-0 text-base text-subtle me-4" type="button">
            <FontAwesomeIcon icon={faComment} transform="shrink-4" />
          </button>
          <button className="btn p-0 text-base text-subtle me-4" type="button">
            <FontAwesomeIcon icon={faTrash} transform="shrink-4" />
          </button>
          <button className="btn p-0 text-base text-subtle" type="button">
            <FontAwesomeIcon icon={faPencil} transform="shrink-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default KanbanAttachment;
