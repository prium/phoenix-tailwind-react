import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ColumnDef } from '@tanstack/react-table';
import { cn } from '@hummingbirdui/react';
import AdvanceTable from 'components/base/AdvanceTable';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import Avatar from 'components/base/Avatar';
import RevealDropdown, {
  RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import ActionDropdownItems from 'components/common/ActionDropdownItems';
import { buildSelectionColumn } from 'hooks/useAdvanceTable';
import { CallTableDataType, callTableData } from 'data/crm/dealDetailsData';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';

/** `+CallTable` (`#leadDetailsTable`) in mixins/crm/DealDetails.pug */
const columns: ColumnDef<CallTableDataType>[] = [
  buildSelectionColumn<CallTableDataType>({
    headerClassName: 'w-6.5 whitespace-nowrap text-md align-middle ps-0',
    cellClassName: 'text-md align-middle px-0 py-5',
    checkboxClassName: 'text-base py-1'
  }),
  {
    id: 'name',
    accessorKey: 'user.name',
    header: 'Name',
    cell: ({ row: { original } }) => {
      const {
        user: { name, avatar, status }
      } = original;
      return (
        <a href="#!" className="flex items-center text-highlight">
          {/* gold uses the (unstyled) `status-*` class, not `avatar-status-*` */}
          <Avatar src={avatar} size="m" className={`me-4 status-${status}`} />
          <h6 className="mb-0 text-highlight font-bold">{name}</h6>
        </a>
      );
    },
    meta: {
      headerProps: {
        className:
          'sort whitespace-nowrap align-middle pe-4 ps-0 uppercase w-1/5 min-w-25'
      },
      cellProps: { className: 'name align-middle whitespace-nowrap py-2 ps-0' }
    }
  },
  {
    accessorKey: 'description',
    header: 'description',
    cell: ({ row: { original } }) => original.description,
    meta: {
      headerProps: {
        className: 'sort align-middle pe-10 uppercase w-1/5 min-w-15'
      },
      cellProps: {
        className:
          'description align-middle whitespace-nowrap text-start font-bold text-subtle py-2 pe-6'
      }
    }
  },
  {
    id: 'create_date',
    accessorKey: 'date',
    header: 'create date',
    cell: ({ row: { original } }) => original.date,
    meta: {
      headerProps: {
        className: 'sort align-middle text-start uppercase w-1/5 min-w-28.75'
      },
      cellProps: {
        className:
          'create_date text-start align-middle whitespace-nowrap text-default py-2'
      }
    }
  },
  {
    id: 'create_by',
    accessorKey: 'creatBy',
    header: 'create by',
    cell: ({ row: { original } }) => original.creatBy,
    meta: {
      headerProps: {
        className: 'sort align-middle text-start uppercase w-1/5 min-w-37.5'
      },
      cellProps: {
        className:
          'create_by align-middle whitespace-nowrap font-semibold text-highlight'
      }
    }
  },
  {
    id: 'last_activity',
    accessorKey: 'activity',
    header: 'Last Activity',
    cell: ({ row: { original } }) => {
      return (
        <div className="flex items-center flex-1">
          <FontAwesomeIcon
            icon={faClock}
            className={cn('me-1', {
              'text-success': original.activity === 'Active',
              'text-soft': original.activity !== 'Active'
            })}
            transform="shrink-2 up-1"
          />
          <span className="font-bold text-md text-default">
            {original.activity}
          </span>
        </div>
      );
    },
    meta: {
      headerProps: {
        className:
          'sort align-middle ps-0 text-start uppercase w-1/5 max-w-28.75'
      },
      cellProps: {
        className: 'last_activity align-middle text-center py-2'
      }
    }
  },
  {
    id: 'dealDropdown',
    accessorKey: '',
    enableSorting: false,
    cell: () => {
      return (
        <RevealDropdownTrigger className="static">
          <RevealDropdown>
            <ActionDropdownItems />
          </RevealDropdown>
        </RevealDropdownTrigger>
      );
    },
    meta: {
      headerProps: { className: 'align-middle pe-0 text-end w-3/20' },
      cellProps: {
        className: 'align-middle text-end whitespace-nowrap pe-0 action py-2'
      }
    }
  }
];

const DealDetailsCallTable = () => {
  const table = useAdvanceTable({
    data: callTableData,
    columns,
    pageSize: 5,
    pagination: true,
    sortable: true
  });

  return (
    <AdvanceTableProvider {...table}>
      <div id="leadDetailsTable" className="border-t border-b border-subtle">
        <AdvanceTable
          tableProps={{ className: 'text-md mb-0' }}
          rowClassName="hover-actions-trigger btn-reveal-trigger static"
        />
        <AdvanceTableFooter pagination tableInfo="me-4!" />
      </div>
    </AdvanceTableProvider>
  );
};

export default DealDetailsCallTable;
