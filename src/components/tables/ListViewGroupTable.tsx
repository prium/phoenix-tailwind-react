import { Table, cn } from '@hummingbirdui/react';
import { flexRender } from '@tanstack/react-table';
import { File } from 'data/file-manager';
import { useAdvanceTableContext } from 'providers/AdvanceTableProvider';
import { Fragment } from 'react';

const KNOWN_TYPES = ['folder', 'image', 'video', 'doc', 'zip', 'csv', 'xlx'];

interface ListViewGroupTableProps {
  headerClassName?: string;
  bodyClassName?: string;
  rowClassName?: string;
  tableProps?: Table.Props;
}

/**
 * App-only grouped variant of the gold `+MyFilesTable`, shown by the
 * `#viewAsGroup` switch. Header/cell classes come from the column meta so the
 * two variants stay identical.
 */
const ListViewGroupTable = ({
  headerClassName,
  bodyClassName,
  rowClassName,
  tableProps
}: ListViewGroupTableProps) => {
  const table = useAdvanceTableContext<File>();
  const rows = table.getRowModel().rows;
  const groups = [
    { title: 'Folder', rows: rows.filter(r => r.original.type === 'folder') },
    { title: 'Images', rows: rows.filter(r => r.original.type === 'image') },
    { title: 'Video', rows: rows.filter(r => r.original.type === 'video') },
    {
      title: 'Files',
      rows: rows.filter(r =>
        ['doc', 'zip', 'csv', 'xlx'].includes(r.original.type)
      )
    },
    {
      title: 'Others',
      rows: rows.filter(r => !KNOWN_TYPES.includes(r.original.type))
    }
  ];

  return (
    <div className="table-list overflow-x-auto -mx-1 px-1 scrollbar">
      <Table {...tableProps}>
        <Table.Header className={headerClassName}>
          <Table.Row>
            {table.getFlatHeaders().map(header => {
              const { className, ...headerProps } =
                header.column.columnDef.meta?.headerProps ?? {};
              const canSort = header.column.getCanSort();
              return (
                <Table.Head
                  key={header.id}
                  {...headerProps}
                  data-sort={canSort ? header.id : undefined}
                  className={cn(className, 'align-middle', {
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
          {groups.map(group =>
            group.rows.length ? (
              <Fragment key={group.title}>
                <Table.Row>
                  <Table.Cell colSpan={table.getAllColumns().length}>
                    <h4 className="mt-2 mb-0">{group.title}</h4>
                  </Table.Cell>
                </Table.Row>
                {group.rows.map(row => (
                  <Table.Row key={row.id} className={rowClassName}>
                    {row.getVisibleCells().map(cell => {
                      const { className, ...cellProps } =
                        cell.column.columnDef.meta?.cellProps ?? {};
                      return (
                        <Table.Cell
                          key={cell.id}
                          {...cellProps}
                          className={cn('align-middle', className)}
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </Table.Cell>
                      );
                    })}
                  </Table.Row>
                ))}
              </Fragment>
            ) : null
          )}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ListViewGroupTable;
