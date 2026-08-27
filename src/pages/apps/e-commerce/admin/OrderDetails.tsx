import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import OrderDetailsTable from 'components/tables/OrderDetailsTable';
import { Card, Col, Dropdown, Row, Select } from '@hummingbirdui/react';
import { Link } from 'react-router';
import OrderDetailsSummaryCard from 'components/cards/OrderDetailsSummaryCard';
import {
  BillingDetails,
  OtherDetails,
  ShippingDetails
} from 'components/modules/e-commerce/OrderDeliveryDetails';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import { defaultBreadcrumbItems } from 'data/commonData';
import {
  faChevronDown,
  faPrint,
  faUndo
} from '@fortawesome/free-solid-svg-icons';

const OrderDetails = () => {
  return (
    <div>
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <div className="mb-16">
        <h2 className="mb-0">
          Order <span>#349</span>
        </h2>
        <div className="sm:flex flex-between-center mb-4">
          <p className="text-muted leading-sm mb-0 mt-2 sm:mt-0">
            Customer ID :{' '}
            <Link className="font-bold" to="#!">
              {' '}
              2364847
            </Link>
          </p>
          <div className="flex">
            <Button
              variant="link"
              className="ps-0 pe-4 text-default no-underline"
              startIcon={<FontAwesomeIcon icon={faPrint} className="me-2" />}
            >
              Print
            </Button>
            <Button
              variant="link"
              className="px-4 text-default no-underline"
              startIcon={<FontAwesomeIcon icon={faUndo} className="me-2" />}
            >
              Refund
            </Button>
            <Dropdown>
              <Dropdown.Trigger asChild>
                <button
                  type="button"
                  className="btn text-default dropdown-caret-none ps-4 pe-0"
                >
                  More action
                  <FontAwesomeIcon icon={faChevronDown} className="ms-2" />
                </button>
              </Dropdown.Trigger>
              <Dropdown.Content align="end">
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
                <Dropdown.Item>Something else here</Dropdown.Item>
              </Dropdown.Content>
            </Dropdown>
          </div>
        </div>
        <Row className="g-8 gy-12">
          <Col xs={12} xl={8} xxl={9}>
            <div className="mb-10">
              <OrderDetailsTable />
            </div>
            <Row className="gx-6 gy-10 xl:g-12 sm:justify-center xl:justify-start">
              <Col xs={12} sm="auto">
                <BillingDetails />
              </Col>

              <Col xs={12} sm="auto">
                <ShippingDetails />
              </Col>

              <Col xs={12} sm="auto">
                <OtherDetails />
              </Col>
            </Row>
          </Col>
          <Col xs={12} xl={4} xxl={3}>
            <OrderDetailsSummaryCard className="mb-4" />
            <Card>
              <Card.Body>
                <h3 className="card-title mb-6">Order Status</h3>
                <h6 className="mb-2">Payment status</h6>
                <Select className="mb-6" aria-label="payment status">
                  <option value="processing">Processing</option>
                  <option value="canceled">Canceled</option>
                  <option value="completed">Completed</option>
                </Select>
                <h6 className="mb-2">Fulfillment status</h6>
                <Select aria-label="fulfillment status">
                  <option value="unfulfilled">Unfulfilled</option>
                  <option value="fulfilled">Fulfilled</option>
                  <option value="Pending">Pending</option>
                </Select>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default OrderDetails;
