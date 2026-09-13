import { ChangeEvent, useState } from 'react';
import { faCalendarAlt, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Dialog, Input, Row, Select } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import DatePicker from 'components/base/DatePicker';

interface AddCashTransactionModalProps {
  show: boolean;
  handleClose: () => void;
}

/** `+CashTransactionModal` in mixins/stock/watchlist/CashTransactionModal.pug */
const AddCashTransactionModal = ({
  show,
  handleClose
}: AddCashTransactionModalProps) => {
  const [note, setNote] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value.length <= 16) {
      setNote(value);
    }
  };

  return (
    <Dialog open={show} onOpenChange={open => !open && handleClose()}>
      <Dialog.Content
        centered
        dialogClassName="modal-600"
        aria-describedby={undefined}
      >
        <Dialog.Header className="border-0">
          <Dialog.Title className="sr-only">Add Transaction</Dialog.Title>
          <h4 className="text-highlight mb-0">Add Transaction </h4>
          <button
            type="button"
            className="btn btn-link text-danger text-md ms-auto p-1"
            aria-label="Close"
            onClick={handleClose}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </Dialog.Header>
        <Dialog.Body>
          <Row className="bg-subtle rounded-lg g-0 gap-4 p-4 flex-between-center mb-6">
            <Col xs="auto">
              <p className="font-bold mb-0">Stock Name : Apple Inc</p>
            </Col>
            <Col xs="auto">
              <p className="font-bold mb-0">NASDAQ : AAPL</p>
            </Col>
          </Row>
          <Row className="g-4 form">
            <Col sm={6}>
              <label className="font-bold text-highlight mb-2">Type </label>
              <Select name="type">
                <option value="buy">Buy </option>
                <option value="sell">Sell </option>
                <option value="hold">Hold </option>
              </Select>
            </Col>
            <Col sm={6}>
              <label className="font-bold text-highlight mb-2">Date </label>
              <DatePicker
                wrapperClassName="relative"
                className="form-control-sm px-8"
                placeholder="dd/mm/yyyy"
                options={{ disableMobile: true }}
                hideIcon
                icon={
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="text-default absolute top-1/2 start-4 -translate-y-1/2 text-md"
                  />
                }
              />
            </Col>
            <Col sm={6}>
              <label className="font-bold text-highlight mb-2">
                Cost per share
              </label>
              <Input
                className="input-spin-none"
                type="number"
                name="costPerShare"
                placeholder="Enter cost per Share..."
              />
            </Col>
            <Col sm={6}>
              <label
                className="font-bold text-highlight mb-2"
                htmlFor="currency"
              >
                Currency{' '}
              </label>
              <Select id="currency" name="currency">
                <option value="usd">USD </option>
                <option value="cad">CAD </option>
                <option value="yen">YEN </option>
              </Select>
            </Col>
            <Col sm={6}>
              <label className="font-bold text-highlight mb-2">
                Share Quantity
              </label>
              <Input
                className="input-spin-none"
                type="number"
                name="shareQuantity"
                placeholder="Enter share quantity..."
              />
            </Col>
            <Col sm={6}>
              <label className="font-bold text-highlight mb-2">
                Commission{' '}
              </label>
              <Select name="commission">
                <option value="">Select </option>
                <option value="20%">20% </option>
                <option value="25%">25%</option>
              </Select>
            </Col>
            <Col xs={12} className="mb-6">
              <label className="font-bold text-highlight mb-2">Note </label>
              <Input
                type="text"
                name="note"
                value={note}
                placeholder="Write a note..."
                onChange={handleChange}
              />
              <span className="text-end text-base leading-sm mt-2 block">
                {' '}
                <span className="text-primary font-semibold">
                  {note.length}
                </span>
                <span className="text-soft">/16</span>
              </span>
            </Col>
            <Col xs={12}>
              <Row className="flex-between-center g-4 border-t border-dashed">
                <Col xs="auto">
                  <h4 className="mb-0">Total Cost: </h4>
                </Col>
                <Col xs="auto">
                  <h4 className="mb-0">$562.08</h4>
                </Col>
              </Row>
            </Col>
            <Col xs={12} className="text-end">
              <Button
                variant="link"
                size="sm"
                className="text-secondary"
                onClick={handleClose}
              >
                Cancel{' '}
              </Button>{' '}
              <Button variant="primary" size="sm" type="submit">
                {' '}
                Add Transaction
              </Button>
            </Col>
          </Row>
        </Dialog.Body>
      </Dialog.Content>
    </Dialog>
  );
};

export default AddCashTransactionModal;
