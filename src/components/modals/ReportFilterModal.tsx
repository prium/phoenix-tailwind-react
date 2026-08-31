import { faArrowsRotate, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dialog } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import { Report } from 'data/crm/reportsData';
import { useAdvanceTableContext } from 'providers/AdvanceTableProvider';
import { useState } from 'react';

interface ReportFilterModalProps {
  show: boolean;
  handleClose: () => void;
}

const defaultFormData = {
  priority: 'Urgent',
  createDate: 'today',
  category: 'Sales Reports'
};

/** `+ReportsFilterModal` (#reportsFilterModal) in ../phoenix-tailwind/src/pug/mixins/crm/Reports.pug */
const ReportFilterModal = ({ show, handleClose }: ReportFilterModalProps) => {
  const [formData, setFormData] = useState(defaultFormData);
  const { getColumn, resetColumnFilters } = useAdvanceTableContext<Report>();

  const handleFilter = (columnId: 'priority' | 'category', value: string) => {
    setFormData({
      ...formData,
      [columnId]: value
    });
    getColumn(columnId)?.setFilterValue(value);
  };
  const handleReset = () => {
    setFormData(defaultFormData);
    resetColumnFilters();
  };

  return (
    <Dialog open={show} onOpenChange={open => !open && handleClose()}>
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
                value={formData.priority}
                onChange={e => handleFilter('priority', e.target.value)}
              >
                <option value="Urgent">Urgent</option>
                <option value="Medium">Medium </option>
                <option value="High">High</option>
                <option value="Low">Low</option>
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
                value={formData.createDate}
                onChange={e =>
                  setFormData({ ...formData, createDate: e.target.value })
                }
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
                value={formData.category}
                onChange={e => handleFilter('category', e.target.value)}
              >
                <option value="Sales Reports">Sales Reports</option>
                <option value="HR Reports">HR Reports</option>
                <option value="Marketing Reports">Marketing Reports</option>
                <option value="Administrative Reports">
                  Administrative Reports
                </option>
              </select>
            </div>
          </div>
          <div className="modal-footer flex justify-end items-center px-6 pb-6 border-0 pt-4 gap-2">
            <Button
              type="button"
              variant="phoenix-primary"
              size="sm"
              className="px-6 text-sm my-0"
              onClick={handleReset}
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

export default ReportFilterModal;
