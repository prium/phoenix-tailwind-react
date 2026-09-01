import { faPlus, faSync } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import dayjs from 'dayjs';
import { useCalendarContext } from 'providers/CalendarProvider';
import { Col, Row } from 'react-bootstrap';
import { SET_CALENDAR_STATE } from 'reducers/CalendarReducer';

const CalendarTop = () => {
  const { calendarDispatch } = useCalendarContext();

  return (
    <Row className="g-0 mb-6 items-center">
      <Col xs={5} md={6}>
        <h4 className="mb-0 text-emphasis font-bold md:text-xl">
          <span className="calendar-day block md:inline mb-1">
            {dayjs().format('dddd')}
          </span>
          <span className="px-4 fw-thin text-soft hidden md:inline">
            |
          </span>
          <span className="inline-block">
            {' '}
            {dayjs().format('D MMM, YYYY')}
          </span>
        </h4>
      </Col>
      <Col xs={7} md={6} className="flex justify-end">
        <Button
          variant="link"
          className="text-default px-0 me-2 md:me-6"
          startIcon={<FontAwesomeIcon icon={faSync} className="text-sm me-2" />}
        >
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
          startIcon={<FontAwesomeIcon icon={faPlus} className="text-sm me-2" />}
        >
          Add new task
        </Button>
      </Col>
    </Row>
  );
};

export default CalendarTop;
