import { JSX } from 'react';
import { Tabs, cn } from '@hummingbirdui/react';
import ChartTabContent from './tab/ChartTabContent';
import DividendsTabContent from './tab/DividendsTabContent';
import FinancialStatementTabContent from './tab/FinancialStatementTabContent';
import ForecastTabContent from './tab/ForecastTabContent';
import NewsTabContent from './tab/NewsTabContent';
import EventsTabContent from './tab/EventsTabContent';
import CompanyProfileTabContent from './tab/CompanyProfileTabContent';
import { dividendContent } from 'data/stock/dividend';
import { forecastDataItems } from 'data/stock/forecast';
import {
  newsItems,
  eventList,
  companyProfileItems
} from 'data/stock/stockDetails';

export interface StockDetailsTabItem {
  id: string;
  href: string;
  label: string;
  className?: string;
  navItemClass?: string;
  content: JSX.Element | null;
}

/** Gold: `navItems` in mixins/stock/stock-details/StockDetailsTab.pug */
const stockDetailsTabItems: StockDetailsTabItem[] = [
  {
    id: 'tab-chart',
    href: 'chart-tab',
    label: 'Chart',
    className: 'ps-0 pe-4',
    content: <ChartTabContent />
  },
  {
    id: 'tab-dividend',
    href: 'dividend-tab',
    label: 'Dividends',
    className: 'px-4',
    content: <DividendsTabContent dividendContent={dividendContent} />
  },
  {
    id: 'tab-finStates',
    href: 'finStates-tab',
    label: 'Financial Statement',
    className: 'px-4',
    content: <FinancialStatementTabContent />
  },
  {
    id: 'tab-forecast',
    href: 'forecast-tab',
    label: 'Forecast',
    className: 'px-4',
    content: <ForecastTabContent forecastDataItems={forecastDataItems} />
  },
  {
    id: 'tab-news',
    href: 'news-tab',
    label: 'News',
    className: 'px-4',
    content: <NewsTabContent newsItems={newsItems} />
  },
  {
    id: 'tab-events',
    href: 'events-tab',
    label: 'Events',
    className: 'px-4',
    content: <EventsTabContent eventLists={eventList} />
  },
  {
    id: 'tab-comProfile',
    href: 'comProfile-tab',
    label: 'Company Profile',
    className: 'px-4',
    content: (
      <CompanyProfileTabContent companyProfileItems={companyProfileItems} />
    )
  },
  {
    id: 'tab-empty1',
    href: 'empty1-tab',
    label: '',
    className: 'px-4 disabled h-100 w-full h-[29.06px]',
    navItemClass: 'flex-1 hidden md:inline',
    content: null
  }
];

/** Gold: `+StockDetailsTab` in mixins/stock/stock-details/StockDetailsTab.pug */
const StockDetailsMainContent = () => {
  return (
    <Tabs defaultValue="chart-tab">
      <Tabs.List
        asChild
        variant="underline"
        className="optionChainTableHeader gap-0 flex-nowrap scrollbar mb-6"
        id="stockDetailsTab"
      >
        <ul>
          {stockDetailsTabItems.map(item => (
            <li key={item.id} className={cn('nav-item', item.navItemClass)}>
              <Tabs.Trigger asChild value={item.href}>
                <a
                  className={cn('pt-0 text-nowrap', item.className)}
                  id={item.id}
                  href={`#${item.href}`}
                  onClick={e => e.preventDefault()}
                >
                  {item.label}
                </a>
              </Tabs.Trigger>
            </li>
          ))}
        </ul>
      </Tabs.List>
      <div className="tab-content" id="stockDetailsTabContent">
        {stockDetailsTabItems.map(
          item =>
            item.content && (
              <Tabs.Content
                key={item.id}
                value={item.href}
                id={item.href}
                className="tab-pane fade show active"
              >
                {item.content}
              </Tabs.Content>
            )
        )}
      </div>
    </Tabs>
  );
};

export default StockDetailsMainContent;
