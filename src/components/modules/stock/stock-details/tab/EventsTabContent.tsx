import SearchBox from 'components/common/SearchBox';
import { EventLists } from 'data/stock/stockDetails';
import UpcomingEventCard from 'components/cards/UpcomingEventCard';
import EventsLaterThisWeekCard from 'components/cards/EventsLaterThisWeekCard';
import DatePicker from 'components/base/DatePicker';
import PreviousEventItem from './PreviousEventItem';
import StockDetailsPagination from 'components/common/StockDetailsPagination';

/** Gold: mixins/stock/stock-details/EventsTabContent.pug */
const EventsTabContent = ({ eventLists }: { eventLists: EventLists }) => {
  return (
    <>
      <div className="row g-4 md:g-8 flex-between-center mb-4">
        <div className="col-auto">
          <h4 className="font-extrabold">Upcoming Events</h4>
          <p className="mb-0 text-subtle">Brief summary of all projects</p>
        </div>
        <div className="col-12 sm:col-auto">
          <SearchBox placeholder="Search events" className="w-full" />
        </div>
      </div>
      <div>
        {eventLists.upcomingEvents.map(event => (
          <UpcomingEventCard key={event.id} upcomingEventItem={event} />
        ))}
      </div>
      <h4 className="mb-4">Later This Week</h4>
      <div className="row g-6 mb-6">
        {eventLists.eventsLaterThisWeek.map(event => (
          <div className="2xl:col-6" key={event.id}>
            <EventsLaterThisWeekCard eventsLaterThisWeek={event} />
          </div>
        ))}
      </div>
      <div className="row g-4 lg:g-8 flex-between-center mb-4">
        <div className="col-6">
          <h4 className="mb-0">Previous Events</h4>
        </div>
        <div className="col-6 flex flex-end-center">
          <DatePicker
            placeholder="dd/mm/yyyy"
            className="form-control-sm datetimepicker ps-10 pe-8"
            wrapperClassName="relative max-w-45"
          />
        </div>
      </div>
      <div className="row g-6 2xl:gx-14 mb-4">
        {eventLists.previousEvents.map(event => (
          <div className="col-12 sm:col-6" key={event.id}>
            <PreviousEventItem previousEvent={event} />
          </div>
        ))}
      </div>
      <StockDetailsPagination
        currentPage={1}
        pageSize={8}
        totalItem={32}
        paginationColClassName="sm:-me-2"
      >
        {[1, 2, 3, 4].map((item, index) => (
          <li
            key={index}
            className={index === 0 ? 'page-item active' : 'page-item'}
          >
            <a className="page-link" href="#!">
              {item}
            </a>
          </li>
        ))}
      </StockDetailsPagination>
    </>
  );
};

export default EventsTabContent;
