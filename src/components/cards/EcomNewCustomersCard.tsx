import Badge from 'components/base/Badge';
import EcomNewCustomersChart from 'components/charts/e-charts/EcomNewCustomersChart';
import { Card } from 'react-bootstrap';

const EcomNewCustomersCard = () => {
  return (
    <Card className="h-full">
      <Card.Body>
        <div className="flex justify-between">
          <div>
            <h5 className="mb-1">
              New customers
              <Badge bg="warning" variant="phoenix" pill className="ms-2">
                +26.5%
              </Badge>
            </h5>
            <h6 className="text-subtle">Last 7 days</h6>
          </div>
          <h4>356</h4>
        </div>
        <div className="pb-0 pt-6">
          <EcomNewCustomersChart />
        </div>
      </Card.Body>
    </Card>
  );
};

export default EcomNewCustomersCard;
