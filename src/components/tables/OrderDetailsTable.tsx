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

const columns: ColumnDef<WishlistProductType>[] = [
  {
    id: 'productImage',
    accessorKey: '',
    cell: ({ row: { original } }) => {
      const { productImage } = original;
      return (
        <div className="rounded-md border border-light inline-block">
          <img src={productImage} alt="" width={53} />
        </div>
      );
    },
    meta: { cellProps: { className: 'py-2' } }
  },
  {
    accessorKey: 'product',
    header: 'Products',
    cell: ({ row: { original } }) => {
      const { product } = original;
      return (
        <Link to="#!" className="font-semibold line-clamp-2">
          {product}
        </Link>
      );
    },
    meta: {
      headerProps: { style: { minWidth: 380 } },
      cellProps: { className: '' }
    }
  },
  {
    accessorKey: 'color',
    header: 'Color',
    meta: {
      headerProps: { style: { width: 150 }, className: 'ps-4' },
      cellProps: { className: 'whitespace-nowrap text-default ps-4' }
    }
  },
  {
    accessorKey: 'size',
    header: 'Size',
    meta: {
      headerProps: { style: { width: 300 }, className: 'ps-4' },
      cellProps: {
        className: 'whitespace-nowrap text-subtle font-semibold ps-4'
      }
    }
  },
  {
    accessorKey: 'price',
    header: 'Price',
    cell: ({ row: { original } }) => currencyFormat(original.price),
    meta: {
      headerProps: { style: { width: 150 }, className: 'ps-4 text-end' },
      cellProps: { className: 'text-default font-semibold text-end ps-4' }
    }
  },
  {
    accessorKey: 'quantity',
    header: 'Quantity',
    meta: {
      headerProps: { style: { width: 200 }, className: 'ps-4 text-end' },
      cellProps: { className: 'text-end ps-4 text-subtle' }
    }
  },
  {
    id: 'total',
    accessorFn: ({ price, quantity }) => price * quantity,
    header: 'Total',
    cell: ({ row: { original } }) =>
      currencyFormat(original.price * original.quantity),
    meta: {
      headerProps: { style: { width: 250 }, className: 'ps-4 text-end' },
      cellProps: { className: 'font-bold text-highlight text-end ps-4' }
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

  const subtotal = useMemo(() => {
    return wishlistProducts.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }, [wishlistProducts]);

  return (
    <div>
      <AdvanceTableProvider {...table}>
        <div className="border-y border-light">
          <AdvanceTable tableProps={{ className: ' text-md' }} />
          <div className="flex flex-between-center py-4">
            <p className="text-emphasis font-semibold leading-sm mb-0">
              Items subtotal :
            </p>
            <p className="text-emphasis font-bold leading-sm mb-0">
              {currencyFormat(subtotal)}
            </p>
          </div>
        </div>
      </AdvanceTableProvider>
    </div>
  );
};

export default OrderDetailsTable;
