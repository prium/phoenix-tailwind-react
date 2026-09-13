/* eslint-disable @typescript-eslint/no-explicit-any */
import IndeterminateCheckbox from 'components/base/IndeterminateCheckbox';
import { PropsWithChildren, useMemo } from 'react';
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

/** The gold's bulk-select `th`/`td`, shared by every table that has one. */
export const SELECTION_COLUMN_HEADER_CLASS =
  'whitespace-nowrap text-md ps-0 py-3.5';
export const SELECTION_COLUMN_CELL_CLASS = 'text-md ps-0';

/**
 * The one bulk-select column: same `IndeterminateCheckbox` and the same
 * `th`/`td` classes everywhere. Pass `headerClassName`/`cellClassName` only
 * where the gold table really differs — its own row padding or column width —
 * never to restyle the checkbox itself. `selection: true` on the hook builds
 * this same column.
 */
export const buildSelectionColumn = <T,>({
  headerClassName = SELECTION_COLUMN_HEADER_CLASS,
  cellClassName = SELECTION_COLUMN_CELL_CLASS,
  checkboxClassName = 'text-base'
}: {
  headerClassName?: string;
  cellClassName?: string;
  /** classes for the header `.form-check` wrapper */
  checkboxClassName?: string;
} = {}): ColumnDef<T> => ({
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

const getSelectionColumn = <T,>({
  headerClassName,
  cellClassName
}: NonNullable<
  UseAdvanceTableProps<unknown>['selectionColumnProps']
> = {}): ColumnDef<T> =>
  buildSelectionColumn<T>({
    headerClassName: cn(SELECTION_COLUMN_HEADER_CLASS, headerClassName),
    cellClassName: cn(SELECTION_COLUMN_CELL_CLASS, cellClassName)
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
  const { headerClassName, cellClassName } = selectionColumnProps ?? {};
  /**
   * `flexRender` renders `columnDef.cell` as a component *type*, so a column
   * rebuilt on every render is a new type at the same position and React
   * remounts the cell. That threw away the checkbox mid-click: the input was
   * replaced, focus fell to `<body>` and the focus ring flashed off instead of
   * holding until blur. Keyed on the class strings because the pages pass
   * `selectionColumnProps` as an inline object literal.
   */
  const tableColumns = useMemo(
    () =>
      selection
        ? [
            getSelectionColumn<T>({ headerClassName, cellClassName }),
            ...columns
          ]
        : columns,
    [selection, columns, headerClassName, cellClassName]
  );
  const table = useReactTable<T>({
    data,
    columns: tableColumns,
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
