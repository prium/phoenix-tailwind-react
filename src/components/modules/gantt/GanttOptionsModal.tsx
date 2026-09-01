import { Dialog, Select } from '@hummingbirdui/react';
import { UilCalendarAlt } from '@iconscout/react-unicons';
import Button from 'components/base/Button';
import DatePicker from 'components/base/DatePicker';
import { Dispatch, Fragment, SetStateAction } from 'react';

const dependencies = [
  {
    title: 'Keep the buffer intact.',
    description: 'Preserve the intervals of time between related tasks.'
  },
  {
    title: 'Use the buffer.',
    description:
      'Unless there is a problem, use the amount of time that is required between dependent tasks.'
  },
  {
    title: 'None',
    description:
      'In the event of a conflict, disregard the interval between dependent tasks.'
  }
];

/** `+OptionsModal` (#ganttOptionsModal) in mixins/gantt-chart/GanttChart.pug */
const GanttOptionsModal = ({
  show,
  setShow
}: {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}) => {
  const handleClose = () => setShow(false);

  return (
    <Dialog open={show} onOpenChange={open => !open && handleClose()}>
      <Dialog.Content
        centered
        dialogClassName="max-w-157.5"
        aria-describedby={undefined}
      >
        {/* the gold's h3#OptionsModal is deliberately empty — keep it verbatim
            and give Radix a sr-only title instead */}
        <Dialog.Title className="sr-only">Options</Dialog.Title>
        <div className="modal-header p-6 pb-4 items-start">
          <h3 className="mb-2 text-highlight" id="OptionsModal" />
          <button
            type="button"
            aria-label="Close"
            className="btn btn-close bg-size-[12.8px] p-1.5"
            onClick={handleClose}
          />
        </div>

        <div className="modal-body p-6">
          <form id="ganttOptionsForm">
            <div className="flex items-center justify-between">
              <label
                className="font-bold text-highlight"
                htmlFor="taskOptionSelect"
              >
                Color task by
              </label>
              <Button variant="link" className="pe-0">
                Add new
              </Button>
            </div>
            <Select id="taskOptionSelect" aria-label="Default select example">
              <option>Section</option>
              <option value="1">Phoenix</option>
              <option value="2">Falcon</option>
              <option value="3">Sparrow</option>
            </Select>
            <label
              className="font-bold text-highlight mb-2 mt-4"
              htmlFor="optionsDate"
            >
              Baseline
            </label>
            <DatePicker
              hideIcon
              noContainer
              render={(_, ref) => (
                <div className="input-group-icon">
                  <UilCalendarAlt
                    fill="currentColor"
                    size={16}
                    className="text-default form-control-icon-start"
                  />
                  <input
                    id="optionsDate"
                    type="text"
                    className="form-control ps-10 datetimepicker"
                    placeholder="dd/mm/yy"
                    ref={ref}
                  />
                </div>
              )}
            />

            <div className="flex items-center justify-between mt-6">
              <h4 className="mb-0">Show baseline </h4>
              <div className="flex items-center">
                <div className="form-check me-4">
                  <input
                    className="form-check-input"
                    id="hideBaseline"
                    type="radio"
                    defaultChecked
                    name="showBaseline"
                  />
                  <label>No </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    id="ShowBaseline"
                    type="radio"
                    name="showBaseline"
                  />
                  <label>Yes </label>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mt-5.25">
              <div>
                <h4>Auto-schedule tasks </h4>
                <p className="mb-0 text-md">
                  Assign date to new tasks automatically{' '}
                </p>
              </div>
              <div className="form-check form-switch mb-0">
                <input
                  className="form-check-input h-6.5 w-13"
                  id="isAutoScheduleTask"
                  type="checkbox"
                  role="switch"
                />
              </div>
            </div>
            <hr />
            <div className="card">
              <div className="card-body p-4">
                <div className="form-switch form-check mb-4 my-1">
                  <input
                    className="form-check-input"
                    id="manageDependencies"
                    type="checkbox"
                    role="switch"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="manageDependencies"
                  >
                    Manage dependencies
                  </label>
                </div>
                <div className="bg-primary-subtle rounded-lg p-6">
                  {dependencies.map((item, index) => (
                    <Fragment key={item.title}>
                      <div className="flex items-center my-1">
                        <div className="form-check mb-0">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                        <h5 className="mb-0">{item.title}</h5>
                      </div>
                      <p
                        className={`text-md font-semibold text-default ms-6 ${
                          index === dependencies.length - 1 ? 'mb-0' : 'mb-6.75'
                        }`}
                      >
                        {item.description}
                      </p>
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-6">
              <div>
                <h4>Weekend awareness</h4>
                <p className="mb-0 text-md">
                  Task dates will take the weekend into consideration and try to
                  avoid it.
                </p>
              </div>
              <div className="form-check form-switch mb-0 text-xl">
                <input
                  className="form-check-input h-6.5 w-13"
                  id="weekendCheck"
                  type="checkbox"
                  role="switch"
                />
              </div>
            </div>
          </form>
        </div>

        <div className="modal-footer gap-2 p-7">
          <Button
            id="optionModal"
            variant="subtle-danger"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button variant="phoenix-primary" onClick={handleClose}>
            Save Changes
          </Button>
        </div>
      </Dialog.Content>
    </Dialog>
  );
};

export default GanttOptionsModal;
