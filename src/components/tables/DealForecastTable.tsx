import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ColumnDef, Table } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import {
  ForecastTableData,
  dealForecastTableData
} from 'data/crm/dashboardData';
import { currencyFormat, numberFormat } from 'helpers/utils';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { Link } from 'react-router';

/* `font-bold!` because the gold row is a td (700) while AdvanceTable renders
   tfoot th, which resolves to font-weight 800 */
const FOOTER_CELL_CLASSES =
  'align-middle border-b-0 border-e border-subtle whitespace-nowrap text-end font-bold! text-emphasis pt-2 leading-sm pb-0 px-4';

/**
 * Sum of every row, as the original phoenix react app totals these columns.
 * Reads `row.original`, not `getValue`: the column ids are kebab-case
 * (`closed-won`) while the data keys are snake_case, so a key lookup by
 * column id returns undefined and totals NaN.
 */
const columnTotal = (
  table: Table<ForecastTableData>,
  key: keyof Omit<ForecastTableData, 'contact'>
) =>
  table
    .getFilteredRowModel()
    .rows.reduce((total, row) => total + row.original[key], 0);

const columns: ColumnDef<ForecastTableData>[] = [
  {
    id: 'contact',
    header: 'Contact',
    accessorFn: rowData => rowData.contact.name,
    cell: ({ row: { original } }) => {
      const { contact } = original;
      return (
        <Link to={contact.profileLink} className="font-semibold">
          {contact.name}
        </Link>
      );
    },
    meta: {
      headerProps: {
        className:
          'border-e border-subtle whitespace-nowrap ps-0 uppercase text-subtle min-w-25 w-3/20'
      },
      cellProps: {
        className: 'border-e border-subtle whitespace-nowrap py-2 ps-0 px-4'
      },
      footerProps: { className: FOOTER_CELL_CLASSES }
    },
    footer: () => ' '
  },
  {
    id: 'appointment',
    header: () => (
      <>
        <div className="inline-flex items-center justify-center">
          <FontAwesomeIcon
            icon={faSquare}
            className="text-xs text-primary me-2"
            transform="up-2"
          />
          <span className="mb-0 text-md">Appointment</span>
        </div>
        {/* the gold pug pretty-prints a whitespace text node between the
          header div and the `.sort::after` caret — keep it (3.6px wide) */}{' '}
      </>
    ),
    accessorKey: 'appointment',
    cell: ({ row: { original } }) => numberFormat(original.appointment),
    meta: {
      headerProps: {
        className:
          'border-e border-subtle text-end px-4 uppercase text-subtle w-3/20 min-w-23.75'
      },
      cellProps: {
        className:
          'border-e border-subtle whitespace-nowrap text-end font-semibold text-default py-2 px-4'
      },
      footerProps: { className: FOOTER_CELL_CLASSES }
    },
    footer: ({ table }) => numberFormat(columnTotal(table, 'appointment'))
  },
  {
    id: 'qualified',
    header: () => (
      <>
        <div className="inline-flex items-center justify-center">
          <FontAwesomeIcon
            icon={faSquare}
            className="text-xs text-primary-light me-2"
            transform="up-2"
          />
          <span className="mb-0 text-md">Qualified</span>
        </div>
        {/* the gold pug pretty-prints a whitespace text node between the
          header div and the `.sort::after` caret — keep it (3.6px wide) */}{' '}
      </>
    ),
    accessorKey: 'qualified',
    cell: ({ row: { original } }) => currencyFormat(original.qualified),
    meta: {
      headerProps: {
        className:
          'border-e border-subtle text-end px-4 uppercase text-subtle min-w-25 w-1/5'
      },
      cellProps: {
        className:
          'border-e border-subtle whitespace-nowrap text-end font-semibold text-default py-2 px-4'
      },
      footerProps: { className: FOOTER_CELL_CLASSES }
    },
    footer: ({ table }) => currencyFormat(columnTotal(table, 'qualified'))
  },
  {
    id: 'closed-won',
    header: () => (
      <>
        <div className="inline-flex items-center justify-center">
          <FontAwesomeIcon
            icon={faSquare}
            className="text-xs text-success me-2"
            transform="up-2"
          />
          <span className="mb-0 text-md">Closed Won</span>
        </div>
        {/* the gold pug pretty-prints a whitespace text node between the
          header div and the `.sort::after` caret — keep it (3.6px wide) */}{' '}
      </>
    ),
    accessorKey: 'closed_won',
    cell: ({ row: { original } }) => currencyFormat(original.closed_won),
    meta: {
      headerProps: {
        className:
          'border-e border-subtle text-end px-4 uppercase text-subtle min-w-25 w-1/5'
      },
      cellProps: {
        className:
          'border-e border-subtle whitespace-nowrap text-end font-semibold text-default py-2 px-4'
      },
      footerProps: { className: FOOTER_CELL_CLASSES }
    },
    footer: ({ table }) => currencyFormat(columnTotal(table, 'closed_won'))
  },
  {
    id: 'contact-sent',
    header: () => (
      <>
        <div className="inline-flex items-center justify-center">
          <FontAwesomeIcon
            icon={faSquare}
            className="text-xs text-info me-2"
            transform="up-2"
          />
          <span className="mb-0 text-md">Contact Sent</span>
        </div>
        {/* the gold pug pretty-prints a whitespace text node between the
          header div and the `.sort::after` caret — keep it (3.6px wide) */}{' '}
      </>
    ),
    accessorKey: 'contact_sent',
    cell: ({ row: { original } }) => currencyFormat(original.contact_sent),
    meta: {
      headerProps: {
        className: 'text-end ps-4 uppercase text-subtle min-w-25 w-1/5'
      },
      cellProps: {
        className:
          'border-e-0 whitespace-nowrap text-end font-semibold text-default ps-4 py-2'
      },
      footerProps: {
        className:
          'align-middle border-b-0 whitespace-nowrap text-end font-bold! text-emphasis pt-2 pb-0 ps-4 pe-0'
      }
    },
    footer: ({ table }) => currencyFormat(columnTotal(table, 'contact_sent'))
  }
];

/** `+DealForecastTable` in mixins/dashboard/CRM/Crm.pug */
const DealForecastTable = ({ pageSize = 5 }: { pageSize?: number }) => {
  const table = useAdvanceTable({
    data: dealForecastTableData,
    columns,
    pageSize,
    pagination: true,
    sortable: true
  });

  return (
    <AdvanceTableProvider {...table}>
      {/* overflow-hidden: AdvanceTable's -mx-1 wrapper would reveal 4px of the
          clipped Contact Sent column that the gold hides at the column edge */}
      <div className="border-t overflow-hidden">
        <AdvanceTable
          hasFooter
          rowClassName="hover-actions-trigger btn-reveal-trigger static"
          tableProps={{ className: 'text-md mb-0' }}
        />
      </div>
    </AdvanceTableProvider>
  );
};

export default DealForecastTable;
