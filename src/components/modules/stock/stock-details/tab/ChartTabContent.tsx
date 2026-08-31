import {
  faMagnifyingGlassMinus,
  faMagnifyingGlassPlus
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Select } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import StockShareReportChart from 'components/charts/e-charts/StockShareReportChart';

/** Gold: `#chart-tab` pane in mixins/stock/stock-details/StockDetailsTab.pug */
const ChartTabContent = () => {
  return (
    <>
      <div className="row flex-between-center g-4 mb-6">
        <div className="col-auto">
          <h4>Share Report</h4>
          <p className="text-subtle mb-0">
            Updated inventory according to the sales report.
          </p>
        </div>
        <div className="col-auto flex gap-2">
          <Select size="sm" name="filter-chart" id="chart-filter">
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </Select>
          <Button variant="phoenix-secondary" size="sm">
            <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
          </Button>
          <Button variant="phoenix-secondary" size="sm">
            <FontAwesomeIcon icon={faMagnifyingGlassMinus} />
          </Button>
        </div>
      </div>
      <div className="w-full h-[80vh]">
        <StockShareReportChart />
      </div>
    </>
  );
};

export default ChartTabContent;
