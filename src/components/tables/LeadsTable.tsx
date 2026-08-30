import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import Avatar from 'components/base/Avatar';
import Badge from 'components/base/Badge';
import RevealDropdown, {
  RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import ActionDropdownItems from 'components/common/ActionDropdownItems';
import { LeadDataType } from 'data/crm/leadsTableData';
import { Link } from 'react-router';
import FeatherIcon from 'feather-icons-react';

export const leadsTableColumns: ColumnDef<LeadDataType>[] = [
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
            <Link to="/apps/crm/lead-details#tasks" className="text-base font-bold">
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
      headerProps: { style: { width: '25%' }, className: 'ps-0' },
      cellProps: { className: 'whitespace-nowrap ps-0' }
    }
  },
  {
    accessorKey: 'email',
    header: () => {
      return (
        <div className="inline-flex flex-center">
          <div className="px-1 py-1 bg-success-subtle rounded-md me-2">
            <FeatherIcon icon="mail" size={16} className="text-success-dark" />
          </div>
          <span>Email</span>
        </div>
      );
    },
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
        style: { width: '15%' },
        className: 'ps-4 pe-5 border-end border-subtle'
      },
      cellProps: {
        className:
          'whitespace-nowrap font-semibold ps-4 border-end border-subtle'
      }
    }
  },
  {
    accessorKey: 'phone',
    header: () => {
      return (
        <div className="inline-flex flex-center">
          <div className="px-1 py-1 bg-primary-subtle rounded-md me-2">
            <FeatherIcon icon="phone" size={16} className="text-primary-dark" />
          </div>
          <span>Phone</span>
        </div>
      );
    },
    cell: ({ row: { original } }) => {
      const { phone } = original;
      return (
        <Link className="text-highlight" to={`tel:${phone}`}>
          {phone}
        </Link>
      );
    },
    meta: {
      headerProps: {
        style: { width: '15%', minWidth: '180px' },
        className: 'ps-4 pe-5 border-end border-subtle'
      },
      cellProps: {
        className:
          'whitespace-nowrap font-semibold ps-4 border-end border-subtle'
      }
    }
  },
  {
    accessorKey: 'contact',
    header: () => {
      return (
        <div className="inline-flex flex-center">
          <div className="px-1 py-1 bg-info-subtle rounded-md me-2">
            <FeatherIcon icon="user" size={16} className="text-info-dark" />
          </div>
          <span>Contact name</span>
        </div>
      );
    },
    cell: ({ row: { original } }) => original.contact,
    meta: {
      headerProps: {
        style: { width: '15%' },
        className: 'ps-4 pe-5 border-end border-subtle'
      },
      cellProps: {
        className:
          'whitespace-nowrap ps-4 border-end border-subtle font-semibold text-highlight'
      }
    }
  },
  {
    accessorKey: 'company',
    header: () => {
      return (
        <div className="inline-flex flex-center">
          <div className="px-1 py-1 bg-warning-subtle rounded-md me-2">
            <FeatherIcon icon="grid" size={16} className="text-warning-dark" />
          </div>
          <span>Company name</span>
        </div>
      );
    },
    cell: ({ row: { original } }) => original.company,
    meta: {
      headerProps: {
        style: { width: '15%' },
        className: 'ps-4 pe-5 border-end border-subtle'
      },
      cellProps: {
        className:
          'whitespace-nowrap ps-4 border-end border-subtle font-semibold text-highlight'
      }
    }
  },
  {
    accessorKey: 'date',
    header: 'Create date',
    cell: ({ row: { original } }) => original.date,
    meta: {
      headerProps: {
        style: { width: '15%' },
        className: 'ps-4 pe-5'
      },
      cellProps: {
        className: 'whitespace-nowrap ps-4 text-subtle'
      }
    }
  },
  {
    id: 'leadDropdown',
    cell: () => {
      return (
        <RevealDropdownTrigger>
          <RevealDropdown>
            <ActionDropdownItems />
          </RevealDropdown>
        </RevealDropdownTrigger>
      );
    },
    meta: {
      cellProps: {
        className: 'text-end pe-0 ps-4'
      }
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
    <div className="border-t border-subtle">
      <AdvanceTable
        tableProps={{ className: ' text-md' }}
        rowClassName="hover-actions-trigger btn-reveal-trigger"
      />
      <AdvanceTableFooter pagination className="py-6" />
    </div>
  );
};

export default LeadsTable;
