import { useMemo, useState } from 'react';
import { UpcomingEventsItem } from 'data/stock/stockDetails';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import FeatherIcon from 'feather-icons-react';
import { numberFormat } from 'helpers/utils';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import EventOffcanvas from 'components/modules/stock/stock-details/tab/EventOffcanvas';

dayjs.extend(customParseFormat);

/** Gold: `highlightEvents` cards in mixins/stock/stock-details/EventsTabContent.pug */
const UpcomingEventCard = ({
  upcomingEventItem
}: {
  upcomingEventItem: UpcomingEventsItem;
}) => {
  const [open, setOpen] = useState(false);
  const startDate = useMemo(() => {
    return dayjs(upcomingEventItem.scheduled.startDate, 'DD/MM/YYYY');
  }, [upcomingEventItem]);

  return (
    <>
      <div className="card mb-6">
        <div className="card-body">
          <div className="row g-0">
            <div className="col-12 sm:col-3 sm:me-6 custom-calendar-container">
              <div className="relative custom-calender border rounded-md flex flex-col flex-center mb-6 sm:mb-0 px-0">
                <h5 className="font-extrabold leading-sm text-subtle">
                  {startDate.format('DD')}
                </h5>
                <p className="mb-0 text-sm text-subtle font-semibold">
                  {startDate.format('MMM')}, {startDate.format('YYYY')}
                </p>
              </div>
            </div>
            <div className="col-12 sm:col-9 grow">
              <div className="row g-6">
                <div className="col-12 2xl:col-9">
                  <div className="2xl:flex items-center gap-2 mb-2">
                    <h5
                      className="mb-2 2xl:mb-0 cursor-pointer"
                      onClick={() => setOpen(true)}
                    >
                      {upcomingEventItem.title}
                    </h5>
                    <div
                      className={classNames(
                        upcomingEventItem.status === 'interested'
                          ? 'badge-phoenix-info'
                          : 'badge-phoenix-warning',
                        'badge text-sm'
                      )}
                    >
                      {upcomingEventItem.status}
                    </div>
                  </div>
                  <div className="sm:flex mb-4 items-center">
                    <h6 className="text-subtle font-semibold mb-2 sm:mb-0 sm:border-e sm:pe-4 sm:me-4 text-nowrap">
                      <FeatherIcon
                        icon="clock"
                        size={16}
                        className="me-2 size-4"
                      />
                      <span>
                        {upcomingEventItem.scheduled.startTime} -{' '}
                        {upcomingEventItem.scheduled.endTime}{' '}
                        {upcomingEventItem.scheduled.displayTimeZone}
                      </span>
                    </h6>
                    <h6 className="text-subtle font-semibold mb-0 line-clamp-1">
                      <FeatherIcon
                        icon="map-pin"
                        size={16}
                        className="me-2 size-4"
                      />
                      <span>{upcomingEventItem.location}</span>
                    </h6>
                  </div>
                  <p className="text-md text-subtle">
                    {upcomingEventItem.description}
                  </p>
                  <div className="flex items-center gap-1">
                    <div className="avatar-group items-center ms-2">
                      {upcomingEventItem.interestedToGoing.map(people => (
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
                      <a
                        href="#!"
                        className="text-sm font-semibold text-soft d-i ms-1"
                      >
                        {' '}
                        +
                        {upcomingEventItem.totalUserCount -
                          upcomingEventItem.interestedToGoing.length}{' '}
                        people going
                      </a>
                    </div>
                    <ul className="ps-4 mb-0 text-soft text-sm">
                      <li>
                        {numberFormat(upcomingEventItem.interested, 'compact', {
                          compactDisplay: 'short'
                        }).toLowerCase()}{' '}
                        people interested
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="2xl:col-3">
                  <button
                    type="button"
                    className={classNames(
                      upcomingEventItem.status === 'interested'
                        ? 'btn-primary'
                        : 'btn-phoenix-primary',
                      'btn me-2 2xl:me-0 2xl:mb-2 2xl:w-full'
                    )}
                  >
                    <FontAwesomeIcon
                      icon={
                        upcomingEventItem.status === 'interested'
                          ? faCircleCheck
                          : faBookmark
                      }
                      className="me-2"
                    />
                    Interested
                  </button>
                  <button
                    type="button"
                    className="btn btn-phoenix-primary 2xl:w-full"
                  >
                    <FontAwesomeIcon icon={faCircleCheck} className="me-2" />
                    Going
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EventOffcanvas open={open} setOpen={setOpen} />
    </>
  );
};

export default UpcomingEventCard;
