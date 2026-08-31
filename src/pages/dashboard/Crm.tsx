import { faCalendar, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row } from '@hummingbirdui/react';
import CrmStatCard from 'components/cards/CrmStatCard';
import ContactsCreatedChart from 'components/charts/e-charts/ContactsCreatedChart';
import LeadSources from 'components/list-items/LeadSources';
import AdClicks from 'components/modules/crm/AdClicks';
import ContactsBySource from 'components/modules/crm/ContactsBySource';
import DealForecast from 'components/modules/crm/DealForecast';
import LeadConversion from 'components/modules/crm/LeadConversion';
import NewUsersAndLeads from 'components/modules/crm/NewUsersAndLeads';
import RevenueTarget from 'components/modules/crm/RevenueTarget';

/** dashboard/crm.pug */
const Crm = () => {
  return (
    <>
      <Row className="gy-4 mb-6 justify-between">
        <Col xxl={6}>
          <h2 className="mb-2 text-emphasis">CRM Dashboard</h2>
          <h5 className="text-subtle font-semibold mb-6">
            Check your business growth in one place
          </h5>
          <Row className="g-4 mb-4">
            <Col sm={6} md={4} xl={3} xxl={4}>
              <CrmStatCard
                icon={faPhoneAlt}
                color="primary"
                label="Outgoing call"
                value={3}
                title="Leads Today"
                badgeLabel="+24.5%"
                badgeBg="success"
                footerText="Than Yesterday"
              />
            </Col>
            <Col sm={6} md={4} xl={3} xxl={4}>
              <CrmStatCard
                icon={faCalendar}
                color="info"
                label="Outgoing meeting"
                value={12}
                title="This Week"
                badgeLabel="+24.5%"
                badgeBg="warning"
                footerText="Than last week"
              />
            </Col>
            <Col md={4} xl={6} xxl={4} className="gy-8 md:gy-4">
              <div className="border-b border-subtle">
                <h5 className="pb-6 border-b border-subtle">
                  Top 5 Lead Sources
                </h5>
                <LeadSources />
              </div>
            </Col>
          </Row>
        </Col>
        <Col xxl={6} className="mb-10">
          <h3>Contacts Created</h3>
          <p className="text-subtle mb-1">
            Payment received across all channels
          </p>
          <ContactsCreatedChart
            className="min-h-67.5 w-full"
            style={{ height: 'auto', width: '100%' }}
          />
        </Col>
        <Col xs={12} xxl={6} className="mb-4 sm:mb-0">
          <ContactsBySource />
        </Col>
        <Col xs={12} xxl={6} className="mb-14">
          <NewUsersAndLeads />
        </Col>
        <Col xs={12} xxl={6}>
          <AdClicks />
        </Col>
        <Col xs={12} xxl={6} className="mb-10 gy-0 2xl:gy-4">
          <DealForecast />
        </Col>
      </Row>
      <div className="lg:-mx-6">
        <Row className="g-4 mb-16 -mt-12">
          <Col xl={5}>
            <LeadConversion />
          </Col>
          <Col xl={7}>
            <RevenueTarget />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Crm;
