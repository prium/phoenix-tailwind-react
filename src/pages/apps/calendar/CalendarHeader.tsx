import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Button from 'components/base/Button';
import { CalendarView, useCalendarContext } from 'providers/CalendarProvider';
import { ButtonGroup, Col, Row } from 'react-bootstrap';
import { SET_CALENDAR_STATE } from 'reducers/CalendarReducer';

const CalendarHeader = () => {
  const { calendarApi, title, view, calendarDispatch } = useCalendarContext();

  const handleCalendarView = (viewType: CalendarView) => {
    if (calendarApi) {
      calendarApi.changeView(viewType);
      calendarDispatch({
        type: SET_CALENDAR_STATE,
        payload: {
          view: viewType,
          title: calendarApi.view.title
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
          title: calendarApi.view.title
        }
      });
    }
  };

  return (
    <div className="-mx-6 px-6 lg:-mx-10 lg:px-10 border-y border-subtle">
      <Row className="py-4 gy-4 gx-0 justify-between">
        <Col xs={6} md="auto" className="order-1 flex items-center">
          <Button
            onClick={() => handleCalendarUpdate('today')}
            variant="phoenix-primary"
            size="sm"
            className="px-6"
          >
            Today
          </Button>
        </Col>
        <Col
          xs={12}
          md="auto"
          className="md:order-1 flex items-center justify-center"
        >
          <Button
            onClick={() => handleCalendarUpdate('prev')}
            className="icon-item icon-item-sm shadow-none text-emphasis p-0"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </Button>
          {calendarApi && (
            <h3 className="px-4 text-emphasis font-semibold mb-0">
              {title || calendarApi.view.title}
            </h3>
          )}
          <Button
            onClick={() => handleCalendarUpdate('next')}
            className="icon-item icon-item-sm shadow-none text-emphasis p-0"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </Button>
        </Col>
        <Col xs={6} md="auto" className="order-1 flex justify-end">
          <ButtonGroup size="sm">
            <Button
              onClick={() => handleCalendarView('dayGridMonth')}
              variant="phoenix-secondary"
              className={classNames({
                active: view === 'dayGridMonth'
              })}
            >
              Month
            </Button>
            <Button
              onClick={() => handleCalendarView('timeGridWeek')}
              variant="phoenix-secondary"
              className={classNames({
                active: view === 'timeGridWeek'
              })}
            >
              Week
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    </div>
  );
};

export default CalendarHeader;
