import { faPlus, faSync } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import dayjs from 'dayjs';
import { useCalendarContext } from 'providers/CalendarProvider';
import { SET_CALENDAR_STATE } from 'reducers/CalendarReducer';

/**
 * Gold: `block content` head of `../phoenix-tailwind/src/pug/apps/calendar.pug`.
 * `.calendar-day` / `.calendar-date` are filled by `setCurrentDate()` in the
 * gold `theme/calendar/app-calendar.js` (`Tuesday` / `1  Sep,  2026`).
 */
const CalendarTop = () => {
  const { calendarDispatch } = useCalendarContext();

  return (
    <div className="row g-0 mb-6 items-center">
      <div className="col-5 md:col-6">
        <h4 className="mb-0 text-emphasis font-bold md:text-xl">
          <span className="calendar-day block md:inline mb-1">
            {dayjs().format('dddd')}
          </span>
          <span className="px-4 font-thin text-soft hidden md:inline">|</span>
          <span className="calendar-date">{dayjs().format('D MMM, YYYY')}</span>
        </h4>
      </div>
      <div className="col-7 md:col-6 flex justify-end">
        <Button variant="link" className="text-default px-0 me-2 md:me-6">
          <FontAwesomeIcon icon={faSync} className="text-sm me-2" />
          <span className="hidden md:inline">Sync Now</span>
        </Button>
        <Button
          onClick={() => {
            calendarDispatch({
              type: SET_CALENDAR_STATE,
              payload: { openNewEventModal: true }
            });
          }}
          variant="primary"
          size="sm"
        >
          <FontAwesomeIcon icon={faPlus} className="pe-2 text-sm" />
          Add new task
        </Button>
      </div>
    </div>
  );
};

export default CalendarTop;
