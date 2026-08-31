import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Badge from 'components/base/Badge';
import MarketingCampaignChart from 'components/charts/e-charts/MarketingCampaignChart';
import { Col, Form, Row } from 'react-bootstrap';

const MarketingCampaign = () => {
  return (
    <>
      <Row className="align-itms-center mb-8 sm:mb-2 md:mb-6">
        <Col sm={8} md={12} lg={8} xl={12} xxl={8} className="xl:mb-2 2xl:mb-0">
          <h3>Marketing Campaign Report</h3>
          <p className="text-subtle lg:mb-0">
            According to the sales data.
          </p>
        </Col>
        <Col sm={4} md={12} lg={4} xl={12} xxl={4}>
          <Form.Select>
            <option value="ally-aagaard">Ally Aagaard</option>
            <option value="alec-haag">Alec Haag</option>
            <option value="aagaard">Aagaard</option>
          </Form.Select>
        </Col>
      </Row>
      <Row className="g-4 items-center">
        <Col sm={8} md={12} lg={8} xl={12} xxl={8}>
          <MarketingCampaignChart style={{ height: '320px', width: '100%' }} />
        </Col>
        <Col
          sm={4}
          md={12}
          lg={4}
          xl={12}
          xxl={4}
          className="flex justify-content-end-xxl mt-0"
        >
          <div className="flex flex-1 justify-center sm:block md:flex lg:block xl:flex 2xl:block">
            <div className="mb-6 me-10 sm:me-0 md:me-10 lg:me-0 xl:me-10 2xl:me-0">
              <div className="flex items-center mb-2">
                <h4 className="mb-0">15,000</h4>
                <Badge variant="phoenix" bg="primary" className="ms-2">
                  +30.63%
                </Badge>
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
                <Badge variant="phoenix" bg="danger" className="ms-2">
                  +13.52%
                </Badge>
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
