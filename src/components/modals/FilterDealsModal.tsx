import { faArrowsRotate, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dialog } from '@hummingbirdui/react';
import Button from 'components/base/Button';

interface FilterDealsModalProps {
  show: boolean;
  handleClose: () => void;
}

/** `+ReportsFilterModal` in mixins/crm/Reports.pug (`#reportsFilterModal`) */
const FilterDealsModal = ({ show, handleClose }: FilterDealsModalProps) => {
  return (
    <Dialog open={show} onOpenChange={open => !open && handleClose()}>
      <Dialog.Content
        centered
        className="border border-subtle"
        aria-describedby={undefined}
      >
        <form autoComplete="off" onSubmit={e => e.preventDefault()}>
          <div className="modal-header justify-between border-subtle p-6">
            <Dialog.Title asChild>
              <h5 className="modal-title text-highlight text-xl leading-sm">
                Filter
              </h5>
            </Dialog.Title>
            <button
              type="button"
              className="btn p-1 text-danger"
              aria-label="Close"
              onClick={handleClose}
            >
              <FontAwesomeIcon icon={faTimes} className="text-md" />
            </button>
          </div>
          <div className="modal-body pt-6 pb-2 px-6">
            <div className="mb-4">
              <label
                className="font-bold mb-2 text-highlight"
                htmlFor="priority"
              >
                Priority
              </label>
              <select
                className="form-select"
                id="priority"
                defaultValue="urgent"
              >
                <option value="urgent">Urgent</option>
                <option value="medium">Medium </option>
                <option value="high">High</option>
                <option value="low">Low</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                className="font-bold mb-2 text-highlight"
                htmlFor="createDate"
              >
                Create Date
              </label>
              <select
                className="form-select"
                id="createDate"
                defaultValue="today"
              >
                <option value="today">Today</option>
                <option value="last7Days">Last 7 Days</option>
                <option value="last30Days">Last 30 Days</option>
                <option value="chooseATimePeriod">Choose a time period</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                className="font-bold mb-2 text-highlight"
                htmlFor="category"
              >
                Category
              </label>
              <select
                className="form-select"
                id="category"
                defaultValue="salesReports"
              >
                <option value="salesReports">Sales Reports</option>
                <option value="hrReports">HR Reports</option>
                <option value="marketingReports">Marketing Reports</option>
                <option value="administrativeReports">
                  Administrative Reports
                </option>
              </select>
            </div>
          </div>
          <div className="modal-footer flex justify-end items-center px-6 pb-6 border-0 pt-4 gap-2">
            <Button
              variant="phoenix-primary"
              size="sm"
              type="submit"
              className="px-6 text-sm my-0"
              startIcon={
                <FontAwesomeIcon
                  icon={faArrowsRotate}
                  className="me-2 text-sm"
                />
              }
            >
              Reset
            </Button>
            <Button
              variant="primary"
              size="sm"
              type="submit"
              className="px-16 text-sm my-0"
              onClick={handleClose}
            >
              Done
            </Button>
          </div>
        </form>
      </Dialog.Content>
    </Dialog>
  );
};

export default FilterDealsModal;
