import { Col, Row, Select } from '@hummingbirdui/react';
import DealForecasrProgressBar from 'components/progress-bars/DealForecasrProgressBar';
import DealForecastTable from 'components/tables/DealForecastTable';

/** `+DealForecast` in mixins/dashboard/CRM/Crm.pug */
const DealForecast = () => {
  return (
    <>
      <Row className="items-start justify-between mb-6 g-4">
        <Col xs="auto">
          <h3>
            Deal Forecast<span className="font-semibold">- $90,303</span>
          </h3>
          <p className="text-subtle mb-1">Show what you offer here</p>
        </Col>
        <Col xs={12} sm={4}>
          <Select size="sm" id="select-ad-forcast-month">
            <option>Mar 1 - 31, 2022</option>
            <option>April 1 - 30, 2022</option>
            <option>May 1 - 31, 2022</option>
          </Select>
        </Col>
      </Row>
      <DealForecasrProgressBar />
      <h4 className="mt-6 mb-4">Deal Forecast by Owner </h4>
      <DealForecastTable />
    </>
  );
};

export default DealForecast;
