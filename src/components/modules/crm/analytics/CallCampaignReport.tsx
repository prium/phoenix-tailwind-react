import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from '@hummingbirdui/react';
import AnalyticsCallCampaignChart from 'components/charts/e-charts/AnalyticsCallCampaignChart';

/** `+CallCampaign` in mixins/crm/Analytics.pug */
const CallCampaignReport = () => {
  return (
    <>
      <Row className="justify-between mb-6">
        <Col xs="auto">
          <h3>Call Campaign Reports</h3>
          <p className="text-subtle">All call campaigns succeeded.</p>
        </Col>
        <Col xs={12} className="flex mt-0">
          <div className="flex">
            <FontAwesomeIcon icon={faCircle} className="text-primary me-2" />
            <h6 className="mb-0 me-4 leading-normal">Campaign</h6>
          </div>
        </Col>
      </Row>
      {/* gold `.h-72.5` = 290px; inline height needed as echarts-for-react
          merges a default `height: 300` into the style prop */}
      <AnalyticsCallCampaignChart
        className="h-72.5 w-full"
        style={{ height: 290, width: '100%' }}
      />
    </>
  );
};

export default CallCampaignReport;
