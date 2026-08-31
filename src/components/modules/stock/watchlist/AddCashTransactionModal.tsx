import { ChangeEvent, useState } from 'react';
import { faCalendarAlt, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import DatePicker from 'components/base/DatePicker';
import { currencyFormat } from 'helpers/utils';
import { Col, Form, Modal, Row } from 'react-bootstrap';

interface AddCashTransactionModalProps {
  show: boolean;
  handleClose: () => void;
}

const AddCashTransactionModal = ({
  show,
  handleClose
}: AddCashTransactionModalProps) => {
  const [note, setNote] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value.length <= 60) {
      setNote(value);
    }
  };

  return (
    <Modal
      show={show}
      centered
      onHide={handleClose}
      dialogClassName="modal-600"
    >
      <Modal.Header className="border-0">
        <h4 className="text-highlight mb-0">Add Transaction</h4>
        <Button
          variant="link"
          className="text-danger text-md ms-auto p-1"
          onClick={handleClose}
        >
          <FontAwesomeIcon icon={faXmark} />
        </Button>
      </Modal.Header>
      <Modal.Body>
        <Row className="bg-subtle rounded-lg g-0 gap-4 p-4 flex-between-center mb-6">
          <Col xs="auto">
            <p className="font-bold mb-0">Stock Name : Apple Inc</p>
          </Col>
          <Col xs="auto">
            <p className="mb-0 font-bold">NASDAQ : AAPL</p>
          </Col>
        </Row>
        <Row className="g-4">
          <Col sm={6}>
            <label className="font-bold text-highlight mb-2">Type</label>
            <Form.Select>
              <option value="buy">Buy</option>
              <option value="sell">Sell</option>
              <option value="hold">Hold</option>
            </Form.Select>
          </Col>
          <Col sm={6}>
            <label className="font-bold text-highlight mb-2">Date</label>
            <DatePicker
              placeholder="dd/mm/yyyy"
              style={{ height: 33.06 }}
              options={{ disableMobile: true }}
              className="px-8"
              hideIcon={true}
              icon={
                <FontAwesomeIcon
                  icon={faCalendarAlt}
                  className="text-default text-md flatpickr-icon top-1/2 -translate-y-1/2"
                  transform="shrink-1 down-1"
                />
              }
            />
          </Col>
          <Col sm={6}>
            <label className="font-bold text-highlight mb-2">
              Cost per share
            </label>
            <Form.Control
              name="costPerShare"
              type="number"
              className="input-spin-none"
              placeholder="Enter cost per Share..."
            />
          </Col>
          <Col sm={6}>
            <label className="font-bold text-highlight mb-2">Currency</label>
            <Form.Select>
              <option value="usd">USD</option>
              <option value="cad">CAD</option>
              <option value="yen">YEN</option>
            </Form.Select>
          </Col>
          <Col sm={6}>
            <label className="font-bold text-highlight mb-2">
              Share Quantity
            </label>
            <Form.Control
              type="number"
              className="input-spin-none"
              placeholder="Enter share quantity..."
              name="shareQuantity"
            />
          </Col>
          <Col sm={6}>
            <label className="font-bold text-highlight mb-2">
              Commission
            </label>
            <Form.Select>
              <option value="">Select</option>
              <option value="20%">20%</option>
              <option value="25%">25%</option>
            </Form.Select>
          </Col>
          <Col xs={12} className="mb-6">
            <label className="font-bold text-highlight mb-2">Note</label>
            <Form.Control
              type="text"
              name="note"
              value={note}
              placeholder="Write a note..."
              onChange={handleChange}
            />
            <span className="text-end text-base leading-sm mt-2 block">
              <span className="font-semibold text-primary">{note.length}</span>
              <span className="text-soft">/60</span>
            </span>
          </Col>
          <Col xs={12}>
            <Row className="flex-between-center g-4 border-t border-dashed">
              <Col xs="auto">
                <h4 className="mb-0">Total Cost:</h4>
              </Col>
              <Col xs="auto">
                <h4 className="mb-0">
                  {currencyFormat(562.08, { minimumFractionDigits: 2 })}
                </h4>
              </Col>
            </Row>
          </Col>
          <Col xs={12} className="text-end">
            <Button variant="link" size="sm" className="text-secondary">
              Cancel
            </Button>
            <Button variant="primary" size="sm" type="submit">
              Add Transaction
            </Button>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default AddCashTransactionModal;
