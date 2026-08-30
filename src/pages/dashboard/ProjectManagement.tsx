import DatePicker from 'components/base/DatePicker';
import EarlyBirdCard from 'components/cards/EarlyBirdCard';
import ZeroRoadMap from 'components/modules/project-management/dashboard/ZeroRoadMap';
import IssuesDiscovered from 'components/modules/project-management/dashboard/IssuesDiscovered';
import { Col, Row } from 'react-bootstrap';
import TodoList from 'components/modules/project-management/todo-list/TodoList';
import { stats } from 'data/project-management/stats';
import Stat from 'components/modules/project-management/dashboard/Stat';
import ProjectElevenProgress from 'components/modules/project-management/dashboard/ProjectElevenProgress';
import ProjectDashboard from 'components/modules/project-management/dashboard/ProjectDashboard';
import ProjectActivityCard from 'components/cards/ProjectActivityCard';

const ProjectManagement = () => {
  return (
    <>
      <Row className="gy-4 mb-10 justify-between">
        <Col md={9} xs="auto">
          <h2 className="mb-2 text-emphasis">Projects Dashboard</h2>
          <h5 className="text-subtle font-semibold">
            Here’s what’s going on at your business right now
          </h5>
        </Col>
        <Col md={3} xs="auto">
          <DatePicker
            options={{
              defaultDate: 'May 1, 2023'
            }}
          />
        </Col>
      </Row>
      <Row className="mb-4 gy-10">
        <Col xs={12} xxl={2}>
          <Row className="items-center g-4 2xl:g-0 h-full content-between">
            {stats.map(stat => (
              <Col
                xs={12}
                sm={6}
                md={3}
                lg={6}
                xl={3}
                xxl={12}
                key={stat.title}
              >
                <Stat stat={stat} key={stat.title} />
              </Col>
            ))}
          </Row>
        </Col>
        <Col xs={12} xl={6} xxl={5}>
          <ZeroRoadMap />
        </Col>
        <Col xs={12} xl={6} xxl={5}>
          <EarlyBirdCard />
        </Col>
      </Row>
      <div className="-mx-6 px-6 lg:-mx-10 lg:px-10 bg-soft pt-12 pb-4 border-y mb-4">
        <Row>
          <Col xs={12} xl={7} xxl={6}>
            <IssuesDiscovered />
          </Col>
          <Col xs={12} xl={5} xxl={6}>
            <ProjectElevenProgress />
          </Col>
        </Row>
      </div>
      <div className="lg:-mx-6 mb-4">
        <Row className="g-4">
          <Col xs={12} xl={6} xxl={7}>
            <TodoList />
          </Col>
          <Col xs={12} xl={6} xxl={5}>
            <ProjectActivityCard />
          </Col>
        </Row>
      </div>

      <div className="-mx-6 px-6 lg:-mx-10 lg:px-10 bg-soft pt-10 border-t">
        <ProjectDashboard />
      </div>
    </>
  );
};

export default ProjectManagement;
