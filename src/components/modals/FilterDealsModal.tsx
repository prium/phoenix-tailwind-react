import { faArrowsRotate, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { Form } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

interface FilterDealsModalProps {
  show: boolean;
  handleClose: () => void;
}

const FilterDealsModal = ({ show, handleClose }: FilterDealsModalProps) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      className="p-0"
      centered
      contentClassName="border"
    >
      <Modal.Header className="border-light p-4">
        <h5 className="modal-title text-highlight text-xl lh-sm">Filter</h5>
        <Button className="p-1 ms-auto" onClick={handleClose}>
          <FontAwesomeIcon icon={faTimes} className="text-md text-danger" />
        </Button>
      </Modal.Header>
      <Modal.Body className="pt-4 pb-2 px-4">
        <div className="mb-3">
          <Form.Label className="form-label-header mb-2">Priority</Form.Label>
          <Form.Select>
            <option value="urgent">Urgent</option>
            <option value="medium">Medium </option>
            <option value="high">High</option>
            <option value="low">Low</option>
          </Form.Select>
        </div>
        <div className="mb-3">
          <Form.Label className="form-label-header mb-2">
            Create Date
          </Form.Label>
          <Form.Select>
            <option value="today">Today</option>
            <option value="last7Days">Last 7 Days</option>
            <option value="last30Days">Last 30 Days</option>
            <option value="chooseATimePeriod">Choose a time period</option>
          </Form.Select>
        </div>
        <div className="mb-3">
          <Form.Label className="form-label-header mb-2">Category</Form.Label>
          <Form.Select>
            <option value="salesReports">Sales Reports</option>
            <option value="hrReports">HR Reports</option>
            <option value="marketingReports">Marketing Reports</option>
            <option value="administrativeReports">
              Administrative Reports
            </option>
          </Form.Select>
        </div>
      </Modal.Body>
      <Modal.Footer className="flex justify-content-end align-items-center px-4 pb-4 border-0 pt-3">
        <Button
          variant="phoenix-primary"
          size="sm"
          className="px-4 text-sm my-0"
          startIcon={
            <FontAwesomeIcon icon={faArrowsRotate} className="me-2 text-sm" />
          }
        >
          Reset
        </Button>
        <Button
          variant="primary"
          size="sm"
          className="px-9 text-md my-0"
          onClick={handleClose}
        >
          Done
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FilterDealsModal;
