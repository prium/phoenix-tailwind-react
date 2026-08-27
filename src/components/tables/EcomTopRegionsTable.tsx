import { ColumnDef, flexRender } from '@tanstack/react-table';
import { Table, cn } from '@hummingbirdui/react';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import {
  TopRegionsTableDataType,
  topRegionsTableData
} from 'data/TopRegionsTableData';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { Link } from 'react-router';

/** `+TopRegions` table in phoenix-tailwind e-commerce/TopRegions.pug */
const columns: ColumnDef<TopRegionsTableDataType>[] = [
  {
    header: 'COUNTRY',
    accessorFn: rowData => rowData.country.name,
    cell: ({ row }) => {
      const serial = row.index + 1;
      const { country } = row.original;
      return (
        <div className="flex items-center">
          <h6 className="mb-0 me-4">{serial}.</h6>
          <Link to="#!">
            <div className="flex items-center">
              <img src={country.flag} alt="" width={24} />
              <p className="mb-0 ps-4 text-primary font-bold text-md">
                {country.name}
              </p>
            </div>
          </Link>
        </div>
      );
    },
    meta: {
      headerProps: { className: 'ps-0 w-[32%] min-w-37' },
      cellProps: { className: 'whitespace-nowrap ps-0' }
    }
  },
  {
    header: 'USERS',
    accessorFn: rowData => rowData.users.number,
    cell: ({ row: { original } }) => {
      const { users } = original;
      return (
        <h6 className="mb-0">
          {users.number}
          <span className="text-subtle font-semibold ms-2">
            ({users.percantage})
          </span>
        </h6>
      );
    },
    meta: {
      headerProps: { className: 'w-[17%]' },
      cellProps: { className: 'align-middle' }
    }
  },
  {
    header: 'TRANSACTIONS',
    accessorFn: rowData => rowData.transactions.number,
    cell: ({ row: { original } }) => {
      const { transactions } = original;
      return (
        <h6 className="mb-0">
          {transactions.number}
          <span className="text-subtle font-semibold ms-2">
            ({transactions.percantage})
          </span>
        </h6>
      );
    },
    meta: {
      headerProps: { className: 'text-end w-[17%]' },
      cellProps: { className: 'align-middle text-end' }
    }
  },
  {
    header: 'REVENUE',
    accessorFn: rowData => rowData.revenue.number,
    cell: ({ row: { original } }) => {
      const { revenue } = original;
      return (
        <h6 className="mb-0">
          ${revenue.number}
          <span className="text-subtle font-semibold ms-2">
            ({revenue.percantage})
          </span>
        </h6>
      );
    },
    meta: {
      headerProps: { className: 'text-end w-2/10' },
      cellProps: { className: 'align-middle text-end' }
    }
  },
  {
    header: 'CONV. RATE',
    accessorFn: rowData => rowData.convRate,
    cell: ({ row: { original } }) => {
      const { convRate } = original;
      return <h6>{convRate}</h6>;
    },
    meta: {
      headerProps: { className: 'text-end pe-0 w-[17%]' },
      cellProps: { className: 'align-middle text-end pe-0' }
    }
  }
];

const EcomTopRegionsTable = () => {
  const table = useAdvanceTable({
    data: topRegionsTableData,
    columns,
    pageSize: 5,
    pagination: true,
    sortable: true
  });

  const { getRowModel, getFlatHeaders } = table;

  return (
    <AdvanceTableProvider {...table}>
      {/* `table-list` + data-sort make list.css draw the sort carets */}
      <div className="table-list overflow-x-auto scrollbar">
        <Table className="text-sm mb-0">
          <Table.Header>
            <Table.Row>
              {getFlatHeaders().map(header => {
                const { className: headerClass, ...headerProps } =
                  header.column.columnDef.meta?.headerProps ?? {};
                return (
                  <Table.Head
                    key={header.id}
                    {...headerProps}
                    data-sort={header.id}
                    className={cn(
                      'sort border-t border-light align-middle',
                      headerClass,
                      {
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
                );
              })}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell />
              <Table.Cell className="align-middle py-6">
                <h4 className="mb-0 font-normal">377,620</h4>
              </Table.Cell>
              <Table.Cell className="align-middle text-end py-6">
                <h4 className="mb-0 font-normal">236</h4>
              </Table.Cell>
              <Table.Cell className="align-middle text-end py-6">
                <h4 className="mb-0 font-normal">$15,758</h4>
              </Table.Cell>
              <Table.Cell className="align-middle text-end py-6 pe-0">
                <h4 className="mb-0 font-normal">10.32%</h4>
              </Table.Cell>
            </Table.Row>
            {getRowModel().rows.map(row => (
              <Table.Row key={row.id}>
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
        </Table>
      </div>

      <AdvanceTableFooter navBtn showViewAllBtn={false} />
    </AdvanceTableProvider>
  );
};

export default EcomTopRegionsTable;
