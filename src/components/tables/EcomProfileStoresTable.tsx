import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import { currencyFormat } from 'helpers/utils';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { Link } from 'react-router';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import { StoreProductType, storeProducts } from 'data/e-commerce/products';
import Rating from 'components/base/Rating';
import RevealDropdown, {
  RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import MyFavoriteStores from 'components/modules/e-commerce/profile/MyFavoriteStores';
import ActionDropdownItems from 'components/common/ActionDropdownItems';

const columns: ColumnDef<StoreProductType>[] = [
  {
    id: 'productImage',
    accessorKey: '',
    cell: ({ row: { original } }) => {
      const { productImage } = original;
      return <img src={productImage} alt="" width={53} />;
    },
    meta: {
      cellProps: { className: 'py-0' },
      headerProps: { style: { width: '7%', minWidth: 80 } }
    }
  },
  {
    accessorKey: 'product',
    header: 'VENDOR',
    cell: ({ row: { original } }) => {
      const { product } = original;
      return (
        <Link to="#!" className="font-semibold line-clamp-1">
          {product}
        </Link>
      );
    },
    meta: {
      headerProps: { style: { minWidth: 150, width: '20%' } },
      cellProps: { className: 'pe-11' }
    }
  },
  {
    accessorKey: 'rating',
    header: 'STORE RATING',
    cell: ({ row: { original } }) => {
      const { rating } = original;
      return <Rating readonly initialValue={rating} iconClass="text-md" />;
    },
    meta: {
      headerProps: { style: { width: '15%', minWidth: 150 } }
    }
  },
  {
    accessorKey: 'orders',
    header: 'ORDERS',
    meta: {
      headerProps: {
        style: { width: '12%', minWidth: 150 },
        className: 'text-end'
      },
      cellProps: { className: 'text-primary font-bold text-end' }
    }
  },
  {
    accessorKey: 'totalSpent',
    header: () => 'Total Spent',
    cell: ({ row: { original } }) => currencyFormat(original.totalSpent),
    meta: {
      headerProps: {
        style: { width: '15%', minWidth: 150 },
        className: 'text-end'
      },
      cellProps: { className: 'text-end font-semibold' }
    }
  },
  {
    accessorKey: 'lastOrderDate',
    header: 'LAST ORDER',
    meta: {
      headerProps: {
        style: { width: '15%', minWidth: 150 },
        className: 'text-end'
      },
      cellProps: { className: 'text-end text-subtle' }
    }
  },
  {
    id: 'action',
    cell: () => (
      <RevealDropdownTrigger>
        <RevealDropdown>
          <ActionDropdownItems />
        </RevealDropdown>
      </RevealDropdownTrigger>
    ),
    meta: {
      headerProps: { style: { width: '30%' } },
      cellProps: {
        className: 'text-end'
      }
    }
  }
];

const EcomProfileStoresTable = () => {
  const table = useAdvanceTable({
    data: storeProducts,
    columns,
    pageSize: 6,
    pagination: true,
    sortable: true
  });

  return (
    <div>
      <AdvanceTableProvider {...table}>
        <div className="border-y border-light mb-10">
          <AdvanceTable
            tableProps={{ className: ' table-sm text-md' }}
          />
          <AdvanceTableFooter pagination />
        </div>
      </AdvanceTableProvider>
      <MyFavoriteStores />
    </div>
  );
};

export default EcomProfileStoresTable;
