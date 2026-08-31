import { cn } from '@hummingbirdui/react';
import FileListItem from 'components/modules/project-management/todo-list/FileListItem';
import { Attachment } from 'data/project-management/todoListData';

/** `#tab-attachments` + `+FilesAttachments` in mixins/crm/LeadDetails.pug */
const DealDetailsAttachments = ({
  attachments
}: {
  attachments: Attachment[];
}) => {
  return (
    <>
      <h2 className="mb-4">Attachments</h2>
      <div>
        {attachments.map((attachment, index) => (
          <FileListItem
            key={attachment.name}
            attachment={attachment}
            className={cn(
              'border-dashed border-subtle',
              index === 0 ? 'pt-4 pb-6' : 'py-6'
            )}
          />
        ))}
      </div>
    </>
  );
};

export default DealDetailsAttachments;
