import { faPercentage } from '@fortawesome/free-solid-svg-icons';
import { Col, Row } from '@hummingbirdui/react';
import AnalyticsStats from 'components/stats/AnalyticsStats';
import EcomNewCustomersCard from 'components/cards/EcomNewCustomersCard';
import EcomPayingVsNonPayingCard from 'components/cards/EcomPayingVsNonPayingCard';
import EcomTopCouponsCard from 'components/cards/EcomTopCouponsCard';
import EcomTotalOrdersCard from 'components/cards/EcomTotalOrdersCard';
import { stats } from 'data/crm/stats';
import ContactsBySource from '../crm/ContactsBySource';
import LeadConversion from '../crm/LeadConversion';
import NewUsersAndLeads from '../crm/NewUsersAndLeads';
import RevenueTarget from '../crm/RevenueTarget';
import CallCampaignReport from '../crm/analytics/CallCampaignReport';
import EmailCampaign from '../crm/analytics/EmailCampaign';
import MarketingCampaign from '../crm/analytics/MarketingCampaign';
import SalesTrends from '../crm/analytics/SalesTrends';
import EcomProjectionVsActual from '../e-commerce/dashboard/EcomProjectionVsActual';
import EcomReturningCustomerRate from '../e-commerce/dashboard/EcomReturningCustomerRate';
import EcomTotalSells from '../e-commerce/dashboard/EcomTotalSells';
import IssuesDiscovered from '../project-management/dashboard/IssuesDiscovered';
import ProjectElevenProgress from '../project-management/dashboard/ProjectElevenProgress';
import ZeroRoadMap from '../project-management/dashboard/ZeroRoadMap';
import WidgetsSectionTitle from './WidgetsSectionTitle';

/** `+Stats` in mixins/widgets/Stats.pug */
const WidgetStats = () => {
  return (
    <>
      <WidgetsSectionTitle
        title="Number Stats & Charts"
        subtitle="You can easily show your stats content by using these cards."
        icon={faPercentage}
        className="mb-8 pt-14"
      />
      <div className="px-4 mb-8">
        <AnalyticsStats stats={stats} />
      </div>
      <Row className="g-4 mb-8">
        <Col md={6} xxl={3}>
          <EcomTotalOrdersCard />
        </Col>
        <Col md={6} xxl={3}>
          <EcomNewCustomersCard />
        </Col>
        <Col md={6} xxl={3}>
          <EcomTopCouponsCard />
        </Col>
        <Col md={6} xxl={3}>
          <EcomPayingVsNonPayingCard />
        </Col>
      </Row>
      <Row className="gx-6 gy-10 pb-8">
        <Col xxl={6}>
          <NewUsersAndLeads />
        </Col>
        <Col xxl={6}>
          <ContactsBySource />
        </Col>
      </Row>
      <div className="-mx-6 px-6 lg:-mx-10 lg:px-10 bg-soft py-8">
        <Row className="g-10">
          <Col xs={12} xl={6}>
            <EcomProjectionVsActual />
          </Col>
          <Col xs={12} xl={6}>
            <EcomReturningCustomerRate />
          </Col>
        </Row>
      </div>
      <Row className="g-10 pt-10 items-center">
        <Col xxl={6}>
          <EcomTotalSells />
        </Col>
        <Col xxl={6}>
          <ZeroRoadMap />
        </Col>
      </Row>
      <div className="-mx-6 px-6 lg:-mx-10 lg:px-10 bg-soft pt-10 pb-4 mt-10">
        <Row>
          <Col xs={12} xl={7} xxl={6}>
            <IssuesDiscovered />
          </Col>
          <Col xs={12} xl={5} xxl={6}>
            <ProjectElevenProgress />
          </Col>
        </Row>
      </div>
      <div className="lg:-mx-6">
        <Row className="g-4 pt-4">
          <Col xl={5}>
            <LeadConversion />
          </Col>
          <Col xl={7}>
            <RevenueTarget />
          </Col>
        </Row>
      </div>
      <div className="-mx-6 px-6 lg:-mx-10 lg:px-10 bg-soft pt-10 pb-4 mt-4">
        <Row className="gx-10">
          <Col
            xs={12}
            md={6}
            lg={12}
            xl={6}
            className="mb-8 md:mb-4 lg:mb-8 xl:mb-2 2xl:mb-4"
          >
            <EmailCampaign />
          </Col>
          <Col xs={12} md={6} lg={12} xl={6} className="mb-1 sm:mb-0">
            <MarketingCampaign />
          </Col>
        </Row>
      </div>
      <Row className="g-10 mt-0">
        <Col xs={12} md={6}>
          <SalesTrends />
        </Col>
        <Col xs={12} md={6}>
          <CallCampaignReport />
        </Col>
      </Row>
    </>
  );
};

export default WidgetStats;
