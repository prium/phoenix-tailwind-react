import { Col, Row } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import EventCustomFields from 'components/forms/EventCustomFields';
import EventDescriptionForm from 'components/forms/EventDescriptionForm';
import EventDetailsForm from 'components/forms/EventDetailsForm';
import EventTicketPricing from 'components/forms/EventTicketPricing';
import EventsSchedule from 'components/forms/EventsSchedule';
import { defaultBreadcrumbItems } from 'data/commonData';
import { Link } from 'react-router';

const privacyOptions = [
  {
    id: 'exampleRadios1',
    value: 'option1',
    defaultChecked: true,
    title: 'Public',
    description:
      'On Phoenix, our distribution partners, and search engines, anybody can find the event',
    className: 'mb-2.5'
  },
  {
    id: 'exampleRadios2',
    value: 'option2',
    defaultChecked: false,
    title: 'Private',
    description: 'Only the individuals you select have access to it.',
    className: 'mb-0'
  }
];

/** apps/events/create-an-event.pug + mixins/events/CreateEvent.pug */
const CreateAnEvent = () => {
  return (
    <div>
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <form className="mb-16">
        <Row className="justify-between items-end g-4 mb-8">
          <Col xs={12} sm="auto" xl={8}>
            <h2 className="mb-0">Create an Event</h2>
          </Col>
          <Col xs={12} sm="auto" xl={4}>
            <div className="flex">
              <Button variant="phoenix-primary" className="px-8 me-2">
                Save
              </Button>
              <Button
                variant="primary"
                className="text-center px-8 w-full text-nowrap"
                asChild
              >
                <Link to="/apps/events/event-detail">Publish event</Link>
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
              <h4 className="text-lg mb-6">Privacy</h4>
              {privacyOptions.map(option => (
                <div
                  key={option.id}
                  className={`form-check items-start ${option.className}`}
                >
                  <input
                    className="form-check-input mt-1"
                    id={option.id}
                    type="radio"
                    name="exampleRadios"
                    value={option.value}
                    defaultChecked={option.defaultChecked}
                  />
                  <label
                    className="form-check-label font-normal"
                    htmlFor={option.id}
                  >
                    <span className="text-base text-emphasis font-bold block">
                      {option.title}
                    </span>
                    <span className="block max-w-90">{option.description}</span>
                  </label>
                </div>
              ))}
            </div>
            <div className="border-b border-subtle mb-10">
              <div className="form-check mb-9.5">
                <input
                  className="form-check-input"
                  id="flexChecked"
                  type="checkbox"
                  defaultChecked
                />
                <label
                  className="form-check-label font-bold text-base"
                  htmlFor="flexChecked"
                >
                  Show the number of available tickets
                </label>
              </div>
            </div>
            <EventTicketPricing />
            <EventCustomFields />
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default CreateAnEvent;
