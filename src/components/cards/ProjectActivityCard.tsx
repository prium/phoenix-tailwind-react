import { Card } from '@hummingbirdui/react';
import ActivityTimeline from 'components/timelines/ActivityTimeline';
import { activityTimelineData } from 'data/project-management/activityTimelineData';

/** `+RecentActivityCard` in mixins/dashboard/project-management/RecentActivity.pug */
const ProjectActivityCard = () => {
  return (
    <Card className="h-full">
      <Card.Body>
        <div className="card-title mb-1">
          <h3 className="mb-1 text-emphasis">Activity</h3>
        </div>
        <p className="text-base text-subtle mb-6">
          Recent activity across all projects
        </p>
        <ActivityTimeline data={activityTimelineData} />
      </Card.Body>
    </Card>
  );
};

export default ProjectActivityCard;
