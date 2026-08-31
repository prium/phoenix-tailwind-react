import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import { Link } from 'react-router';
import FeatherIcon from 'feather-icons-react';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import { buildSelectionColumn } from 'hooks/useAdvanceTable';
import RevealDropdown, {
  RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import ActionDropdownItems from 'components/common/ActionDropdownItems';
import { DealsReport } from 'data/crm/reportsData';
import { CSSProperties } from 'react';
import { cn } from '@hummingbirdui/react';

const selectColumn: ColumnDef<DealsReport> = buildSelectionColumn<DealsReport>({
  headerClassName: 'max-w-5 w-4.5 whitespace-nowrap text-md ps-0',
  cellClassName: 'text-md py-0',
  checkboxClassName: 'text-base py-1'
});

export const dealsReportColumns: ColumnDef<DealsReport>[] = [
  {
    id: 'deals_name',
    accessorKey: 'dealName',
    header: 'Deal name',
    cell: ({ row: { original } }) => (
      <Link to="#!" className="font-bold text-primary">
        {original.dealName}
      </Link>
    ),
    meta: {
      headerProps: {
        className: 'ps-0 pe-8 uppercase text-nowrap min-w-30'
      },
      cellProps: {
        className:
          'deals_name whitespace-nowrap font-semibold text-highlight ps-0 py-0'
      }
    }
  },
  {
    id: 'deal_owner',
    accessorFn: ({ dealOwner }) => dealOwner.name,
    header: 'Deal owner',
    cell: ({ row: { original } }) => {
      const { name, avatar, placeholder } = original.dealOwner;
      return (
        <div className="flex items-center relative">
          <div className="avatar avatar-sm me-4">
            <img
              className={cn(
                'rounded-full',
                placeholder && 'avatar-placeholder'
              )}
              src={avatar}
              alt=""
            />
          </div>
          <Link to="#!" className="text-highlight font-bold stretched-link">
            {name}
          </Link>
        </div>
      );
    },
    meta: {
      headerProps: {
        className: 'ps-6 pe-8 uppercase text-nowrap min-w-12.5'
      },
      cellProps: {
        className:
          'deal_owner whitespace-nowrap font-semibold text-emphasis ps-6 py-0'
      }
    }
  },
  {
    id: 'account_name',
    accessorKey: 'accountName',
    header: 'Account name',
    meta: {
      headerProps: {
        className: 'ps-6 pe-8 uppercase text-nowrap min-w-62.5'
      },
      cellProps: {
        className:
          'account_name whitespace-nowrap ps-6 font-semibold text-default py-0'
      }
    }
  },
  {
    id: 'stage',
    accessorFn: ({ stage }) => stage.label,
    header: 'Stage',
    cell: ({ row: { original } }) => {
      const { label, color, value } = original.stage;
      return (
        <div className="flex items-center gap-4">
          <div
            style={{ '--phoenix-circle-progress-bar': value } as CSSProperties}
          >
            <svg
              className="circle-progress-svg"
              width="38"
              height="38"
              viewBox="0 0 125 125"
            >
              <circle
                className="progress-bar-rail"
                cx="65"
                cy="45"
                r="54"
                fill="none"
                strokeLinecap="round"
                strokeWidth="15"
              />
              <circle
                className="progress-bar-top"
                cx="65"
                cy="45"
                r="54"
                fill="none"
                strokeLinecap="round"
                stroke={color}
                strokeWidth="12"
              />
            </svg>
          </div>
          <h6 className="mb-0 text-default">{label}</h6>
        </div>
      );
    },
    meta: {
      headerProps: {
        className: 'pe-8 uppercase text-nowrap min-w-40'
      },
      cellProps: {
        className: 'stage whitespace-nowrap font-bold text-default py-2'
      }
    }
  },
  {
    id: 'amount',
    accessorFn: ({ amount }) => amount.label,
    header: 'Amount',
    cell: ({ row: { original } }) => {
      const { label, icon, iconClass } = original.amount;
      return (
        <>
          {label}
          <FeatherIcon
            icon={icon}
            width={16}
            height={16}
            className={`ms-2 ${iconClass} w-3.5 min-h-2`}
          />
        </>
      );
    },
    meta: {
      headerProps: {
        className: 'ps-6 pe-8 uppercase text-nowrap min-w-12.5'
      },
      cellProps: {
        className: 'amount whitespace-nowrap font-bold ps-6 text-default py-0'
      }
    }
  },
  {
    id: 'action',
    cell: () => (
      <RevealDropdownTrigger className="static">
        <RevealDropdown btnClassName="text-sm">
          <ActionDropdownItems />
        </RevealDropdown>
      </RevealDropdownTrigger>
    ),
    meta: {
      headerProps: {
        className: 'text-end pe-0 ps-6'
      },
      cellProps: { className: 'whitespace-nowrap text-end pe-0 ps-6' }
    }
  }
];

export const dealsReportTableColumns: ColumnDef<DealsReport>[] = [
  selectColumn,
  ...dealsReportColumns
];

const DealsReportTable = () => {
  return (
    <div className="border-t border-subtle">
      <AdvanceTable
        className="mb-4"
        rowClassName="hover-actions-trigger btn-reveal-trigger static"
        tableProps={{ size: 'sm', className: 'text-md leads-table' }}
      />
      {/* gold footer row has no vertical padding (`.row.items-center.justify-between.pe-0.text-md`) */}
      <AdvanceTableFooter pagination className="pt-0 pb-0" />
    </div>
  );
};

export default DealsReportTable;
