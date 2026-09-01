import { faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown } from '@hummingbirdui/react';
import RevealDropdown, {
  RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import { Event } from 'data/eventsData';
import { Link } from 'react-router';

interface EventItemProps {
  event: Event;
}

/** Event rows of `+Events` in mixins/social/Feed.pug */
const EventItem = ({ event }: EventItemProps) => {
  return (
    <div className="py-4 border-b border-subtle border-dashed">
      <div className="flex flex-between-center">
        <p className="text-warning text-sm mb-0 font-bold mb-1">{event.date}</p>
        <RevealDropdownTrigger>
          <RevealDropdown btnClassName="flex">
            <Dropdown.Item>Edit</Dropdown.Item>
            <Dropdown.Item className="text-danger">Delete</Dropdown.Item>
            <Dropdown.Item>Download</Dropdown.Item>
            <Dropdown.Item>Report abuse</Dropdown.Item>
          </RevealDropdown>
        </RevealDropdownTrigger>
      </div>
      <Link
        to="#!"
        className="text-primary-hover text-highlight font-bold mb-2 line-clamp-1 me-8 leading-base"
      >
        {event.title}
      </Link>
      <p className="text-muted text-md mb-2">
        Organized by <br />
        <Link to="#!" className="font-bold text-primary">
          {event.organization}
        </Link>
      </p>
      <p className="text-sm text-subtle/85">{event.people} people going</p>
      <p className="text-md text-subtle font-bold mb-1">
        <FontAwesomeIcon icon={faClock} className="text-muted me-1" />
        {event.time}
      </p>
      <p className="text-md text-subtle font-bold mb-0">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-muted me-1" />
        {event.place}
      </p>
    </div>
  );
};

export default EventItem;
