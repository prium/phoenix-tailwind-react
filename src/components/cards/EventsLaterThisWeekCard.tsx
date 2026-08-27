import { useMemo, useState } from 'react';
import { EventsLaterThisWeek } from 'data/stock/stockDetails';
import { Card, Dropdown } from 'react-bootstrap';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import FeatherIcon from 'feather-icons-react';
import Avatar from 'components/base/Avatar';
import { Link } from 'react-router';
import { numberFormat } from 'helpers/utils';
import EventOffcanvas from 'components/modules/stock/stock-details/tab/EventOffcanvas';
import { RevealDropdownTrigger } from 'components/base/RevealDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

dayjs.extend(customParseFormat);

const EventsLaterThisWeekCard = ({
  eventsLaterThisWeek
}: {
  eventsLaterThisWeek: EventsLaterThisWeek;
}) => {
  const [open, setOpen] = useState(false);
  const startDate = useMemo(() => {
    return dayjs(eventsLaterThisWeek.schedule.startDate, 'DD/MM/YYYY');
  }, [eventsLaterThisWeek]);
  const endDate = useMemo(() => {
    return (
      eventsLaterThisWeek.schedule.endDate &&
      dayjs(eventsLaterThisWeek.schedule.endDate, 'DD/MM/YYYY')
    );
  }, [eventsLaterThisWeek]);

  return (
    <>
      <Card>
        <Card.Body className="relative">
          <div className="sm:flex gap-4">
            <div className="custom-calendar-container">
              <div className="relative custom-calender border rounded-md flex flex-col flex-center mb-4 sm:mb-0">
                <h5 className="font-black leading-sm text-subtle">
                  {startDate.format('DD')}
                  {endDate && `-${endDate.format('DD')}`}
                </h5>
                <p className="mb-0 text-sm text-subtle font-semibold">
                  {startDate.format('MMM')}, {startDate.format('YYYY')}
                </p>
              </div>
            </div>
            <div className="flex-1">
              <h5 className="mb-2 cursor-pointer" onClick={() => setOpen(true)}>
                {eventsLaterThisWeek.title}
              </h5>
              <div className="sm:flex mb-4 items-center">
                <h6 className="text-subtle font-semibold mb-2 sm:mb-0 sm:border-e sm:pe-4 sm:me-4 whitespace-nowrap">
                  <FeatherIcon
                    icon="clock"
                    className="me-2"
                    style={{ width: 16, height: 16 }}
                  />
                  <span>
                    {eventsLaterThisWeek.schedule.startTime} -{' '}
                    {eventsLaterThisWeek.schedule.endTime}{' '}
                    {eventsLaterThisWeek.schedule.displayTimeZone}
                  </span>
                </h6>
                <h6 className="text-subtle font-semibold mb-0 line-clamp-1">
                  <FeatherIcon
                    icon="map-pin"
                    className="me-2"
                    style={{ width: 16, height: 16 }}
                  />
                  <span>{eventsLaterThisWeek.location}</span>
                </h6>
              </div>
              <div className="flex items-center gap-1">
                <Avatar.Group size="s" className="items-center">
                  {eventsLaterThisWeek.interestedToGoing.map(people => (
                    <Avatar src={people.image} key={people.id} size="s" />
                  ))}{' '}
                </Avatar.Group>
                <Link
                  to="#!"
                  className="text-sm ms-1 font-semibold text-soft"
                >
                  +
                  {eventsLaterThisWeek.totalUserCount -
                    eventsLaterThisWeek.interestedToGoing.length}{' '}
                  people going
                </Link>
                <ul className="ps-4 mb-0 text-soft text-sm">
                  <li>
                    {numberFormat(eventsLaterThisWeek.interested, 'compact', {
                      compactDisplay: 'short'
                    }).toLowerCase()}{' '}
                    people interested
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="absolute top-0 end-0 mt-6 me-6">
            <RevealDropdownTrigger>
              <Dropdown>
                <Dropdown.Toggle variant="" size="sm" className="p-0">
                  <FontAwesomeIcon icon={faEllipsisH} />
                </Dropdown.Toggle>
                <Dropdown.Menu align="end" className="py-2">
                  <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
                  <Dropdown.Item eventKey="2" className="text-danger">
                    Delete
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="2">Download</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Report abuse</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </RevealDropdownTrigger>
          </div>
        </Card.Body>
      </Card>
      <EventOffcanvas open={open} setOpen={setOpen} />
    </>
  );
};

export default EventsLaterThisWeekCard;
