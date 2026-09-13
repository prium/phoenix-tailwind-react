import { Dispatch, SetStateAction } from 'react';
import { Tabs } from '@hummingbirdui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUpRightFromSquare,
  faXmark
} from '@fortawesome/free-solid-svg-icons';
import StockDetailsBuyAndSellForm from './StockDetailsBuyAndSellForm';
import StockDetailsOptionChain from './StockDetailsOptionChain';

interface StockDetailsSideBarContentProps {
  setOpen?: Dispatch<SetStateAction<boolean>>;
}

/** Gold: `+StockDetailSideBar` in mixins/stock/stock-details/StockDetailsSideBar.pug */
const StockDetailsSideBarContent = ({
  setOpen
}: StockDetailsSideBarContentProps) => {
  return (
    <div className="card border-0">
      <div className="card-body">
        <div className="row g-0 flex-between-center mb-6">
          <div className="col-auto">
            <h4 className="text-highlight font-bold mb-0 lg:text-center">
              Stock Details
            </h4>
          </div>
          <div className="col-auto xl:hidden">
            <button
              type="button"
              className="btn btn-link btn-sm text-base text-default"
              aria-label="close"
              onClick={() => setOpen && setOpen(false)}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        </div>
        <div className="card border p-4 text-center bg-default mb-4">
          <h3 className="mb-2 leading-sm text-default flex items-center gap-2 justify-center">
            $226.51
            <span className="badge badge-phoenix-success text-sm">
              +0.62 (0.27%)
            </span>
          </h3>
          <h6 className="leading-sm text-default mb-2">
            Real time quote: Sep 24, 2024,{' '}
            <span className="text-nowrap">1:34 PM</span>
          </h6>
          <div className="row py-4 gx-8">
            <div className="col-6 border-e">
              <h6 className="leading-sm text-default">Bid x Size</h6>
              <h5 className="font-semibold text-default mb-0">
                226.51<span className="text-md">x 100</span>
              </h5>
            </div>
            <div className="col-6">
              <h6 className="leading-sm text-default">Ask x Size</h6>
              <h5 className="font-semibold text-default mb-0">
                226.51<span className="text-md">x 100</span>
              </h5>
            </div>
          </div>
        </div>

        <Tabs defaultValue="tab-buy">
          <Tabs.List
            asChild
            variant="underline"
            className="mb-4 text-center gap-0 optionChainTableHeader"
            id="buyAndSellTab"
          >
            <ul>
              <li className="nav-item w-1/2">
                <Tabs.Trigger asChild value="tab-buy">
                  <a
                    id="buy-tab"
                    href="#tab-buy"
                    onClick={e => e.preventDefault()}
                  >
                    Buy
                  </a>
                </Tabs.Trigger>
              </li>
              <li className="nav-item w-1/2">
                <Tabs.Trigger asChild value="tab-sell">
                  <a
                    id="sell-tab"
                    href="#tab-sell"
                    onClick={e => e.preventDefault()}
                  >
                    Sell
                  </a>
                </Tabs.Trigger>
              </li>
            </ul>
          </Tabs.List>
          <div className="tab-content mb-4" id="buyAndSellTabContent">
            <Tabs.Content value="tab-buy" className="tab-pane fade show active">
              <StockDetailsBuyAndSellForm title="buy" />
            </Tabs.Content>
            <Tabs.Content
              value="tab-sell"
              className="tab-pane fade show active"
            >
              <StockDetailsBuyAndSellForm title="sell" />
            </Tabs.Content>
          </div>
        </Tabs>

        <div className="flex flex-between-center border-y py-4 mb-6">
          <h5 className="text-default mb-0">Stock available</h5>
          <a
            href="#!"
            className="flex items-center gap-2 link link-primary font-bold no-underline hover:underline"
          >
            32,432,234
            <FontAwesomeIcon icon={faUpRightFromSquare} />
          </a>
        </div>

        <h5 className="leading-sm text-center font-extrabold">Options Chain</h5>
        <StockDetailsOptionChain />
      </div>
    </div>
  );
};

export default StockDetailsSideBarContent;
