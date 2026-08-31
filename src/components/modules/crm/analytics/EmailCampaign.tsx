import AnalyticsEmailCampaignChart from 'components/charts/e-charts/AnalyticsEmailCampaignChart';

/** `+EmailCampaign` in mixins/crm/Analytics.pug */
const EmailCampaign = () => {
  return (
    <div className="scrollbar">
      <h3>Email Campaign Reports</h3>
      <p className="text-subtle">Paid and Verified for each piece of content</p>
      <AnalyticsEmailCampaignChart className="min-w-76 min-h-80 overflow-hidden sm:min-w-[unset] md:min-h-108.75 lg:min-h-80 xl:min-h-107.5 2xl:min-h-80" />
    </div>
  );
};

export default EmailCampaign;
