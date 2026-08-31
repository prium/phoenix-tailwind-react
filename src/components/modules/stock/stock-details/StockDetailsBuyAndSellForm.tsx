import { faClock, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input, Select } from '@hummingbirdui/react';
import Button from 'components/base/Button';

interface StockDetailsBuyAndSellFormProps {
  title: 'buy' | 'sell';
}

/** Gold: buy/sell panes in mixins/stock/stock-details/StockDetailsSideBar.pug */
const StockDetailsBuyAndSellForm = ({
  title
}: StockDetailsBuyAndSellFormProps) => {
  const isBuy = title === 'buy';
  return (
    <>
      <div className="mb-4">
        <label className="text-md leading-sm font-semibold mb-2 text-emphasis ps-0">
          Order type
        </label>
        <Select name={isBuy ? 'order-type' : 'sellOrderType'}>
          <option value="market">{isBuy ? 'Market buy' : 'Market Sell'}</option>
          <option value="share">{isBuy ? 'Share buy' : 'Share sell'}</option>
        </Select>
      </div>
      <div className="mb-4">
        <label className="text-md leading-sm font-semibold mb-2 text-emphasis ps-0">
          Shares
        </label>
        <Input
          type="text"
          name={isBuy ? 'shares' : 'sellShares'}
          placeholder="Enter shares"
        />
      </div>
      <div className="mb-4">
        <label className="text-md leading-sm font-semibold mb-2 text-emphasis ps-0">
          Amount
        </label>
        <div className="input-group">
          <span className="input-group-text border-e-0">$</span>
          <Input
            type="text"
            name={isBuy ? 'amount' : 'sellAmount'}
            placeholder="Enter amount"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="text-md leading-sm font-semibold mb-2 text-emphasis ps-0">
          Account
        </label>
        <Select name={isBuy ? 'account' : 'sellAccount'}>
          <option value="">Select account</option>
          <option value="debit">Debit</option>
        </Select>
      </div>
      <div className="flex flex-between-center gap-4 mb-4">
        <h5 className="text-default font-semibold mb-0">
          {isBuy ? 'Available cash' : 'Available shares'}
        </h5>
        <p className="mb-0">{isBuy ? '$65.89 USD' : 100}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        <Button variant="primary" size="sm" className="flex-1">
          {isBuy ? 'Buy Share' : 'Sell Share'}
        </Button>
        <Button variant="phoenix-secondary" size="sm">
          <FontAwesomeIcon icon={faClock} />
        </Button>
        <Button variant="phoenix-secondary" size="sm">
          <FontAwesomeIcon icon={faEye} />
        </Button>
      </div>
    </>
  );
};

export default StockDetailsBuyAndSellForm;
