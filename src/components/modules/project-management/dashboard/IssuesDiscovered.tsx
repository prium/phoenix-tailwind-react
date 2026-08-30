import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import IssuesDiscoveredChart from 'components/charts/e-charts/IssuesDiscoveredChart';

const issueStats = [
  { type: 'Product design', value: 78, bulletClass: 'bg-info-light' },
  { type: 'Development', value: 63, bulletClass: 'bg-warning-light' },
  { type: 'QA & Testing', value: 56, bulletClass: 'bg-danger-light' },
  { type: 'Customer queries', value: 36, bulletClass: 'bg-success-light' },
  { type: 'R & D', value: 24, bulletClass: 'bg-primary' }
];

/** `+IssueChart` in mixins/dashboard/project-management/IssueChart.pug */
const IssuesDiscovered = () => {
  return (
    <Row className="g-4 mb-4">
      <Col xs={12} md={6}>
        <h3 className="text-emphasis text-nowrap mb-1">Issues Discovered</h3>
        <p className="text-subtle md:mb-12">Newly found and yet to be solved</p>

        <div className="flex items-center justify-between">
          <p className="mb-0 font-bold">Issue type </p>
          <p className="mb-0 text-md">
            Total count <span className="font-bold">257</span>
          </p>
        </div>
        <hr className="bg-muted mb-2 mt-2" />

        {issueStats.map((issue, index) => (
          <div
            className={
              index === issueStats.length - 1
                ? 'flex items-center'
                : 'flex items-center mb-1'
            }
            key={issue.type}
          >
            <span
              className={`inline-block ${issue.bulletClass} bullet-item me-2`}
            />
            <p className="mb-0 font-semibold text-default leading-sm flex-1">
              {issue.type}
            </p>
            <h5 className="mb-0 text-default">{issue.value}</h5>
          </div>
        ))}

        <Button variant="outline-primary" className="mt-8">
          See Details
          <FontAwesomeIcon
            icon={faAngleRight}
            className="ms-2 text-sm text-center"
          />
        </Button>
      </Col>
      <Col xs={12} md={6}>
        <div className="relative sm:mb-6 xl:mb-0">
          <IssuesDiscoveredChart />
        </div>
      </Col>
    </Row>
  );
};

export default IssuesDiscovered;
