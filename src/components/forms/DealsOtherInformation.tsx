import { Card, Col, Row } from '@hummingbirdui/react';

/** `+OtherInformation` in mixins/crm/DealDetails.pug */
const DealsOtherInformation = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="mb-8">Others Information</h4>
        <Row className="g-4">
          <Col xs={12}>
            <div className="mb-6">
              <div className="flex flex-wrap justify-between mb-2">
                <h5 className="mb-0 text-highlight me-2">Category</h5>
                <a href="#!" className="font-bold text-md">
                  Add new category
                </a>
              </div>
              <select
                className="form-select mb-4"
                aria-label="category"
                defaultValue="financial"
              >
                <option value="financial">Financial</option>
                <option value="marketplace">Marketplace</option>
                <option value="travel">Travel</option>
                <option value="e-commerce">E-commerce</option>
                <option value="cloud-computing">Cloud Computing</option>
              </select>
            </div>
            <div className="mb-6">
              <h5 className="mb-0 text-highlight mb-2">Priority</h5>
              <select
                className="form-select mb-4"
                aria-label="priority"
                defaultValue="low"
              >
                <option value="low">Low</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>
            <div className="mb-6">
              <h5 className="mb-0 text-highlight mb-2">Stage</h5>
              <select
                className="form-select mb-4"
                aria-label="stage"
                defaultValue="new"
              >
                <option value="new">New</option>
                <option value="in-progress">In Progress</option>
                <option value="pending">Pending</option>
                <option value="canceled">Canceled</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <div className="mb-6">
              <div className="flex flex-wrap justify-between mb-2">
                <h5 className="mb-0 text-highlight me-2">Lead Source</h5>
                <a href="#!" className="font-bold text-md">
                  Add new
                </a>
              </div>
              <select
                className="form-select mb-4"
                aria-label="lead-source"
                defaultValue="referrals"
              >
                <option value="referrals">Referrals</option>
                <option value="former_clients">Former Clients</option>
                <option value="competitors">Competitors</option>
                <option value="business_sales">Business &amp; sales</option>
                <option value="google_resources">Google resources</option>
                <option value="linkedin">Linkedin</option>
                <option value="marketing">Marketing</option>
              </select>
            </div>
            <div>
              <div className="flex flex-wrap justify-between mb-2">
                <h5 className="mb-0 text-highlight me-2">Campaign Source</h5>
                <a href="#!" className="font-bold text-md">
                  Add new
                </a>
              </div>
              <select
                className="form-select"
                aria-label="lead-source"
                defaultValue="online_campaign"
              >
                <option value="online_campaign">Online Campaign</option>
                <option value="offline_campaign">Offline Campaign</option>
              </select>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default DealsOtherInformation;
