import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from '@hummingbirdui/react';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import ProjectsTopSection from 'components/modules/project-management/ProjectsTopSection';
import ProjectListTable, {
  projectListTableColumns
} from 'components/tables/ProjectListTable';
import { defaultBreadcrumbItems } from 'data/commonData';
import { listViewProjects, projects } from 'data/project-management/projects';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { Link } from 'react-router';

/** apps/project-management/project-list-view.pug (`+ProjectList`) */
const ProjectListView = () => {
  const table = useAdvanceTable({
    data: listViewProjects,
    columns: projectListTableColumns,
    pageSize: 6,
    pagination: true,
    sortable: true
  });

  return (
    <div>
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <div className="mb-16">
        <AdvanceTableProvider {...table}>
          <Row className="mb-6 gx-10 gy-4 items-center">
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
          <ProjectsTopSection activeView="list" />
          <ProjectListTable />
        </AdvanceTableProvider>
      </div>
    </div>
  );
};

export default ProjectListView;
