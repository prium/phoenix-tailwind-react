import { faAngleRight, faPlus } from '@fortawesome/free-solid-svg-icons';
import DialogHeading from 'components/base/DialogHeading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Dialog,
  FloatingLabel,
  Input,
  Select,
  Textarea
} from '@hummingbirdui/react';
import { UilCalendarAlt } from '@iconscout/react-unicons';
import Button from 'components/base/Button';
import DatePicker from 'components/base/DatePicker';
import { CalendarEvent } from 'data/calendarEvents';
import { getRandomNumber } from 'helpers/utils';
import usePhoenixForm from 'hooks/usePhoenixForm';
import { useCalendarContext } from 'providers/CalendarProvider';
import { FormEvent, useEffect } from 'react';
import { DateTimePickerProps } from 'react-flatpickr';
import { Link } from 'react-router';
import { ADD_NEW_EVENT, SET_CALENDAR_STATE } from 'reducers/CalendarReducer';

/**
 * Gold `.input-group-icon.mb-4 > span.uil.uil-calendar-alt.form-control-icon-start
 * + .form-floating > input.form-control.datetimepicker + label.form-label`
 * (mixin `CalendarAddEventModalForm`, `src/pug/mixins/calendar/Mixins.pug`).
 * `components/base/FloatingDatePicker` emits the same markup but exposes no
 * wrapper class or change handler, which this form needs — see the note in the
 * migration report.
 */
const EventDatePicker = ({
  id,
  label,
  options,
  onChange
}: {
  id: string;
  label: string;
  options: DateTimePickerProps['options'];
  onChange: DateTimePickerProps['onChange'];
}) => (
  <DatePicker
    hideIcon
    noContainer
    options={options}
    onChange={onChange}
    render={(_, ref) => (
      <div className="input-group-icon mb-4">
        <UilCalendarAlt
          fill="currentColor"
          size={16}
          className="form-control-icon-start text-subtle"
        />
        <div className="form-floating">
          <Input
            type="text"
            className="datetimepicker"
            placeholder="yyyy/mm/dd hh:mm"
            ref={ref}
            id={id}
          />
          <label className="form-label" htmlFor={id}>
            {label}
          </label>
        </div>
      </div>
    )}
  />
);

