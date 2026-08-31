import {
  faFileInvoiceDollar,
  faTrash
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ColumnDef } from '@tanstack/react-table';
import { cn } from '@hummingbirdui/react';
import AdvanceTable from 'components/base/AdvanceTable';
import Button from 'components/base/Button';
import StockOverviewChart from 'components/charts/e-charts/StockOverviewChart';
import StockOverviewInvertedChart from 'components/charts/e-charts/StockOverviewInvertedChart';
import StockOverviewMixedChart from 'components/charts/e-charts/StockOverviewMixedChart';
import { StockOverviewChartClass } from 'data/stock/portfolio';
import { WatchlistSummaryRow, summaryTableData } from 'data/stock/watchlist';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { CSSProperties } from 'react';

/** gold day-chart box: `.w-27.25.h-11` */
const chartStyle: CSSProperties = { width: 109, height: 44 };

const DayChart = ({
  chart,
  data
}: {
  chart: StockOverviewChartClass;
  data: number[];
}) => {
  switch (chart) {
    case 'echart-stock-overview-mixed-chart':
      return <StockOverviewMixedChart data={data} style={chartStyle} />;
    case 'echart-stock-overview-inverted-chart':
      return <StockOverviewInvertedChart data={data} style={chartStyle} />;
    default:
      return <StockOverviewChart data={data} style={chartStyle} />;
  }
};

const columns: ColumnDef<WatchlistSummaryRow>[] = [
  {
    id: 'symbol',
    accessorKey: 'symbol',
    header: 'Symbol',
    cell: ({ row: { original } }) => (
      <p className="font-semibold mb-0">{original.symbol}</p>
    ),
    meta: {
      headerProps: { className: 'whitespace-nowrap ps-0 min-w-39.5' },
      cellProps: { className: 'symbol whitespace-nowrap' }
    }
  },
  {
    id: 'lastPrice',
    accessorKey: 'lastPrice',
    header: 'Last Price',
    cell: ({ row: { original } }) => (
      <p className="text-md font-semibold text-subtle mb-0">
        {' '}
        ${original.lastPrice}
      </p>
    ),
    meta: {
      headerProps: { className: 'ps-4 min-w-39.5' },
      cellProps: { className: 'lastPrice whitespace-nowrap ps-4' }
    }
  },
  {
    id: 'change',
    accessorFn: row => row.change.growth,
    header: 'Change',
    cell: ({ row: { original } }) => (
      <div
        className={cn(
          original.change.className === 'success'
            ? 'text-success'
            : 'text-danger'
        )}
      >
        <p className="font-bold mb-1">{original.change.growth}</p>
        <p className="mb-0">{original.change.percent}%</p>
      </div>
    ),
    meta: {
      headerProps: { className: 'ps-4 min-w-39.5' },
      cellProps: { className: 'change ps-4 text-md' }
    }
  },
  {
    id: 'priceAdds',
    accessorKey: 'priceAdds',
    header: 'Price When Addes',
    cell: ({ row: { original } }) => (
      <p className="text-md text-subtle font-semibold mb-0">
        ${original.priceAdds}
      </p>
    ),
    meta: {
      headerProps: { className: 'ps-0 min-w-45' },
      cellProps: { className: 'priceAdds whitespace-nowrap ps-0' }
    }
  },
  {
    id: 'volume',
    accessorKey: 'volume',
    header: 'volume',
    cell: ({ row: { original } }) => (
      <p className="text-md text-subtle mb-0">{original.volume}</p>
    ),
    meta: {
      headerProps: { className: 'ps-4 min-w-30' },
      cellProps: { className: 'volume whitespace-nowrap ps-4' }
    }
  },
  {
    id: 'share',
    accessorFn: row => row.share ?? 0,
    header: 'share',
    cell: ({ row: { original } }) =>
      original.share ? (
        <p className="font-bold mb-0 text-md text-info">{original.share}</p>
      ) : (
        <Button variant="phoenix-secondary" size="sm">
          Add
        </Button>
      ),
    meta: {
      headerProps: { className: 'text-center min-w-39.5' },
      cellProps: { className: 'share whitespace-nowrap text-center' }
    }
  },
  {
    id: 'avgVolume',
    accessorKey: 'avgVolume',
    header: 'Avg Volume',
    cell: ({ row: { original } }) => (
      <p className="text-md text-subtle mb-0">{original.avgVolume}</p>
    ),
    meta: {
      headerProps: { className: 'ps-8 min-w-39.5' },
      cellProps: { className: 'text-center avgVolume ps-8' }
    }
  },
  {
    id: 'dayChart',
    accessorFn: () => '',
    header: 'Day Chart',
    cell: ({ row: { original } }) => (
      <DayChart chart={original.chart} data={original.echartData} />
    ),
    meta: {
      headerProps: { className: 'ps-6 min-w-39.5' },
      cellProps: { className: 'dayChart whitespace-nowrap ps-6 py-2' }
    }
  },
  {
    id: 'marketCap',
    accessorKey: 'marketCap',
    header: 'Market Cap',
    cell: ({ row: { original } }) => (
      <p className="text-md text-subtle mb-0">{original.marketCap}</p>
    ),
    meta: {
      headerProps: { className: 'text-end pe-8 min-w-45' },
      cellProps: { className: 'marketCap whitespace-nowrap pe-8 text-end' }
    }
  },
  {
    id: 'actions',
    accessorFn: () => '',
    header: 'actions',
    cell: () => (
      <>
        <button type="button" className="btn btn-link text-soft p-0 me-2">
          <FontAwesomeIcon icon={faFileInvoiceDollar} />
        </button>{' '}
        <button type="button" className="btn btn-link text-soft p-0">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </>
    ),
    meta: {
      headerProps: { className: 'text-end pe-4 min-w-39.5' },
      cellProps: { className: 'actions whitespace-nowrap pe-4 text-end' }
    }
  }
];

/** `#summeryTable` list table in mixins/stock/watchlist/SummaryTable.pug */
const SummaryTable = () => {
  const table = useAdvanceTable({
    data: summaryTableData,
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

export default SummaryTable;
