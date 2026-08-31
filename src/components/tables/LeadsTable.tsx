import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import Avatar from 'components/base/Avatar';
import Badge from 'components/base/Badge';
import IndeterminateCheckbox from 'components/base/IndeterminateCheckbox';
import RevealDropdown, {
  RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import ActionDropdownItems from 'components/common/ActionDropdownItems';
import { LeadDataType } from 'data/crm/leadsTableData';
import { Link } from 'react-router';
import FeatherIcon from 'feather-icons-react';

/**
 * Bulk-select column with the exact gold `th`/`td` classes (the hook's
 * built-in selection column pins a 30px inline width that the CRM gold
 * tables don't have).
 */
export const buildSelectionColumn = <T,>({
  headerClassName,
  cellClassName,
  checkboxClassName = 'text-base'
}: {
  headerClassName: string;
  cellClassName: string;
  /** classes for the header `.form-check` wrapper */
  checkboxClassName?: string;
}): ColumnDef<T> => ({
  id: 'select',
  enableSorting: false,
  header: ({ table }) => (
    <IndeterminateCheckbox
      className={checkboxClassName}
      checked={table.getIsAllRowsSelected()}
      indeterminate={table.getIsSomeRowsSelected()}
      onChange={table.getToggleAllRowsSelectedHandler()}
    />
  ),
  cell: ({ row }) => (
    <IndeterminateCheckbox
      className="text-base"
      checked={row.getIsSelected()}
      disabled={!row.getCanSelect()}
      indeterminate={row.getIsSomeSelected()}
      onChange={row.getToggleSelectedHandler()}
    />
  ),
  meta: {
    headerProps: { className: headerClassName },
    cellProps: { className: cellClassName }
  }
});

/** `+LealsTable` header icon boxes in mixins/crm/LeadsTable.pug */
const HeaderIconLabel = ({
  icon,
  bgClassName,
  iconClassName,
  label
}: {
  icon: string;
  bgClassName: string;
  iconClassName: string;
  label: string;
}) => (
  <div className="inline-flex flex-center">
    <div
      className={`flex items-center px-1 py-1 ${bgClassName} rounded-md me-2`}
    >
      <FeatherIcon icon={icon} size={16} className={iconClassName} />
    </div>
    <span>{label}</span>
  </div>
);

export const leadsTableColumns: ColumnDef<LeadDataType>[] = [
  buildSelectionColumn<LeadDataType>({
    headerClassName: 'w-4.5 max-w-5 whitespace-nowrap text-md ps-0',
    cellClassName: 'text-md'
  }),
  {
    accessorKey: 'customer.name',
    header: 'Name',
    cell: ({ row: { original } }) => {
      const {
        avatar,
        name,
        designation,
        status: { label, type }
      } = original.customer;
      return (
        <div className="flex items-center">
          <Link to="/apps/crm/lead-details#tasks">
            <Avatar src={avatar} size="xl" className="me-4" />
          </Link>
          <div>
            <Link
              to="/apps/crm/lead-details#tasks"
              className="text-base font-bold"
            >
              {name}
            </Link>
            <div className="flex items-center">
              <p className="mb-0 text-highlight font-semibold text-md me-2">
                {designation}
              </p>
              <Badge variant="phoenix" bg={type}>
                {label}
              </Badge>
            </div>
          </div>
        </div>
      );
    },
    meta: {
      headerProps: { className: 'whitespace-nowrap uppercase ps-0 w-1/4' },
      cellProps: { className: 'whitespace-nowrap ps-0' }
    }
  },
  {
    accessorKey: 'email',
    header: () => (
      <HeaderIconLabel
        icon="mail"
        bgClassName="bg-success-subtle"
        iconClassName="text-success-dark"
        label="Email"
      />
    ),
    cell: ({ row: { original } }) => {
      const { email } = original;
      return (
        <Link className="text-highlight" to={`mailto:${email}`}>
          {email}
        </Link>
      );
    },
    meta: {
      headerProps: {
        className: 'ps-6 pe-8 uppercase border-e border-subtle w-3/20'
      },
      cellProps: {
        className: 'whitespace-nowrap font-semibold ps-6 border-e border-subtle'
      }
    }
  },
  {
    accessorKey: 'phone',
    header: () => (
      <HeaderIconLabel
        icon="phone"
        bgClassName="bg-primary-subtle"
        iconClassName="text-primary-dark"
        label="Phone"
      />
    ),
    cell: ({ row: { original } }) => {
      const { phone } = original;
      return (
        <Link className="text-highlight" to={`tel:${phone.replace(/\s/g, '')}`}>
          {phone}
        </Link>
      );
    },
    meta: {
      headerProps: {
        className: 'ps-6 pe-8 uppercase border-e border-subtle w-3/20 min-w-45'
      },
      cellProps: {
        className: 'whitespace-nowrap font-semibold ps-6 border-e border-subtle'
      }
    }
  },
  {
    accessorKey: 'contact',
    header: () => (
      <HeaderIconLabel
        icon="user"
        bgClassName="bg-info-subtle"
        iconClassName="text-info-dark"
        label="Contact name"
      />
    ),
    cell: ({ row: { original } }) => original.contact,
    meta: {
      headerProps: {
        className: 'ps-6 pe-8 uppercase border-e border-subtle w-3/20'
      },
      cellProps: {
        className:
          'whitespace-nowrap ps-6 border-e border-subtle font-semibold text-highlight'
      }
    }
  },
  {
    accessorKey: 'company',
    header: () => (
      <HeaderIconLabel
        icon="grid"
        bgClassName="bg-warning-subtle"
        iconClassName="text-warning-dark"
        label="Company name"
      />
    ),
    cell: ({ row: { original } }) => original.company,
    meta: {
      headerProps: {
        className: 'ps-6 pe-8 uppercase border-e border-subtle w-3/20'
      },
      cellProps: {
        className:
          'whitespace-nowrap ps-6 border-e border-subtle font-semibold text-highlight/85'
      }
    }
  },
  {
    accessorKey: 'date',
    header: 'Create date',
    cell: ({ row: { original } }) => original.date,
    meta: {
      headerProps: { className: 'ps-6 pe-8 uppercase w-3/20' },
      cellProps: { className: 'whitespace-nowrap text-subtle/85 ps-6' }
    }
  },
  {
    id: 'leadDropdown',
    cell: () => (
      <RevealDropdownTrigger className="btn-reveal-trigger static">
        <RevealDropdown btnClassName="text-sm">
          <ActionDropdownItems />
        </RevealDropdown>
      </RevealDropdownTrigger>
    ),
    meta: {
      headerProps: { className: 'text-end pe-0 ps-6' },
      cellProps: { className: 'whitespace-nowrap text-end pe-0 ps-6' }
    }
  },
  {
    id: 'designation',
    accessorFn: ({ customer }) => customer.designation
  },
  {
    id: 'status',
    accessorFn: ({ customer }) => customer.status.label
  }
];

const LeadsTable = () => {
  return (
    <div>
      <AdvanceTable
        tableProps={{
          className: 'text-md mb-0 leads-table border-t border-subtle'
        }}
        rowClassName="hover-actions-trigger btn-reveal-trigger static"
      />
      {/* gold: `.row.items-center.justify-end.py-6.pe-0.text-md`, info `me-4` */}
      <AdvanceTableFooter
        pagination
        className="justify-end! py-6!"
        tableInfo="me-4!"
        nextPageLinkClassName="pe-0"
      />
    </div>
  );
};

export default LeadsTable;
