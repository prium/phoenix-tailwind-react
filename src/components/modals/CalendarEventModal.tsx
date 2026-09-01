import {
  faAngleRight,
  faPencilAlt,
  faTimes,
  faTrash
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dialog, cn } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import { Schedule } from 'data/calendarEvents';
import dayjs from 'dayjs';
import { useCalendarContext } from 'providers/CalendarProvider';
import { Link } from 'react-router';
import { REMOVE_EVENT, SET_CALENDAR_STATE } from 'reducers/CalendarReducer';

/**
 * Gold: `+CalendarEventDetailsModal` in
 * `../phoenix-tailwind/src/pug/mixins/calendar/Mixins.pug` — an empty
 * `.modal-dialog.modal-dialog-centered > .modal-content.border.border-subtle`
 * whose content is injected by `getTemplate()` in
 * `../phoenix-tailwind/src/js/theme/calendar/template.js`. Every class below is
 * copied from that template (including its physical `mr-2` / `ml-1`).
 */
const CalendarEventModal = () => {
  const { selectedEvent, calendarDispatch } = useCalendarContext();

  const handleRemove = () => {
    calendarDispatch({
      type: REMOVE_EVENT
    });
  };

  const handleClose = () => {
    calendarDispatch({
      type: SET_CALENDAR_STATE,
      payload: {
        selectedEvent: null
      }
    });
  };

  return (
    <Dialog
      open={!!selectedEvent}
      onOpenChange={open => !open && handleClose()}
    >
      <Dialog.Content
        centered
        className="border border-subtle"
        aria-describedby={undefined}
      >
        <div className="modal-header ps-card border-b border-subtle justify-between">
          <div>
            <Dialog.Title asChild>
              <h4 className="text-highlight mb-0">{selectedEvent?.title}</h4>
            </Dialog.Title>
            {selectedEvent?.extendedProps.organizer && (
              <p className="mb-0 text-md mt-1">
                by <Link to="#!">{selectedEvent.extendedProps.organizer}</Link>
              </p>
            )}
          </div>
          <Button
            className="p-1 font-black"
            aria-label="Close"
            onClick={handleClose}
          >
            <FontAwesomeIcon icon={faTimes} className="text-base" />
          </Button>
        </div>

        <div className="modal-body px-card pb-card pt-1 text-md">
          {selectedEvent?.extendedProps.description && (
            <div className="mt-4 border-b pb-4 border-subtle">
              <h5 className="mb-0 text-muted">Description</h5>
              <p className="mb-0 mt-2">
                {selectedEvent.extendedProps.description
                  .split(' ')
                  .slice(0, 30)
                  .join(' ')}
              </p>
            </div>
          )}
          <div
            className={cn('mt-6', {
              'border-b pb-4 border-subtle':
                selectedEvent?.extendedProps.location
            })}
          >
            <h5 className="mb-0 text-muted">Date and Time</h5>
            <p className="mb-1 mt-2">
              {dayjs(selectedEvent?.start).format('dddd, MMMM D, YYYY, h:mm A')}
              {selectedEvent?.end &&
                ` – ${dayjs(selectedEvent.end)
                  .subtract(1, 'day')
                  .format('dddd, MMMM D, YYYY, h:mm A')}`}
            </p>
          </div>
          {selectedEvent?.extendedProps.location && (
            <div className="mt-6 ">
              <h5 className="mb-0 text-muted">Location</h5>
              <p
                className="mb-0 mt-2"
                dangerouslySetInnerHTML={{
                  __html: selectedEvent.extendedProps.location
                }}
              />
            </div>
          )}
          {selectedEvent?.extendedProps.schedules && (
            <div className="mt-6">
              <h5 className="mb-0 text-muted">Schedule</h5>
              <ul className="list-none timeline mt-2 mb-0">
                {selectedEvent.extendedProps.schedules.map(
                  (schedule: Schedule) => (
                    <li key={schedule.title}>{schedule.title}</li>
                  )
                )}
              </ul>
            </div>
          )}
        </div>

        <div className="modal-footer flex justify-end gap-2 px-card pt-0 border-t-0">
          <Button asChild variant="phoenix-secondary" size="sm">
            <Link to="/apps/events/create-an-event">
              <FontAwesomeIcon icon={faPencilAlt} className="text-sm mr-2" />{' '}
              Edit
            </Link>
          </Button>
          <Button variant="phoenix-danger" size="sm" onClick={handleRemove}>
            <FontAwesomeIcon icon={faTrash} className="text-md mr-2" /> Delete
          </Button>
          <Button asChild variant="primary" size="sm">
            <Link to="/apps/events/event-detail">
              {/* the gold template keeps a whitespace node here (~2.7px) */}
              See more details{' '}
              <FontAwesomeIcon icon={faAngleRight} className="text-sm ml-1" />
            </Link>
          </Button>
        </div>
      </Dialog.Content>
    </Dialog>
  );
};

export default CalendarEventModal;
