import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown, cn } from '@hummingbirdui/react';
import RevealDropdown, {
  RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import { Attachment, attachments } from 'data/project-management/todoListData';
import {
  faFileLines,
  faImage,
  faPlus
} from '@fortawesome/free-solid-svg-icons';

interface FileListItemProps {
  attachment: Attachment;
  className?: string;
  /** thumbnail width (gold `style="width:Npx"`) */
  imgMaxWidth?: number;
}

const FileDropdown = () => (
  <RevealDropdownTrigger>
    <RevealDropdown btnClassName="dropdown-toggle" iconClassName="">
      <Dropdown.Item>Edit</Dropdown.Item>
      <Dropdown.Item className="text-danger">Delete</Dropdown.Item>
      <Dropdown.Item>Download</Dropdown.Item>
      <Dropdown.Item>Report abuse</Dropdown.Item>
    </RevealDropdown>
  </RevealDropdownTrigger>
);

/** one item of `+Files` in mixins/project-management/Common.pug */
const FileListItem = ({
  attachment,
  className,
  imgMaxWidth
}: FileListItemProps) => {
  const icon = attachment.mimeType === 'txt' ? faFileLines : faImage;
  const meta = (
    <div
      className={cn('flex text-md text-subtle flex-wrap', {
        'mb-2': attachment.thumbnail,
        'mb-0': !attachment.thumbnail
      })}
    >
      <span>{attachment.size}</span>
      <span className="text-soft mx-1">| </span>
      <a href="#!">{attachment.user} </a>
      <span className="text-soft mx-1">| </span>
      <span className="text-nowrap">{attachment.date}</span>
    </div>
  );

  return (
    <div className={cn('border-t', className)}>
      <div className="-me-4">
        {attachment.thumbnail ? (
          <>
            <div className="flex flex-between-center">
              <div className="flex mb-1">
                <FontAwesomeIcon
                  icon={icon}
                  className="me-2 text-subtle text-md"
                />
                <p className="text-highlight mb-0 leading-none">
                  {attachment.name}
                </p>
              </div>
              <FileDropdown />
            </div>
            {meta}
            <img
              src={attachment.thumbnail}
              alt=""
              className="rounded-md"
              style={{ width: imgMaxWidth }}
            />
          </>
        ) : (
          <div className="flex flex-between-center">
            <div>
              <div className="flex items-center mb-1">
                <FontAwesomeIcon
                  icon={icon}
                  className="me-2 text-md text-subtle"
                />
                <p className="text-highlight mb-0 leading-none">
                  {attachment.name}
                </p>
              </div>
              {meta}
            </div>
            <FileDropdown />
          </div>
        )}
      </div>
    </div>
  );
};

interface FilesProps {
  itemPaddingClass: string;
  titleClass?: string;
  showAddBtn?: boolean;
  showAddBtnClass?: string;
  imgMaxWidth: number;
  index?: number;
}

/** `+Files({...}, index)` in mixins/project-management/Common.pug */
export const Files = ({
  itemPaddingClass,
  titleClass,
  showAddBtn,
  showAddBtnClass,
  imgMaxWidth,
  index = 0
}: FilesProps) => (
  <>
    <div className={titleClass}>
      <h4 className="mb-4">Files</h4>
    </div>
    {attachments.map((attachment, i) => (
      <FileListItem
        key={attachment.name}
        attachment={attachment}
        imgMaxWidth={imgMaxWidth}
        className={cn(itemPaddingClass, {
          'border-b': showAddBtn && i === attachments.length - 1
        })}
      />
    ))}
    {showAddBtn && (
      <div className={showAddBtnClass}>
        <label className="btn btn-link p-0" htmlFor={`customFile-${index}`}>
          <FontAwesomeIcon icon={faPlus} className="me-1" />
          Add file(s)
        </label>
        <input className="hidden" type="file" id={`customFile-${index}`} />
      </div>
    )}
  </>
);

export default FileListItem;
