import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import { currencyFormat } from 'helpers/utils';
import { Link } from 'react-router';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import { Customer } from 'data/e-commerce/customers';
import Avatar from 'components/base/Avatar';

export const customersTablecolumns: ColumnDef<Customer>[] = [
  {
    accessorKey: 'name',
    header: 'Customer',
    cell: ({ row: { original } }) => {
      const { name, avatar } = original;
      return (
        <Link
          to="/apps/e-commerce/admin/customer-details"
          className="flex items-center text-emphasis"
        >
          <Avatar src={avatar} size="m" />
          <p className="mb-0 ms-4 font-bold">{name}</p>
        </Link>
      );
    },
    meta: {
      headerProps: { className: 'pe-8 w-1/10' },
      cellProps: { className: 'whitespace-nowrap pe-8' }
    }
  },
  {
    accessorKey: 'email',
    header: 'Email',
    cell: ({ row: { original } }) => {
      const { email } = original;
      return (
        <Link to={`mailto:${email}`} className="font-semibold">
          {email}
        </Link>
      );
    },
    meta: {
      headerProps: { className: 'pe-8 w-2/10' },
      cellProps: { className: 'whitespace-nowrap pe-8' }
    }
  },
  {
    accessorKey: 'totalOrders',
    header: 'Orders',
    meta: {
      headerProps: { className: 'text-end w-1/10' },
      cellProps: {
        className: 'whitespace-nowrap font-semibold text-end text-highlight'
      }
    }
  },
  {
    accessorKey: 'totalSpent',
    header: 'Total spent',
    cell: ({ row: { original } }) => currencyFormat(original.totalSpent),
    meta: {
      headerProps: { className: 'text-end ps-4 w-1/10' },
      cellProps: {
        className: 'whitespace-nowrap font-bold text-end ps-4 text-emphasis'
      }
    }
  },
  {
    accessorKey: 'city',
    header: 'City',
    meta: {
      headerProps: { className: 'ps-12 w-1/4' },
      cellProps: { className: 'whitespace-nowrap text-highlight ps-12' }
    }
  },
  {
    accessorKey: 'lastSeen',
    header: 'Last seen',
    meta: {
      headerProps: { className: 'text-end w-[15%]' },
      cellProps: { className: 'whitespace-nowrap text-subtle text-end' }
    }
  },
  {
    accessorKey: 'lastOrder',
    header: 'Last order',
    meta: {
      headerProps: { className: 'text-end pe-0 w-1/10 min-w-37.5' },
      cellProps: { className: 'whitespace-nowrap text-subtle text-end pe-0' }
    }
  }
];

const CustomersTable = () => {
  return (
    <div>
      <AdvanceTable tableProps={{ size: 'sm', className: 'text-md mb-0' }} />
      <AdvanceTableFooter pagination />
    </div>
  );
};

export default CustomersTable;
