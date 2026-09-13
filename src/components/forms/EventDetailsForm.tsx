import { Col, FloatingLabel, Input, Select } from '@hummingbirdui/react';
import InlineCheckItem from 'components/common/InlineCheckItem';

/** `+EventDetails` in mixins/events/CreateEvent.pug */
const EventDetailsForm = () => {
  return (
    <>
      <h4 className="text-lg mb-0">Event Details</h4>
      <Col sm={6} md={12}>
        <FloatingLabel
          className="form-field"
          htmlFor="floatingEventInput"
          label="Event title"
        >
          <Input
            id="floatingEventInput"
            type="text"
            placeholder="Event title"
          />
        </FloatingLabel>
      </Col>
      <Col sm={6} md={6}>
        <FloatingLabel
          className="form-field"
          htmlFor="floatingSelectTask"
          label="type"
        >
          <Select id="floatingSelectTask">
            <option>Select event type</option>
            <option value="1">technical</option>
            <option value="2">external</option>
            <option value="3">organizational</option>
          </Select>
        </FloatingLabel>
      </Col>
      <Col sm={6} md={6}>
        <FloatingLabel
          className="form-field"
          htmlFor="floatingSelectPrivacy"
          label="topic"
        >
          <Select id="floatingSelectPrivacy">
            <option>Select topic</option>
            <option value="1">Data select topic One</option>
            <option value="2">Data select topic Two</option>
            <option value="3">Data select topic Three</option>
          </Select>
        </FloatingLabel>
      </Col>
      <Col xs={12} className="mt-7">
        <InlineCheckItem
          className="me-4"
          id="inlineRadio1"
          name="inlineRadioOptions"
          value="option1"
          label="Online"
          defaultChecked
        />{' '}
        <InlineCheckItem
          className="me-4"
          id="inlineRadio2"
          name="inlineRadioOptions"
          value="option2"
          label="Offline"
        />{' '}
        <InlineCheckItem
          className="me-4"
          id="inlineRadio3"
          name="inlineRadioOptions"
          value="option3"
          label="Both"
        />
      </Col>
      <Col sm={6} md={12} className="md:mt-0 lg:mt-1">
        <FloatingLabel
          className="form-field"
          htmlFor="floatingVenueInput"
          label="Venue"
        >
          <Input id="floatingVenueInput" type="text" placeholder="Venue" />
        </FloatingLabel>
      </Col>
      <Col sm={6} md={4}>
        <FloatingLabel
          className="form-field"
          htmlFor="floatingSelectCountry"
          label="Country"
        >
          <Select id="floatingSelectCountry">
            <option>Select Country</option>
            <option value="1">Country One</option>
            <option value="2">Country Two</option>
            <option value="3">Country Three</option>
          </Select>
        </FloatingLabel>
      </Col>
      <Col sm={6} md={4}>
        <FloatingLabel
          className="form-field"
          htmlFor="floatingSelectState"
          label={' State'}
        >
          <Select id="floatingSelectState">
            <option>Select State </option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Select>
        </FloatingLabel>
      </Col>
      <Col sm={6} md={4}>
        <FloatingLabel
          className="form-field"
          htmlFor="floatingSelectCity"
          label="City"
        >
          <Select id="floatingSelectCity">
            <option>Select city</option>
            <option value="1">Data Privacy One</option>
            <option value="2">Data Privacy Two</option>
            <option value="3">Data Privacy Three</option>
          </Select>
        </FloatingLabel>
      </Col>
    </>
  );
};

export default EventDetailsForm;
