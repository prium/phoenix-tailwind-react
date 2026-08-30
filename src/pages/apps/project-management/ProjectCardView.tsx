import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from '@hummingbirdui/react';
import { ColumnDef } from '@tanstack/react-table';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import ProjectsTopSection from 'components/modules/project-management/ProjectsTopSection';
import CardViewItem from 'components/modules/project-management/card-view/CardViewItem';
import { defaultBreadcrumbItems } from 'data/commonData';
import { Project, projects } from 'data/project-management/projects';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { Link } from 'react-router';

export const columns: ColumnDef<Project>[] = [
  {
    // For filtering and searching projects by status
    id: 'status',
    accessorFn: ({ status }) => status.label
  },
  {
    // For searching projects by name
    accessorKey: 'name'
  }
];

/** apps/project-management/project-card-view.pug (`+ProjectCardView`) */
const ProjectCardView = () => {
  const table = useAdvanceTable<Project>({
    data: projects,
    columns,
    pageSize: 10,
    pagination: true,
    sortable: true
  });

  return (
    <div>
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <AdvanceTableProvider {...table}>
        <Row className="gx-10 gy-4 mb-6 items-center">
          <Col xs="auto">
            <h2 className="mb-0">
              Projects
              <span className="font-normal text-subtle ms-4">
                ({projects.length})
              </span>
            </h2>
          </Col>
          <Col xs="auto">
            <Link
              className="btn btn-primary px-8"
              to="/apps/project-management/create-new"
            >
              <FontAwesomeIcon icon={faPlus} className="me-2" />
              Add new project
            </Link>
          </Col>
        </Row>
        <ProjectsTopSection activeView="card" />
        <Row xs={1} sm={2} xl={3} xxl={4} className="g-4 mb-16">
          {table
            .getRowModel()
            .rows.map(row => row.original)
            .map(project => (
              <Col key={project.id}>
                <CardViewItem project={project} />
              </Col>
            ))}
        </Row>
      </AdvanceTableProvider>
    </div>
  );
};

export default ProjectCardView;
