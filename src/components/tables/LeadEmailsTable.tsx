import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import Badge, { BadgeBg } from 'components/base/Badge';
import { buildSelectionColumn } from 'components/tables/LeadsTable';
import { LeadEmail } from 'data/crm/leadsData';
import { Link } from 'react-router';

export const leadEmailsColumns: ColumnDef<LeadEmail>[] = [
  buildSelectionColumn<LeadEmail>({
    headerClassName: 'w-6.5 whitespace-nowrap text-md ps-0',
    cellClassName: 'text-md px-0 py-5',
    checkboxClassName: 'text-base py-1'
  }),
  {
    header: 'Subject',
    accessorFn: ({ mail }) => mail.subject,
    cell: ({
      row: {
        original: { mail }
      }
    }) => (
      <>
        <Link to="#!" className="font-semibold text-primary">
          {mail.subject}
        </Link>
        <div className="text-sm block">{mail.email}</div>
      </>
    ),
    meta: {
      headerProps: {
        className: 'whitespace-nowrap pe-4 ps-0 uppercase w-[31%] min-w-87.5'
      },
      cellProps: { className: 'whitespace-nowrap py-2 ps-0' }
    }
  },
  {
    accessorKey: 'sentBy',
    header: 'Sent by',
    meta: {
      headerProps: { className: 'pe-4 uppercase w-3/20 min-w-32.5' },
      cellProps: {
        className: 'whitespace-nowrap text-start font-bold text-subtle py-2'
      }
    }
  },
  {
    accessorKey: 'date',
    header: 'Date',
    meta: {
      headerProps: { className: 'text-start uppercase min-w-41.25' },
      cellProps: { className: 'whitespace-nowrap text-default py-2' }
    }
  },
  {
    id: 'action',
    header: 'Action',
    enableSorting: false,
    cell: ({
      row: {
        original: { action }
      }
    }) => (
      <a href="#!" className="text-default">
        <FontAwesomeIcon icon={faPhone} className="text-primary me-2" />
        {action}
      </a>
    ),
    meta: {
      headerProps: { className: 'pe-0 uppercase w-3/20 min-w-25' },
      cellProps: { className: 'whitespace-nowrap ps-4' }
    }
  },
  {
    id: 'label',
    header: 'Status',
    accessorFn: ({ status }) => status.label,
    cell: ({
      row: {
        original: { status }
      }
    }) => (
      <Badge variant="phoenix" bg={status.type as BadgeBg} className="text-sm">
        {status.label}
      </Badge>
    ),
    meta: {
      headerProps: { className: 'text-end uppercase w-3/20 min-w-25' },
      cellProps: { className: 'font-semibold text-end py-2' }
    }
  },
  {
    accessorKey: 'type'
  }
];

/** `+EmailTable` in mixins/crm/LeadDetails.pug */
const LeadEmailsTable = () => {
  return (
    <div className="border-t border-b border-subtle">
      <AdvanceTable
        tableProps={{ className: 'text-md mb-0' }}
        rowClassName="hover-actions-trigger btn-reveal-trigger static"
      />
      {/* h pinned: HB's active page-link is 1px taller than the gold list.js
          `.page` button and would shift every section below the table */}
      <AdvanceTableFooter pagination nextPageLinkClassName="pe-0" />
    </div>
  );
};

export default LeadEmailsTable;
