import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Drawer } from '@hummingbirdui/react';
import { ToDoItem } from 'data/project-management/todoListData';
import { useAppContext } from 'providers/AppProvider';
import { SubTasks } from './SubTask';
import { Files } from './FileListItem';
import OthersInformation from './OthersInformation';
import { faPen, faXmark } from '@fortawesome/free-solid-svg-icons';

interface TodoItemDetailsOffcanvasProps {
  handleClose: () => void;
  item: ToDoItem | null;
  index?: number;
}

/** `+ToDoOffcanvas(title, index)` in mixins/project-management/ToDoList.pug */
const TodoItemDetailsOffcanvas = ({
  handleClose,
  item,
  index = 0
}: TodoItemDetailsOffcanvasProps) => {
  const {
    config: { isRTL }
  } = useAppContext();

  return (
    <Drawer
      direction={isRTL ? 'left' : 'right'}
      open={!!item}
      onOpenChange={open => !open && handleClose()}
    >
      <Drawer.Content
        overlay={false}
        className="content-offcanvas offcanvas-backdrop-transparent border-s shadow-none bg-subtle"
        data-todo-content-offcanvas="data-todo-content-offcanvas"
        aria-describedby={undefined}
      >
        <Drawer.Body className="p-0">
          <div className="p-8 md:p-10">
            <div className="flex justify-between items-start gap-8 mb-6">
              <Drawer.Title className="sr-only">{item?.task}</Drawer.Title>
              <h2 className="font-bold text-xl mb-0 text-highlight">
                {item?.task}
              </h2>
              <button
                type="button"
                className="btn btn-phoenix-secondary btn-square btn-sm h-8 w-8 px-2"
                aria-label="Close"
                onClick={handleClose}
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <h4 className="text-default me-4">Description</h4>
                <a href="#!" className="btn btn-link no-underline p-0">
                  <FontAwesomeIcon icon={faPen} />
                </a>
              </div>
              <p className="text-highlight mb-0">
                The female circus horse-rider is a recurring subject in
                Chagall’s work. In 1926 the art dealer Ambroise Vollard invited
                Chagall to make a project based on the circus. They visited
                Paris’s historic Cirque d’Hiver Bouglione together; Vollard lent
                Chagall his private box seats. Chagall completed 19 gouaches
                Chagall’s work. In 1926 the art dealer Ambroise Vollard invited
                Chagall to make a project based on the circus.
              </p>
            </div>
            <SubTasks index={index} />
          </div>

          <div className="mb-10">
            <Files
              itemPaddingClass="px-8 md:px-10 py-6"
              titleClass="px-8 md:px-10"
              showAddBtn
              showAddBtnClass="px-8 md:px-10 my-4"
              imgMaxWidth={270}
              index={index}
            />
          </div>

          <div className="px-8 md:px-10">
            <h4 className="mb-6 text-emphasis">Others Information</h4>
            <OthersInformation menuPlacement="top" />
          </div>
        </Drawer.Body>
      </Drawer.Content>
    </Drawer>
  );
};

export default TodoItemDetailsOffcanvas;
