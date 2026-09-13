import OrderSummaryDetails from 'components/common/OrderSummaryDetails';
import { currencyFormat } from 'helpers/utils';
import { Card } from '@hummingbirdui/react';

const OrderDetailsSummaryCard = ({ className }: { className?: string }) => {
  return (
    <Card className={className}>
      <Card.Body>
        <h3 className="card-title mb-6">Summary</h3>

        <OrderSummaryDetails />
        <div className="flex justify-between border-t border-subtle border-dashed pt-6">
          <h4 className="mb-0">Total :</h4>
          <h4 className="mb-0">
            {currencyFormat(695.2, { minimumFractionDigits: 2 })}
          </h4>
        </div>
      </Card.Body>
    </Card>
  );
};

export default OrderDetailsSummaryCard;
