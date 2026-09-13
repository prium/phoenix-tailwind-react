import { Col, FloatingLabel, Select } from '@hummingbirdui/react';
import FloatingDatePicker from 'components/base/FloatingDatePicker';

/** "Schedule" fields of `+CreateEvent` in mixins/events/CreateEvent.pug */
const EventsSchedule = () => {
  return (
    <>
      <h4 className="text-lg mt-12">Schedule</h4>
      <Col sm={6}>
        <FloatingDatePicker
          icon
          className="form-field"
          id="startDatepicker"
          label="Start date"
          placeholder="start date"
        />
      </Col>
      <Col sm={6}>
        <FloatingDatePicker
          className="form-field"
          id="timepickerEvent"
          label="Start Time"
          placeholder="H:i"
          options={{
            enableTime: true,
            noCalendar: true,
            dateFormat: 'H:i'
          }}
        />
      </Col>
      <Col sm={6}>
        <FloatingDatePicker
          icon
          className="form-field"
          id="endDatepicker"
          label="End date"
          placeholder="end date"
        />
      </Col>
      <Col sm={6}>
        <FloatingDatePicker
          className="form-field"
          id="timepickerEvent2"
          label="End Time"
          placeholder="H:i"
          options={{
            enableTime: true,
            noCalendar: true,
            dateFormat: 'H:i'
          }}
        />
      </Col>
      <Col sm={6}>
        <FloatingLabel
          className="form-field"
          htmlFor="floatingSelectTimeZone"
          label="Time zone"
        >
          <Select id="floatingSelectTimeZone">
            <option>Select time zone</option>
            <option value="1">Data Privacy One</option>
            <option value="2">Data Privacy Two</option>
            <option value="3">Data Privacy Three</option>
          </Select>
        </FloatingLabel>
      </Col>
      <Col sm={6}>
        <FloatingDatePicker
          className="form-field"
          id="datepicker"
          label="Registration deadline"
          placeholder="registration deadline"
        />
      </Col>
    </>
  );
};

export default EventsSchedule;
