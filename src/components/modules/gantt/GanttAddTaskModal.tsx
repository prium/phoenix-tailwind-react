import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dialog, Input } from '@hummingbirdui/react';
import { UilCalendarAlt } from '@iconscout/react-unicons';
import Button from 'components/base/Button';
import DatePicker from 'components/base/DatePicker';
import { gantt } from 'dhtmlx-gantt';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

/** `+AddNewTaskModal` (#ganttAddTaskModal) in mixins/gantt-chart/GanttChart.pug */
const GanttAddTaskModal = ({
  show,
  setShow
}: {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}) => {
  const defaultStartDate = new Date(2022, 2, 2); // gold defaultDate: "Mar 2, 2022"

  const [taskName, setTaskName] = useState('');
  const [taskStart, setTaskStart] = useState<Date>(defaultStartDate);
  const [parentTask, setParentTask] = useState<string | null>(null);
  const [taskDuration, setTaskDuration] = useState<number | ''>('');

  const resetForm = () => {
    setTaskName('');
    setTaskStart(defaultStartDate);
    setTaskDuration('');
    setParentTask(null);
  };

  const handleCreateTask = () => {
    const duration = Number(taskDuration) || 2;
    if (taskName && taskStart instanceof Date && !isNaN(taskStart.getTime())) {
      const taskEnd = gantt.calculateEndDate({
        start_date: taskStart,
        duration
      });

      gantt.addTask({
        text: taskName,
        start_date: taskStart,
        end_date: taskEnd,
        duration,
        parent: parentTask
      });
      setShow(false);
      resetForm();
    }
  };

  useEffect(() => {
    const observer = new MutationObserver(() => {
      document.querySelectorAll('[data-gantt-add-subtask]').forEach(item => {
        item.addEventListener('click', () => {
          const parentId = item.getAttribute('id');
          setParentTask(parentId);

          gantt.createTask({
            text: '',
            duration: 3,
            parent: parentId
          });
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const id = gantt.attachEvent('onTaskCreated', task => {
      setShow(true);
      setTaskName(task.text ?? '');
      if (
        task.start_date instanceof Date &&
        !isNaN(task.start_date.getTime())
      ) {
        setTaskStart(task.start_date);
      } else {
        setTaskStart(defaultStartDate);
      }
      return false;
    });

    return () => gantt.detachEvent(id);
  }, []);

  return (
    <Dialog open={show} onOpenChange={open => !open && setShow(false)}>
      <Dialog.Content
        centered
        className="bg-subtle"
        aria-describedby={undefined}
      >
        {/* the gold heading is a plain h3, not `.modal-title` (the phoenix skin
            makes that text-lg/text-muted), so Radix gets a sr-only title */}
        <Dialog.Title className="sr-only">Create New Task</Dialog.Title>
        <div className="modal-header p-6 pb-4 items-start border-0">
          <h3 className="mb-0 text-highlight" id="addTaskModalLabel">
            Create New Task
          </h3>
          <button
            type="button"
            aria-label="Close"
            className="btn btn-close text-sm"
            onClick={() => setShow(false)}
          />
        </div>
        <div className="modal-body px-6">
          <form id="addTaskForm">
            <div className="mb-6">
              <label
                className="font-bold text-highlight mb-2"
                htmlFor="createTaskName"
              >
                Task Name
              </label>
              <Input
                id="createTaskName"
                type="text"
                placeholder="Enter task name"
                value={taskName}
                onChange={e => setTaskName(e.target.value)}
              />
            </div>
            <div className="row g-4">
              <div className="col-7 sm:col-8">
                <label
                  className="font-bold text-highlight"
                  htmlFor="createTaskStartDate"
                >
                  Start Date
                </label>
                <DatePicker
                  hideIcon
                  noContainer
                  options={{ defaultDate: taskStart }}
                  onChange={date => {
                    const next = Array.isArray(date) ? date[0] : date;
                    setTaskStart(
                      next instanceof Date && !isNaN(next.getTime())
                        ? next
                        : defaultStartDate
                    );
                  }}
                  render={(_, ref) => (
                    <div className="input-group-icon mt-2">
                      <UilCalendarAlt
                        fill="currentColor"
                        size={16}
                        className="form-control-icon-start text-default"
                      />
                      <input
                        id="createTaskStartDate"
                        type="text"
                        className="form-control ps-10 datetimepicker"
                        ref={ref}
                      />
                    </div>
                  )}
                />
              </div>

              <div className="col-5 sm:col-4">
                <label
                  className="font-bold text-highlight"
                  htmlFor="createTaskDuration"
                >
                  Time Duration
                </label>
                <div className="input-group-icon mt-2">
                  <FontAwesomeIcon
                    icon={faClock}
                    className="form-control-icon-start text-default text-md"
                  />
                  <Input
                    id="createTaskDuration"
                    type="number"
                    placeholder="0 days"
                    value={taskDuration}
                    onChange={e => {
                      const val = parseInt(e.target.value);
                      setTaskDuration(isNaN(val) ? '' : val);
                    }}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer border-0 px-6 pb-4 gap-2">
          <Button variant="phoenix-secondary" onClick={() => setShow(false)}>
            Cancel{' '}
          </Button>
          <Button
            id="createNewTask"
            variant="primary"
            onClick={handleCreateTask}
          >
            Create New Task{' '}
          </Button>
        </div>
      </Dialog.Content>
    </Dialog>
  );
};

export default GanttAddTaskModal;
