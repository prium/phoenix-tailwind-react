import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import OrderDetailsTable from 'components/tables/OrderDetailsTable';
import { Card, Col, Dropdown, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import OrderDetailsSummaryCard from 'components/cards/OrderDetailsSummaryCard';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import { defaultBreadcrumbItems } from 'data/commonData';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Refund = () => {
  return (
    <div>
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <div className="mb-16">
        <h2 className="mb-4">Refund</h2>
        <div className="flex flex-wrap items-center mb-6 gap-4">
          <p className="text-muted leading-sm mb-0">
            Order :{' '}
            <Link className="font-bold" to="#!">
              {' '}
              #349
            </Link>
          </p>
          <div className="flex-1 flex flex-between-center gap-4">
            <p className="text-muted leading-sm mb-0 flex-1 whitespace-nowrap">
              Customer Id :{' '}
              <Link className="font-bold" to="#!">
                {' '}
                2364847
              </Link>
            </p>
            <Dropdown>
              <Dropdown.Toggle
                variant=""
                className="p-0 dropdown-caret-none no-underline"
              >
                More action
                <FontAwesomeIcon icon={faChevronDown} className="ms-2" />
              </Dropdown.Toggle>
              <Dropdown.Menu align="end">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <Row className="g-8 gy-12">
          <Col xs={12} xl={8} xxl={9}>
            <OrderDetailsTable />
          </Col>
          <Col xs={12} xl={4} xxl={3}>
            <OrderDetailsSummaryCard className="mb-6" />
            <Card>
              <Card.Body>
                <Card.Title as="h4" className="mb-6">
                  Refund Amount
                </Card.Title>
                <Form.Control
                  type="number"
                  placeholder="Amount"
                  className="mb-6 input-spin-none"
                />
                <Button variant="primary" className="w-full">
                  Refund $500
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Refund;
