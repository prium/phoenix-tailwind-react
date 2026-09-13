import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row, Select } from '@hummingbirdui/react';
import MarketingCampaignChart from 'components/charts/e-charts/MarketingCampaignChart';

/** `+MarketingCampaign` in mixins/crm/Analytics.pug */
const MarketingCampaign = () => {
  return (
    <>
      <Row className="mb-8 sm:mb-2 md:mb-6">
        <Col sm={8} md={12} lg={8} xl={12} xxl={8} className="xl:mb-2 2xl:mb-0">
          <h3>Marketing Campaign Report</h3>
          <p className="text-subtle lg:mb-0">According to the sales data.</p>
        </Col>
        <Col sm={4} md={12} lg={4} xl={12} xxl={4}>
          <Select>
            <option>Ally Aagaard</option>
            <option>Alec Haag</option>
            <option>Aagaard</option>
          </Select>
        </Col>
      </Row>
      <Row className="g-4 items-center">
        <Col sm={8} md={12} lg={8} xl={12} xxl={8}>
          <MarketingCampaignChart
            className="min-h-80 w-full"
            style={{ height: 'auto', width: '100%' }}
          />
        </Col>
        <Col
          sm={4}
          md={12}
          lg={4}
          xl={12}
          xxl={4}
          className="flex 2xl:justify-end mt-0"
        >
          <div className="flex flex-1 justify-center sm:block md:flex lg:block xl:flex 2xl:block">
            <div className="mb-6 me-10 sm:me-0 md:me-10 lg:me-0 xl:me-10 2xl:me-0">
              <div className="flex items-center mb-2">
                <h4 className="mb-0">15,000</h4>
                <span className="badge badge-phoenix-primary ms-2">
                  +30.63%
                </span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faCircle}
                  className="text-warning-light me-2"
                />
                <h6 className="mb-0">Online Campaign</h6>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <h4 className="mb-0">5,000</h4>
                <span className="badge badge-phoenix-danger ms-2">+13.52%</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faCircle}
                  className="text-primary-light me-2"
                />
                <h6 className="mb-0">Offline Campaign</h6>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default MarketingCampaign;
