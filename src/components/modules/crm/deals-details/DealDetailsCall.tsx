import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import DealDetailsCallTable from 'components/tables/DealDetailsCallTable';
import { Col, Form, Row } from 'react-bootstrap';

const DealDetailsCall = () => {
  return (
    <>
      <Row className="items-center gx-6 gy-4 flex-wrap mb-4">
        <Col sm="auto" className="flex-1">
          <h2 className="mb-0">Call</h2>
        </Col>
        <Col sm="auto">
          <div className="sm:flex items-center gap-6">
            <div className="flex gap-4 sm:gap-6">
              <Form.Check
                type="radio"
                label="All Call"
                name="callType"
                id="all-call"
                defaultChecked
                className="sm:mb-0"
              />
              <Form.Check
                type="radio"
                label="Incoming Call"
                name="callType"
                id="incoming-call"
                className="sm:mb-0"
              />
              <Form.Check
                type="radio"
                label="OutgoingCall"
                name="callType"
                id="outgoing-call"
                className="sm:mb-0"
              />
            </div>
            <Button
              variant="primary"
              startIcon={<FontAwesomeIcon icon={faPlus} className="me-2" />}
            >
              Add Call
            </Button>
          </div>
        </Col>
      </Row>
      <DealDetailsCallTable />
    </>
  );
};

export default DealDetailsCall;
