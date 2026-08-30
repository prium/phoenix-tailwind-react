import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import { currencyFormat } from 'helpers/utils';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { Link } from 'react-router';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import {
  WishlistProductType,
  wishlistProducts
} from 'data/e-commerce/products';
import Button from 'components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons';

const columns: ColumnDef<WishlistProductType>[] = [
  {
    id: 'productImage',
    accessorKey: '',
    cell: ({ row: { original } }) => {
      const { productImage } = original;
      return (
        <div className="rounded-md border border-subtle inline-block">
          <img src={productImage} alt="" width={53} />
        </div>
      );
    },
    meta: {
      cellProps: { className: 'py-0' },
      headerProps: { style: { width: '7%' } }
    }
  },
  {
    accessorKey: 'product',
    header: 'PRODUCTS',
    cell: ({ row: { original } }) => {
      const { product } = original;
      return (
        <Link to="#!" className="font-semibold line-clamp-1">
          {product}
        </Link>
      );
    },
    meta: {
      headerProps: { style: { minWidth: 250, width: '30%' } },
      cellProps: { className: 'pe-11' }
    }
  },
  {
    accessorKey: 'color',
    header: 'COLOR',
    meta: {
      headerProps: { style: { width: '16%' } },
      cellProps: { className: 'whitespace-nowrap' }
    }
  },
  {
    accessorKey: 'size',
    header: 'SIZE',
    meta: {
      headerProps: { style: { width: '10%' } },
      cellProps: { className: 'text-subtle font-semibold' }
    }
  },
  {
    accessorKey: 'price',
    header: () => 'Price',
    cell: ({ row: { original } }) => currencyFormat(original.price),
    meta: {
      headerProps: { style: { width: '10%' }, className: 'text-end' },
      cellProps: { className: 'text-end font-semibold' }
    }
  },
  {
    id: 'action',
    cell: () => (
      <div className="flex gap-2 justify-end">
        <Button
          size="sm"
          className="text-soft text-body-tertiary-hover"
        >
          <FontAwesomeIcon icon={faTrash} />
        </Button>
        <Button
          variant="primary"
          className="text-sm whitespace-nowrap"
          startIcon={<FontAwesomeIcon icon={faShoppingCart} />}
        >
          Add to cart
        </Button>
      </div>
    ),
    meta: {
      headerProps: { style: { width: '35%' } }
    }
  }
];

const EcomWishlistTable = () => {
  const table = useAdvanceTable({
    data: wishlistProducts,
    columns,
    pageSize: 5,
    pagination: true,
    sortable: true
  });

  return (
    <div>
      <AdvanceTableProvider {...table}>
        <div className="border-y border-subtle">
          <AdvanceTable tableProps={{ className: ' text-md' }} />
          <AdvanceTableFooter pagination />
        </div>
      </AdvanceTableProvider>
    </div>
  );
};

export default EcomWishlistTable;
