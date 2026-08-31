import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import AdvanceTable from 'components/base/AdvanceTable';
import { ColumnDef } from '@tanstack/react-table';
import { EmployeeRecordTableRowItem } from 'data/stock/stockDetails';
import classNames from 'classnames';
import { numberFormat } from 'helpers/utils';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';

/** Gold: `#employeeRecord` in mixins/stock/stock-details/CompanyProfileTabContent.pug */
const columns: ColumnDef<EmployeeRecordTableRowItem>[] = [
  {
    accessorKey: 'date',
    header: 'date',
    cell: ({ row: { original } }) => {
      const { date } = original;
      return <p className="text-md font-semibold text-muted mb-0">{date}</p>;
    },
    meta: {
      headerProps: { className: 'whitespace-nowrap ps-0 min-w-56' },
      cellProps: { className: 'date whitespace-nowrap' }
    }
  },
  {
    accessorKey: 'employees',
    header: 'employees',
    cell: ({ row: { original } }) => {
      const { employees } = original;
      return (
        <p className="text-md font-semibold text-muted mb-0">
          {numberFormat(employees, 'standard')}
        </p>
      );
    },
    meta: {
      headerProps: { className: 'text-center min-w-32' },
      cellProps: { className: 'employees whitespace-nowrap text-center' }
    }
  },
  {
    accessorKey: 'change',
    header: 'Change',
    cell: ({ row: { original } }) => {
      const { change } = original;
      return (
        <p className="text-md font-semibold text-muted mb-0">
          {numberFormat(change, 'standard')}
        </p>
      );
    },
    meta: {
      headerProps: { className: 'text-center min-w-32' },
      cellProps: { className: 'text-center change' }
    }
  },
  {
    accessorKey: 'growth',
    header: 'Growth',
    cell: ({ row: { original } }) => {
      const {
        growth: { value, className }
      } = original;
      return (
        <p className={classNames(className, 'text-md font-semibold mb-0')}>
          {numberFormat(value, 'standard', { minimumFractionDigits: 2 })}%
        </p>
      );
    },
    meta: {
      headerProps: { className: 'text-end min-w-44' },
      cellProps: { className: 'text-end growth whitespace-nowrap' }
    }
  }
];

const EmployeeRecordsTable = ({
  data
}: {
  data: EmployeeRecordTableRowItem[];
}) => {
  const table = useAdvanceTable({
    data,
    columns,
    pageSize: 10,
    pagination: true,
    selection: false,
    sortable: true
  });
  return (
    <AdvanceTableProvider {...table}>
      <AdvanceTable
        tableProps={{
          className: 'text-md mb-0 border-t border-subtle'
        }}
        headerClassName="uppercase"
      />
      <AdvanceTableFooter
        pagination
        // gold pagination col carries `sm:-me-2`
        className="pagination-subtle sm:*:data-list:-me-2"
      />
    </AdvanceTableProvider>
  );
};

export default EmployeeRecordsTable;
