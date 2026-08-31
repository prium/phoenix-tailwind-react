import AdvanceTable from 'components/base/AdvanceTable';
import useAdvanceTable, { buildSelectionColumn } from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import { ColumnDef } from '@tanstack/react-table';
import { DividendRecordDataTableRowItem } from 'data/stock/dividend';
import { currencyFormat } from 'helpers/utils';
import Button from 'components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import RevealDropdown from 'components/base/RevealDropdown';
import ActionDropdownItems from 'components/common/ActionDropdownItems';

/** Gold: `#dividendTable` in mixins/stock/stock-details/DividendsTabContent.pug */
const columns: ColumnDef<DividendRecordDataTableRowItem>[] = [
  buildSelectionColumn({
    headerClassName: 'whitespace-nowrap text-md ps-0 py-3.5',
    cellClassName: 'text-md ps-0 py-[23px]'
  }),
  {
    accessorKey: 'exDividendDate',
    id: 'dividendDate',
    header: 'Ex-dividend date',
    cell: ({ row: { original } }) => {
      const { exDividendDate } = original;
      return (
        <p className="text-md font-semibold text-emphasis mb-0">
          {exDividendDate}
        </p>
      );
    },
    meta: {
      headerProps: { className: 'whitespace-nowrap min-w-50' },
      cellProps: { className: 'dividendDate whitespace-nowrap' }
    }
  },
  {
    accessorKey: 'cashAmount',
    header: 'Cash amount',
    cell: ({ row: { original } }) => {
      const { cashAmount } = original;
      return (
        <p className="text-md font-semibold text-emphasis mb-0">
          {currencyFormat(cashAmount, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          })}
        </p>
      );
    },
    meta: {
      headerProps: { className: 'min-w-50' },
      cellProps: { className: 'cashAmount whitespace-nowrap' }
    }
  },
  {
    accessorKey: 'paymentStatus',
    id: 'status',
    header: 'Payment Status',
    cell: ({ row: { original } }) => {
      const {
        paymentStatus: { title, badgeBg }
      } = original;
      // gold badge has no `.badge-label` wrapper
      return (
        <span className={`badge-phoenix-${badgeBg} badge text-sm rounded-full`}>
          {title}
        </span>
      );
    },
    meta: {
      headerProps: { className: 'text-center min-w-50' },
      cellProps: { className: 'text-center status' }
    }
  },
  {
    accessorKey: 'recordDate',
    header: 'Record date',
    cell: ({ row: { original } }) => {
      const { recordDate } = original;
      return (
        <p className="text-md font-semibold text-emphasis mb-0">{recordDate}</p>
      );
    },
    meta: {
      headerProps: { className: 'text-end pe-8 min-w-50' },
      cellProps: { className: 'text-end recordDate whitespace-nowrap pe-8' }
    }
  },
  {
    accessorKey: 'paymentDate',
    id: 'payDate',
    header: 'Pay Date',
    cell: ({ row: { original } }) => {
      const { paymentDate } = original;
      return (
        <p className="text-md font-semibold text-emphasis mb-0">
          {paymentDate}
        </p>
      );
    },
    meta: {
      headerProps: { className: 'text-start ps-8 min-w-50' },
      cellProps: { className: 'payDate whitespace-nowrap ps-8' }
    }
  },
  {
    accessorKey: 'action',
    enableSorting: false,
    header: '',
    cell: () => {
      return (
        <>
          <div className="relative">
            <div className="hover-actions">
              <Button
                variant="phoenix-secondary"
                className="me-1 text-sm"
                size="sm"
              >
                <FontAwesomeIcon icon={faCheck} />
              </Button>
              <Button variant="phoenix-secondary" className="text-sm" size="sm">
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </div>
          </div>
          <RevealDropdown
            className="btn-reveal-trigger static"
            btnClassName="text-sm"
          >
            <ActionDropdownItems />
          </RevealDropdown>
        </>
      );
    },
    meta: {
      headerProps: { className: 'text-end pe-0' },
      cellProps: { className: 'whitespace-nowrap text-end pe-0' }
    }
  }
];

const DividendRecordTable = ({
  data
}: {
  data: DividendRecordDataTableRowItem[];
}) => {
  const table = useAdvanceTable({
    data,
    columns,
    pageSize: 10,
    pagination: true,
    sortable: true
  });

  return (
    <AdvanceTableProvider {...table}>
      <AdvanceTable
        tableProps={{
          className: 'text-md mb-0 border-t border-subtle'
        }}
        headerClassName="uppercase"
        rowClassName="hover-actions-trigger btn-reveal-trigger static"
      />
      <AdvanceTableFooter
        pagination
        className="pagination-subtle"
        nextPageLinkClassName="pe-0"
      />
    </AdvanceTableProvider>
  );
};

export default DividendRecordTable;
