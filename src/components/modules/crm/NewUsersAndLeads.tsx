import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from '@hummingbirdui/react';
import BasicLineChart from 'components/charts/e-charts/BasicLineChart';
import FeatherIcon from 'feather-icons-react';
import { getPastDates } from 'helpers/utils';

/** `+NewUserList` in mixins/dashboard/CRM/NewUserList.pug */
const NewUsersAndLeads = () => {
  return (
    <>
      <div className="mb-4">
        <h3>New Users &amp; Leads</h3>
        <p className="text-subtle mb-0">Payment received across all channels</p>
      </div>
      <Row className="g-10">
        <Col md={6} className="mb-2 sm:mb-0">
          <div className="flex items-center">
            <FeatherIcon icon="users" className="me-2 text-info size-6" />
            <h4 className="text-subtle mb-0">
              New Users :<span className="text-emphasis"> 42</span>
            </h4>
            <span className="badge text-sm badge-phoenix-success ms-2 leading-base">
              <span>+24.5%</span>
              <FontAwesomeIcon
                icon={faCaretUp}
                className="ms-1"
                transform="down-1"
              />
            </span>
          </div>
          <div className="pb-0 pt-6">
            <BasicLineChart
              data={[
                220, 220, 150, 150, 150, 250, 250, 400, 400, 400, 300, 300
              ]}
              dates={getPastDates(12)}
              className="w-full min-h-27.5"
              style={{ height: 'auto', width: '100%' }}
            />
          </div>
        </Col>
        <Col md={6}>
          <div className="flex items-center">
            <FeatherIcon icon="zap" className="me-2 text-primary size-6" />
            <h4 className="text-subtle mb-0">
              New Leads :<span className="text-emphasis"> 45</span>
            </h4>
            <span className="badge text-sm badge-phoenix-success ms-2 leading-base">
              <span>+30.5%</span>
              <FontAwesomeIcon
                icon={faCaretUp}
                className="ms-1"
                transform="down-1"
              />
            </span>
          </div>
          <div className="pb-0 pt-6">
            <BasicLineChart
              data={[100, 100, 260, 250, 270, 160, 190, 180, 260, 200, 220]}
              dates={getPastDates(11)}
              className="w-full min-h-27.5"
              style={{ height: 'auto', width: '100%' }}
            />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default NewUsersAndLeads;
