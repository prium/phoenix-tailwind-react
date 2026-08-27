import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import Badge from 'components/base/Badge';
import { SellerReport, sellersReportData } from 'data/crm/reportsData';

const columns: ColumnDef<SellerReport>[] = [
  {
    header: 'Report stage',
    accessorKey: 'reportStage',
    meta: {
      cellProps: {
        className: 'font-semibold text-highlight py-2'
      },
      headerProps: {
        style: { width: '35%' },
        className: 'text-sm text-subtle font-bold text-nowrap'
      }
    }
  },
  {
    accessorKey: 'totalCount',
    header: 'Total count',
    meta: {
      cellProps: {
        className: 'text-end font-semibold text-highlight ps-4 py-2'
      },
      headerProps: {
        style: { width: '35%' },
        className:
          'text-end ps-4 text-subtle font-bold text-sm text-uppercase text-nowrap'
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
        style: { width: '30%' },
        className: 'text-end ps-4 text-subtle font-bold text-sm text-nowrap'
      },
      cellProps: {
        className: 'text-end ps-4 text-highlight'
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
    <div>
      <AdvanceTableProvider {...table}>
        <AdvanceTable
          tableProps={{ className: ' text-md', size: 'sm' }}
        />
      </AdvanceTableProvider>
    </div>
  );
};

export default ReportDetailsTable;
