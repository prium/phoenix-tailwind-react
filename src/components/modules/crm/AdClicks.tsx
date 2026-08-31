import AdClicksChart from 'components/charts/e-charts/AdClicksChart';
import { Col, Form, Row } from 'react-bootstrap';

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
          <Form.Select size="sm">
            <option value="mar">Mar 1 - 31, 2023</option>
            <option value="apr">April 1 - 30, 2023</option>
            <option value="may">May 1 - 31, 2023</option>
          </Form.Select>
        </Col>
      </Row>
      <AdClicksChart style={{ height: '385px', width: '100%' }} />
    </div>
  );
};

export default AdClicks;
