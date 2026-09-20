import {
  faCheck,
  faClock,
  faLink,
  faListCheck,
  faPaperclip,
  faPencil,
  faPlus,
  faThumbsUp,
  faXmark
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Drawer, Input, Select, Textarea } from '@hummingbirdui/react';
import { UilCalendarAlt } from '@iconscout/react-unicons';
import Button from 'components/base/Button';
import DatePicker from 'components/base/DatePicker';
import Dropzone from 'components/base/Dropzone';
import Unicon from 'components/base/Unicon';
import AvatarDropdown from 'components/common/AvatarDropdown';
import { members } from 'data/users';
import { gantt, Task } from 'dhtmlx-gantt';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import GanttConfirmDeleteModal from './GanttConfirmDeleteModal';
import { useAppContext } from 'providers/AppProvider';

const subtasks = [
  { id: 'subtask1', label: 'Study Dragons' },
  { id: 'subtask2', label: 'Procrastinate a bit' },
  { id: 'subtask3', label: 'Staring at the notebook for 5 mins', isLast: true }
];

/** `+SubTasks` in mixins/gantt-chart/GanttChart.pug */
const Subtasks = () => (
  <>
    <h5 className="mb-4 mt-6">Subtasks</h5>

    {subtasks.map(({ id, label, isLast }) => (
      <div
        key={id}
        className={`flex flex-between-center hover-actions-trigger py-4 border-t${
          isLast ? ' border-b mb-4' : ''
        }`}
      >
        <div className="form-check mb-1 md:mb-0 flex items-center min-h-auto">
          <input
            type="checkbox"
            id={id}
            className="subtask-checkbox form-check-input form-check-line-through mt-0 me-4"
          />
          <label
            className="form-check-label mb-0 text-base leading-none"
            htmlFor={id}
          >
            {label}
          </label>
        </div>
        <div className="hover-actions right-0">
          <button
            type="button"
            className="btn btn-sm text-sm text-subtle px-0 me-4"
          >
            <FontAwesomeIcon icon={faPencil} />
          </button>
          <button type="button" className="btn btn-sm text-subtle px-0">
            <FontAwesomeIcon icon={faXmark} className="text-base" />
          </button>
        </div>
      </div>
    ))}

    <a href="#!" className="font-bold text-md">
      <FontAwesomeIcon icon={faPlus} className="me-1" />
      Add subtask
    </a>
  </>
);

/** `span.uil.uil-calendar-alt.flatpickr-icon.text-default` in the gold offcanvas */
const flatpickrIcon = (
  <Unicon
    icon={UilCalendarAlt}
    lineBox
    wrapperClassName="flatpickr-icon text-default"
    fill="currentColor"
    size={16}
  />
);

