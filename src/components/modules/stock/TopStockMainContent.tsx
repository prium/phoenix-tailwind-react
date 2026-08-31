import { useState } from 'react';
import { cn } from '@hummingbirdui/react';
import type { TopStockItem } from 'data/stock/dashboardTopStocks';
import Badge from 'components/base/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faChevronUp,
  faClock,
  faEye,
  faUpRightFromSquare
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';
import Button from 'components/base/Button';
import TopStockOptionChainTabContent from './TopStockOptionChainTabContent';
import TopStockLineChart from 'components/charts/chartjs/TopStockLineChart';

interface TopStockMainContentProps {
  topStockItem: TopStockItem;
  index: number;
}

/** gold `.btn-group.stock-btn-group` chart range filter — TopStocks.pug */
const chartFilterButtons = [
  { label: '1 D', suffix: 'ay', active: true },
  { label: '5 D', suffix: 'ays' },
  { label: '3 M', suffix: 'onths' },
  { label: '6 M', suffix: 'onths' },
  { label: '1 Y', suffix: 'ear' },
  { label: '5 Y', suffix: 'ears' },
  { label: 'Max' }
];

/** `+TopStocks` tab pane body — mixins/dashboard/stock/TopStocks.pug */
const TopStockMainContent = ({
  topStockItem,
  index
}: TopStockMainContentProps) => {
  const [activeTab, setActiveTab] = useState<'chart' | 'optionChain'>('chart');

  return (
    <>
      <div className="row justify-between g-4 mb-8">
        <div className="col-auto">
          <h4 className="text-subtle mb-2 leading-sm">{topStockItem.abbr}</h4>
          <h3 className="text-highlight flex gap-2 flex-between-center leading-sm mb-0">
            ${topStockItem.amount}
            <Badge
              variant="phoenix"
              bg={topStockItem.growth ? 'success' : 'danger'}
              className="text-sm flex flex-between-center"
              iconPosition="end"
              icon={
                <FontAwesomeIcon
                  icon={topStockItem.growth ? faChevronUp : faChevronDown}
                />
              }
            >
              {topStockItem.percent}%
            </Badge>
          </h3>
        </div>
        <div className="col-auto">
          <div className="flex items-center gap-2">
            <Link
              to="/apps/stock/stock-details"
              className="btn btn-sm btn-phoenix-primary"
            >
              View full stock details
              <FontAwesomeIcon icon={faUpRightFromSquare} className="ms-2" />
            </Link>
            <Button variant="phoenix-secondary" size="sm">
              <FontAwesomeIcon icon={faClock} />
            </Button>
            <Button variant="phoenix-secondary" size="sm">
              <FontAwesomeIcon icon={faEye} />
            </Button>
          </div>
        </div>
      </div>
      <ul
        className="nav nav-underline optionChainTableHeader mb-6 gap-0"
        id={`companyStatesTab-${index}`}
        role="tablist"
      >
        <li className="nav-item">
          <a
            className={cn('nav-link pt-0 pe-2', {
              active: activeTab === 'chart'
            })}
            id={`chart-tab-${index}`}
            href={`#tab-chart-${index}`}
            role="tab"
            aria-controls={`tab-chart-${index}`}
            aria-selected={activeTab === 'chart'}
            onClick={e => {
              e.preventDefault();
              setActiveTab('chart');
            }}
          >
            Chart
          </a>
        </li>
        <li className="nav-item">
          <a
            className={cn('nav-link pt-0 px-4', {
              active: activeTab === 'optionChain'
            })}
            id={`option-chain-tab-${index}`}
            href={`#tab-optionChain-${index}`}
            role="tab"
            aria-controls={`tab-optionChain-${index}`}
            aria-selected={activeTab === 'optionChain'}
            onClick={e => {
              e.preventDefault();
              setActiveTab('optionChain');
            }}
          >
            Option Chain
          </a>
        </li>
        <li className="nav-item flex-1">
          <a
            className="nav-link disabled h-full"
            id={`empty-div-${index}`}
            href="#!"
            role="tab"
            aria-selected="false"
            onClick={e => e.preventDefault()}
          ></a>
        </li>
      </ul>
      <div className="tab-content" id={`companyStatesTabContent-${index}`}>
        <div
          className={cn('tab-pane fade', {
            'show active': activeTab === 'chart'
          })}
          id={`tab-chart-${index}`}
          role="tabpanel"
          aria-labelledby={`chart-tab-${index}`}
        >
          <div className="scrollbar mb-6">
            <div
              className="btn-group stock-btn-group btn-group-sm text-nowrap"
              role="group"
              aria-label="top-stock-chart-filter"
            >
              {chartFilterButtons.map(btn => (
                <button
                  key={btn.label}
                  type="button"
                  className={cn(
                    'btn btn-phoenix-secondary font-extrabold',
                    btn.active &&
                      'active bg-white dark:bg-black text-primary border-subtle'
                  )}
                >
                  {btn.label}
                  {btn.suffix && (
                    <span className="hidden sm:inline xl:hidden 2xl:inline">
                      {btn.suffix}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
          <div className="top-stock-chart">
            <TopStockLineChart
              id={`line-chart-${topStockItem.id}`}
              chartData={topStockItem.chartData}
              growth={topStockItem.growth}
            />
          </div>
        </div>
        <div
          className={cn('tab-pane fade', {
            'show active': activeTab === 'optionChain'
          })}
          role="tabpanel"
          id={`tab-optionChain-${index}`}
          aria-labelledby={`option-chain-tab-${index}`}
        >
          {activeTab === 'optionChain' && (
            <TopStockOptionChainTabContent topStockItem={topStockItem} />
          )}
        </div>
      </div>
    </>
  );
};

export default TopStockMainContent;
