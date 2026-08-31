import StockDashboardTopList from 'components/modules/stock/StockDashboardTopList';
import StockOverViewSlider from 'components/modules/stock/StockOverviewSlider';
import TopStocks from 'components/modules/stock/TopStocks';
import { dashboardOverViewItems } from 'data/stock/stockDashboard';

const Stock = () => {
  return (
    <>
      <h2 className="mb-6 text-emphasis">Stock Dashboard</h2>
      <StockOverViewSlider overviewItems={dashboardOverViewItems} />
      <div className="-mx-6 lg:-mx-10 mt-6 px-6 lg:px-10 py-8 border-t">
        <TopStocks />
      </div>
      <div className="-mx-6 px-6 lg:-mx-10 lg:px-10 bg-soft py-8 border-y mb-12 md:mb-14 lg:mb-16">
        <StockDashboardTopList />
      </div>
    </>
  );
};

export default Stock;
