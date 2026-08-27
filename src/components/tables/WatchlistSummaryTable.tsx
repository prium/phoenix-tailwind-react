import AdvanceTable from 'components/base/AdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { ColumnDef } from '@tanstack/react-table';
import { WatchlistSummaryTableRowItem } from 'data/stock/watchlist';
import useAdvanceTable from 'hooks/useAdvanceTable';
import { currencyFormat, numberFormat } from 'helpers/utils';
import Button from 'components/base/Button';
import StockOverviewInvertedChart from 'components/charts/e-charts/StockOverviewInvertedChart';
import StockOverviewMixedChart from 'components/charts/e-charts/StockOverviewMixedChart';
import StockOverviewChart from 'components/charts/e-charts/StockOverviewChart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileInvoiceDollar,
  faTrash
} from '@fortawesome/free-solid-svg-icons';

const columns: ColumnDef<WatchlistSummaryTableRowItem>[] = [
  {
    accessorKey: 'symbol',
    header: 'Symbol',
    cell: ({ row: { original } }) => {
      const { symbol } = original;

      return <p className="font-semibold mb-0">{symbol}</p>;
    },
    meta: {
      headerProps: {
        className: 'whitespace-nowrap align-middle ps-0',
        style: { minWidth: 158 }
      },
      cellProps: {
        className: 'align-middle whitespace-nowrap'
      }
    }
  },
  {
    accessorKey: 'lastPrice',
    header: 'Last Price',
    cell: ({ row: { original } }) => {
      const { lastPrice } = original;
      return (
        <p className="text-md font-semibold text-subtle mb-0">
          {currencyFormat(lastPrice, { minimumFractionDigits: 2 })}
        </p>
      );
    },
    meta: {
      headerProps: {
        className: 'align-middle ps-3',
        style: { minWidth: 158 }
      },
      cellProps: {
        className: 'align-middle whitespace-nowrap ps-3'
      }
    }
  },
  {
    accessorKey: 'change',
    header: 'Change',
    cell: ({ row: { original } }) => {
      const {
        change: { amount, percentage, prefix, className }
      } = original;

      return (
        <div className={className}>
          <p className="font-bold mb-1">
            {prefix}
            {currencyFormat(amount, { minimumFractionDigits: 2 })}
          </p>
          <p className="mb-0">
            {prefix}
            {numberFormat(percentage, 'standard', { minimumFractionDigits: 2 })}
            %
          </p>
        </div>
      );
    },
    meta: {
      headerProps: {
        className: 'align-middle ps-3',
        style: { minWidth: 158 }
      },
      cellProps: {
        className: 'align-middle ps-3 text-md'
      }
    }
  },
  {
    accessorKey: 'priceAdds',
    header: 'Price When Addes',
    cell: ({ row: { original } }) => {
      const { priceAdds } = original;
      return (
        <p className="text-md text-subtle font-semibold mb-0">
          {currencyFormat(priceAdds, { minimumFractionDigits: 2 })}
        </p>
      );
    },
    meta: {
      headerProps: {
        className: 'align-middle ps-0',
        style: { minWidth: 180 }
      },
      cellProps: {
        className: 'align-middle whitespace-nowrap ps-0'
      }
    }
  },
  {
    accessorKey: 'volume',
    header: 'Volume',
    cell: ({ row: { original } }) => {
      const { volume } = original;
      return (
        <p className="text-md text-subtle mb-0">
          {numberFormat(volume, 'compact', {
            compactDisplay: 'short',
            minimumFractionDigits: 3
          })}
        </p>
      );
    },
    meta: {
      headerProps: {
        className: 'align-middle ps-3',
        style: { minWidth: 120 }
      },
      cellProps: {
        className: 'align-middle whitespace-nowrap ps-3'
      }
    }
  },
  {
    accessorKey: 'share',
    header: 'Share',
    cell: ({ row: { original } }) => {
      const { share } = original;
      return share ? (
        <p className="font-bold mb-0 text-md text-info">{share}</p>
      ) : (
        <Button variant="phoenix-secondary" size="sm">
          Add
        </Button>
      );
    },
    meta: {
      headerProps: {
        className: 'align-middle text-center',
        style: { minWidth: 158 }
      },
      cellProps: {
        className: 'align-middle whitespace-nowrap text-center'
      }
    }
  },
  {
    accessorKey: 'avgVolume',
    header: 'Avg Volume',
    cell: ({ row: { original } }) => {
      const { avgVolume } = original;
      return (
        <p className="text-md text0body-tertiary mb-0">
          {numberFormat(avgVolume, 'compact', {
            compactDisplay: 'short',
            minimumFractionDigits: 3
          })}
        </p>
      );
    },
    meta: {
      headerProps: {
        className: 'align-middle ps-5',
        style: { minWidth: 158 }
      },
      cellProps: {
        className: 'align-middle text-center ps-5'
      }
    }
  },
  {
    accessorKey: 'dayChart',
    header: 'Day Chart',
    cell: ({ row: { original } }) => {
      const {
        dayChart: { chartType, chartData }
      } = original;
      return (
        <>
          {chartType === 'inverted' && (
            <StockOverviewInvertedChart
              data={chartData}
              style={{ width: 109, height: 44 }}
            />
          )}
          {chartType === 'mixed' && (
            <StockOverviewMixedChart
              data={chartData}
              style={{ width: 109, height: 44 }}
            />
          )}
          {chartType === 'default' && (
            <StockOverviewChart
              data={chartData}
              style={{ width: 109, height: 44 }}
            />
          )}
        </>
      );
    },
    meta: {
      headerProps: {
        className: 'whitespace-nowrap align-middle ps-4',
        style: { minWidth: 158 }
      },
      cellProps: {
        className: 'align-middle whitespace-nowrap ps-4 py-2'
      }
    }
  },
  {
    accessorKey: 'marketCap',
    header: 'Market Cap',
    cell: ({ row: { original } }) => {
      const { marketCap } = original;

      return (
        <p className="text-md text-subtle mb-0">
          {numberFormat(marketCap, 'compact', {
            compactDisplay: 'short',
            minimumFractionDigits: 3
          })}
        </p>
      );
    },
    meta: {
      headerProps: {
        className: 'align-middle text-end pe-5',
        style: { minWidth: 180 }
      },
      cellProps: {
        className: 'align-middle whitespace-nowrap text-end pe-5'
      }
    }
  },
  {
    accessorKey: 'actions',
    header: 'Actions',
    cell: () => {
      return (
        <>
          <Button variant="link" className="text-soft p-0 me-2">
            <FontAwesomeIcon icon={faFileInvoiceDollar} />
          </Button>
          <Button variant="link" className="text-soft p-0">
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        </>
      );
    },
    meta: {
      headerProps: {
        className: 'whitespace-nowrap align-middle text-end pe-3',
        style: { minWidth: 158 }
      },
      cellProps: {
        className: 'align-middle whitespace-nowrap pe-3 text-end'
      }
    }
  }
];

const WatchlistSummaryTable = ({
  data
}: {
  data: WatchlistSummaryTableRowItem[];
}) => {
  const table = useAdvanceTable({
    data,
    columns,
    pageSize: 11,
    pagination: true,
    selection: false,
    sortable: true
  });
  return (
    <AdvanceTableProvider {...table}>
      <AdvanceTable headerClassName="text-uppercase text-default font-bold text-md" />
    </AdvanceTableProvider>
  );
};

export default WatchlistSummaryTable;
