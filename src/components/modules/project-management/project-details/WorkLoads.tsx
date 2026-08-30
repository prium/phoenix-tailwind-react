import EcomTopCouponsChart from 'components/charts/e-charts/EcomTopCouponsChart';
import ChartLegend from 'components/common/ChartLegend';
import { Col, Row } from 'react-bootstrap';

const WorkLoads = () => {
  return (
    <div>
      <div className="mb-8">
        <h4 className="text-emphasis">Work loads</h4>
        <h6 className="text-subtle">Last 7 days</h6>
      </div>
      <div className="mb-8">
        <EcomTopCouponsChart />
      </div>
      <Row className="justify-center">
        <Col xs="auto" sm={12}>
          <div className="flex flex-col gap-2">
            <ChartLegend
              bulletBg="primary"
              label="Shantinan Mekalan"
              value="72%"
            />
            <ChartLegend
              bulletBg="primary-lighter"
              label="Makena Zikonn"
              value="18%"
            />
            <ChartLegend bulletBg="info" label="Meena Kumari" value="70%" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default WorkLoads;
