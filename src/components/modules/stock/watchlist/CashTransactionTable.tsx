import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import {
  CashTransactionRow,
  cashTransactionTableData
} from 'data/stock/watchlist';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';

const columns: ColumnDef<CashTransactionRow>[] = [
  {
    id: 'date',
    accessorKey: 'date',
    header: 'Date',
    cell: ({ row: { original } }) => (
      <p className="font-semibold mb-0">{original.date}</p>
    ),
    meta: {
      headerProps: { className: 'whitespace-nowrap ps-0 min-w-60' },
      cellProps: { className: 'date whitespace-nowrap' }
    }
  },
  {
    id: 'type',
    accessorKey: 'type',
    header: 'Type',
    cell: ({ row: { original } }) => (
      <p className="text-md font-semibold text-subtle mb-0">{original.type}</p>
    ),
    meta: {
      headerProps: { className: 'ps-4 min-w-60' },
      cellProps: { className: 'type whitespace-nowrap ps-4' }
    }
  },
  {
    id: 'amount',
    accessorKey: 'amount',
    header: 'amount',
    cell: ({ row: { original } }) => (
      <p className="font-semibold text-subtle mb-0 text-md">
        {original.amount}
      </p>
    ),
    meta: {
      headerProps: { className: 'ps-0 min-w-35' },
      cellProps: { className: 'amount ps-0' }
    }
  },
  {
    id: 'currency',
    accessorKey: 'currency',
    header: 'currency',
    cell: ({ row: { original } }) => (
      <p className="text-md text-subtle mb-0">{original.currency}</p>
    ),
    meta: {
      headerProps: { className: 'text-center min-w-30' },
      cellProps: { className: 'currency whitespace-nowrap text-center' }
    }
  },
  {
    id: 'note',
    accessorKey: 'note',
    header: 'note',
    cell: ({ row: { original } }) => (
      <p className="text-md text-subtle mb-0">{original.note}</p>
    ),
    meta: {
      headerProps: { className: 'text-end min-w-87.5' },
      cellProps: { className: 'note whitespace-nowrap text-end' }
    }
  },
  {
    id: 'action',
    header: '',
    enableSorting: false,
    cell: () => (
      <button type="button" className="btn btn-link text-soft btn-sm p-0">
        <FontAwesomeIcon icon={faTrash} />
      </button>
    ),
    meta: {
      headerProps: { className: 'sort text-center min-w-18' },
      cellProps: { className: 'note whitespace-nowrap text-end' }
    }
  }
];

/** `#cashTransactionTable` list table in mixins/stock/watchlist/CashTransactionTable.pug */
const CashTransactionTable = () => {
  const table = useAdvanceTable({
    data: cashTransactionTableData,
    columns,
    pagination: true,
    pageSize: 11,
    sortable: true
  });

  return (
    <div className="mt-2">
      <AdvanceTableProvider {...table}>
        <AdvanceTable
          className="pb-4"
          headerClassName="uppercase text-default font-bold text-md"
        />
      </AdvanceTableProvider>
    </div>
  );
};

export default CashTransactionTable;
