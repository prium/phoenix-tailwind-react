import { ColumnDef } from '@tanstack/react-table';
import { cn } from '@hummingbirdui/react';
import AdvanceTable from 'components/base/AdvanceTable';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { StockDashboardTableDataType } from 'data/stock/stockDashboard';
import {
  topGainersTableData,
  topLosersTableData
} from 'data/stock/stockDashboard';
import { currencyFormat, numberFormat } from 'helpers/utils';

type TableType = 'gainers' | 'losers';

/** `+StockTableRow` column classes — mixins/dashboard/stock/StockTable.pug */
const getColumns = (
  tableType: TableType
): ColumnDef<StockDashboardTableDataType>[] => [
  {
    id: 'symbol',
    accessorKey: 'symbol',
    header: 'Symbol',
    meta: {
      headerProps: {
        className: 'whitespace-nowrap align-middle ps-6 uppercase min-w-32'
      },
      cellProps: {
        className:
          'symbol align-middle whitespace-nowrap py-2 ps-6 text-md text-default font-semibold'
      }
    }
  },
  {
    id: 'name',
    accessorKey: 'name',
    header: 'Name',
    meta: {
      headerProps: { className: 'align-middle pe-10 uppercase min-w-40' },
      cellProps: {
        className:
          'name align-middle whitespace-nowrap text-start text-default py-2'
      }
    }
  },
  {
    id: 'price',
    accessorKey: 'price',
    header: 'Price',
    cell: ({ row: { original } }) =>
      currencyFormat(original.price, { minimumFractionDigits: 2 }),
    meta: {
      headerProps: { className: 'align-middle text-end uppercase min-w-38' },
      cellProps: {
        className:
          'price align-middle whitespace-nowrap text-default py-2 text-end'
      }
    }
  },
  {
    id: 'change',
    accessorKey: 'change',
    header: 'Change',
    cell: ({ row: { original } }) =>
      ` ${tableType === 'losers' ? '-' : ''}${numberFormat(
        original.change,
        'standard',
        { minimumFractionDigits: 2 }
      )}%`,
    meta: {
      headerProps: {
        className: 'align-middle px-6 text-end uppercase min-w-32'
      },
      cellProps: {
        className: cn(
          tableType === 'losers' ? 'text-danger' : 'text-success',
          'change align-middle whitespace-nowrap text-md pe-6 font-semibold text-end'
        )
      }
    }
  }
];

/** `+TopGainers` / `+TopLosers` list.js table — mixins/dashboard/stock/StockTable.pug */
const StockDashboardTopListTable = ({
  data,
  tableType
}: {
  data: StockDashboardTableDataType[];
  tableType: TableType;
}) => {
  const table = useAdvanceTable({
    data,
    columns: getColumns(tableType),
    pageSize: 7,
    sortable: true,
    pagination: true
  });

  return (
    <AdvanceTableProvider {...table}>
      <AdvanceTable
        headerClassName="bg-subtle border-t border-subtle"
        tableProps={{ striped: true, className: 'text-md mb-0' }}
      />
      <AdvanceTableFooter
        pagination
        className="pt-2 pb-0 pagination-subtle"
        nextPageLinkClassName="pe-0"
      />
    </AdvanceTableProvider>
  );
};

/** stock.pug bottom section — Top Gainers / Top Losers */
const StockDashboardTopList = () => {
  return (
    <div className="row gy-8 xl:gx-12 2xl:gx-18">
      <div className="xl:col-6">
        <h2 className="mb-6">Top Gainers</h2>
        <StockDashboardTopListTable
          data={topGainersTableData}
          tableType="gainers"
        />
      </div>
      <div className="xl:col-6">
        <h2 className="mb-6">Top Losers</h2>
        <StockDashboardTopListTable
          data={topLosersTableData}
          tableType="losers"
        />
      </div>
    </div>
  );
};

export default StockDashboardTopList;
