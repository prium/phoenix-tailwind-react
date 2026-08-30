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
        {/* gold: .row.items-center.mb-4.gx-4.gy-2 in apps/e-commerce/admin/refund.pug */}
        <Row className="items-center mb-4 gx-4 gy-2">
          <Col xs={12} sm="auto">
            <p className="text-muted leading-sm mb-0">
              Order :
              <Link className="font-bold ms-1" to="#!">
                #349
              </Link>
            </p>
          </Col>
          <Col xs={12} sm="auto" className="grow">
            <Row className="items-center flex-wrap gy-1">
              <Col xs="auto" className="grow">
                <p className="text-muted leading-sm mb-0">
                  Customer ID :
                  <Link className="font-bold ms-1" to="#!">
                    2364847
                  </Link>
                </p>
              </Col>
              <Col xs="auto">
                <Dropdown>
                  <Dropdown.Trigger asChild>
                    <button type="button" className="btn px-0 text-default">
                      More action
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className="ms-2 text-sm"
                      />
                    </button>
                  </Dropdown.Trigger>
                  <Dropdown.Content align="end">
                    <Dropdown.Item>Action</Dropdown.Item>
                    <Dropdown.Item>Another action</Dropdown.Item>
                    <Dropdown.Item>Something else here</Dropdown.Item>
                    <Dropdown.Item>Cancel</Dropdown.Item>
                  </Dropdown.Content>
                </Dropdown>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="gx-8">
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
