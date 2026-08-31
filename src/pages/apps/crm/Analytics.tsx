import { Col, Row } from '@hummingbirdui/react';
import DatePicker from 'components/base/DatePicker';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import CallCampaignReport from 'components/modules/crm/analytics/CallCampaignReport';
import EmailCampaign from 'components/modules/crm/analytics/EmailCampaign';
import MarketingCampaign from 'components/modules/crm/analytics/MarketingCampaign';
import SalesTrends from 'components/modules/crm/analytics/SalesTrends';
import AnalyticsStats from 'components/stats/AnalyticsStats';
import { defaultBreadcrumbItems } from 'data/commonData';
import { stats } from 'data/crm/stats';

/** apps/crm/analytics.pug */
const Analytics = () => {
  return (
    <div>
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <div className="pb-10">
        <Row className="items-center justify-between g-4 mb-10">
          <Col xs={12} md="auto">
            <h2 className="mb-0">Analytics</h2>
          </Col>
          <Col xs={12} md="auto">
            <DatePicker
              id="datepicker"
              options={{ defaultDate: 'Mar 1, 2022' }}
            />
          </Col>
        </Row>
        <div className="px-4 mb-10">
          <AnalyticsStats stats={stats} />
        </div>
        <div className="-mx-6 px-6 lg:-mx-10 lg:px-10 bg-soft pt-10 pb-4 border-y">
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
        <Row className="pt-10 gy-12 gx-10">
          <Col xs={12} md={6}>
            <SalesTrends />
          </Col>
          <Col xs={12} md={6}>
            <CallCampaignReport />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Analytics;
