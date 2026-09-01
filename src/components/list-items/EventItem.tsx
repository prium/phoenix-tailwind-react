import { faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RevealDropdown, {
  RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import { Event } from 'data/eventsData';
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router';

interface EventItemProps {
  event: Event;
}

const EventItem = ({ event }: EventItemProps) => {
  return (
    <div
      key={event.title}
      className="py-4 border-b border-subtle border-dashed"
    >
      <div className="flex flex-between-center">
        <p className="text-warning text-sm mb-0 font-bold mb-1">{event.date}</p>
        <RevealDropdownTrigger>
          <RevealDropdown>
            <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
            <Dropdown.Item eventKey="2" className="text-danger">
              Delete
            </Dropdown.Item>
            <Dropdown.Item eventKey="2">Download</Dropdown.Item>
            <Dropdown.Item eventKey="2">Report abuse</Dropdown.Item>
          </RevealDropdown>
        </RevealDropdownTrigger>
      </div>
      <Link
        to="#!"
        className="hover-primary text-highlight font-bold mb-2 line-clamp-1 me-8 leading-base"
      >
        {event.title}
      </Link>
      <p className="text-muted text-md mb-2">
        Organized by <br />{' '}
        <Link to="#!" className="font-bold">
          {event.organization}
        </Link>
      </p>
      <p className="text-sm text-subtle text-opacity-85">
        {event.people} people going
      </p>
      <p className="text-md text-subtle font-bold mb-1">
        <FontAwesomeIcon icon={faClock} className="text-muted me-1" />
        {event.time}
      </p>
      <p className="text-md text-subtle font-bold mb-0">
        <FontAwesomeIcon
          icon={faMapMarkerAlt}
          className="text-muted me-1"
        />
        {event.place}
      </p>
    </div>
  );
};

export default EventItem;
