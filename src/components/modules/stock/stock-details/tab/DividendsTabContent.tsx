import classNames from 'classnames';
import { Dropdown, Select } from '@hummingbirdui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import DividendBarChart from 'components/charts/e-charts/DividendBarChart';
import DividendGrowthChart from 'components/charts/e-charts/DividendGrowthChart';
import DividendRecordTable from 'components/tables/DividendRecordTable';
import { DividendContent } from 'data/stock/dividend';

interface DividendsTabContentProps {
  dividendContent: DividendContent;
}

/**
 * Gold `+DividendChartContainer` action dropdown:
 * `button.btn.btn-sm.btn-phoenix-secondary.bg-soft.hover:bg-default.action-btn`
 */
const ChartActionDropdown = () => (
  <Dropdown>
    <Dropdown.Trigger asChild>
      <button
        type="button"
        className="btn btn-sm btn-phoenix-secondary bg-soft hover:bg-default action-btn"
      >
        <FontAwesomeIcon icon={faEllipsisH} transform="shrink-2" />
      </button>
    </Dropdown.Trigger>
    <Dropdown.Content align="end">
      <Dropdown.Item asChild>
        <a href="#">Action</a>
      </Dropdown.Item>
      <Dropdown.Item asChild>
        <a href="#">Another action</a>
      </Dropdown.Item>
      <Dropdown.Item asChild>
        <a href="#">Something else here</a>
      </Dropdown.Item>
    </Dropdown.Content>
  </Dropdown>
);

/** Gold: mixins/stock/stock-details/DividendsTabContent.pug */
const DividendsTabContent = ({ dividendContent }: DividendsTabContentProps) => {
  return (
    <>
      <div className="alert alert-phoenix-secondary mb-6" role="alert">
        <div>
          <h4 className="alert-heading text-subtle mb-2">
            Apple's Dividend Distribution
          </h4>
          <p className="text-subtle mb-0">
            Apple offers a $1.00 yearly dividend per share, or 0.44% return. The
            dividend is distributed every three months, and as of August 12,
            2024, there was no ex-dividend date.
          </p>
        </div>
      </div>

      <div className="card mb-6">
        <div className="card-body">
          <div className="row g-0">
            {dividendContent.dividendCardItems.map(item => (
              <div
                key={item.id}
                className={classNames(item.className, 'col-6 2xl:col-3')}
              >
                <div className="flex gap-4 flex-col sm:flex-row 2xl:flex-col">
                  <div
                    className={classNames(
                      'icon-item border p-2 rounded-md flex flex-center',
                      item.iconClassName
                    )}
                  >
                    {item.icon}
                  </div>
                  <div className="text-nowrap">
                    <h5 className="text-md sm:text-base text-highlight leading-sm">
                      {item.title}
                    </h5>
                    <h4 className="text-base sm:text-lg mb-0 text-default font-extrabold leading-sm">
                      {item.content}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="row g-4 mb-6">
        <div className="2xl:col-6">
          <div className="row g-4 lg:g-8 flex-between-center mb-6">
            <div className="col-auto">
              <h4>Dividends</h4>
              <p className="text-subtle mb-0">Dividend Income Basics</p>
            </div>
            <div className="col-auto flex items-center gap-2">
              <Select size="sm" name="dividends" id="dividends">
                <option value="9">9 Years</option>
                <option value="8">8 Years</option>
                <option value="7">7 Years</option>
              </Select>
              <ChartActionDropdown />
            </div>
          </div>
          <div className="w-full min-h-75">
            <DividendBarChart data={dividendContent.dividendChartData} />
          </div>
        </div>
        <div className="2xl:col-6">
          <div className="row g-4 lg:g-8 flex-between-center mb-6">
            <div className="col-auto">
              <h4>Dividend Growth</h4>
              <p className="text-subtle mb-0">Boosting Dividend Income</p>
            </div>
            <div className="col-auto flex items-center gap-2">
              <Select size="sm" name="dividend-growth" id="growth">
                <option value="7">7 Years</option>
                <option value="8">8 Years</option>
                <option value="9">9 Years</option>
              </Select>
              <ChartActionDropdown />
            </div>
          </div>
          <div className="w-full min-h-75">
            <DividendGrowthChart
              data={dividendContent.dividendGrowthChartData}
            />
          </div>
        </div>
      </div>

      <div className="row g-4 flex-between-center">
        <div className="col-auto">
          <h4>Dividend Record</h4>
          <p className="text-subtle mb-0">Brief summary of all projects</p>
        </div>
        <div className="col-auto">
          <Select size="sm" name="action" id="record-action">
            <option value="export">Export</option>
            <option value="import">View</option>
            <option value="remove">Remove</option>
          </Select>
        </div>
        <div className="col-12 mt-4">
          <DividendRecordTable
            data={dividendContent.dividendRecordDataTableRow}
          />
        </div>
      </div>
    </>
  );
};

export default DividendsTabContent;
