import { EventClickArg } from '@fullcalendar/core';
import CalendarAddNewEventModal from 'components/modals/CalendarAddNewEventModal';
import CalendarProvider, {
  useCalendarContext
} from 'providers/CalendarProvider';
import CalendarTop from './CalendarTop';
import CalendarHeader from './CalendarHeader';
import CalendarEventModal from 'components/modals/CalendarEventModal';
import { HANDLE_SELECT, SET_CALENDAR_STATE } from 'reducers/CalendarReducer';
import FullCalendar from 'components/base/FullCalendar';
import { eventList } from 'data/calendarEvents';

const Calendar = () => {
  return (
    <CalendarProvider>
      <CalendarContent />
    </CalendarProvider>
  );
};

const CalendarContent = () => {
  const { calendarDispatch } = useCalendarContext();

  const handleEventClick = (info: EventClickArg) => {
    if (info.event.url) {
      window.open(info.event.url);
      info.jsEvent.preventDefault();
    } else {
      calendarDispatch({
        type: SET_CALENDAR_STATE,
        payload: {
          selectedEvent: info.event
        }
      });
    }
  };

  return (
    <>
      <CalendarTop />
      <CalendarHeader />
      {/* gold: `.calendar-outline.mt-10.mb-16#appCalendar` — the id carries
          `height: calc(100vh - 12.4rem) !important` from the plugin skin, so
          the calendar fills the wrapper instead of the gold's 800px option. */}
      <div className="calendar-outline mt-10 mb-16" id="appCalendar">
        <FullCalendar
          height="100%"
          select={info => {
            calendarDispatch({
              type: HANDLE_SELECT,
              payload: info
            });
          }}
          events={eventList}
          eventClick={handleEventClick}
        />
      </div>
      <CalendarEventModal />
      <CalendarAddNewEventModal />
    </>
  );
};

export default Calendar;
