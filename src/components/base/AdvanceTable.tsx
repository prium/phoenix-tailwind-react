import { Table, cn } from '@hummingbirdui/react';
import { useAdvanceTableContext } from 'providers/AdvanceTableProvider';
import { flexRender } from '@tanstack/react-table';

interface AdvanceTableProps {
  /** Classes for the scroll wrapper. */
  className?: string;
  headerClassName?: string;
  bodyClassName?: string;
  rowClassName?: string;
  tableProps?: Table.Props;
  hasFooter?: boolean;
}

/**
 * TanStack-driven table rendered with Hummingbird's Table.
 * The `table-list` wrapper + `data-sort` on sortable headers are what
 * assets/css/components/list.css keys on to draw the sort carets.
 */
const AdvanceTable = ({
  className,
  headerClassName,
  bodyClassName,
  rowClassName,
  tableProps,
  hasFooter
}: AdvanceTableProps) => {
  const table = useAdvanceTableContext();
  const { getRowModel, getFlatHeaders, getFooterGroups } = table;

  return (
    <div
      className={cn('table-list overflow-x-auto -mx-1 px-1 scrollbar', className)}
    >
      <Table {...tableProps}>
        <Table.Header className={headerClassName}>
          <Table.Row>
            {getFlatHeaders().map(header => {
              const { className: headerClass, ...headerProps } =
                header.column.columnDef.meta?.headerProps ?? {};
              const canSort = header.column.getCanSort();
              return (
                <Table.Head
                  key={header.id}
                  {...headerProps}
                  data-sort={canSort ? header.id : undefined}
                  className={cn(headerClass, 'align-middle', {
                    sort: canSort,
                    desc: header.column.getIsSorted() === 'desc',
                    asc: header.column.getIsSorted() === 'asc'
                  })}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </Table.Head>
              );
            })}
          </Table.Row>
        </Table.Header>
        <Table.Body className={bodyClassName}>
          {getRowModel().rows.map(row => (
            <Table.Row key={row.id} className={rowClassName}>
              {row.getVisibleCells().map(cell => {
                const { className: cellClass, ...cellProps } =
                  cell.column.columnDef.meta?.cellProps ?? {};
                return (
                  <Table.Cell
                    key={cell.id}
                    {...cellProps}
                    className={cn('align-middle', cellClass)}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Table.Cell>
                );
              })}
            </Table.Row>
          ))}
        </Table.Body>
        {hasFooter && (
          <Table.Footer>
            {getFooterGroups().map(footerGroup => (
              <Table.Row
                key={footerGroup.id}
                className="border-0 border-light"
              >
                {footerGroup.headers.map(header => (
                  <Table.Head
                    key={header.id}
                    {...header.column.columnDef.meta?.footerProps}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.footer,
                          header.getContext()
                        )}
                  </Table.Head>
                ))}
              </Table.Row>
            ))}
          </Table.Footer>
        )}
      </Table>
    </div>
  );
};

export default AdvanceTable;
