import { faArrowsRotate, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dialog, Select } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import { LeadDataType } from 'data/crm/leadsTableData';
import { useAdvanceTableContext } from 'providers/AdvanceTableProvider';
import { useState } from 'react';

interface LeadsFilterModalProps {
  show: boolean;
  handleClose: () => void;
}

/** `+FilterModal` in apps/crm/leads.pug */
const LeadsFilterModal = ({ show, handleClose }: LeadsFilterModalProps) => {
  const [formData, setFormData] = useState({
    status: '',
    createDate: 'today',
    designation: ''
  });
  const { getColumn, resetColumnFilters } =
    useAdvanceTableContext<LeadDataType>();

  const handleFilter = (columnId: string, value: string) => {
    setFormData({
      ...formData,
      [columnId]: value
    });
    // `createDate` is display-only in the gold demo; status / designation
    // filter their hidden accessor columns (case-insensitive contains).
    if (columnId !== 'createDate') {
      const column = getColumn(columnId);
      column?.setFilterValue(value || undefined);
    }
  };
  const handleReset = () => {
    setFormData({
      status: '',
      createDate: 'today',
      designation: ''
    });
    resetColumnFilters();
  };

  return (
    <Dialog open={show} onOpenChange={open => !open && handleClose()}>
      <Dialog.Content
        centered
        className="border border-subtle"
        aria-describedby={undefined}
      >
        <form autoComplete="off" onSubmit={e => e.preventDefault()}>
          <Dialog.Header className="border-subtle p-6 justify-between">
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
          </Dialog.Header>
          <Dialog.Body className="pt-6 pb-2 px-6">
            <div className="mb-4">
              <label
                className="font-bold mb-2 text-highlight"
                htmlFor="leadStatus"
              >
                Lead Status
              </label>
              <Select
                id="leadStatus"
                value={formData.status}
                onChange={e => handleFilter('status', e.target.value)}
              >
                <option value="">New Lead</option>
                <option value="cold lead">Cold Lead</option>
                <option value="won lead">Won Lead</option>
                <option value="cancel">Canceled</option>
              </Select>
            </div>
            <div className="mb-4">
              <label
                className="font-bold mb-2 text-highlight"
                htmlFor="createDate"
              >
                Create Date
              </label>
              <Select
                id="createDate"
                value={formData.createDate}
                onChange={e => handleFilter('createDate', e.target.value)}
              >
                <option value="today">Today</option>
                <option value="last7Days">Last 7 Days</option>
                <option value="last30Days">Last 30 Days</option>
                <option value="chooseATimePeriod">Choose a time period</option>
              </Select>
            </div>
            <div className="mb-4">
              <label
                className="font-bold mb-2 text-highlight"
                htmlFor="designation"
              >
                Designation
              </label>
              <Select
                id="designation"
                value={formData.designation}
                onChange={e => handleFilter('designation', e.target.value)}
              >
                <option value="">VP Accounting</option>
                <option value="ceo">CEO</option>
                <option value="creative director">Creative Director</option>
                <option value="accountant">Accountant</option>
                <option value="executive manager">Executive Manager</option>
              </Select>
            </div>
          </Dialog.Body>
          <Dialog.Footer className="flex justify-end items-center px-6 pb-6 border-0 pt-4 gap-2">
            <Button
              variant="phoenix-primary"
              size="sm"
              className="px-6 text-sm my-0"
              startIcon={
                <FontAwesomeIcon
                  icon={faArrowsRotate}
                  className="me-2 text-sm"
                />
              }
              onClick={handleReset}
            >
              Reset
            </Button>
            <Button
              variant="primary"
              size="sm"
              className="px-16 text-sm my-0"
              onClick={handleClose}
            >
              Done
            </Button>
          </Dialog.Footer>
        </form>
      </Dialog.Content>
    </Dialog>
  );
};

export default LeadsFilterModal;
