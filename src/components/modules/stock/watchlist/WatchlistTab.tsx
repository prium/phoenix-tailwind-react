import { Tabs } from '@hummingbirdui/react';
import CashTransactionTabContent from './CashTransactionTabContent';
import SummaryTable from './SummaryTable';

/** `+WatchlistTab` in mixins/stock/watchlist/WatchlistTab.pug */
const WatchlistTab = () => {
  return (
    <Tabs defaultValue="summary">
      <Tabs.List
        variant="underline"
        className="optionChainTableHeader gap-0"
        id="watchlist-tab"
      >
        <Tabs.Trigger value="summary" className="pe-4">
          Summary
        </Tabs.Trigger>
        <Tabs.Trigger value="cashTransaction" className="px-4">
          Cash Transaction{' '}
        </Tabs.Trigger>
        <Tabs.Trigger
          value="empty-tab-1"
          className="h-full disabled flex-1"
          disabled
          tabIndex={-1}
        ></Tabs.Trigger>
      </Tabs.List>
      <div className="mt-2">
        <Tabs.Content value="summary">
          <SummaryTable />
        </Tabs.Content>
        <Tabs.Content value="cashTransaction">
          <CashTransactionTabContent />
        </Tabs.Content>
      </div>
    </Tabs>
  );
};

export default WatchlistTab;
