import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import OrderDetailsTable from 'components/tables/OrderDetailsTable';
import { Card, Col, Dropdown, Input, Row } from '@hummingbirdui/react';
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
        <h2 className="mb-2">Refund</h2>
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
              <Dropdown.Trigger asChild>
                <button
                  type="button"
                  className="btn text-default px-0"
                >
                  More action
                  <FontAwesomeIcon icon={faChevronDown} className="ms-2 text-sm" />
                </button>
              </Dropdown.Trigger>
              <Dropdown.Content align="end">
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
                <Dropdown.Item>Something else here</Dropdown.Item>
                <Dropdown.Item>Cancel</Dropdown.Item>
              </Dropdown.Content>
            </Dropdown>
          </div>
        </div>
        <Row className="g-8 gy-12">
          <Col xs={12} xl={8} xxl={9}>
            <OrderDetailsTable />
          </Col>
          <Col xs={12} xl={4} xxl={3}>
            <OrderDetailsSummaryCard className="mb-4" />
            <Card>
              <Card.Body>
                <h4 className="mb-6">Refund Amount</h4>
                <Input type="text" placeholder="Amount" className="mb-6" />
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
