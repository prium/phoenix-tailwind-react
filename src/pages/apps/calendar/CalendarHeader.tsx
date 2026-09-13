import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CalendarApi } from '@fullcalendar/core';
import { cn } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import { CalendarView, useCalendarContext } from 'providers/CalendarProvider';
import { SET_CALENDAR_STATE } from 'reducers/CalendarReducer';

/**
 * The gold `updateTitle()` (`theme/calendar/app-calendar.js`) prints the plain
 * view title everywhere except the week view, where it prints
 * `Sep 1 - Sep 8` from the current range (end is exclusive).
 */
const getTitle = (api: CalendarApi) => {
  if (api.view.type !== 'timeGridWeek') {
    return api.view.title;
  }
  const start = api.view.currentStart;
  const end = api.view.currentEnd;
  const month = (date: Date) =>
    date.toLocaleString('en-US', { month: 'short' });
  return `${month(start)} ${start.getDate()} - ${month(end)} ${end.getDate()}`;
};

const CalendarHeader = () => {
  const { calendarApi, title, view, calendarDispatch } = useCalendarContext();

  const handleCalendarView = (viewType: CalendarView) => {
    if (calendarApi) {
      calendarApi.changeView(viewType);
      calendarDispatch({
        type: SET_CALENDAR_STATE,
        payload: {
          view: viewType,
          title: getTitle(calendarApi)
        }
      });
    }
  };

  const handleCalendarUpdate = (actionType: string) => {
    if (calendarApi) {
      actionType === 'next'
        ? calendarApi.next()
        : actionType === 'prev'
          ? calendarApi.prev()
          : calendarApi.today();
      calendarDispatch({
        type: SET_CALENDAR_STATE,
        payload: {
          title: getTitle(calendarApi)
        }
      });
    }
  };

  return (
    <div className="-mx-6 px-6 lg:-mx-10 lg:px-10 border-y border-subtle">
      <div className="row py-4 gy-4 gx-0">
        <div className="col-6 md:col-4 order-1 flex items-center">
          <Button
            onClick={() => handleCalendarUpdate('today')}
            variant="phoenix-primary"
            size="sm"
            className="px-6"
          >
            Today
          </Button>
        </div>
        <div className="col-12 md:col-4 md:order-1 flex items-center justify-center">
          <Button
            onClick={() => handleCalendarUpdate('prev')}
            className="icon-item icon-item-sm shadow-none text-emphasis p-0"
            title="Previous"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </Button>
          <h3 className="px-4 text-emphasis font-semibold calendar-title mb-0">
            {title || (calendarApi ? getTitle(calendarApi) : '')}
          </h3>
          <Button
            onClick={() => handleCalendarUpdate('next')}
            className="icon-item icon-item-sm shadow-none text-emphasis p-0"
            title="Next"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </Button>
        </div>
        <div className="col-6 md:col-4 ms-auto order-1 flex justify-end">
          <div>
            <div className="btn-group btn-group-sm" role="group">
              <Button
                onClick={() => handleCalendarView('dayGridMonth')}
                variant="phoenix-secondary"
                className={cn({ 'active-view': view === 'dayGridMonth' })}
              >
                Month
              </Button>
              <Button
                onClick={() => handleCalendarView('timeGridWeek')}
                variant="phoenix-secondary"
                className={cn({ 'active-view': view === 'timeGridWeek' })}
              >
                Week
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarHeader;
