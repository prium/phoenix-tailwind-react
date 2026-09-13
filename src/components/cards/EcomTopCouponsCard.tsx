import EcomTopCouponsChart from 'components/charts/e-charts/EcomTopCouponsChart';
import { Card } from '@hummingbirdui/react';

const EcomTopCouponsCard = () => {
  return (
    <Card className="h-full">
      <Card.Body>
        <div className="flex justify-between">
          <div>
            <h5 className="mb-2">Top coupons</h5>
            <h6 className="text-subtle">Last 7 days</h6>
          </div>
        </div>
        <div className="pb-6 pt-4">
          <EcomTopCouponsChart />
        </div>
        <div>
          <div className="flex items-center mb-2">
            <div className="bullet-item bg-primary me-2" />
            <h6 className="text-default font-semibold flex-1 mb-0">
              Percentage discount
            </h6>
            <h6 className="text-default font-semibold mb-0">72%</h6>
          </div>
          <div className="flex items-center mb-2">
            <div className="bullet-item bg-primary-lighter me-2" />
            <h6 className="text-default font-semibold flex-1 mb-0">
              Fixed card discount
            </h6>
            <h6 className="text-default font-semibold mb-0">18%</h6>
          </div>
          <div className="flex items-center">
            <div className="bullet-item bg-info-dark me-2" />
            <h6 className="text-default font-semibold flex-1 mb-0">
              Fixed product discount
            </h6>
            <h6 className="text-default font-semibold mb-0">10%</h6>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default EcomTopCouponsCard;
