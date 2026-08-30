import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Report } from 'data/crm/reportsData';
import { Card, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import FeatherIcon from 'feather-icons-react';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faFolder } from '@fortawesome/free-regular-svg-icons';

const ReportCard = ({ report }: { report: Report }) => {
  return (
    <Card>
      <Card.Body>
        <div className="border-b border-subtle">
          <div className="flex items-start mb-1">
            <Form.Check type="checkbox" />
            <div className="sm:flex items-center ps-4">
              <Link
                to="/apps/crm/report-details"
                className="font-bold text-lg leading-sm line-clamp-1 sm:me-6"
              >
                {report.title}
              </Link>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faCircle}
                  transform="shrink-6 up-1"
                  className={`me-1 text-${report.priority.type}`}
                />
                <span className="font-bold text-md text-default lh-2">
                  {report.priority.label}
                </span>
              </div>
            </div>
          </div>
          <p className="text-md font-semibold text-default ms-6 text mb-6 ps-2">
            {report.subTitle}
          </p>
        </div>
        <Row className="g-1 sm:g-4 mt-2 leading-none">
          <Col sm="auto" className="flex-1 text-truncate">
            <Link to="#!" className="font-semibold text-md">
              <FontAwesomeIcon icon={faFolder} className="me-2" />
              {report.reportsby}
            </Link>
          </Col>
          <Col sm="auto">
            <div className="flex items-center">
              <FeatherIcon
                icon="grid"
                width={16}
                height={16}
                className="me-2"
              />
              <p className="mb-0 text-md font-semibold text-subtle">
                {report.category}
              </p>
            </div>
          </Col>
          <Col sm="auto">
            <div className="flex items-center">
              <FeatherIcon
                icon="clock"
                className="me-2"
                width={16}
                height={16}
              />
              <p className="mb-0 text-md font-semibold text-subtle">
                {report.date}
              </p>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ReportCard;
