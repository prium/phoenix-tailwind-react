import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UilStopwatch } from '@iconscout/react-unicons';
import classNames from 'classnames';
import Badge from 'components/base/Badge';
import Button from 'components/base/Button';
import RevealDropdown, {
  RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import ProjectDetailsSummary from 'components/modules/project-management/project-details/ProjectDetailsSummary';
import TaskCompleted from 'components/modules/project-management/project-details/TaskCompleted';
import TeamMembers from 'components/modules/project-management/project-details/TeamMembers';
import WorkLoads from 'components/modules/project-management/project-details/WorkLoads';
import FileListItem from 'components/modules/project-management/todo-list/FileListItem';
import ActivityTimeline from 'components/timelines/ActivityTimeline';
import { activityTimelineData } from 'data/project-management/activityTimelineData';
import { attachments } from 'data/project-management/todoListData';
import { useMainLayoutContext } from 'providers/MainLayoutProvider';
import { useEffect } from 'react';
import { Col, Dropdown, Row } from 'react-bootstrap';
import { Link } from 'react-router';

const ProjectDetails = () => {
  const { setContentClass } = useMainLayoutContext();

  useEffect(() => {
    setContentClass('px-0 pt-navbar');

    return () => {
      setContentClass('');
    };
  }, []);

  return (
    <Row className="g-0">
      <Col xs={12} xxl={8} className="px-0 bg-default">
        <div className="px-6 lg:px-10 pt-10 pb-16">
          <div className="mb-8">
            <div className="flex justify-between">
              <h2 className="text-emphasis font-black mb-2">
                Retrieving Old Repos to Redirect to a new URL
              </h2>
              <RevealDropdownTrigger>
                <RevealDropdown>
                  <Dropdown.Item>Edit</Dropdown.Item>
                  <Dropdown.Item className="text-danger">Delete</Dropdown.Item>
                  <Dropdown.Item>Downlaod</Dropdown.Item>
                  <Dropdown.Item>Report abuse</Dropdown.Item>
                </RevealDropdown>
              </RevealDropdownTrigger>
            </div>
            <Badge
              variant="phoenix"
              bg="primary"
              iconPosition="end"
              icon={<UilStopwatch fill='currentColor' size={12} className="ms-1" />}
            >
              Ongoing
            </Badge>
          </div>
          <Row className="gx-0 sm:gx-8 gy-14 mb-14">
            <Col xs={12} xl={3} xxl={4} className="xl:pe-0">
              <ProjectDetailsSummary />
            </Col>
            <Col xs={12} xl={9} xxl={8}>
              <TaskCompleted />
            </Col>
            <Col xs={12} sm={5} lg={4} xl={3} xxl={4}>
              <WorkLoads />
            </Col>
            <Col xs={12} sm={7} lg={8} xl={5}>
              <TeamMembers />
            </Col>
          </Row>
          <div>
            <h3 className="text-emphasis mb-6">Project overview</h3>
            <p className="text-muted mb-6">
              The new redirection team is happy to announce that we’ve fixed all
              our unresponsive URLs and redirected them to new URLs. The
              tremendous assistance from our support team and the dev team, as
              well as that of the team lead’s, this team has made an impossible
              possible within a week. They didn’t stop for a moment, and we got
              our pages working again for all the valuable users.{' '}
            </p>
            <p className="text-muted mb-0">
              Join us in celebrating the massive success of data transferring
              and getting us a huge revenue by eating out. Free public viewing
              and a buffet is offered for the great team as well as for the
              other teams working with us. We’ll be checking out places for the
              best option available at hands and we’ll let you know the schedule
              once we decide on one...
              <Link className="font-semibold" to="#!">
                read more
              </Link>
            </p>
          </div>
        </div>
      </Col>
      <Col xs={12} xxl={4} className="px-0 2xl:border-s">
        <div className="h-full">
          <div className="bg-light dark__bg-gray-1100 h-full">
            <div className="p-6 lg:p-10">
              <h3 className="text-highlight mb-6 font-bold">
                Recent activity
              </h3>
              <ActivityTimeline data={activityTimelineData} />
            </div>
            <div>
              <div className="px-6 lg:px-10 mb-4">
                <h4 className="mb-0">Files</h4>
              </div>
              <div className="mb-4">
                {attachments.map((attachment, index) => (
                  <FileListItem
                    key={attachment.name}
                    attachment={attachment}
                    className={classNames('px-10 lg:px-10', {
                      'border-t': index === 0
                    })}
                  />
                ))}
              </div>
              <div className="px-8 md:px-10 mb-16">
                <Button
                  variant="link"
                  className="no-underline p-0"
                  startIcon={<FontAwesomeIcon icon={faPlus} className="me-1" />}
                >
                  Add file(s)
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default ProjectDetails;
