import Button from 'components/base/Button';
import SearchBox from 'components/common/SearchBox';
import DealDetailsTimeline from 'components/timelines/DealDetailsTimeline';
import { Activity } from 'data/crm/dealDetailsData';
import { Col, Row } from 'react-bootstrap';

const DealDetailsActivity = ({ activities }: { activities: Activity[] }) => {
  return (
    <>
      <h2 className="mb-6">Activity</h2>
      <Row className="items-center g-4 justify-between">
        <Col sm="auto">
          <SearchBox placeholder="Search Activity" />
        </Col>
        <Col xs="auto">
          <Button variant="phoenix-primary" className="px-10">
            Add Activity
          </Button>
        </Col>
      </Row>
      <DealDetailsTimeline activities={activities} />
    </>
  );
};

export default DealDetailsActivity;
