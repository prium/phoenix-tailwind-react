import { faSync } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dialog, Select } from '@hummingbirdui/react';
import { UilCalendarAlt } from '@iconscout/react-unicons';
import Button from 'components/base/Button';
import DatePicker from 'components/base/DatePicker';
import { Dispatch, SetStateAction } from 'react';

/** `+TaskFilterModal` (#ganttTaskFilterModal) in mixins/gantt-chart/GanttChart.pug */
const GanttFilterModal = ({
  show,
  setShow
}: {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}) => {
  const handleClose = () => setShow(false);

  return (
    <Dialog open={show} onOpenChange={open => !open && handleClose()}>
      <Dialog.Content centered size="lg" aria-describedby={undefined}>
        {/* the gold heading is a plain h3, not `.modal-title` */}
        <Dialog.Title className="sr-only">Filter</Dialog.Title>
        <div className="modal-header p-6 pb-4 items-start">
          <h3 className="mb-2 text-highlight" id="ganttFilterModalLabel">
            Filter
          </h3>
          <button
            type="button"
            aria-label="Close"
            className="btn btn-close"
            onClick={handleClose}
          />
        </div>

        <div className="modal-body px-6">
          <div className="row g-4">
            <div className="col-6">
              <label
                className="font-bold text-highlight mb-2"
                htmlFor="filterStartDate"
              >
                Start Date
              </label>
              <DatePicker
                hideIcon
                noContainer
                options={{ defaultDate: new Date(2022, 2, 2) }}
                render={(_, ref) => (
                  <div className="input-group-icon">
                    <UilCalendarAlt
                      fill="currentColor"
                      size={16}
                      className="text-default form-control-icon-start"
                    />
                    <input
                      id="filterStartDate"
                      type="text"
                      className="form-control ps-10 datetimepicker"
                      ref={ref}
                    />
                  </div>
                )}
              />
            </div>

            <div className="col-6">
              <label
                className="font-bold text-highlight mb-2"
                htmlFor="completedOn"
              >
                Completed on
              </label>
              <Select id="completedOn" aria-label="Default select example">
                <option>Last 7 Days</option>
                <option value="1">Last 30 Days</option>
                <option value="2">Last 90 Days</option>
                <option value="3">Last 6 Months</option>
                <option value="4">Last 12 Months</option>
              </Select>
            </div>

            <div className="col-6">
              <label
                className="font-bold text-highlight mb-2"
                htmlFor="completionStatus"
              >
                Completion Status
              </label>
              <Select id="completionStatus" aria-label="Default select example">
                <option>Not Started</option>
                <option value="1">In Progress</option>
                <option value="2">Completed</option>
                <option value="3">Overdue</option>
                <option value="4">Cancelled</option>
                <option value="5">On Hold</option>
              </Select>
            </div>

            <div className="col-6">
              <label
                className="font-bold text-highlight mb-2"
                htmlFor="filterPriority"
              >
                Priority
              </label>
              <Select id="filterPriority" aria-label="Default select example">
                <option>Urgent</option>
                <option value="1">High</option>
                <option value="2">Medium</option>
                <option value="3">Low</option>
              </Select>
            </div>

            <div className="col-6">
              <label
                className="font-bold text-highlight mb-2"
                htmlFor="lastModifiedON"
              >
                Last modified on
              </label>
              <Select id="lastModifiedON" aria-label="Default select example">
                <option>Last 7 Days</option>
                <option value="1">Last 30 Days</option>
                <option value="2">Last 90 Days</option>
                <option value="3">Last 6 Months</option>
                <option value="4">Last 12 Months</option>
              </Select>
            </div>

            <div className="col-6">
              <label
                className="font-bold text-highlight mb-2"
                htmlFor="filterTaskType"
              >
                Task type
              </label>
              <Select id="filterTaskType" aria-label="Default select example">
                <option>Administrative</option>
                <option value="1">Development</option>
                <option value="2">Design</option>
                <option value="3">Testing</option>
                <option value="4">Deployment</option>
                <option value="5">Research</option>
              </Select>
            </div>
          </div>
        </div>

        <div className="modal-footer px-6 pb-4 border-0 gap-2">
          <Button
            id="ganttResetFilterBtn"
            variant="subtle-primary"
            size="sm"
            className="px-6"
          >
            <FontAwesomeIcon icon={faSync} className="me-2" />
            Reset
          </Button>
          <Button
            variant="primary"
            size="sm"
            className="px-14"
            onClick={handleClose}
          >
            Done
          </Button>
        </div>
      </Dialog.Content>
    </Dialog>
  );
};

export default GanttFilterModal;
