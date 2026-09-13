import { faArrowsRotate, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dialog, Select } from '@hummingbirdui/react';
import Button from 'components/base/Button';

interface FileFilterModalProps {
  show: boolean;
  onHide: () => void;
}

const groups = [
  {
    id: 'type',
    label: 'Type',
    options: [
      { value: '', label: 'Select' },
      { value: 'documents', label: 'Documents' },
      { value: 'images', label: 'Images' },
      { value: 'videos', label: 'Videos' },
      { value: 'audios', label: 'Audios' }
    ]
  },
  {
    id: 'people',
    label: 'People',
    options: [
      { value: '', label: 'Select' },
      { value: '1', label: 'Robert Allan' },
      { value: '2', label: 'Charles' },
      { value: '3', label: 'Adrian' }
    ]
  },
  {
    id: 'modified',
    label: 'Modified',
    options: [
      { value: '', label: 'Select' },
      { value: 'today', label: 'Today' },
      { value: 'last7Days', label: 'Last 7 Days' },
      { value: 'last157Days', label: 'Last 15 Days' },
      { value: 'last30Days', label: 'Last 30 Days' },
      { value: 'chooseATimePeriod', label: 'Choose a time period' }
    ]
  },
  {
    id: 'location',
    label: 'Location',
    options: [
      { value: '', label: 'Select' },
      { value: '1', label: 'Anywhere is drive' },
      { value: '2', label: 'My Drive' },
      { value: '3', label: 'Shared with me' },
      { value: '4', label: 'Starred' },
      { value: '5', label: 'Trashed' }
    ]
  }
];

/** Gold `mixins/file-manager/FileFilterModal.pug`. */
const FileFilterModal = ({ show, onHide }: FileFilterModalProps) => (
  <Dialog open={show} onOpenChange={open => !open && onHide()}>
    <Dialog.Content centered className="border border-subtle">
      <form id="fileFilterForm" autoComplete="off">
        <Dialog.Header className="p-6 pb-0 border-0 flex-between-center">
          <Dialog.Title asChild>
            <h4>Filter</h4>
          </Dialog.Title>
          <Button
            className="p-1 text-danger"
            aria-label="Close"
            onClick={onHide}
          >
            <FontAwesomeIcon icon={faTimes} className="text-md" />
          </Button>
        </Dialog.Header>
        <Dialog.Body className="p-6">
          {groups.map((group, index) => (
            <div
              key={group.id}
              className={index === groups.length - 1 ? undefined : 'mb-4'}
            >
              <label
                className="font-bold mb-2 text-highlight"
                htmlFor={group.id}
              >
                {group.label}
              </label>
              <Select id={group.id} defaultValue="">
                {group.options.map(option => (
                  <option key={option.label} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </div>
          ))}
        </Dialog.Body>
        <Dialog.Footer className="flex justify-end items-center p-6 pt-0 border-0">
          <Button variant="link" className="text-muted px-4 mx-0">
            <FontAwesomeIcon icon={faArrowsRotate} className="me-2" />
            Reset
          </Button>
          <Button
            variant="primary"
            size="sm"
            className="px-8 mx-0"
            type="submit"
          >
            Apply
          </Button>
        </Dialog.Footer>
      </form>
    </Dialog.Content>
  </Dialog>
);

export default FileFilterModal;
