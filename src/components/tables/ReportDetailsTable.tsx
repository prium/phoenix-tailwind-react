import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import Badge from 'components/base/Badge';
import { SellerReport, sellersReportData } from 'data/crm/reportsData';

/** `+ChartReportsTable` in ../phoenix-tailwind/src/pug/mixins/crm/ReportsDetails.pug */
const columns: ColumnDef<SellerReport>[] = [
  {
    header: 'Report stage',
    accessorKey: 'reportStage',
    meta: {
      cellProps: {
        className: 'whitespace-nowrap font-semibold text-highlight py-2'
      },
      headerProps: {
        className:
          'w-7/20 text-subtle font-bold! text-sm uppercase text-nowrap ps-0'
      }
    }
  },
  {
    accessorKey: 'totalCount',
    header: 'total count',
    meta: {
      cellProps: {
        className:
          'text-end whitespace-nowrap font-semibold text-highlight ps-6 py-2'
      },
      headerProps: {
        className:
          'w-7/20 text-end ps-6 text-subtle font-bold! text-sm uppercase text-nowrap'
      }
    }
  },
  {
    id: 'status',
    accessorFn: ({ status }) => status.label,
    header: 'Status',
    cell: ({ row: { original } }) => (
      <Badge variant="phoenix" bg={original.status.type}>
        {original.status.label}
      </Badge>
    ),
    meta: {
      headerProps: {
        className:
          'w-3/10 text-end ps-6 text-subtle font-bold! text-sm uppercase pe-0'
      },
      cellProps: {
        className:
          'text-end whitespace-nowrap ps-6 font-semibold text-highlight'
      }
    }
  }
];

const ReportDetailsTable = () => {
  const table = useAdvanceTable({
    data: sellersReportData,
    columns,
    sortable: false
  });

  return (
    <AdvanceTableProvider {...table}>
      <AdvanceTable
        tableProps={{
          size: 'sm',
          className: 'reports-details-chart-table text-md mb-0'
        }}
      />
    </AdvanceTableProvider>
  );
};

export default ReportDetailsTable;
