import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row, cn } from '@hummingbirdui/react';
import Timeline from 'components/base/Timeline';
import { ActivityTimelineData } from 'data/project-management/activityTimelineData';
import { Link } from 'react-router';

interface ActivityTimelineProps {
  data: ActivityTimelineData[];
}

/** `+RecentActivityTimeline` in mixins/dashboard/project-management/RecentActivity.pug */
const ActivityTimeline = ({ data }: ActivityTimelineProps) => {
  return (
    <Timeline variant="vertical" className="timeline-with-details">
      {data.map((item, index) => (
        <Timeline.Item className="relative" key={item.id}>
          <Row className="md:g-4">
            <Col xs={12} md="auto" className="flex">
              <Timeline.OppositeContent>
                <p className="text-sm font-semibold text-subtle/85 text-end">
                  {item.oppositeContent.date}
                  <br className="hidden md:block" /> {item.oppositeContent.time}
                </p>
              </Timeline.OppositeContent>
              <Timeline.Separator className="md:relative">
                <Timeline.Dot className="rounded-7 shadow-none bg-primary-subtle">
                  <FontAwesomeIcon
                    icon={item.separator.icon}
                    className="text-primary-dark text-sm"
                  />
                </Timeline.Dot>
                {index !== data.length - 1 && (
                  <Timeline.Bar className="border-dashed" />
                )}
              </Timeline.Separator>
            </Col>
            <Col>
              <Timeline.Content>
                <h5 className="text-md mb-1 leading-sm">
                  {item.content.title}
                </h5>
                <p className="text-md">
                  by{' '}
                  <Link className="font-semibold" to="#!">
                    {item.content.user}
                  </Link>
                </p>
                <p
                  className={cn(
                    index !== data.length - 1 ? 'mb-8' : 'mb-0',
                    'text-md text-muted'
                  )}
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
