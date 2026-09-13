import { Card } from '@hummingbirdui/react';
import RevenueTargetChart from 'components/charts/e-charts/RevenueTargetChart';

/** `+RevenueTarget` in mixins/dashboard/CRM/Crm.pug */
const RevenueTarget = () => {
  return (
    <Card className="h-full">
      <Card.Body>
        <h3>Revenue Target</h3>
        <p className="text-subtle">Country-wise target fulfilment</p>
        <RevenueTargetChart
          className="min-h-57.5"
          style={{ height: 'auto', width: '100%' }}
        />
      </Card.Body>
    </Card>
  );
};

export default RevenueTarget;
