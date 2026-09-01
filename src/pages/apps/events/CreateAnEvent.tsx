import Button from 'components/base/Button';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import EventCustomFields from 'components/forms/EventCustomFields';
import EventDescriptionForm from 'components/forms/EventDescriptionForm';
import EventDetailsForm from 'components/forms/EventDetailsForm';
import EventTicketPricing from 'components/forms/EventTicketPricing';
import EventsSchedule from 'components/forms/EventsSchedule';
import { defaultBreadcrumbItems } from 'data/commonData';
import { Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router';

const CreateAnEvent = () => {
  return (
    <div>
      <PageBreadcrumb items={defaultBreadcrumbItems} className="mb-4" />
      <Form className="mb-16">
        <Row className="justify-between items-end g-4 mb-8">
          <Col xs={12} sm="auto" xl={8}>
            <h2 className="mb-0">Create an Event</h2>
          </Col>
          <Col xs={12} sm="auto" xl={4}>
            <div className="flex">
              <Button
                className="px-8 me-2"
                variant="phoenix-primary"
                type="button"
              >
                Save
              </Button>
              <Button
                variant="primary"
                as={Link}
                to="/apps/events/event-details"
                className="px-8 w-full whitespace-nowrap"
              >
                Publish Event
              </Button>
            </div>
          </Col>
        </Row>
        <Row className="g-8">
          <Col xl={8}>
            <Row className="gx-4 gy-6">
              <EventDetailsForm />
              <EventsSchedule />
              <EventDescriptionForm />
            </Row>
          </Col>
          <Col xl={4}>
            <div className="border-b border-subtle pb-10 mb-10">
              <h4 className="mb-6">Privacy</h4>
              <Form.Check type="radio" id="privacy1" className="mb-2">
                <Form.Check.Input
                  type="radio"
                  name="vrivacyRadio"
                  value="option1"
                  defaultChecked
                />
                <Form.Check.Label className="font-normal" htmlFor="privacy1">
                  <span className="h5 block mt-1">Public</span>
                  On Phoenix, our distribution partners, and search engines,{' '}
                  <br />
                  anybody can find the event
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type="radio" id="privacy2" className="mb-0">
                <Form.Check.Input
                  type="radio"
                  name="vrivacyRadio"
                  value="option1"
                />
                <Form.Check.Label className="font-normal" htmlFor="privacy2">
                  <span className="h5 block mt-1">Private</span>
                  Only the individuals you select have access to it.
                </Form.Check.Label>
              </Form.Check>
            </div>
            <div className="border-b border-subtle mb-10">
              <Form.Check type="checkbox" id="flexChecked">
                <Form.Check.Input
                  type="checkbox"
                  value="option1"
                  defaultChecked
                />
                <Form.Check.Label
                  className="font-bold text-base mb-8"
                  htmlFor="flexChecked"
                >
                  Show the number of available tickets
                </Form.Check.Label>
              </Form.Check>
            </div>
            <EventTicketPricing />
            <EventCustomFields />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default CreateAnEvent;
