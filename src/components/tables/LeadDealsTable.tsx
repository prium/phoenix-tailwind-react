import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import Badge, { BadgeBg } from 'components/base/Badge';
import RevealDropdown, {
  RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import ActionDropdownItems from 'components/common/ActionDropdownItems';
import { buildSelectionColumn } from 'hooks/useAdvanceTable';
import { LeadDeal, leadDealsTableData } from 'data/crm/leadsData';
import { currencyFormat } from 'helpers/utils';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { Link } from 'react-router';

const getBadgeBg = (label: string): BadgeBg => {
  switch (label) {
    case 'won deal':
      return 'success';

    case 'new deal':
      return 'primary';

    case 'canceled':
      return 'secondary';

    case 'in progress':
    case 'warm':
      return 'info';

    case 'hot':
      return 'danger';

    case 'cold':
      return 'warning';

    default:
      return 'primary';
  }
};

/** the gold rows compute the bar width against a shared max of 145 */
const PROGRESS_MAX = 145;

const progressBarClass: Record<BadgeBg, string> = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  success: 'bg-success',
  danger: 'bg-danger',
  warning: 'bg-warning',
  info: 'bg-info'
};

const getProgressBarClass = (probability: number) =>
  probability < 50
    ? progressBarClass.warning
    : probability < 75
      ? progressBarClass.info
      : progressBarClass.success;

const columns: ColumnDef<LeadDeal>[] = [
  buildSelectionColumn<LeadDeal>({
    headerClassName: 'w-6.5 whitespace-nowrap text-md ps-0',
    cellClassName: 'text-md px-0 py-5',
    checkboxClassName: 'text-base py-1'
  }),
  {
    header: 'Deal name',
    accessorKey: 'name',
    cell: ({ row: { original } }) => (
      <Link to="#!" className="font-semibold text-primary">
        {original.name}
      </Link>
    ),
    meta: {
      headerProps: {
        className: 'whitespace-nowrap pe-4 ps-0 uppercase w-3/20 min-w-50'
      },
      cellProps: { className: 'whitespace-nowrap py-2 ps-0' }
    }
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
    cell: ({ row: { original } }) => currencyFormat(original.amount),
    meta: {
      headerProps: { className: 'text-end uppercase pe-10 w-3/20 min-w-25' },
      cellProps: {
        className: 'whitespace-nowrap font-bold text-subtle py-2 text-end pe-10'
      }
    }
  },
  {
    accessorKey: 'stage',
    header: 'Stage',
    cell: ({ row: { original } }) => (
      <Badge
        variant="phoenix"
        bg={getBadgeBg(original.stage)}
        className="text-sm"
      >
        {original.stage}
      </Badge>
    ),
    meta: {
      headerProps: { className: 'text-start uppercase w-1/5 min-w-50' },
      cellProps: { className: 'whitespace-nowrap text-default py-2' }
    }
  },
  {
    accessorKey: 'probability',
    header: 'Probability',
    cell: ({ row: { original } }) => {
      const { probability } = original;
      return (
        <>
          <p className="text-muted text-sm mb-0">{probability}%</p>
          <div
            className="progress bg-primary-subtle h-0.75"
            role="progressbar"
            aria-valuenow={probability}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className={`progress-bar ${getProgressBarClass(probability)}`}
              style={{ width: `${(probability / PROGRESS_MAX) * 100}%` }}
            />
          </div>
        </>
      );
    },
    meta: {
      headerProps: { className: 'text-start uppercase w-1/5 min-w-25' },
      cellProps: { className: 'whitespace-nowrap' }
    }
  },
  {
    accessorKey: 'closing_date',
    header: 'Closing Date',
    meta: {
      headerProps: { className: 'text-end uppercase ps-0 w-3/20 min-w-30' },
      cellProps: { className: 'text-subtle text-center py-2' }
    }
  },
  {
    accessorKey: 'type',
    header: 'Type',
    cell: ({ row: { original } }) => (
      <Badge
        variant="phoenix"
        bg={getBadgeBg(original.type)}
        className="text-sm"
      >
        {original.type}
      </Badge>
    ),
    meta: {
      headerProps: { className: 'text-end uppercase w-3/20 min-w-35' },
      cellProps: { className: 'font-semibold py-2 text-end' }
    }
  },
  {
    id: 'action',
    cell: () => (
      <RevealDropdownTrigger>
        <RevealDropdown>
          <ActionDropdownItems />
        </RevealDropdown>
      </RevealDropdownTrigger>
    ),
    meta: {
      headerProps: { className: 'pe-0 text-end w-3/20' },
      cellProps: { className: 'text-end whitespace-nowrap pe-0 py-2' }
    }
  }
];

/** `+DealsTable` (`#leadDetailsTable`) in mixins/crm/LeadDetails.pug */
const LeadDealsTable = () => {
  const table = useAdvanceTable({
    data: leadDealsTableData,
    columns,
    pageSize: 5,
    pagination: true,
    sortable: true
  });

  return (
    <AdvanceTableProvider {...table}>
      <div className="border-t border-b border-subtle">
        <AdvanceTable
          tableProps={{ className: 'text-md mb-0' }}
          rowClassName="hover-actions-trigger btn-reveal-trigger static"
        />
        {/* h pinned: HB's active page-link is 1px taller than the gold list.js
            `.page` button and would shift every section below the table */}
        <AdvanceTableFooter pagination nextPageLinkClassName="pe-0" />
      </div>
    </AdvanceTableProvider>
  );
};

export default LeadDealsTable;
