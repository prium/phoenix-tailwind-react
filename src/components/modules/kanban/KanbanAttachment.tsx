import {
  faComment,
  faPencil,
  faTrash
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { getFileIcon } from 'helpers/utils';
import React from 'react';

export interface FileAttachment {
  name: string;
  size: string;
  format: string;
  date?: string;
  preview?: string;
}

interface KanbanAttachmentProps {
  attachment: FileAttachment;
  type?: 'primary' | 'secondary';
  size?: 'lg' | 'xl';
  handleRemove?: () => void;
}

const KanbanAttachment = ({ attachment }: KanbanAttachmentProps) => {
  return (
    <div className="border-b border-subtle flex flex-row pb-4">
      {attachment.preview ? (
        <img
          src={attachment.preview}
          alt=""
          className="rounded-lg"
          height={64}
          width={64}
        />
      ) : (
        <div
          className="border border-subtle rounded-lg flex-center flex"
          style={{ height: 64, width: 64 }}
        >
          <FontAwesomeIcon
            icon={getFileIcon(attachment.format)}
            className="fa-2x text-soft"
          />
        </div>
      )}
      <div className="flex-1 ms-4 flex flex-col">
        <h5 className="leading-sm">{attachment.name}</h5>
        <p className="leading-none text-md text-subtle font-medium mb-0">
          {attachment.date}
        </p>
        <div className="flex gap-4 mt-auto">
          <Button className="p-0 text-subtle">
            <FontAwesomeIcon icon={faComment} />
          </Button>
          <Button className="p-0 text-subtle">
            <FontAwesomeIcon icon={faTrash} />
          </Button>
          <Button className="p-0 text-subtle">
            <FontAwesomeIcon icon={faPencil} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default KanbanAttachment;
