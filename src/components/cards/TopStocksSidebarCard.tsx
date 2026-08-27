import { Card } from 'react-bootstrap';
import type { TopStockItem } from 'data/stock/dashboardTopStocks';
import { currencyFormat } from 'helpers/utils';
import classNames from 'classnames';

interface TopStocksSidebarProps {
  topStocksItem: TopStockItem;
}

const TopStocksSidebarCard = ({ topStocksItem }: TopStocksSidebarProps) => {
  return (
    <Card.Body className="p-0 cursor-pointer">
      <div className="flex gap-4 xl:gap-2 2xl:gap-4 items-center">
        {topStocksItem.darkImage ? (
          <>
            <img
              src={topStocksItem.image}
              alt={topStocksItem.title}
              className="dark:hidden img-fluid"
            />
            <img
              src={topStocksItem.darkImage}
              alt={topStocksItem.title}
              className="hidden dark:block img-fluid"
            />
          </>
        ) : (
          <img
            src={topStocksItem.image}
            alt={topStocksItem.title}
            className="img-fluid"
          />
        )}
        <div className="flex gap-4 flex-between-center flex-1">
          <div>
            <h6 className="font-semibold text-muted mb-2 leading-sm whitespace-nowrap">
              {topStocksItem.title}
            </h6>
            <h4 className="mb-0">
              {currencyFormat(topStocksItem.amount, {
                maximumFractionDigits: 2
              })}
            </h4>
          </div>
          <div className="text-end">
            <h6 className="font-semibold text-muted mb-2 leading-sm uppercase">
              {topStocksItem.abbr}
            </h6>
            <h6
              className={classNames('font-semibold leading-sm', {
                'text-success': topStocksItem.growth,
                'text-danger': !topStocksItem.growth
              })}
            >
              {topStocksItem.growth ? '+' : '-'}
              {topStocksItem.profit}({topStocksItem.percent}%)
            </h6>
          </div>
        </div>
      </div>
    </Card.Body>
  );
};

export default TopStocksSidebarCard;
