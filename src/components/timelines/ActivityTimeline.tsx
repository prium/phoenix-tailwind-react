import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Timeline from 'components/base/Timeline';
import { ActivityTimelineData } from 'data/project-management/activityTimelineData';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';

interface ActivityTimelineProps {
  data: ActivityTimelineData[];
}

const ActivityTimeline = ({ data }: ActivityTimelineProps) => {
  return (
    <Timeline variant="vertical">
      {data.map((item, index) => (
        <Timeline.Item className="relative" key={item.id}>
          <Row className="g-md-3">
            <Col xs={12} md="auto" className="flex">
              <Timeline.OppositeContent>
                <p className="text-sm font-semibold text-subtle text-opacity-85 text-end">
                  {item.oppositeContent.date}
                  <br className="hidden d-md-block" />{' '}
                  {item.oppositeContent.time}
                </p>
              </Timeline.OppositeContent>
              <Timeline.Separator className="position-md-relative">
                <Timeline.Dot className="bg-primary-subtle">
                  <FontAwesomeIcon
                    icon={item.separator.icon}
                    className="text-primary-dark text-sm"
                  />
                </Timeline.Dot>
                {index !== data.length - 1 && (
                  <Timeline.Bar className="h-100 border-dashed" />
                )}
              </Timeline.Separator>
            </Col>
            <Col>
              <Timeline.Content>
                <h5 className="text-md lh-sm">{item.content.title}</h5>
                <p className="text-md">
                  by{' '}
                  <Link className="font-semibold" to="#!">
                    {item.content.user}
                  </Link>
                </p>
                <p
                  className={classNames('text-md text-muted', {
                    'mb-5': index !== data.length - 1,
                    'mb-0': index === data.length - 1
                  })}
                >
                  {item.content.details}
                </p>
              </Timeline.Content>
            </Col>
          </Row>
        </Timeline.Item>
      ))}
    </Timeline>
  );
};

export default ActivityTimeline;
