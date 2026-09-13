import { useState } from 'react';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import AddCashTransactionModal from './AddCashTransactionModal';
import CashTransactionTable from './CashTransactionTable';

/** `+CashTransactionTable` in mixins/stock/watchlist/CashTransactionTable.pug */
const CashTransactionTabContent = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Row className="mt-6 flex-between-center">
        <Col xs="auto">
          <h4>Cash Transaction Report</h4>
          <p className="mb-0 text-subtle">Brief summary of all projects</p>
        </Col>
        <Col xs="auto">
          <Button
            variant="phoenix-secondary"
            size="sm"
            onClick={() => setShow(true)}
          >
            <FontAwesomeIcon icon={faAdd} className="me-2" />
            Add Cash Transaction
          </Button>
        </Col>
      </Row>
      <CashTransactionTable />
      <AddCashTransactionModal show={show} handleClose={() => setShow(false)} />
    </>
  );
};

export default CashTransactionTabContent;
