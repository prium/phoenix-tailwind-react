import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Dialog, Row } from '@hummingbirdui/react';
import { ToDoItem } from 'data/project-management/todoListData';
import { Files } from './FileListItem';
import { SubTasks } from './SubTask';
import OthersInformation from './OthersInformation';
import { faPen, faXmark } from '@fortawesome/free-solid-svg-icons';

interface TodoItemDetailsModalProps {
  handleClose: () => void;
  item: ToDoItem | null;
}

/** `+ToDoModal` in mixins/dashboard/project-management/ToDo.pug */
const TodoItemDetailsModal = ({
  handleClose,
  item
}: TodoItemDetailsModalProps) => {
  return (
    <Dialog open={!!item} onOpenChange={open => !open && handleClose()}>
      <Dialog.Content
        size="xl"
        className="bg-default overflow-hidden"
        aria-describedby={undefined}
      >
        <Dialog.Header className="justify-between px-10 py-8 sm:pe-8 md:px-10 dark:bg-soft">
          <Dialog.Title className="sr-only">{item?.task}</Dialog.Title>
          <h3 className="text-highlight font-bolder mb-0">{item?.task}</h3>
          <button
            type="button"
            className="btn btn-phoenix-secondary btn-square btn-lg w-12 h-12 shrink-0"
            aria-label="Close"
            onClick={handleClose}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </Dialog.Header>
        <Dialog.Body className="bg-subtle px-10 py-0">
          <Row className="gx-28">
            <Col xs={12} lg={7} className="lg:border-e">
              <div className="py-10">
                <div className="mb-12">
                  <div className="flex items-center mb-4">
                    <h4 className="mb-1 text-default me-4">Description</h4>
                    <a href="#!" className="btn btn-link no-underline p-0 mb-1">
                      <FontAwesomeIcon icon={faPen} />
                    </a>
                  </div>
                  <p className="text-highlight mb-0">
                    The female circus horse-rider is a recurring subject in
                    Chagall’s work. In 1926 the art dealer Ambroise Vollard
                    invited Chagall to make a project based on the circus. They
                    visited Paris’s historic Cirque d’Hiver Bouglione together;
                    Vollard lent Chagall his private box seats. Chagall
                    completed 19 gouaches Chagall’s work. In 1926 the art dealer
                    Ambroise Vollard invited Chagall to make a project based on
                    the circus.
                  </p>
                </div>
                <div className="mb-12">
                  <SubTasks />
                </div>
                <div className="mb-4">
                  <Files
                    itemPaddingClass="px-0 pt-6 pb-4"
                    showAddBtn
                    showAddBtnClass="mt-4"
                    imgMaxWidth={230}
                  />
                </div>
              </div>
            </Col>
            <Col xs={12} lg={5}>
              <div className="py-10">
                <h4 className="mb-6 text-emphasis">Others Information</h4>
                <OthersInformation />
              </div>
            </Col>
          </Row>
        </Dialog.Body>
      </Dialog.Content>
    </Dialog>
  );
};

export default TodoItemDetailsModal;
