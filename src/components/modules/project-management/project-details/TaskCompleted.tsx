import { Col, Row, Select } from '@hummingbirdui/react';
import CompletedTaskChart from 'components/charts/e-charts/CompletedTaskChart';

/** `+TotalSalesChart` in mixins/project-management/ProjectDetails.pug */
const TaskCompleted = () => {
  return (
    <>
      <Row className="flex-between-center mb-4 g-4">
        <Col xs="auto">
          <h4 className="text-emphasis">Task completed over time</h4>
          <p className="text-subtle mb-0">
            Hard works done across all projects
          </p>
        </Col>
        <Col xs={8} sm={4}>
          <Select size="sm">
            <option>Mar 1 - 31, 2022</option>
            <option>April 1 - 30, 2022</option>
            <option>May 1 - 31, 2022</option>
          </Select>
        </Col>
      </Row>
      <CompletedTaskChart className="echart-completed-task-chart min-h-50 w-full" />
    </>
  );
};

export default TaskCompleted;
