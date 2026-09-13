import { Col, Row, cn } from '@hummingbirdui/react';
import EventItem from 'components/list-items/EventItem';
import { Event } from 'data/eventsData';
import { Link } from 'react-router';

interface EventsProps {
  events: Event[];
  /** When set, renders the `+EventTitle` heading row above the list. */
  title?: string;
  className?: string;
}

/** `+Events` (+ optional `+EventTitle`) in mixins/social/Feed.pug */
const Events = ({ events, title, className }: EventsProps) => {
  return (
    <>
      {title && (
        <Row
          className={cn(
            className,
            'g-0 py-4 border-b border-dashed items-end justify-between'
          )}
        >
          <Col xs="auto">
            <h3 className="flex-1 mb-0 text-nowrap me-4">{title}</h3>
          </Col>
          <Col xs="auto">
            <Link to="#!" className="font-bold text-md">
              See more
            </Link>
          </Col>
        </Row>
      )}
      {events.map(event => (
        <EventItem event={event} key={event.id} />
      ))}
    </>
  );
};

export default Events;
