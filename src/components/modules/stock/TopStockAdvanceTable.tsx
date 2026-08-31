import { flexRender } from '@tanstack/react-table';
import { useAdvanceTableContext } from 'providers/AdvanceTableProvider';
import { Table, cn } from '@hummingbirdui/react';

interface TopStockAdvanceTableProps {
  headerClassName?: string;
  bodyClassName?: string;
  rowClassName?: string;
  tableProps?: Table.Props;
  hasFooter?: boolean;
}

/**
 * Grouped-header advance table renderer (kept for legacy
 * components/tables/OptionChainTable.tsx; the stock dashboard now renders the
 * gold `+OptionChainTable` markup directly in TopStockOptionChainTabContent).
 */
const TopStockAdvanceTable = ({
  headerClassName,
  bodyClassName,
  rowClassName,
  tableProps,
  hasFooter
}: TopStockAdvanceTableProps) => {
  const table = useAdvanceTableContext();
  const { getRowModel, getHeaderGroups, getFooterGroups } = table;
  return (
    <div className="table-responsive scrollbar">
      <Table {...tableProps}>
        <Table.Header className={headerClassName}>
          {getHeaderGroups().map(headerGroup => (
            <Table.Row key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <Table.Head
                  key={header.id}
                  colSpan={header.colSpan}
                  {...header.column.columnDef.meta?.headerProps}
                  className={cn(
                    header.column.columnDef.meta?.headerProps?.className,
                    {
                      sort: header.column.getCanSort(),
                      desc: header.column.getIsSorted() === 'desc',
                      asc: header.column.getIsSorted() === 'asc'
                    }
                  )}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </Table.Head>
              ))}
            </Table.Row>
          ))}
        </Table.Header>
        <Table.Body className={bodyClassName}>
          {getRowModel().rows.map(row => (
            <Table.Row key={row.id} className={rowClassName}>
              {row.getVisibleCells().map(cell => (
                <Table.Cell
                  key={cell.id}
                  {...cell.column.columnDef.meta?.cellProps}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
        {hasFooter && (
          <Table.Footer>
            {getFooterGroups().map(footerGroup => (
              <Table.Row
                key={footerGroup.id}
                className="border-0 border-subtle"
              >
                {footerGroup.headers.map(header => {
                  return (
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
                  );
                })}
              </Table.Row>
            ))}
          </Table.Footer>
        )}
      </Table>
    </div>
  );
};

export default TopStockAdvanceTable;
