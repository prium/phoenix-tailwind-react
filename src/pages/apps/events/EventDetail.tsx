import PageBreadcrumb from 'components/common/PageBreadcrumb';
import { defaultBreadcrumbItems } from 'data/commonData';
import coverImg from 'assets/img/generic/34.png';
import { Col, Row } from 'react-bootstrap';
import EventTitleCard from 'components/cards/EventTitleCard';
import ResponsesAndShare from 'components/modules/events/ResponsesAndShare';
import Location from 'components/modules/events/Location';
import Badge from 'components/base/Badge';
import Events from 'components/modules/events/Events';
import EventsSingersSection from 'components/modules/events/EventsSingersSection';
import EventsTopicCovered from 'components/list-items/EventsTopicCovered';
import EventsOrganized from 'components/modules/events/EventsOrganized';
import { SingerPhotos, events } from 'data/eventsData';

const EventDetail = () => {
  return (
    <div className="pb-16">
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <h2 className="mb-6 lg:mb-10">Event details</h2>
      <img
        src={coverImg}
        alt=""
        className="rounded-md w-full fit-cover mb-8 md:mb-10 xl:mb-14"
        style={{ minHeight: '250px' }}
      />
      <Row className="lg:gx-16">
        <Col xl={8} className="xl:border-e">
          <EventTitleCard className="mb-16" />
          <h2 className="mb-4">About this event</h2>
          <p className="text-justify text-muted mb-10 2xl:mb-14">
            The Festival Season hopes to continue its rescheduled events in 2023
            during the spring block. This will be a continuation of the
            tradition for the loyal fanbase to watch a jam-packed day full of
            exciting top-notch performances. With a unique lineup, you’ll know
            what to expect and get ready to embrace the festivity. Moreover,
            we’ve added a detailed list of the performers, with details of
            dates, lineups and prospective entry requirements. We will keep you
            posted with necessary updates regarding the event.
          </p>
          <EventsSingersSection photos={SingerPhotos} />
          <EventsTopicCovered />
          <h4 className="mb-4 text-highlight 2xl:text-xl">Refund Policy:</h4>
          <ul className="mb-10 ps-6">
            <li>Contact the organizer to request a refund.</li>
            <li>Eventbrite’s fee is nonrefundable.</li>
          </ul>
          <ResponsesAndShare />
        </Col>
        <Col xl={4}>
          <EventsOrganized />
          <Location />
          <h3 className="mb-4">Tags</h3>
          <div className="flex flex-wrap mb-14">
            <Badge variant="tag" className="me-2">
              Music
            </Badge>
            <Badge variant="tag" className="me-2">
              CONCERT
            </Badge>
            <Badge variant="tag">Greatest show on earth</Badge>
          </div>
          <div className="border-t border-subtle">
            <Events events={events} title="Upcoming events" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default EventDetail;
