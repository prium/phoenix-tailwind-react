import { faArrowsRotate, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dialog } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import { DealsReport } from 'data/crm/reportsData';
import { useAdvanceTableContext } from 'providers/AdvanceTableProvider';

interface ReportsFilterModalProps {
  show: boolean;
  onHide: () => void;
}

/** `+FilterReportsModal` (#filterModal) in ../phoenix-tailwind/src/pug/mixins/crm/ReportsDetails.pug */
const ReportsFilterModal = ({ show, onHide }: ReportsFilterModalProps) => {
  const { resetColumnFilters } = useAdvanceTableContext<DealsReport>();

  return (
    <Dialog open={show} onOpenChange={open => !open && onHide()}>
      <Dialog.Content
        centered
        className="border border-subtle"
        aria-describedby={undefined}
      >
        <form id="addEventForm" autoComplete="off">
          <div className="modal-header justify-between border-subtle p-6">
            <Dialog.Title asChild>
              <h5 className="modal-title text-highlight text-xl leading-sm">
                Filter
              </h5>
            </Dialog.Title>
            <button
              className="btn p-1 text-danger"
              type="button"
              aria-label="Close"
              onClick={onHide}
            >
              <FontAwesomeIcon icon={faTimes} className="text-md" />
            </button>
          </div>
          <div className="modal-body pt-6 pb-2 px-6">
            <div className="mb-4">
              <label
                className="font-bold mb-2 text-highlight"
                htmlFor="leadStatus"
              >
                Lead Status
              </label>
              <select
                className="form-select"
                id="leadStatus"
                defaultValue="newLead"
              >
                <option value="newLead">New Lead</option>
                <option value="coldLead">Cold Lead</option>
                <option value="wonLead">Won Lead</option>
                <option value="canceled">Canceled</option>
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
                htmlFor="designation"
              >
                Designation
              </label>
              <select
                className="form-select"
                id="designation"
                defaultValue="VPAccounting"
              >
                <option value="VPAccounting">VP Accounting</option>
                <option value="ceo">CEO</option>
                <option value="creativeDirector">Creative Director</option>
                <option value="accountant">Accountant</option>
                <option value="executiveManager">Executive Manager</option>
              </select>
            </div>
          </div>
          <div className="modal-footer flex justify-end items-center px-6 pb-6 border-0 pt-4">
            <Button
              type="button"
              variant="phoenix-primary"
              size="sm"
              className="px-6 text-sm my-0"
              onClick={() => resetColumnFilters()}
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
              type="button"
              variant="primary"
              size="sm"
              className="px-16 text-sm my-0"
              onClick={onHide}
            >
              Done
            </Button>
          </div>
        </form>
      </Dialog.Content>
    </Dialog>
  );
};

export default ReportsFilterModal;
