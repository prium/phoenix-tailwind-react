import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import IssuesDiscoveredChart from 'components/charts/e-charts/IssuesDiscoveredChart';
import { Col, Row } from 'react-bootstrap';

const issueStats = [
  { type: 'Product design', value: 78, bg: 'info-light' },
  { type: 'Development', value: 63, bg: 'warning-light' },
  { type: 'QA & Testing', value: 56, bg: 'danger-light' },
  { type: 'Customer queries', value: 36, bg: 'success-light' },
  { type: 'R & D', value: 24, bg: 'primary' }
];

const IssuesDiscovered = () => {
  return (
    <Row className="g-3 mb-3">
      <Col xs={12} md={6}>
        <h3 className="text-emphasis text-nowrap">Issues Discovered</h3>
        <p className="text-subtle mb-md-7">
          Newly found and yet to be solved
        </p>
        <div className="flex align-items-center justify-content-between">
          <p className="mb-0 font-bold">Issue type </p>
          <p className="mb-0 text-md">
            Total count <span className="font-bold">257</span>
          </p>
        </div>
        <hr className="bg-muted mb-2 mt-2" />

        {issueStats.map(issue => (
          <div className="flex align-items-center mb-1" key={issue.type}>
            <span
              className={`d-inline-block bg-${issue.bg} bullet-item me-2`}
            />
            <p className="mb-0 font-semibold text-default lh-sm flex-1">
              {issue.type}
            </p>
            <h5 className="mb-0 text-default">{issue.value}</h5>
          </div>
        ))}
        <Button variant="outline-primary" className="mt-5">
          See Details
          <FontAwesomeIcon icon={faAngleRight} className="ms-2 text-sm" />
        </Button>
      </Col>
      <Col xs={12} md={6}>
        <div className="relative mb-sm-4 mb-xl-0">
          <IssuesDiscoveredChart />
        </div>
      </Col>
    </Row>
  );
};

export default IssuesDiscovered;
