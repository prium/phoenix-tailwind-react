import { faFileLines, faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Dropdown } from '@hummingbirdui/react';
import RevealDropdown, {
  RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import generic40 from 'assets/img/generic/40.png';

const AttachmentDropdown = () => (
  <RevealDropdownTrigger>
    <RevealDropdown btnClassName="dropdown-toggle" iconClassName="">
      <Dropdown.Item asChild>
        <a href="#!">Edit</a>
      </Dropdown.Item>
      <Dropdown.Item asChild className="text-danger">
        <a href="#!">Delete</a>
      </Dropdown.Item>
      <Dropdown.Item asChild>
        <a href="#!">Download</a>
      </Dropdown.Item>
      <Dropdown.Item asChild>
        <a href="#!">Report abuse</a>
      </Dropdown.Item>
    </RevealDropdown>
  </RevealDropdownTrigger>
);

const AttachmentMeta = ({
  size,
  user,
  date,
  className,
  firstSeparator = '| '
}: {
  size: string;
  user: string;
  date: string;
  className: string;
  /** the gold's 2nd item renders its first `|` without the trailing space */
  firstSeparator?: string;
}) => (
  <p className={className}>
    <span>{size}</span>
    <span className="text-soft mx-1">{firstSeparator}</span>
    <a href="#!">{user} </a>
    <span className="text-soft mx-1">| </span>
    <span className="text-nowrap">{date}</span>
  </p>
);

const AttachmentTitle = ({
  icon,
  name
}: {
  icon: IconDefinition;
  name: string;
}) => (
  <div className="flex items-center mb-1">
    <FontAwesomeIcon icon={icon} className="me-2 text-md text-subtle" />
    <p className="text-highlight mb-0 leading-none">{name}</p>
  </div>
);

/** `+FilesAttachments` in mixins/crm/LeadDetails.pug (the gold hardcodes these) */
const LeadAttachments = () => {
  return (
    <div>
      <h2 className="mb-6">Attachments</h2>
      <div className="border-t border-dashed pt-4 pb-6">
        <div className="flex flex-between-center">
          <div className="flex mb-1">
            <FontAwesomeIcon
              icon={faImage}
              className="me-2 text-subtle text-md"
            />
            <p className="text-highlight mb-0 leading-none">
              Silly_sight_1.png
            </p>
          </div>
          <AttachmentDropdown />
        </div>
        <AttachmentMeta
          className="text-md text-subtle mb-4"
          size="768kB"
          user="Shantinan Mekalan"
          date="21st Dec, 12:56 PM"
        />
        <img src={generic40} alt="" className="rounded-md" />
      </div>
      <div className="border-t border-dashed py-6">
        <div className="flex flex-between-center">
          <div>
            <AttachmentTitle icon={faImage} name="All_images.zip" />
            <AttachmentMeta
              className="text-md text-subtle mb-0"
              size="12.8 mB"
              user="Yves Tanguy"
              date="19th Dec, 08:56 PM"
              firstSeparator="|"
            />
          </div>
          <AttachmentDropdown />
        </div>
      </div>
      <div className="border-t border-dashed py-6">
        <div className="flex items-center justify-between">
          <div>
            <AttachmentTitle icon={faFileLines} name="Project.txt" />
            <AttachmentMeta
              className="text-md text-subtle mb-0"
              size="123 kB"
              user="Shantinan Mekalan"
              date="12th Dec, 12:56 PM"
            />
          </div>
          <AttachmentDropdown />
        </div>
      </div>
    </div>
  );
};

export default LeadAttachments;
