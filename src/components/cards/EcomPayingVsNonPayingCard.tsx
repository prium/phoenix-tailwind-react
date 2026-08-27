import EcomPayingVsNonPayingChart from 'components/charts/e-charts/EcomPayingVsNonPayingChart';
import React from 'react';
import { Card } from 'react-bootstrap';

const EcomPayingVsNonPayingCard = () => {
  return (
    <Card className="h-full">
      <Card.Body className="flex flex-col">
        <div className="flex justify-between">
          <div>
            <h5 className="mb-2">Paying vs non paying</h5>
            <h6 className="text-subtle">Last 7 days</h6>
          </div>
        </div>
        <div className="flex justify-center pt-4 flex-1">
          <EcomPayingVsNonPayingChart />
        </div>
        <div className="mt-4">
          <div className="flex items-center mb-2">
            <div className="bullet-item bg-primary me-2" />
            <h6 className="text-default font-semibold flex-1 mb-0">
              Paying customer
            </h6>
            <h6 className="text-default font-semibold mb-0">30%</h6>
          </div>
          <div className="flex items-center">
            <div className="bullet-item bg-primary-subtle me-2" />
            <h6 className="text-default font-semibold flex-1 mb-0">
              Non-paying customer
            </h6>
            <h6 className="text-default font-semibold mb-0">70%</h6>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default EcomPayingVsNonPayingCard;
