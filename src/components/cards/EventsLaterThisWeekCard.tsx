import { useMemo, useState } from 'react';
import { EventsLaterThisWeek } from 'data/stock/stockDetails';
import { Dropdown } from '@hummingbirdui/react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import FeatherIcon from 'feather-icons-react';
import { numberFormat } from 'helpers/utils';
import EventOffcanvas from 'components/modules/stock/stock-details/tab/EventOffcanvas';
import { RevealDropdownTrigger } from 'components/base/RevealDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

dayjs.extend(customParseFormat);

/** Gold: `+EventsCardBody` cards in mixins/stock/stock-details/EventsTabContent.pug */
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
      <div className="card">
        <div className="card-body relative">
          <div className="sm:flex gap-4">
            <div className="custom-calendar-container">
              <div className="relative custom-calender border rounded-md flex flex-col flex-center mb-4 sm:mb-0">
                <h5 className="font-extrabold leading-sm text-subtle">
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
                <h6 className="text-subtle font-semibold mb-2 sm:mb-0 sm:border-e sm:pe-4 sm:me-4 text-nowrap">
                  <FeatherIcon icon="clock" size={16} className="me-2 size-4" />
                  <span>
                    {eventsLaterThisWeek.schedule.startTime} -{' '}
                    {eventsLaterThisWeek.schedule.endTime}{' '}
                    {eventsLaterThisWeek.schedule.displayTimeZone}
                  </span>
                </h6>
                <h6 className="text-subtle font-semibold mb-0 line-clamp-1">
                  <FeatherIcon
                    icon="map-pin"
                    size={16}
                    className="me-2 size-4"
                  />
                  <span>{eventsLaterThisWeek.location}</span>
                </h6>
              </div>
              <div className="flex items-center gap-1">
                <div className="avatar-group items-center ms-2">
                  {eventsLaterThisWeek.interestedToGoing.map(people => (
                    <a
                      key={people.id}
                      href="#!"
                      className="avatar avatar-xs border-0 h-6"
                    >
                      <img
                        className="rounded-full h-full"
                        src={people.image}
                        alt=""
                      />
                    </a>
                  ))}
                </div>
                <a href="#!" className="text-sm font-semibold text-soft ms-1">
                  {' '}
                  +
                  {eventsLaterThisWeek.totalUserCount -
                    eventsLaterThisWeek.interestedToGoing.length}{' '}
                  people going
                </a>
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
                <Dropdown.Trigger asChild>
                  <button type="button" className="btn p-0">
                    <FontAwesomeIcon icon={faEllipsisH} />
                  </button>
                </Dropdown.Trigger>
                <Dropdown.Content align="end" className="py-2">
                  <Dropdown.Item>Edit</Dropdown.Item>
                  <Dropdown.Item className="text-danger">Delete</Dropdown.Item>
                  <Dropdown.Item>Download</Dropdown.Item>
                  <Dropdown.Item>Report abuse</Dropdown.Item>
                </Dropdown.Content>
              </Dropdown>
            </RevealDropdownTrigger>
          </div>
        </div>
      </div>
      <EventOffcanvas open={open} setOpen={setOpen} />
    </>
  );
};

export default EventsLaterThisWeekCard;
