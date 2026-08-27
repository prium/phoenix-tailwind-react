import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import { currencyFormat } from 'helpers/utils';
import { Link } from 'react-router';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import Avatar from 'components/base/Avatar';
import { Order } from 'data/e-commerce/orders';
import Badge from 'components/base/Badge';
import FeatherIcon from 'feather-icons-react';

export const ordersTableColumns: ColumnDef<Order>[] = [
  {
    accessorKey: 'orderId',
    header: 'Order',
    cell: ({ row: { original } }) => {
      const { orderId } = original;
      return (
        <Link to="#!" className="font-semibold">
          #{orderId}
        </Link>
      );
    },
    meta: {
      headerProps: { className: 'whitespace-nowrap pe-4 w-1/20' },
      cellProps: { className: 'whitespace-nowrap py-0' }
    }
  },
  {
    accessorKey: 'total',
    header: 'Total',
    cell: ({ row: { original } }) => currencyFormat(original.total),
    meta: {
      headerProps: { className: 'text-end w-[6%]' },
      cellProps: { className: 'text-end font-semibold text-highlight' }
    }
  },
  {
    id: 'customer',
    accessorFn: ({ customer }) => customer.name,
    header: 'Customer',
    cell: ({ row: { original } }) => {
      const { name, avatar } = original.customer;
      return (
        <Link
          to="/apps/e-commerce/admin/customer-details"
          className="flex items-center text-default"
        >
          <Avatar src={avatar} size="m" />
          <h6 className="mb-0 ms-4 text-default">{name}</h6>
        </Link>
      );
    },
    meta: {
      headerProps: { className: 'ps-14 w-[28%] min-w-62.5' },
      cellProps: { className: 'whitespace-nowrap ps-14' }
    }
  },
  {
    id: 'payment_status',
    accessorFn: ({ payment_status }) => payment_status.label,
    header: 'Payment status',
    cell: ({ row: { original } }) => {
      const { payment_status } = original;
      return (
        <Badge
          bg={payment_status.type}
          variant="phoenix"
          iconPosition="end"
          className="text-sm"
          icon={
            <FeatherIcon
              icon={payment_status.icon}
              size={12.8}
              className="ms-1"
            />
          }
        >
          {payment_status.label}
        </Badge>
      );
    },
    meta: {
      headerProps: { className: 'pe-4 w-1/10' },
      cellProps: {
        className: 'whitespace-nowrap text-start font-bold text-subtle'
      }
    }
  },
  {
    id: 'fulfilment_status',
    accessorFn: ({ fulfilment_status }) => fulfilment_status.label,
    header: 'Fulfilment status',
    cell: ({ row: { original } }) => {
      const { fulfilment_status } = original;
      return (
        <Badge
          bg={fulfilment_status.type}
          variant="phoenix"
          iconPosition="end"
          className="text-sm"
          icon={
            <FeatherIcon
              icon={fulfilment_status.icon}
              size={12.8}
              className="ms-1"
            />
          }
        >
          {fulfilment_status.label}
        </Badge>
      );
    },
    meta: {
      headerProps: { className: 'text-start pe-4 w-[12%] min-w-50' },
      cellProps: {
        className: 'whitespace-nowrap text-start font-bold text-subtle'
      }
    }
  },
  {
    accessorKey: 'delivery_type',
    header: 'Delivery type',
    meta: {
      headerProps: { className: 'text-start w-3/10' },
      cellProps: {
        className: 'whitespace-nowrap text-default text-md text-start'
      }
    }
  },
  {
    accessorKey: 'date',
    header: 'Date',
    meta: {
      headerProps: { className: 'text-end pe-0' },
      cellProps: {
        className: 'whitespace-nowrap text-subtle text-md ps-6 text-end'
      }
    }
  }
];

const OrdersTable = () => {
  return (
    <div>
      <AdvanceTable tableProps={{ size: 'sm', className: 'text-md mb-0' }} />
      <AdvanceTableFooter pagination />
    </div>
  );
};

export default OrdersTable;
