import { Col, Row } from '@hummingbirdui/react';
import ProjectDashboardTable from 'components/tables/ProjectDashboardTable';

/** `+ProjectSummery` in mixins/dashboard/project-management/ProjectSummery.pug */
const ProjectDashboard = () => {
  return (
    <div id="projectSummary">
      <Row className="items-end justify-between pb-6 g-4">
        <Col xs="auto">
          <h3 className="mb-1">Projects</h3>
          <p className="text-subtle leading-sm mb-0">
            Brief summary of all projects
          </p>
        </Col>
      </Row>
      <ProjectDashboardTable />
    </div>
  );
};

export default ProjectDashboard;
