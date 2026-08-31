import Button from 'components/base/Button';
import AvatarUpload from 'components/common/AvatarUpload';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import { defaultBreadcrumbItems } from 'data/commonData';
import avatar from 'assets/img/team/150x150/58.webp';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import LeadInformationForm from 'components/forms/LeadInformationForm';
import AddressInformation from 'components/forms/AddressInformation';

const AddContact = () => {
  return (
    <div className="mb-16">
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <div className="border-b border-subtle mb-12 -mx-4 px-2 lg:-mx-10 lg:px-10">
        <Row>
          <Col xl={9}>
            <div className="sm:flex justify-between">
              <h2 className="mb-6">Create a new lead</h2>
              <div className="flex mb-4">
                <Button variant="phoenix-primary" className="me-2 px-10">
                  Cancel
                </Button>
                <Button variant="primary">Create lead</Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Row>
        <Col xl={9}>
          <div className="flex items-end relative mb-12">
            <AvatarUpload src={avatar} size="5xl" />
          </div>
          <Form>
            <LeadInformationForm className="mb-10" />
            <AddressInformation className="mb-10" />
            <h4 className="mb-4">Description</h4>
            <FloatingLabel
              controlId="lead-description"
              label="Lead description"
            >
              <Form.Control
                as="textarea"
                style={{ height: '128px' }}
                type="text"
                placeholder="Lead description"
              />
            </FloatingLabel>
            <div className="text-end">
              <Button variant="primary" className="mt-10">
                Create lead
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default AddContact;
