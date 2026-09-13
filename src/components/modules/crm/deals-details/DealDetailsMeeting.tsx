import { faFilter, faPlus, faSort } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import MeetingCard from 'components/cards/MeetingCard';
import SearchBox from 'components/common/SearchBox';
import { Meeting } from 'data/crm/dealDetailsData';

/** `#tab-meeting` + `+MeetingSearchBar('justify-start')` in crm/DealDetails.pug */
const DealDetailsMeeting = ({ meetings }: { meetings: Meeting[] }) => {
  return (
    <>
      <h2 className="mb-6">Meeting</h2>
      <Row className="items-center g-2 flex-wrap justify-start mb-4">
        <Col xs={12} sm="auto">
          <SearchBox placeholder="Search meeting" className="mb-2 sm:mb-0" />
        </Col>
        <Col xs="auto" className="flex md:grow">
          <p className="mb-0 text-md text-subtle font-bold">
            <FontAwesomeIcon
              icon={faFilter}
              className="me-1 font-extrabold text-sm"
            />
            23 tasks
          </p>
          <button
            type="button"
            className="btn btn-link p-0 ms-4 text-md text-primary font-bold no-underline"
          >
            <FontAwesomeIcon
              icon={faSort}
              className="me-1 font-extrabold text-sm"
            />
            Sorting
          </button>
        </Col>
        <Col xs="auto">
          <Button
            variant="primary"
            startIcon={<FontAwesomeIcon icon={faPlus} className="me-2" />}
          >
            Add Meeting
          </Button>
        </Col>
      </Row>
      <Row className="g-4">
        {meetings.map(meeting => (
          <Col xxl={6} key={meeting.id}>
            <MeetingCard meeting={meeting} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default DealDetailsMeeting;
