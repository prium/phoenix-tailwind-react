import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import {
  PortfolioGrowth,
  PortfolioTableRowData,
  portfolioTableData
} from 'data/stock/portfolio';

/** `if item.dayChange … else p ---` cells of PortfolioTableRow */
const GrowthCell = ({ value }: { value?: PortfolioGrowth }) =>
  value ? (
    <div className={value.growth ? 'text-success' : 'text-danger'}>
      <p className="text-md font-bold mb-1">
        {value.growth ? '+' : '-'}${value.amount}
      </p>
      <p className="text-md font-bold mb-1">
        {value.growth ? '+' : '-'}
        {value.changes}%
      </p>
    </div>
  ) : (
    <p className="text-subtle mb-0 font-bold">---</p>
  );

const columns: ColumnDef<PortfolioTableRowData>[] = [
  {
    id: 'portfolioName',
    accessorKey: 'portfolioName',
    header: 'Portfolio Name',
    cell: ({ row: { original } }) => (
      <p className="font-semibold mb-0">{original.portfolioName}</p>
    ),
    meta: {
      headerProps: { className: 'whitespace-nowrap ps-0 min-w-45' },
      cellProps: { className: 'portfolioName whitespace-nowrap' }
    }
  },
  {
    id: 'symbols',
    accessorKey: 'symbols',
    header: 'symbols',
    cell: ({ row: { original } }) => (
      <p className="text-md font-semibold text-subtle mb-0">
        {original.symbols}
      </p>
    ),
    meta: {
      headerProps: { className: 'text-center min-w-30' },
      cellProps: { className: 'symbols whitespace-nowrap text-center' }
    }
  },
  {
    id: 'costBasis',
    accessorKey: 'costBasis',
    header: 'cost basis',
    cell: ({ row: { original } }) => (
      <p className="text-md text-subtle mb-0">${original.costBasis}</p>
    ),
    meta: {
      headerProps: { className: 'ps-4 min-w-37.5' },
      cellProps: { className: 'text-center costBasis ps-4' }
    }
  },
  {
    id: 'marketValue',
    accessorKey: 'marketValue',
    header: 'Market value',
    cell: ({ row: { original } }) => (
      <p className="text-md text-subtle mb-0">${original.marketValue}</p>
    ),
    meta: {
      headerProps: { className: 'ps-4 min-w-40' },
      cellProps: { className: 'marketValue whitespace-nowrap ps-4' }
    }
  },
  {
    id: 'dayChange',
    accessorFn: row => row.dayChange?.amount ?? '',
    header: 'Day Change',
    cell: ({ row: { original } }) => <GrowthCell value={original.dayChange} />,
    meta: {
      headerProps: { className: 'ps-4 min-w-35' },
      cellProps: { className: 'dayChange whitespace-nowrap ps-4' }
    }
  },
  {
    id: 'unrealized',
    accessorFn: row => row.unrealized?.amount ?? '',
    header: 'Unrealized gain / loss',
    cell: ({ row: { original } }) => <GrowthCell value={original.unrealized} />,
    meta: {
      headerProps: { className: 'pe-4 text-end min-w-55' },
      cellProps: { className: 'unrealized whitespace-nowrap text-end pe-4' }
    }
  },
  {
    id: 'realized',
    accessorFn: row => row.realized?.amount ?? '',
    header: 'realized gain / loss',
    cell: ({ row: { original } }) => <GrowthCell value={original.realized} />,
    meta: {
      headerProps: { className: 'text-end min-w-45' },
      cellProps: { className: 'realized whitespace-nowrap text-end' }
    }
  }
];

/** `#portfolioTable` list table in mixins/stock/portfolio/MyPortfolioMainContent.pug */
const PortfolioTable = () => {
  const table = useAdvanceTable({
    data: portfolioTableData,
    columns,
    pagination: true,
    pageSize: 7,
    sortable: true
  });

  return (
    <AdvanceTableProvider {...table}>
      <AdvanceTable
        tableProps={{ className: 'mb-0' }}
        headerClassName="uppercase border-t text-default font-bold text-md"
      />
    </AdvanceTableProvider>
  );
};

export default PortfolioTable;
