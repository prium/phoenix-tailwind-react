import { Col, Row } from '@hummingbirdui/react';
import EcomTopCouponsChart from 'components/charts/e-charts/EcomTopCouponsChart';
import ChartLegend from 'components/common/ChartLegend';
import { workLoadLegends } from 'data/project-management/projectDetailsData';

/** `+WorkLoads` in mixins/project-management/ProjectDetails.pug */
const WorkLoads = () => {
  return (
    <>
      <div className="mb-8">
        <h4 className="text-emphasis">Work loads</h4>
        <h6 className="text-subtle">Last 7 days</h6>
      </div>
      <EcomTopCouponsChart className="echart-top-coupons mb-8" />
      <Row className="justify-center">
        <Col xs="auto" sm={12}>
          {workLoadLegends.map(legend => (
            <ChartLegend
              key={legend.label}
              bulletClass={legend.bulletClass}
              label={legend.label}
              value={legend.value}
            />
          ))}
        </Col>
      </Row>
    </>
  );
};

export default WorkLoads;