/** `+EditTaskOffcanvas` (#taskDetailsOffcanvas) in mixins/gantt-chart/GanttChart.pug */
const GanttOffcanvas = () => {
  const {
    config: { isRTL }
  } = useAppContext();
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [task, setTask] = useState<Task>();
  const [taskTitle, setTaskTitle] = useState('title');
  const [taskStart, setTaskStart] = useState<Date | undefined>();
  const [taskEnd, setTaskEnd] = useState<Date | undefined>();
  const [taskDuration, setTaskDuration] = useState<number | undefined>();

  const handleClose = () => setShow(false);

  const handleTaskUpdate = () => {
    if (task) {
      task.text = taskTitle;
      task.start_date = taskStart;
      task.duration = taskDuration;

      const endDate = new Date(taskStart || '');
      endDate.setDate(endDate.getDate() + Number(taskDuration));

      task.end_date = endDate;
      gantt.updateTask(task.id, task);
      setShow(false);
    }
  };

  const handleTaskDelete = () => {
    if (task) {
      gantt.deleteTask(task.id);
    }
    setShowModal(false);
  };

  useEffect(() => {
    const id = gantt.attachEvent('onTaskDblClick', taskId => {
      const clicked = gantt.getTask(taskId);
      if (clicked) {
        setTask(clicked);
        setTaskTitle(clicked.text);
        setTaskStart(clicked.start_date);
        setTaskEnd(clicked.end_date);
        setTaskDuration(clicked.duration);
      }
      setShow(true);
      return false; // Prevent default lightbox
    });
    return () => gantt.detachEvent(id);
  }, []);

  return (
    <>
      <Drawer
        direction={isRTL ? 'left' : 'right'}
        open={show}
        onOpenChange={setShow}
      >
        {/* the gold sizes `.gantt-offcanvas .offcanvas`; the drawer content is
            portaled out of that wrapper, so the width lives on the content */}
        <Drawer.Content
          className="w-full max-w-157.5"
          aria-describedby={undefined}
        >
          <Drawer.Title className="sr-only">Task details</Drawer.Title>
          <Drawer.Header className="border-b">
            <div className="flex justify-between w-full">
              <Button
                variant="phoenix-secondary"
                className="me-1 mb-1 text-success"
              >
                <FontAwesomeIcon
                  icon={faCheck}
                  className="me-2"
                  transform="shrink-3"
                />
                Mark Complete
              </Button>

              <div className="flex gap-2">
                <Button variant="phoenix-secondary" className="btn-square px-2">
                  <FontAwesomeIcon icon={faThumbsUp} />
                </Button>
                <Button variant="phoenix-secondary" className="btn-square px-2">
                  <FontAwesomeIcon icon={faPaperclip} />
                </Button>
                <Button variant="phoenix-secondary" className="btn-square px-2">
                  <FontAwesomeIcon icon={faListCheck} />
                </Button>
                <Button variant="phoenix-secondary" className="btn-square px-2">
                  <FontAwesomeIcon icon={faLink} />
                </Button>
                <Button
                  variant="phoenix-secondary"
                  className="btn-square px-2"
                  aria-label="Close"
                  onClick={handleClose}
                >
                  <FontAwesomeIcon icon={faXmark} />
                </Button>
              </div>
            </div>
          </Drawer.Header>

          <Drawer.Body>
            <Input
              id="taskDetailsName"
              type="text"
              className="mb-4 text-base"
              value={taskTitle}
              onChange={e => setTaskTitle(e.target.value)}
            />
            <h5 className="mb-4">Assignee</h5>
            <div className="flex">
              {members.slice(0, 5).map(member => (
                <AvatarDropdown
                  key={member.id}
                  user={member}
                  size="m"
                  dropdownClass="dropdown-toggle dropdown-caret-none"
                  className="me-2 border border-subtle-subtle"
                />
              ))}
              <Link to="#!" className="no-underline text-muted">
                <div className="circle-btn bg-muted mx-auto">
                  <FontAwesomeIcon icon={faPlus} transform="shrink-2" />
                </div>
              </Link>
            </div>

            <form id="taskForm">
              <div className="row mt-4 gy-4">
                <div className="col-6 sm:col-4">
                  <label
                    className="font-bold text-highlight mb-2"
                    htmlFor="taskDetailsStartDate"
                  >
                    Start Date
                  </label>
                  <DatePicker
                    id="taskDetailsStartDate"
                    icon={flatpickrIcon}
                    options={{ defaultDate: taskStart }}
                    onChange={date =>
                      setTaskStart(Array.isArray(date) ? date[0] : date)
                    }
                  />
                </div>

                <div className="col-6 sm:col-4">
                  <label
                    className="font-bold text-highlight mb-2"
                    htmlFor="taskDetailsEndDate"
                  >
                    End Date
                  </label>
                  <DatePicker
                    id="taskDetailsEndDate"
                    disabled
                    icon={flatpickrIcon}
                    options={{ defaultDate: taskEnd }}
                    onChange={date =>
                      setTaskEnd(Array.isArray(date) ? date[0] : date)
                    }
                  />
                </div>

                <div className="col-6 sm:col-4">
                  <label
                    className="font-bold text-highlight mb-2"
                    htmlFor="taskDetailsDuration"
                  >
                    Duration{' '}
                    <span className="text-soft font-normal">(Days)</span>
                  </label>
                  <div className="form-icon-container">
                    <Input
                      id="taskDetailsDuration"
                      type="number"
                      placeholder="0 days"
                      className="form-icon-input ps-10"
                      value={taskDuration ?? ''}
                      onChange={e =>
                        setTaskDuration(
                          e.target.value ? parseInt(e.target.value) : undefined
                        )
                      }
                    />
                    <FontAwesomeIcon
                      icon={faClock}
                      className="text-default text-md form-icon"
                    />
                  </div>
                </div>

                <div className="col-6 sm:col-4">
                  <label
                    className="font-bold text-highlight mb-2"
                    htmlFor="selectProject"
                  >
                    Select Project
                  </label>
                  <Select
                    id="selectProject"
                    aria-label="Default select example"
                  >
                    <option>Our new projects</option>
                    <option value="1">Phoenix</option>
                    <option value="2">Falcon</option>
                    <option value="3">Sparrow</option>
                  </Select>
                </div>

                <div className="col-6 sm:col-4">
                  <label
                    className="font-bold text-highlight mb-2"
                    htmlFor="priority"
                  >
                    Priority
                  </label>
                  <Select id="priority" aria-label="Default select example">
                    <option>Urgent</option>
                    <option value="1">High</option>
                    <option value="2">Medium</option>
                    <option value="3">Low</option>
                  </Select>
                </div>

                <div className="col-6 sm:col-4">
                  <label
                    className="font-bold text-highlight mb-2"
                    htmlFor="onTrack"
                  >
                    Status
                  </label>
                  <Select id="onTrack" aria-label="Default select example">
                    <option>On track</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Select>
                </div>
              </div>

              <div className="card mt-6">
                <div className="card-body p-4">
                  <div className="flex justify-between items-center">
                    <h4 className="mb-0">Dependency</h4>
                    <Button variant="link" className="pe-0">
                      Add new
                    </Button>
                  </div>
                  <div className="bg-default p-4 mt-4 rounded-md">
                    <div className="row gy-4">
                      <div className="sm:col-8">
                        <h5 className="mb-4">Dependency type</h5>
                        <div className="sm:flex gap-4">
                          <Select
                            id="Dependency1"
                            aria-label="Default select example"
                          >
                            <option>Blocked by</option>
                            <option value="1">Blocking</option>
                            <option value="2">Paused</option>
                          </Select>
                          <Select
                            id="Dependency2div"
                            aria-label="Default select example"
                            className="mt-2 sm:mt-0"
                          >
                            <option>Start to start</option>
                            <option value="1">Finish to Finish</option>
                            <option value="2">Start to Finish</option>
                            <option value="3">Finish to Start</option>
                          </Select>
                        </div>
                      </div>
                      <div className="sm:col-4">
                        <h5 className="mb-4">Select task</h5>
                        <div className="sm:flex">
                          <Select
                            id="selectTask1"
                            aria-label="Default select example"
                          >
                            <option>Select Task</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Select>
                        </div>
                      </div>
                    </div>
                    <hr className="my-6" />
                    <div className="row gy-4">
                      <div className="sm:col-8">
                        <h5 className="mb-4">Dependency type</h5>
                        <div className="sm:flex gap-4">
                          <Select
                            id="dependency3"
                            aria-label="Default select example"
                          >
                            <option>Blocking</option>
                            <option value="1">Blocked by</option>
                            <option value="2">Paused</option>
                          </Select>
                          <Select
                            id="dependency4div"
                            aria-label="Default select example"
                            className="mt-2 sm:mt-0"
                          >
                            <option>Start to start</option>
                            <option value="1">Finish to Finish</option>
                            <option value="2">Start to Finish</option>
                            <option value="3">Finish to Start</option>
                          </Select>
                        </div>
                      </div>
                      <div className="sm:col-4">
                        <h5 className="mb-4">Select task</h5>
                        <div className="flex">
                          <Select
                            id="selectTask6"
                            aria-label="Default select example"
                          >
                            <option>Select task</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <label
                className="font-bold text-highlight mb-2 mt-6"
                htmlFor="EditTaskNotes"
              >
                Description
              </label>
              <Textarea
                id="EditTaskNotes"
                className="mb-4"
                defaultValue="Complete the project documentation by outlining key processes, roles, and responsibilities to ensure smooth and efficient workflow execution."
              />

              <Subtasks />

              {/* the gold's `.fallback > input[type=file]` and its `.dz-preview`
                  block are dropzone.js scaffolding (the escape hatch it deletes
                  and the preview template it clones) — neither renders in the
                  gold, and react-dropzone owns the input here */}
              <Dropzone
                accept={{ 'image/*': ['.png', '.gif', '.jpeg', '.jpg'] }}
                multiple
                noPreview
                className="p-0 mt-6"
              >
                <div
                  className="dz-message text-subtle/85 flex flex-center size-35"
                  data-dz-message
                >
                  <FontAwesomeIcon icon={faPlus} className="text-3xl" />
                </div>
              </Dropzone>

              <div className="flex border-t pt-6 gap-4 mt-6">
                <Button
                  id="ganttDeleteTask"
                  variant="phoenix-danger"
                  className="ms-auto"
                  onClick={() => {
                    setShow(false);
                    setTimeout(() => setShowModal(true), 350);
                  }}
                >
                  Delete Task{' '}
                </Button>
                <Button
                  id="ganttUpdateTask"
                  variant="phoenix-primary"
                  onClick={handleTaskUpdate}
                >
                  Save Task{' '}
                </Button>
              </div>
            </form>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer>

      <GanttConfirmDeleteModal
        show={showModal}
        onHide={() => setShowModal(false)}
        labelId="deleteTaskModal"
        title="Delete Task"
        body="Are you sure you want to delete this task permanently? Once deleted, it cannot be recovered or undone."
        confirmId="ganttConfirmDeleteTask"
        confirmLabel="Delete task"
        onConfirm={handleTaskDelete}
      />
    </>
  );
};

export default GanttOffcanvas;
