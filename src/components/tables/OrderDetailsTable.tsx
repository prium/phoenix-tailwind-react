import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import { currencyFormat } from 'helpers/utils';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { Link } from 'react-router';
import {
  WishlistProductType,
  wishlistProducts
} from 'data/e-commerce/products';
import { useMemo } from 'react';

/** `+OrderTable` in mixins/e-commerce/order-details/OrderTable.pug */
const columns: ColumnDef<WishlistProductType>[] = [
  {
    id: 'productImage',
    accessorKey: '',
    enableSorting: false,
    cell: ({ row: { original } }) => {
      const { productImage } = original;
      return (
        <Link
          to="/apps/e-commerce/customer/product-details"
          className="block border border-subtle rounded-md"
        >
          <img src={productImage} alt="" width={53} />
        </Link>
      );
    },
    meta: {
      headerProps: {
        className: 'whitespace-nowrap align-middle text-sm min-w-15.75'
      },
      cellProps: { className: 'align-middle whitespace-nowrap py-2' }
    }
  },
  {
    accessorKey: 'product',
    header: 'PRODUCTS',
    cell: ({ row: { original } }) => {
      const { product } = original;
      return (
        <Link
          to="/apps/e-commerce/customer/product-details"
          className="font-semibold line-clamp-2 mb-0"
        >
          {product}
        </Link>
      );
    },
    meta: {
      headerProps: { className: 'whitespace-nowrap align-middle min-w-100' },
      cellProps: { className: 'align-middle py-0' }
    }
  },
  {
    accessorKey: 'color',
    header: 'COLOR',
    meta: {
      headerProps: { className: 'align-middle ps-6 w-37.5' },
      cellProps: {
        className: 'align-middle whitespace-nowrap text-default py-0 ps-6'
      }
    }
  },
  {
    accessorKey: 'size',
    header: 'SIZE',
    meta: {
      headerProps: { className: 'align-middle ps-6 w-75' },
      cellProps: {
        className:
          'align-middle whitespace-nowrap text-subtle font-semibold py-0 ps-6'
      }
    }
  },
  {
    accessorKey: 'price',
    header: 'PRICE',
    cell: ({ row: { original } }) => currencyFormat(original.price),
    meta: {
      headerProps: { className: 'align-middle text-end ps-6 w-37.5' },
      cellProps: {
        className: 'align-middle text-default font-semibold text-end py-0 ps-6'
      }
    }
  },
  {
    accessorKey: 'quantity',
    header: 'QUANTITY',
    meta: {
      headerProps: { className: 'align-middle text-end ps-6 w-50' },
      cellProps: { className: 'align-middle text-end py-0 ps-6 text-subtle' }
    }
  },
  {
    id: 'total',
    accessorFn: ({ price, quantity }) => price * quantity,
    header: 'TOTAL',
    cell: ({ row: { original } }) =>
      currencyFormat(original.price * original.quantity),
    meta: {
      headerProps: { className: 'align-middle text-end ps-6 w-62.5' },
      cellProps: {
        className: 'align-middle font-bold text-highlight text-end py-0 ps-6'
      }
    }
  }
];

const OrderDetailsTable = () => {
  const table = useAdvanceTable({
    data: wishlistProducts,
    columns,
    pageSize: 6,
    pagination: true,
    sortable: true
  });

  const subtotal = useMemo(
    () =>
      wishlistProducts.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      ),
    []
  );

  return (
    <AdvanceTableProvider {...table}>
      <AdvanceTable
        tableProps={{ className: 'text-md mb-0 border-t border-subtle' }}
      />
      <div className="flex flex-between-center py-4 border-b border-subtle mb-10">
        <p className="text-emphasis font-semibold leading-sm mb-0">
          Items subtotal :
        </p>
        <p className="text-emphasis font-bold leading-sm mb-0">
          {currencyFormat(subtotal)}
        </p>
      </div>
    </AdvanceTableProvider>
  );
};

export default OrderDetailsTable;
