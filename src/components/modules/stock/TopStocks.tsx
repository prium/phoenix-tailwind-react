import { useState } from 'react';
import { cn } from '@hummingbirdui/react';
import SearchBox from 'components/common/SearchBox';
import {
  topStockItems,
  type TopStockItem
} from 'data/stock/dashboardTopStocks';
import TopStockMainContent from './TopStockMainContent';

/** `+TabItems` company card — mixins/dashboard/stock/TopStocks.pug */
const TopStockTabItem = ({ item }: { item: TopStockItem }) => (
  <div className="card-body p-0">
    <div className="flex gap-4 xl:gap-2 2xl:gap-4 items-center">
      {item.darkImage ? (
        <>
          <img className="dark:hidden" src={item.image} alt="brand" />
          <img className="hidden dark:block" src={item.darkImage} alt="brand" />
        </>
      ) : (
        <img src={item.image} alt="brand" />
      )}
      <div className="flex gap-4 flex-between-center flex-1">
        <div>
          <h6 className="font-semibold text-muted mb-2 leading-sm text-nowrap">
            {item.title}
          </h6>
          <h4 className="mb-0"> ${item.amount}</h4>
        </div>
        <div className="text-end">
          <h6 className="font-semibold text-muted mb-2 leading-sm text-uppercase">
            {item.abbr}
          </h6>
          <h6
            className={cn(
              item.growth ? 'text-success' : 'text-danger',
              'font-semibold leading-sm'
            )}
          >
            {' '}
            {item.growth ? '+' : '-'}
            {item.profit}({item.percent}%)
          </h6>
        </div>
      </div>
    </div>
  </div>
);

/** `+TopStocks` — mixins/dashboard/stock/TopStocks.pug */
const TopStocks = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="row gx-8">
      <div className="col-12 xl:col-5 2xl:col-4 mb-6 xl:mb-0 top-stock-card-container">
        <SearchBox
          placeholder="Enter Company or Symbol name"
          className="w-full mb-4 xl:pe-4"
        />
        <div className="scrollbar top-stock-tab w-full xl:pe-4">
          <ul
            className="nav gap-4 xl:gap-2 flex-nowrap xl:flex-col"
            id="companyTabdiv"
            role="tablist"
          >
            {topStockItems.map((item, index) => (
              <li className="nav-item" key={item.id}>
                <a
                  className={cn('nav-link card company-card', {
                    active: activeIndex === index
                  })}
                  id={`tab-${item.abbr.toLowerCase()}`}
                  href={`#${item.abbr.toLowerCase()}-tab`}
                  aria-current="page"
                  aria-controls={`${item.abbr.toLowerCase()}-tab`}
                  aria-selected={activeIndex === index}
                  role="tab"
                  onClick={e => {
                    e.preventDefault();
                    setActiveIndex(index);
                  }}
                >
                  <TopStockTabItem item={item} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-12 xl:col-7 2xl:col-8 xl:ps-0 flex-1">
        <div className="tab-content" id="topStocksTabContent">
          {topStockItems.map((item, index) => (
            <div
              key={item.id}
              className={cn('tab-pane fade', {
                'active show': activeIndex === index
              })}
              id={`${item.abbr.toLowerCase()}-tab`}
              role="tabpanel"
              aria-labelledby={`tab-${item.abbr.toLowerCase()}`}
            >
              <TopStockMainContent topStockItem={item} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopStocks;
