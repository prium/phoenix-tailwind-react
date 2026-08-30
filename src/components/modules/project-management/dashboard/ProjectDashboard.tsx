import ProjectDashboardTable from 'components/tables/ProjectDashboardTable';
import React from 'react';

const ProjectDashboard = () => {
  return (
    <>
      <h3>Projects</h3>
      <p className="text-subtle leading-sm mb-6">
        Brief summary of all projects
      </p>
      <ProjectDashboardTable />
    </>
  );
};

export default ProjectDashboard;
