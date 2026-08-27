import Badge from 'components/base/Badge';
import EcomTotalOrdersChart from 'components/charts/e-charts/EcomTotalOrdersChart';
import React from 'react';
import { Card } from 'react-bootstrap';

const EcomTotalOrdersCard = () => {
  return (
    <Card className="h-full">
      <Card.Body>
        <div className="flex justify-between">
          <div>
            <h5 className="mb-1">
              Total orders
              <Badge bg="warning" variant="phoenix" pill className="ms-2">
                -6.8%
              </Badge>
            </h5>
            <h6 className="text-subtle">Last 7 days</h6>
          </div>
          <h4>16,247</h4>
        </div>
        <div className="flex justify-center px-6 py-10">
          <EcomTotalOrdersChart />
        </div>
        <div className="mt-2">
          <div className="flex items-center mb-2">
            <div className="bullet-item bg-primary me-2" />
            <h6 className="text-default font-semibold flex-1 mb-0">Completed</h6>
            <h6 className="text-default font-semibold mb-0">52%</h6>
          </div>
          <div className="flex items-center">
            <div className="bullet-item bg-primary-subtle me-2" />
            <h6 className="text-default font-semibold flex-1 mb-0">
              Pending payment
            </h6>
            <h6 className="text-default font-semibold mb-0">48%</h6>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default EcomTotalOrdersCard;
