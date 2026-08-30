import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import PhoenixOffcanvas from 'components/base/PhoenixOffcanvas';
import {
  ToDoItem,
  attachments,
  subTasks
} from 'data/project-management/todoListData';
import SubTask from './SubTask';
import classNames from 'classnames';
import FileListItem from './FileListItem';
import { Form } from 'react-bootstrap';
import DatePicker from 'components/base/DatePicker';
import { UilBellSchool, UilTagAlt } from '@iconscout/react-unicons';
import ReactSelect from 'components/base/ReactSelect';
import { faPen, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';

interface TodoItemDetailsOffcanvasProps {
  handleClose: () => void;
  item: ToDoItem | null;
}

const TodoItemDetailsOffcanvas = ({
  handleClose,
  item
}: TodoItemDetailsOffcanvasProps) => {
  return (
    <PhoenixOffcanvas
      open={!!item}
      onHide={handleClose}
      className="todolist-offcanvas"
      placement="end"
      fixed
      backdropClassName="opacity-0"
    >
      {item && (
        <>
          <div className="p-8 md:p-10">
            <div className="flex flex-between-center mb-6 gap-4">
              <h2 className="font-bold text-xl mb-0 text-highlight line-clamp-1">
                {item.task}
              </h2>
              <Button
                variant="phoenix-secondary"
                onClick={handleClose}
                className="btn-icon shrink-0"
              >
                <FontAwesomeIcon icon={faXmark} />
              </Button>
            </div>
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <h4 className="text-default me-4">Description</h4>
                <Button variant="link" className="no-underline p-0">
                  <FontAwesomeIcon icon={faPen} />
                </Button>
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
            <div className="mb-10">
              <h4 className="mb-4">Subtasks</h4>
              <div className="mb-4">
                {subTasks.map((subTask, index) => (
                  <SubTask
                    key={subTask.task}
                    task={subTask}
                    className={classNames({
                      'border-t border-subtle': index === 0
                    })}
                  />
                ))}
              </div>
              <Button
                variant="link"
                className="font-bold text-md no-underline p-0"
              >
                <FontAwesomeIcon icon={faPlus} className="me-1" />
                Add subtask
              </Button>
            </div>

            <div className="mb-10">
              <h4 className="mb-4">Files</h4>
              <div className="-mx-8 md:-mx-10 mb-4">
                {attachments.map((attachment, index) => (
                  <FileListItem
                    key={attachment.name}
                    attachment={attachment}
                    className={classNames('px-14 md:px-10', {
                      'border-t border-subtle': index === 0
                    })}
                  />
                ))}
              </div>
              <div className="">
                <Button
                  variant="link"
                  className="no-underline p-0"
                  startIcon={<FontAwesomeIcon icon={faPlus} className="me-1" />}
                >
                  Add file(s)
                </Button>
              </div>
            </div>
            <div className="mb-6">
              <h4 className="mb-6 text-emphasis">Others Information</h4>
              <h5 className="text-highlight mb-2">Status</h5>
              <Form.Select className="mb-6">
                <option>Select</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
                <option value="closed">Closed</option>
              </Form.Select>
              <h5 className="text-highlight mb-2">Due Date</h5>
              <div className="mb-6">
                <DatePicker placeholder="Set the due date" />
              </div>
              <h5 className="text-highlight mb-2">Reminder</h5>
              <div className="mb-6">
                <DatePicker
                  placeholder="Set the due date"
                  options={{
                    noCalendar: true,
                    enableTime: true,
                    dateFormat: 'H:i'
                  }}
                  icon={
                    <UilBellSchool
                      fill='currentColor'
                      className="flatpickr-icon text-subtle"
                      size={16}
                    />
                  }
                />
              </div>
              <h5 className="text-highlight mb-2">Tag</h5>
              <ReactSelect
                menuPlacement="top"
                options={[
                  {
                    value: 'massachusetts_institute_of_technology',
                    label: 'Massachusetts Institute of Technology'
                  },
                  {
                    value: 'university_of_chicago',
                    label: 'University of Chicago'
                  },
                  {
                    value: 'gsas_open_labs_at_harvard',
                    label: 'GSAS Open Labs At Harvard'
                  },
                  {
                    value: 'california_institute_of_technology',
                    label: 'California Institute of Technology'
                  }
                ]}
                className="mb-10"
                isMulti
                placeholder="Select organizer"
                icon={
                  <UilTagAlt
                    fill='currentColor'
                    className="react-select-icon text-subtle"
                    size={16}
                  />
                }
              />

              <div className="text-end">
                <Button variant="phoenix-danger">Delete Task</Button>
              </div>
            </div>
          </div>
        </>
      )}
    </PhoenixOffcanvas>
  );
};

export default TodoItemDetailsOffcanvas;
