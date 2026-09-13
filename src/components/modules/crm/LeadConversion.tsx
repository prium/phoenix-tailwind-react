import { Card } from '@hummingbirdui/react';
import LeadConversationChart from 'components/charts/e-charts/LeadConversationChart';

/** `+LeadConversion` in mixins/dashboard/CRM/Crm.pug */
const LeadConversion = () => {
  return (
    <Card className="h-full">
      <Card.Body>
        <h3>Lead Conversion</h3>
        <p className="text-subtle mb-0">Stages of deals &amp; conversion</p>
        <LeadConversationChart
          className="min-h-62.5"
          style={{ height: 'auto', width: '100%' }}
        />
      </Card.Body>
    </Card>
  );
};

export default LeadConversion;
