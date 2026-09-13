import { Dialog, Input } from '@hummingbirdui/react';
import Button from 'components/base/Button';

interface AddFolderModalProps {
  show: boolean;
  onHide: () => void;
}

/** Gold `mixins/file-manager/AddFolderModal.pug`. */
const AddFolderModal = ({ show, onHide }: AddFolderModalProps) => (
  <Dialog open={show} onOpenChange={open => !open && onHide()}>
    <Dialog.Content centered className="border border-subtle">
      <form id="addFolderForm" autoComplete="off">
        <Dialog.Header className="p-6 pb-0 border-0 flex-between-center">
          <Dialog.Title asChild>
            <h4>Add new folder</h4>
          </Dialog.Title>
        </Dialog.Header>
        <Dialog.Body className="p-6">
          <Input placeholder="Folder name" id="addFolder" type="text" />
        </Dialog.Body>
        <Dialog.Footer className="flex justify-end items-center p-6 pt-0 border-0">
          <Button
            variant="link"
            className="text-danger px-4 mx-0"
            aria-label="Close"
            onClick={onHide}
          >
            Cancel
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

export default AddFolderModal;
