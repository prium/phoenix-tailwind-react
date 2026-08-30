import { Col, Row } from '@hummingbirdui/react';
import { faFileExport, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import FilterButtonGroup, {
  FilterMenu
} from 'components/common/FilterButtonGroup';
import FilterTab, { FilterTabItem } from 'components/common/FilterTab';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import SearchBox from 'components/common/SearchBox';
import CustomersTable, {
  customersTablecolumns
} from 'components/tables/CustomersTable';
import { defaultBreadcrumbItems } from 'data/commonData';
import { customers } from 'data/e-commerce/customers';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { ChangeEvent } from 'react';

const tabItems: FilterTabItem[] = [
  {
    label: 'All',
    value: 'all',
    count: 68817
  },
  {
    label: 'New',
    value: 'new',
    count: 6
  },
  {
    label: 'Abandoned checkouts',
    value: 'abandoned_checkouts',
    count: 17
  },
  {
    label: 'Locals',
    value: 'locals',
    count: 6810
  },
  {
    label: 'Email subscribers',
    value: 'email_subscribers',
    count: 8
  },
  {
    label: 'Top reviews',
    value: 'top_reviews',
    count: 2
  }
];

const filterMenus: FilterMenu[] = [
  {
    label: 'Country',
    items: [
      {
        label: 'USA'
      },
      {
        label: 'UK'
      },
      {
        label: 'Australia'
      }
    ]
  },
  {
    label: 'VIP',
    items: [
      {
        label: 'VIP 1'
      },
      {
        label: 'VIP 2'
      },
      {
        label: 'VIP 3'
      }
    ]
  }
];

const Customers = () => {
  const table = useAdvanceTable({
    data: customers,
    columns: customersTablecolumns,
    pageSize: 10,
    pagination: true,
    sortable: true,
    selection: true,
    selectionColumnProps: { cellClassName: 'ps-0 py-5' }
  });

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    table.setGlobalFilter(e.target.value || undefined);
  };

  return (
    <div>
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <div className="mb-16">
        <Row className="g-3 mb-6">
          <Col xs="auto">
            <h2 className="mb-0">Customers</h2>
          </Col>
        </Row>
        <FilterTab tabItems={tabItems} className="mb-4 lg:mb-2" />

        <AdvanceTableProvider {...table}>
          <div className="mb-6">
            <div className="flex flex-wrap gap-4">
              <SearchBox
                placeholder="Search customers"
                onChange={handleSearchInputChange}
              />
              <div className="scrollbar overflow-hidden-y">
                <FilterButtonGroup menus={filterMenus} />
              </div>
              <div className="2xl:ms-auto">
                <Button variant="link" className="text-default me-6 px-0">
                  <FontAwesomeIcon
                    icon={faFileExport}
                    className="text-md me-2"
                  />
                  Export
                </Button>
                <Button variant="primary">
                  <FontAwesomeIcon icon={faPlus} className="me-2" />
                  Add customer
                </Button>
              </div>
            </div>
          </div>

          <div className="-mx-6 px-6 lg:-mx-10 lg:px-10 bg-soft border-t border-b border-light relative top-1">
            <CustomersTable />
          </div>
        </AdvanceTableProvider>
      </div>
    </div>
  );
};

export default Customers;
