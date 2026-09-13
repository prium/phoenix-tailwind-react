import classNames from 'classnames';
import { Select } from '@hummingbirdui/react';
import { ForecastDataItem } from 'data/stock/forecast';
import { currencyFormat, numberFormat } from 'helpers/utils';
import ForecastEconomicPredictionTable from 'components/tables/ForecastEconomicPredictionTable';
import RevealDropdown from 'components/base/RevealDropdown';
import ActionDropdownItems from 'components/common/ActionDropdownItems';
import ForecastRevenueChart from 'components/charts/e-charts/ForecastRevenueChart';
import GrowthInRevenueChart from 'components/charts/e-charts/GrowthInRevenueChart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import MostRecentForecastTable from 'components/tables/MostRecentForecastTable';

interface ForecastTabContentProps {
  forecastDataItems: ForecastDataItem;
}

/** Gold: mixins/stock/stock-details/ForecastTabContent.pug */
const ForecastTabContent = ({ forecastDataItems }: ForecastTabContentProps) => {
  return (
    <>
      <div className="row g-4 lg:g-8 flex-between-center mb-6">
        <div className="col-auto">
          <h4>Economic Prediction</h4>
          <p className="text-subtle mb-0">Brief summary of all projects</p>
        </div>
        <div className="col-auto">
          <div className="flex items-center gap-2">
            <Select size="sm" name="amount" id="forecast-amount">
              <option value="million">Annual</option>
              <option value="billions">Half Annual</option>
              <option value="remove">Quarterly</option>
            </Select>
            <Select size="sm" name="operations" id="operations">
              <option value="export">Export</option>
              <option value="view">View</option>
              <option value="remove">Remove</option>
            </Select>
          </div>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <div className="row g-0">
            {forecastDataItems.economicPredictionItems.map(item => (
              <div
                key={item.id}
                className={classNames(item.className, 'sm:col-6 2xl:col-3')}
              >
                <h5 className="text-highlight mb-4">{item.title}</h5>
                <div className="row flex-between-center">
                  <div className="col-9 xl:pe-0 2xl:order-1">
                    <h4 className="mb-2">
                      {currencyFormat(item.currentAmount, {
                        minimumFractionDigits: item.fractionNumber,
                        maximumFractionDigits: item.fractionNumber
                      })}
                      {item.postfix && item.postfix}
                    </h4>
                    <div className="flex items-center gap-2">
                      <h6 className="text-subtle font-semibold mb-0 text-nowrap">
                        From{' '}
                        {numberFormat(item.pastAmount, 'standard', {
                          minimumFractionDigits: 2
                        })}
                        {item.postfix && item.postfix}
                      </h6>
                      <div
                        className={classNames(
                          `badge-phoenix-${item.badge.badgeBg}`,
                          'badge text-sm'
                        )}
                      >
                        {item.badge.amount}%{item.badge.icon}
                      </div>
                    </div>
                  </div>
                  <div className="col-3 2xl:col-12 2xl:mb-4 ps-0 2xl:ps-4 flex justify-end 2xl:justify-start">
                    {item.chart}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-8">
        <ForecastEconomicPredictionTable
          data={forecastDataItems.economicPredicationTableRow}
        />
      </div>

      <div className="row g-4 lg:g-8 mb-8">
        <div className="2xl:col-6">
          <div className="row g-4 lg:g-8 flex-between-center">
            <div className="col-auto">
              <h4>Forecast of Revenue</h4>
              <p className="mb-0">Understanding Dividend Income Basics</p>
            </div>
            <div className="col-auto">
              <RevealDropdown
                className="btn-reveal-trigger static"
                btnClassName="btn-phoenix-secondary"
              >
                <ActionDropdownItems />
              </RevealDropdown>
            </div>
          </div>
          <div className="min-h-75">
            <ForecastRevenueChart />
          </div>
        </div>
        <div className="2xl:col-6">
          <div className="row g-4 lg:g-8 flex-between-center">
            <div className="col-auto">
              <h4>Growth in Revenue</h4>
              <p className="mb-0">No. of bookings fulfilled &amp; cancelled</p>
            </div>
            <div className="col-auto">
              <RevealDropdown
                className="btn-reveal-trigger static"
                btnClassName="btn-phoenix-secondary"
              >
                <ActionDropdownItems />
              </RevealDropdown>
            </div>
          </div>
          <div className="min-h-75">
            <GrowthInRevenueChart />
          </div>
        </div>
      </div>

      <div className="row g-4 lg:g-8 flex-between-center mb-8">
        <div className="col-auto">
          <h4>Most Recent Forecast</h4>
          <p className="mb-0">Brief summary of all projects</p>
        </div>
        <div className="col-auto">
          <div className="flex items-center gap-2">
            <Select size="sm" name="amount" id="recent-forecast-amount">
              <option value="million">Annual</option>
              <option value="billions">Half Annual</option>
              <option value="remove">Quarterly</option>
            </Select>
            <button
              type="button"
              className="btn px-4 btn-phoenix-primary flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faFilter} transform="up-1" />
              <span className="hidden sm:inline">Filter</span>
            </button>
          </div>
        </div>
      </div>
      <MostRecentForecastTable
        data={forecastDataItems.mostRecentForecastTableRowItems}
      />
    </>
  );
};

export default ForecastTabContent;
