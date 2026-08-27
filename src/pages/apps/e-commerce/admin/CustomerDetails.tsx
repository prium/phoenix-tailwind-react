import { faKey, faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import CustomerNotesCard from 'components/cards/CustomerNotesCard';
import CustomerProfileCard from 'components/cards/CustomerProfileCard';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import CustomerOrdersTable from 'components/tables/CustomerOrdersTable';
import CustomerRatingsTable from 'components/tables/CustomerRatingsTable';
import CustomerWishlistTable from 'components/tables/CustomerWishlistTable';
import { defaultBreadcrumbItems } from 'data/commonData';
import { Card, Col, Row } from '@hummingbirdui/react';

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
                <Card className="h-full">
                  <Card.Body>
                    <div className="flex items-center mb-4">
                      <h3 className="me-1">Default Address</h3>
                      <Button variant="link" className="p-0">
                        <FontAwesomeIcon
                          icon={faPen}
                          className="text-base ms-4 text-soft"
                        />
                      </Button>
                    </div>
                    <h5 className="text-muted">Address</h5>
                    <p className="text-muted">
                      Shatinon Mekalan
                      <br />
                      Vancouver, British Columbia
                      <br />
                      Canada
                    </p>
                    <div className="mb-4">
                      <h5 className="text-muted">Email</h5>
                      <a href="mailto:shatinon@jeemail.com">
                        shatinon@jeemail.com
                      </a>
                    </div>
                    <h5 className="text-muted">Phone</h5>
                    <a href="tel:+1234567890" className="text-muted">
                      +1234567890
                    </a>
                  </Card.Body>
                </Card>
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
                  Orders{' '}
                  <span className="text-subtle font-normal">(97)</span>
                </h3>
                <CustomerOrdersTable />
              </div>
              <div>
                <h3 className="mb-6">
                  Wishlist{' '}
                  <span className="text-subtle font-normal">(43)</span>
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
