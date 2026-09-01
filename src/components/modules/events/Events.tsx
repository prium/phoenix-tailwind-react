import classNames from 'classnames';
import EventItem from 'components/list-items/EventItem';
import { Event } from 'data/eventsData';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';

interface EventsProps {
  events: Event[];
  title: string;
  className?: string;
}

const Events = ({ events, title, className }: EventsProps) => {
  return (
    <>
      <Row
        className={classNames(
          className,
          'g-0 py-6 border-b border-dashed items-end justify-between'
        )}
      >
        <Col xs="auto">
          <h3 className="flex-1 mb-0 whitespace-nowrap me-4">{title}</h3>
        </Col>
        <Col xs="auto">
          <Link to="#!" className="font-bold text-md">
            See more
          </Link>
        </Col>
      </Row>
      {events.map(event => (
        <EventItem event={event} key={event.id} />
      ))}
    </>
  );
};

export default Events;
