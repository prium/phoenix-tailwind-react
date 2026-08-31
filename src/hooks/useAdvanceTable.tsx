/* eslint-disable @typescript-eslint/no-explicit-any */
import IndeterminateCheckbox from 'components/base/IndeterminateCheckbox';
import { PropsWithChildren } from 'react';
import { cn } from '@hummingbirdui/react';
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  ColumnDef,
  InitialTableState
} from '@tanstack/react-table';
interface UseAdvanceTableProps<T> {
  columns: ColumnDef<T>[];
  data: T[];
  selection?: boolean;
  sortable?: boolean;
  pagination?: boolean;
  pageSize?: number;
  selectionColumnWidth?: number | string;
  /** Extra classes for the selection column (merged with the defaults). */
  selectionColumnProps?: { headerClassName?: string; cellClassName?: string };
  initialState?: InitialTableState;
  state?: object;
  onPaginationChange?: any;
  manualPagination?: boolean;
  rowCount?: number;
  pageCount?: number;
}

/**
 * Bulk-select column with the exact gold `th`/`td` classes. Use this when the
 * gold table defines its own selection column widths; `selection: true` on the
 * hook keeps the legacy 30px variant below.
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

const getSelectionColumn = ({
  headerClassName,
  cellClassName
}: NonNullable<
  UseAdvanceTableProps<unknown>['selectionColumnProps']
> = {}) => ({
  id: 'select',
  accessorKey: '',
  header: ({ table }: any) => (
    <IndeterminateCheckbox
      className="text-base"
      {...{
        checked: table.getIsAllRowsSelected(),
        indeterminate: table.getIsSomeRowsSelected(),
        onChange: table.getToggleAllRowsSelectedHandler()
      }}
    />
  ),
  cell: ({ row }: any) => (
    <IndeterminateCheckbox
      className="text-base"
      {...{
        checked: row.getIsSelected(),
        disabled: !row.getCanSelect(),
        indeterminate: row.getIsSomeSelected(),
        onChange: row.getToggleSelectedHandler()
      }}
    />
  ),
  meta: {
    headerProps: {
      style: { width: '30px' },
      className: cn('whitespace-nowrap text-md ps-0 py-3.5', headerClassName)
    },
    cellProps: { className: cn('text-md ps-0', cellClassName) }
  }
});

const useAdvanceTable = <T,>({
  columns,
  data,
  selection,
  sortable,
  pagination,
  pageSize,
  initialState,
  selectionColumnProps,
  ...rest
}: PropsWithChildren<UseAdvanceTableProps<T>>) => {
  const state = {
    ...initialState,
    pagination: pagination
      ? { pageSize: pagination ? pageSize : data.length }
      : undefined
  };
  const table = useReactTable<T>({
    data,
    columns: selection
      ? [getSelectionColumn(selectionColumnProps), ...columns]
      : columns,
    enableSorting: sortable,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: state,
    ...rest
  });

  return table;
};

export default useAdvanceTable;
