import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Dialog,
  FloatingLabel,
  Input,
  Select,
  Textarea
} from '@hummingbirdui/react';
import Dropzone from 'components/base/Dropzone';
import imageIcon from 'assets/img/icons/image-icon.png';

interface KanbanEditTaskModalProps {
  show: boolean;
  handleClose: () => void;
}

/** `+KanbanAddTask` in mixins/kanban/kanban/KanbanModal.pug — gold's 'BORAD TYPE' typo kept */
const KanbanEditTaskModal = ({
  show,
  handleClose
}: KanbanEditTaskModalProps) => {
  return (
    <Dialog open={show} onOpenChange={open => !open && handleClose()}>
      <Dialog.Content
        centered
        size="xl"
        fullscreen="sm-down"
        aria-describedby={undefined}
      >
        <Dialog.Title className="sr-only">Edit task</Dialog.Title>
        <div className="modal-body">
          <div className="row gx-4 gy-6">
            <div className="sm:col-6 md:col-12">
              <FloatingLabel label="Title" htmlFor="kanbanTaskTitle">
                <Input
                  id="kanbanTaskTitle"
                  type="text"
                  placeholder="title"
                  defaultValue=""
                />
              </FloatingLabel>
            </div>
            <div className="col-12 gy-6">
              <FloatingLabel
                label="ADD A DESCRIPTION"
                htmlFor="floatingProjectDescription"
              >
                <Textarea
                  id="floatingProjectDescription"
                  className="h-32"
                  placeholder="Leave a comment here"
                />
              </FloatingLabel>
            </div>
            <div className="col-12 gy-6">
              <Dropzone
                className="bg-transparent p-0"
                accept={{
                  'image/*': ['.png', '.gif', '.jpeg', '.jpg']
                }}
              >
                <div className="dz-message py-4!">
                  <div className="dz-message-text text-center text-muted">
                    <img src={imageIcon} className="mb-2 w-6" alt="" />
                    <br />
                    Add cover image
                  </div>
                </div>
              </Dropzone>
            </div>
            <div className="sm:col-4">
              <FloatingLabel label="BORAD TYPE" htmlFor="TaskType">
                <Select id="TaskType" defaultValue="Phoenix">
                  <option>Phoenix</option>
                  <option value="2">Boreas</option>
                  <option value="3">Erebus</option>
                </Select>
              </FloatingLabel>
            </div>
            <div className="sm:col-4">
              <FloatingLabel label="COLUMN" htmlFor="KanbanColumnType">
                <Select id="KanbanColumnType" defaultValue="Unassigned">
                  <option>Unassigned</option>
                  <option value="2">To do</option>
                  <option value="3">Doing</option>
                  <option value="4">Review</option>
                  <option value="5">Release</option>
                </Select>
              </FloatingLabel>
            </div>
            <div className="sm:col-4">
              <FloatingLabel label="PLACE" htmlFor="KanbanPlaceNumber">
                <Select id="KanbanPlaceNumber" defaultValue="01">
                  <option>01</option>
                  <option value="2">02</option>
                  <option value="3">03</option>
                </Select>
              </FloatingLabel>
            </div>
            <div className="sm:col-12">
              <FloatingLabel label="ASSIGNED TO" htmlFor="KanbanAssignedMember">
                <Select id="KanbanAssignedMember" defaultValue="1">
                  <option value="1">Unassigned (Default)</option>
                  <option value="2">Richard Dawkins</option>
                  <option value="3">Ashley Garrett</option>
                  <option value="4">Barbara Lucas</option>
                  <option value="5">Woodrow Burton</option>
                </Select>
              </FloatingLabel>
            </div>
            <div className="sm:col-12">
              <FloatingLabel label="PRIORITY" htmlFor="KanbanPriorityLavel">
                <Select id="KanbanPriorityLavel" defaultValue="Low (Default)">
                  <option>Low (Default)</option>
                  <option value="2">High</option>
                  <option value="3">Medium</option>
                  <option value="4">Urgent</option>
                </Select>
              </FloatingLabel>
            </div>
            <div className="sm:col-12">
              <FloatingLabel label="CATEGORY" htmlFor="KanbanCategoryType">
                <Select
                  id="KanbanCategoryType"
                  defaultValue="UNASSIGNED (Default)"
                >
                  <option>UNASSIGNED (Default)</option>
                  <option value="2">Feature</option>
                  <option value="3">Bug</option>
                  <option value="4">Issue</option>
                </Select>
              </FloatingLabel>
            </div>
          </div>
        </div>
        <div className="modal-footer justify-between">
          <button className="btn p-1" type="button" onClick={handleClose}>
            <FontAwesomeIcon
              icon={faTimes}
              transform="up-1"
              className="text-sm me-1"
            />
            Close
          </button>
          <button
            className="btn btn-primary px-10"
            type="button"
            onClick={handleClose}
          >
            Done
          </button>
        </div>
      </Dialog.Content>
    </Dialog>
  );
};

export default KanbanEditTaskModal;
