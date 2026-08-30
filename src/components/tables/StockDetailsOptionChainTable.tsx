import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { ColumnDef } from '@tanstack/react-table';
import { StockDetailsOptionChainRow } from 'data/stock/optionChainTableData';
import TopStockAdvanceTable from 'components/modules/stock/TopStockAdvanceTable';
import { numberFormat } from 'helpers/utils';

interface StockDetailsOptionChainTableProps {
  data: StockDetailsOptionChainRow[];
}

const columns: ColumnDef<StockDetailsOptionChainRow>[] = [
  {
    header: 'Calls',
    footer: props => props.column.id,
    columns: [
      {
        header: 'BID',
        accessorKey: 'callsBid',
        cell: ({ row: { original } }) => {
          const { callsBid } = original;

          return numberFormat(callsBid, 'standard', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2
          });
        },
        meta: {
          headerProps: { className: 'text-sm' },
          cellProps: {
            className: 'text-info-dark'
          }
        }
      },
      {
        header: 'ASK',
        accessorKey: 'callsAsk',
        cell: ({ row: { original } }) => {
          const { callsAsk } = original;

          return numberFormat(callsAsk, 'standard', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2
          });
        },
        meta: {
          headerProps: { className: 'text-sm' },
          cellProps: {
            className: 'text-info-dark'
          }
        }
      }
    ],
    meta: {
      headerProps: { className: 'text-md' }
    }
  },
  {
    header: 'Strike Price',
    footer: props => props.column.id,
    columns: [
      {
        accessorKey: 'strikePrice',
        header: 'STRIKE',
        cell: ({ row: { original } }) => {
          const { strikePrice } = original;
          return numberFormat(strikePrice, 'standard', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2
          });
        },
        meta: {
          headerProps: {
            className: 'border-x border-subtle text-sm'
          },
          cellProps: {
            className: 'border-x text-subtle font-bold border-subtle'
          }
        }
      }
    ],
    meta: {
      headerProps: {
        className: 'text-md border-x border-subtle'
      }
    }
  },
  {
    header: 'Puts',
    footer: props => props.column.id,
    columns: [
      {
        header: 'BID',
        accessorKey: 'putsBid',
        cell: ({ row: { original } }) => {
          const { putsBid } = original;

          return numberFormat(putsBid, 'standard', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2
          });
        },
        meta: {
          headerProps: { className: 'text-sm' },
          cellProps: {
            className: 'text-info-dark'
          }
        }
      },
      {
        header: 'ASK',
        accessorKey: 'putsAsk',
        cell: ({ row: { original } }) => {
          const { putsAsk } = original;

          return numberFormat(putsAsk, 'standard', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2
          });
        },
        meta: {
          headerProps: { className: 'text-sm pe-0' },
          cellProps: {
            className: 'text-info-dark'
          }
        }
      }
    ],
    meta: {
      headerProps: { className: 'text-md pe-0' }
    }
  }
];

const StockDetailsOptionChainTable = ({
  data
}: StockDetailsOptionChainTableProps) => {
  const table = useAdvanceTable({
    data,
    columns,
    pageSize: 11,
    sortable: false,
    selectionColumnWidth: '30px',
    pagination: true
  });

  return (
    <AdvanceTableProvider {...table}>
      <TopStockAdvanceTable
        tableProps={{
          className: 'text-center border-top border-subtle'
        }}
        rowClassName="text-md font-semibold"
      />
    </AdvanceTableProvider>
  );
};

export default StockDetailsOptionChainTable;
