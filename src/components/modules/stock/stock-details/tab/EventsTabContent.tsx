import SearchBox from 'components/common/SearchBox';
import { EventLists } from 'data/stock/stockDetails';
import { Col, Pagination, Row } from 'react-bootstrap';
import UpcomingEventCard from 'components/cards/UpcomingEventCard';
import EventsLaterThisWeekCard from 'components/cards/EventsLaterThisWeekCard';
import DatePicker from 'components/base/DatePicker';
import PreviousEventItem from './PreviousEventItem';
import StockDetailsPagination from 'components/common/StockDetailsPagination';

const EventsTabContent = ({ eventLists }: { eventLists: EventLists }) => {
  return (
    <>
      <Row className="g-4 md:g-8 flex-between-center mb-4">
        <Col xs="auto">
          <h4 className="font-black">Upcoming Events</h4>
          <p className="mb-0 text-subtle">
            Brief summary of all projects
          </p>
        </Col>
        <Col xs={12} sm="auto">
          <SearchBox placeholder="Search events" className="w-full" />
        </Col>
      </Row>
      <div>
        {eventLists.upcomingEvents.map(event => (
          <UpcomingEventCard key={event.id} upcomingEventItem={event} />
        ))}
      </div>
      <h4 className="mb-4">Later This Week</h4>
      <Row className="g-6 mb-6">
        {eventLists.eventsLaterThisWeek.map(event => (
          <Col xxl={6} key={event.id}>
            <EventsLaterThisWeekCard eventsLaterThisWeek={event} />
          </Col>
        ))}
      </Row>
      <Row className="g-4 lg:g-8 flex-between-center mb-4">
        <Col xs={6}>
          <h4 className="mb-0">Previous Events</h4>
        </Col>
        <Col xs={6} className="flex flex-end-center">
          <DatePicker
            placeholder="dd/mm/yyyy"
            className="form-control-sm pe-8"
            style={{ maxWidth: 180 }}
          />
        </Col>
      </Row>
      <Row className="g-6 2xl:gx-14 mb-4">
        {eventLists.previousEvents.map(event => (
          <Col xs={12} sm={6} key={event.id}>
            <PreviousEventItem previousEvent={event} />
          </Col>
        ))}
      </Row>
      <StockDetailsPagination currentPage={1} pageSize={8} totalItem={32}>
        {[1, 2, 3, 4].map((item, index) => (
          <Pagination.Item key={index} active={index === 0}>
            {item}
          </Pagination.Item>
        ))}
      </StockDetailsPagination>
    </>
  );
};

export default EventsTabContent;
