import { Col, Row, Select } from '@hummingbirdui/react';
import AdClicksChart from 'components/charts/e-charts/AdClicksChart';

/** "Ad Clicks" section in dashboard/crm.pug */
const AdClicks = () => {
  return (
    <div>
      <Row className="items-start justify-between mb-6 g-4">
        <Col xs="auto">
          <h3>Ad Clicks</h3>
          <p className="text-subtle leading-sm mb-0">
            Check effectiveness of your ads
          </p>
        </Col>
        <Col xs={12} sm={4}>
          <Select size="sm" id="select-ad-clicks-month">
            <option>Mar 1 - 31, 2022</option>
            <option>April 1 - 30, 2022</option>
            <option>May 1 - 31, 2022</option>
          </Select>
        </Col>
      </Row>
      <AdClicksChart
        className="min-h-96.25 w-full"
        style={{ height: 'auto', width: '100%' }}
      />
    </div>
  );
};

export default AdClicks;
