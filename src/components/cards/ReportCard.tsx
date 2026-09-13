import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from '@hummingbirdui/react';
import { Report } from 'data/crm/reportsData';
import { Link } from 'react-router';
import FeatherIcon from 'feather-icons-react';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faFolder } from '@fortawesome/free-regular-svg-icons';

/** `+Reports(config)` in ../phoenix-tailwind/src/pug/mixins/crm/Reports.pug */
const ReportCard = ({ report }: { report: Report }) => {
  return (
    <Card className="h-full">
      <Card.Body>
        <div className="border-b border-subtle">
          <div className="flex items-center mb-1">
            <div className="form-check mb-0">
              <input className="form-check-input" type="checkbox" />
            </div>
            <div className="sm:flex items-center ps-2">
              <Link
                to="/apps/crm/report-details"
                className="font-bold text-lg leading-sm title line-clamp-1 sm:me-6"
              >
                {report.title}
              </Link>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faCircle}
                  transform="shrink-6 up-1"
                  className={`me-1 ${report.priority.iconClass}`}
                />
                <span className="font-bold text-md text-default lh-2">
                  {report.priority.label}
                </span>
              </div>
            </div>
          </div>
          <p className="text-md font-semibold text-default ms-6 mb-6 ps-2">
            {report.subTitle}
          </p>
        </div>
        <div className="row g-1 sm:g-4 mt-2 leading-none">
          <div className="col-12 sm:col-auto flex-1 text-truncate">
            <Link to="#!" className="font-semibold text-md">
              <FontAwesomeIcon icon={faFolder} className="me-2 reportsby" />
              {report.reportsby}
            </Link>
          </div>
          <div className="col-12 sm:col-auto">
            <div className="flex items-center">
              <FeatherIcon
                icon="grid"
                width={16}
                height={16}
                className="me-2 stroke-2"
              />
              <p className="mb-0 text-md font-semibold text-subtle reports">
                {report.category}
              </p>
            </div>
          </div>
          <div className="col-12 sm:col-auto">
            <div className="flex items-center">
              <FeatherIcon
                icon="clock"
                width={16}
                height={16}
                className="me-2 stroke-2"
              />
              <p className="mb-0 text-md font-semibold text-subtle date">
                {report.date}
              </p>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ReportCard;
