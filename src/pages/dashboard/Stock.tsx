import StockDashboardTopList from 'components/modules/stock/StockDashboardTopList';
import StockOverViewSlider from 'components/modules/stock/StockOverviewSlider';
import TopStocks from 'components/modules/stock/TopStocks';
import { dashboardOverViewItems } from 'data/stock/stockDashboard';

/** dashboard/stock.pug */
const Stock = () => {
  return (
    <>
      <h2 className="mb-6 text-emphasis">Stock Dashboard</h2>
      <StockOverViewSlider overviewItems={dashboardOverViewItems} />
      <div className="-mx-6 px-6 lg:-mx-10 lg:px-10 py-8 border-t mt-6">
        <h3 className="mb-6 text-emphasis">Top Stock</h3>
        <TopStocks />
      </div>
      <div className="-mx-6 px-6 lg:-mx-10 lg:px-10 bg-soft py-8 border-y mb-12 md:mb-14 lg:mb-16">
        <StockDashboardTopList />
      </div>
    </>
  );
};

export default Stock;
