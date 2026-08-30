import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import { currencyFormat } from 'helpers/utils';
import { Link } from 'react-router';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import { ProductsTableProductType } from 'data/e-commerce/products';
import Badge from 'components/base/Badge';
import StarCheckbox from 'components/base/StarCheckbox';
import RevealDropdown, {
  RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import ActionDropdownItems from 'components/common/ActionDropdownItems';

export const productsTablecolumns: ColumnDef<ProductsTableProductType>[] = [
  {
    id: 'productImage',
    accessorKey: '',
    cell: ({ row: { original } }) => {
      const { productImage } = original;
      return (
        <Link
          to="/apps/e-commerce/customer/product-details"
          className="inline-block border border-subtle rounded-md"
        >
          <img src={productImage} alt="" width={53} />
        </Link>
      );
    },
    meta: {
      headerProps: { className: 'min-w-17.75 whitespace-nowrap text-sm' },
      cellProps: { className: 'whitespace-nowrap py-0' }
    },
    enableSorting: false
  },
  {
    accessorKey: 'product',
    header: 'PRODUCT NAME',
    cell: ({ row: { original } }) => {
      const { product } = original;
      return (
        <Link
          to="/apps/e-commerce/customer/product-details"
          className="font-semibold line-clamp-3 mb-0"
        >
          {product}
        </Link>
      );
    },
    meta: {
      headerProps: { className: 'whitespace-nowrap ps-6 w-87.5' },
      cellProps: { className: 'ps-6' }
    }
  },
  {
    id: 'price',
    accessorFn: ({ price, priceMax, priceMin }) =>
      `${price} ${priceMax} ${priceMin}`,
    header: 'PRICE',
    cell: ({ row: { original } }) => {
      const { price, priceMax, priceMin } = original;
      return price
        ? currencyFormat(price)
        : // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          `${currencyFormat(priceMin!)} - ${currencyFormat(priceMax!)}`;
    },
    meta: {
      headerProps: { className: 'text-end ps-6 w-37.5' },
      cellProps: {
        className: 'whitespace-nowrap text-end font-bold text-subtle ps-4'
      }
    }
  },
  {
    accessorKey: 'category',
    header: 'CATEGORY',
    meta: {
      headerProps: { className: 'ps-6 w-37.5' },
      cellProps: {
        className: 'whitespace-nowrap text-soft text-md ps-6 font-semibold'
      }
    }
  },
  {
    id: 'tags',
    accessorFn: ({ tags }) => tags.join(''),
    header: 'TAGS',
    cell: ({ row: { original } }) => {
      const { tags } = original;
      return (
        <>
          {tags.map(tag => (
            <Link key={tag} to="#!" className="no-underline">
              <Badge variant="tag" className="me-2 mb-2">
                {tag}
              </Badge>
            </Link>
          ))}
        </>
      );
    },
    meta: {
      headerProps: { className: 'ps-4 w-62.5' },
      cellProps: { className: 'pb-2 ps-4 min-w-56.25' }
    }
  },
  {
    id: 'starred',
    accessorKey: '',
    cell: () => {
      return <StarCheckbox />;
    },
    meta: {
      headerProps: { className: 'text-base text-center ps-6 w-37.5' },
      cellProps: { className: 'text-base text-center ps-6' }
    }
  },
  {
    accessorKey: 'vendor',
    header: 'VENDOR',
    cell: ({ row: { original } }) => {
      const { vendor } = original;
      return <Link to="#!">{vendor}</Link>;
    },
    meta: {
      headerProps: { className: 'ps-6 w-50' },
      cellProps: { className: 'text-start font-semibold ps-6' }
    }
  },
  {
    accessorKey: 'publishedOn',
    header: 'PUBLISHED ON',
    meta: {
      headerProps: { className: 'ps-6 whitespace-nowrap w-12.5' },
      cellProps: { className: 'whitespace-nowrap text-subtle/85 ps-4' }
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
      headerProps: { className: 'text-end pe-0 ps-6' },
      cellProps: {
        className: 'whitespace-nowrap text-end pe-0 ps-6 btn-reveal-trigger'
      }
    }
  }
];

const ProductsTable = () => {
  return (
    <div>
      <AdvanceTable tableProps={{ className: 'text-md mb-0' }} />
      <AdvanceTableFooter pagination />
    </div>
  );
};

export default ProductsTable;