/** Gold: `+CalendarAddEventModal` / `+CalendarAddEventModalForm`, same mixin file. */
const CalendarAddNewEventModal = () => {
  const {
    openNewEventModal,
    selectedStartDate,
    selectedEndDate,
    calendarDispatch
  } = useCalendarContext();

  const { formData, setFormData, onChange } = usePhoenixForm<CalendarEvent>({
    id: String(getRandomNumber(2000, 3000)),
    start: selectedStartDate,
    end: selectedEndDate
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    calendarDispatch({
      type: ADD_NEW_EVENT,
      payload: formData
    });
  };

  const handleClose = () => {
    calendarDispatch({
      type: SET_CALENDAR_STATE,
      payload: {
        openNewEventModal: false
      }
    });
  };

  useEffect(() => {
    setFormData({
      ...formData,
      start: selectedStartDate,
      end: selectedEndDate
    });
  }, [selectedEndDate, selectedStartDate]);

  return (
    <Dialog
      open={openNewEventModal}
      onOpenChange={open => !open && handleClose()}
    >
      <Dialog.Content
        className="border border-subtle"
        aria-describedby={undefined}
        /* gold `data-bs-focus="false"` + `shown.bs.modal` → focus the title,
           not Radix's default first focusable (the "Event" radio). */
        onOpenAutoFocus={e => {
          e.preventDefault();
          document.getElementById('eventTitle')?.focus();
        }}
      >
        <form id="addEventForm" autoComplete="off" onSubmit={handleSubmit}>
          <div className="modal-header px-card border-0">
            <div className="w-full flex justify-between items-start">
              <div>
                <DialogHeading
                  as="h5"
                  className="mb-0 leading-sm text-highlight"
                >
                  Add new
                </DialogHeading>
                <div className="mt-2">
                  <div className="form-check-inline">
                    <input
                      className="form-check-input"
                      id="inlineRadio1"
                      type="radio"
                      name="calendarTask"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="inlineRadio1">
                      Event
                    </label>
                  </div>{' '}
                  {/* the two inline checks are separated by a whitespace text
                      node in the gold html (~4px) */}
                  <div className="form-check-inline">
                    <input
                      className="form-check-input"
                      id="inlineRadio2"
                      type="radio"
                      name="calendarTask"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio2">
                      Task
                    </label>
                  </div>
                </div>
              </div>
              <Button
                className="p-1 text-sm text-default"
                aria-label="Close"
                onClick={handleClose}
              >
                DISCARD{' '}
              </Button>
            </div>
          </div>
          <div className="modal-body p-card py-0">
            <FloatingLabel label="Title" htmlFor="eventTitle" className="mb-4">
              <Input
                id="eventTitle"
                type="text"
                name="title"
                required
                placeholder="Event title"
                onChange={onChange}
              />
            </FloatingLabel>
            <FloatingLabel label="Label" htmlFor="eventLabel" className="mb-8">
              <Select id="eventLabel" name="className" onChange={onChange}>
                <option value="text-primary">Business</option>
                <option value="text-secondary">Personal</option>
                <option value="text-success">Meeting</option>
                <option value="text-danger">Birthday</option>
                <option value="text-info">Report</option>
                <option value="text-warning">Must attend</option>
              </Select>
            </FloatingLabel>
            <EventDatePicker
              id="eventStartDate"
              label="Starts at"
              options={{
                enableTime: true,
                dateFormat: 'Y-m-d H:i',
                disableMobile: true,
                defaultDate: selectedStartDate
              }}
              onChange={([date]) => setFormData({ ...formData, start: date })}
            />
            <EventDatePicker
              id="eventEndDate"
              label="Ends at"
              options={{
                disableMobile: true,
                enableTime: true,
                dateFormat: 'Y-m-d H:i',
                defaultDate: selectedEndDate
              }}
              onChange={([date]) => setFormData({ ...formData, end: date })}
            />
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="eventAllDay"
                name="allDay"
                checked={formData.allDay === true}
                onChange={onChange}
              />
              <label className="form-check-label" htmlFor="eventAllDay">
                All day event{' '}
              </label>
            </div>
            <FloatingLabel
              label="Description"
              htmlFor="eventDescription"
              className="my-8"
            >
              <Textarea
                id="eventDescription"
                className="h-32"
                placeholder="Leave a comment here"
                name="description"
                onChange={onChange}
              />
            </FloatingLabel>
            <FloatingLabel
              label="Repetition"
              htmlFor="eventRepetition"
              className="mb-4"
            >
              <Select
                id="eventRepetition"
                name="repetition"
                onChange={onChange}
              >
                <option value="">No Repeat</option>
                <option value="daily">Daily </option>
                <option value="deekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="dailyExceptHolidays">
                  Daily (except holidays)
                </option>
                <option value="custom">Custom</option>
              </Select>
            </FloatingLabel>
            <FloatingLabel
              label="Reminder"
              htmlFor="eventReminder"
              className="mb-4"
            >
              <Select id="eventReminder" name="reminder" onChange={onChange}>
                <option value="">30 minutes earlier</option>
                <option value="">8 am on the day</option>
                <option value="">8 am on the day before</option>
                <option value="">2 days earlier</option>
                <option value="">a week earlier</option>
              </Select>
            </FloatingLabel>
            <Button variant="link" className="p-0 mb-4">
              <FontAwesomeIcon icon={faPlus} className="me-2" />
              Add Reminder
            </Button>
          </div>
          <div className="modal-footer flex justify-between items-center border-0">
            <Link
              to="/apps/events/create-an-event"
              className="me-4 text-md text-default"
            >
              More options
              <FontAwesomeIcon icon={faAngleRight} className="ms-1 text-sm" />
            </Link>
            <Button variant="primary" type="submit" className="px-6">
              Save
            </Button>
          </div>
        </form>
      </Dialog.Content>
    </Dialog>
  );
};

export default CalendarAddNewEventModal;
