import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from '@hummingbirdui/react';
import AnalyticsSalesTrendsChart from 'components/charts/e-charts/AnalyticsSalesTrendsChart';

/** `+SalesTrends` in mixins/crm/Analytics.pug */
const SalesTrends = () => {
  return (
    <>
      <Row className="justify-between mb-6">
        <Col xs={12}>
          <h3>Sales Trends</h3>
          <p className="text-subtle">
            Updated inventory &amp; the sales report.
          </p>
        </Col>
        <Col xs={12} className="flex mt-0">
          <div className="flex">
            <FontAwesomeIcon icon={faCircle} className="text-info-light me-2" />
            <h6 className="mb-0 me-4 leading-normal">Profit</h6>
          </div>
          <div className="flex">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-primary-lighter me-2"
            />
            <h6 className="mb-0 leading-normal">Revenue</h6>
          </div>
        </Col>
      </Row>
      {/* gold `.h-67.5` = 270px; inline height needed as echarts-for-react
          merges a default `height: 300` into the style prop */}
      <AnalyticsSalesTrendsChart
        className="h-67.5 w-full"
        style={{ height: 270, width: '100%' }}
      />
    </>
  );
};

export default SalesTrends;
