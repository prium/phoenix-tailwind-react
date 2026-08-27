import EcomTotalSellsChart from 'components/charts/e-charts/EcomTotalSellsChart';
import { Col, Row, Select } from '@hummingbirdui/react';

/** `+TotalSalesChart` in phoenix-tailwind e-commerce/TotalSalesChart.pug */
const EcomTotalSells = () => {
  return (
    <>
      <Row className="flex-between-center mb-6 g-4">
        <Col xs="auto">
          <h3>Total sells</h3>
          <p className="text-subtle leading-sm mb-0">
            Payment received across all channels
          </p>
        </Col>
        <Col xs={8} sm={4}>
          <Select size="sm" id="select-gross-revenue-month">
            <option value="mar">Mar 1 - 31, 2023</option>
            <option value="apr">April 1 - 30, 2023</option>
            <option value="may">May 1 - 31, 2023</option>
          </Select>
        </Col>
      </Row>
      <EcomTotalSellsChart />
    </>
  );
};

export default EcomTotalSells;
