import { faKey, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import CustomerDefaultAddressCard from 'components/cards/CustomerDefaultAddressCard';
import CustomerNotesCard from 'components/cards/CustomerNotesCard';
import CustomerProfileCard from 'components/cards/CustomerProfileCard';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import CustomerOrdersTable from 'components/tables/CustomerOrdersTable';
import CustomerRatingsTable from 'components/tables/CustomerRatingsTable';
import CustomerWishlistTable from 'components/tables/CustomerWishlistTable';
import { defaultBreadcrumbItems } from 'data/commonData';
import { Col, Row } from '@hummingbirdui/react';

const CustomerDetails = () => {
  return (
    <div>
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <div className="mb-16">
        <Row className="flex items-center justify-between g-4 mb-6">
          <Col xs="auto">
            <h2 className="mb-0 flex-1">Customer details</h2>
          </Col>
          <Col xs="auto" className="flex gap-4 flex-wrap">
            <Button
              variant="phoenix"
              color="danger"
              startIcon={<FontAwesomeIcon icon={faTrashAlt} className="me-2" />}
            >
              Delete customer
            </Button>
            <Button
              variant="phoenix"
              color="secondary"
              startIcon={<FontAwesomeIcon icon={faKey} className="me-2" />}
            >
              Reset password
            </Button>
          </Col>
        </Row>
        <Row className="g-8">
          <Col xs={12} xxl={4}>
            <Row className="g-4 h-full">
              <Col xs={12} md={7} xxl={12}>
                <CustomerProfileCard />
              </Col>
              <Col xs={12} md={5} xxl={12}>
                <CustomerDefaultAddressCard />
              </Col>
              <Col xs={12}>
                <CustomerNotesCard className="h-full" />
              </Col>
            </Row>
          </Col>
          <Col xs={12} xxl={8}>
            <div className="flex flex-col gap-10">
              <div>
                <h3 className="mb-6">
                  Orders <span className="text-subtle font-normal">(97)</span>
                </h3>
                <CustomerOrdersTable />
              </div>
              <div>
                <h3 className="mb-6">
                  Wishlist <span className="text-subtle font-normal">(43)</span>
                </h3>
                <CustomerWishlistTable />
              </div>
              <div>
                <h3 className="mb-6">
                  Ratings & reviews{' '}
                  <span className="text-subtle font-normal">(43)</span>
                </h3>
                <CustomerRatingsTable />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CustomerDetails;
