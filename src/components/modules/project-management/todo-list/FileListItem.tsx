import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RevealDropdown, {
  RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import { Dropdown } from 'react-bootstrap';
import { Attachment } from 'data/project-management/todoListData';
import classNames from 'classnames';
import {
  faFileLines,
  faFileZipper,
  faImage
} from '@fortawesome/free-solid-svg-icons';

interface FileListItemProps {
  attachment: Attachment;
  className?: string;
}

const FileListItem = ({ attachment, className }: FileListItemProps) => {
  return (
    <div className={classNames(className, 'border-b py-10')}>
      <div>
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center mb-1">
              <FontAwesomeIcon
                icon={
                  attachment.mimeType === 'image'
                    ? faImage
                    : attachment.mimeType === 'zip'
                    ? faFileZipper
                    : faFileLines
                }
                className="me-2 text-md text-subtle"
              />
              <p className="text-highlight mb-0 leading-none">{attachment.name}</p>
            </div>
            <div
              className={classNames(
                'flex text-md text-subtle flex-wrap',
                {
                  'mb-6': attachment.thumbnail
                }
              )}
            >
              <span>{attachment.size}</span>
              <span className="text-soft mx-1">| </span>
              <a href="#!">{attachment.user}</a>
              <span className="text-soft mx-1">| </span>
              <span className="whitespace-nowrap">{attachment.date}</span>
            </div>
            {attachment.thumbnail && (
              <img
                src={attachment.thumbnail}
                alt={attachment.name}
                className="rounded-md img-fluid"
              />
            )}
          </div>
          <RevealDropdownTrigger>
            <RevealDropdown>
              <Dropdown.Item>Edit</Dropdown.Item>
              <Dropdown.Item className="text-danger">Delete</Dropdown.Item>
              <Dropdown.Item>Download</Dropdown.Item>
              <Dropdown.Item>Report abuse</Dropdown.Item>
            </RevealDropdown>
          </RevealDropdownTrigger>
        </div>
      </div>
    </div>
  );
};

export default FileListItem;
