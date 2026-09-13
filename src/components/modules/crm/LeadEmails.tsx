import { cn } from '@hummingbirdui/react';
import SearchBox from 'components/common/SearchBox';
import LeadEmailsTable, {
  leadEmailsColumns
} from 'components/tables/LeadEmailsTable';
import { dealEmailsTableData } from 'data/crm/leadsData';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { ChangeEvent, useState } from 'react';

/** the gold demo hardcodes these counts in the tab labels */
const tabItems = [
  { label: 'Mails (68)', value: 'mails' },
  { label: 'Drafts (6)', value: 'drafts' },
  { label: 'Scheduled (17)', value: 'scheduled' }
];

/** `+Emails` in mixins/crm/LeadDetails.pug */
const LeadEmails = () => {
  const [activeTab, setActiveTab] = useState('mails');
  const table = useAdvanceTable({
    data: dealEmailsTableData,
    columns: leadEmailsColumns,
    pageSize: 7,
    pagination: true,
    sortable: true,
    initialState: {
      columnVisibility: {
        type: false
      }
    }
  });

  const { setGlobalFilter, getColumn } = table;

  const handleTabClick = (value: string) => {
    setActiveTab(value);
    // the gold "Mails" tab shows the full demo set
    getColumn('type')?.setFilterValue(value === 'mails' ? '' : value);
  };

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGlobalFilter(e.target.value || undefined);
  };

  return (
    <div>
      <h2 className="mb-2">Emails</h2>
      <AdvanceTableProvider {...table}>
        <div className="scrollbar">
          <ul
            className="nav nav-underline text-md flex-nowrap mb-1"
            role="tablist"
          >
            {tabItems.map(item => (
              <li className="nav-item me-4" key={item.value}>
                <a
                  className={cn('nav-link text-nowrap border-0', {
                    active: activeTab === item.value
                  })}
                  href="#!"
                  role="tab"
                  onClick={e => {
                    e.preventDefault();
                    handleTabClick(item.value);
                  }}
                >
                  {item.label}
                  <span className="text-subtle font-normal"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <SearchBox
          onChange={handleSearchInputChange}
          placeholder="Search..."
          className="w-full mb-4"
        />
        <LeadEmailsTable />
      </AdvanceTableProvider>
    </div>
  );
};

export default LeadEmails;
