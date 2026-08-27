import { currencyFormat } from 'helpers/utils';
import React from 'react';

const OrderSummaryDetails = () => {
  return (
    <div>
      <div className="flex justify-between">
        <p className="text-default font-semibold">Items subtotal :</p>
        <p className="text-emphasis font-semibold">{currencyFormat(691)}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-default font-semibold">Discount :</p>
        <p className="text-danger font-semibold">-{currencyFormat(59)}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-default font-semibold">Tax :</p>
        <p className="text-emphasis font-semibold">
          {currencyFormat(126.2)}
        </p>
      </div>
      <div className="flex justify-between">
        <p className="text-default font-semibold">Subtotal :</p>
        <p className="text-emphasis font-semibold">{currencyFormat(665)}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-default font-semibold">Shipping Cost :</p>
        <p className="text-emphasis font-semibold">{currencyFormat(30)}</p>
      </div>
    </div>
  );
};

export default OrderSummaryDetails;
