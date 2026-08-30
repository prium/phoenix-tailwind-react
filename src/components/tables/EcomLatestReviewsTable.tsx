import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AdvanceTable from 'components/base/AdvanceTable';
import Avatar from 'components/base/Avatar';
import Badge from 'components/base/Badge';
import Button from 'components/base/Button';
import SearchBox from 'components/common/SearchBox';
import {
  latestReviewsTableData,
  LatestReviewsTableDataType
} from 'data/LatestReviewsTableData';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { Col, Dropdown, Row } from '@hummingbirdui/react';
import { Link } from 'react-router';
import FeatherIcon from 'feather-icons-react';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import { ColumnDef } from '@tanstack/react-table';
import { ChangeEvent } from 'react';
import Rating from 'components/base/Rating';
import RevealDropdown, {
  RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import ActionDropdownItems from 'components/common/ActionDropdownItems';
import {
  faCheck,
  faEllipsisH,
  faTrash
} from '@fortawesome/free-solid-svg-icons';

/** `+LatestReviews` in phoenix-tailwind e-commerce/LatestReviews.pug */
const columns: ColumnDef<LatestReviewsTableDataType>[] = [
  {
    id: 'productImage',
    accessorKey: '',
    cell: ({ row: { original } }) => {
      const { productImage } = original;
      return (
        <Link
          to="/apps/e-commerce/customer/product-details"
          className="inline-block rounded-md border border-subtle"
        >
          <img src={productImage} alt="" width={53} />
        </Link>
      );
    },
    meta: {
      headerProps: { className: 'whitespace-nowrap min-w-17.75' },
      cellProps: { className: 'whitespace-nowrap py-0' }
    },
    enableSorting: false
  },
  {
    accessorKey: 'product',
    header: 'PRODUCT',
    cell: ({ row: { original } }) => {
      const { product } = original;
      return (
        <Link
          to="/apps/e-commerce/customer/product-details"
          className="font-semibold"
        >{`${product.slice(0, 46)}${product.length > 46 ? '...' : ''}`}</Link>
      );
    },
    enableSorting: true,
    meta: {
      headerProps: { className: 'whitespace-nowrap min-w-90' },
      cellProps: { className: 'whitespace-nowrap' }
    }
  },
  {
    accessorFn: ({ customer: { name } }) => name,
    header: 'CUSTOMER',
    cell: ({ row: { original } }) => {
      const { customer } = original;
      return (
        <Link
          to="/apps/e-commerce/admin/customer-details"
          className="flex items-center text-default"
        >
          {customer.variant === 'name' ? (
            <Avatar src={customer.avatar} size="l" variant={customer.variant}>
              {customer.name.charAt(0).toUpperCase()}
            </Avatar>
          ) : (
            <Avatar src={customer.avatar} size="l" variant={customer.variant} />
          )}
          <h6 className="mb-0 ms-4 text-default">{customer.name}</h6>
        </Link>
      );
    },
    meta: {
      headerProps: { className: 'min-w-50' },
      cellProps: { className: 'whitespace-nowrap' }
    }
  },
  {
    accessorKey: 'rating',
    header: 'RATING',
    cell: ({ row: { original } }) => {
      const { rating } = original;
      return <Rating iconClass="text-sm" readonly initialValue={rating} />;
    },
    meta: {
      headerProps: { className: 'min-w-27.5' },
      cellProps: { className: 'whitespace-nowrap text-sm' }
    }
  },
  {
    accessorKey: 'review',
    header: 'REVIEW',
    cell: ({ row: { original } }) => {
      const { review } = original;
      return (
        <p className="text-md font-semibold text-highlight mb-0">
          {review.slice(0, 134)}
          {review.length > 134 && (
            <>
              {`...`}
              <Link to="#!">See more</Link>
            </>
          )}
        </p>
      );
    },
    meta: {
      headerProps: { className: 'max-w-87.5' },
      cellProps: { className: 'min-w-87.5' }
    }
  },
  {
    accessorFn: ({ status: { title } }) => title,
    header: 'STATUS',
    cell: ({ row: { original } }) => {
      const {
        status: { title, badgeBg, icon }
      } = original;
      return (
        <Badge
          color={badgeBg}
          variant="phoenix"
          iconPosition="end"
          className="text-sm"
          icon={<FeatherIcon icon={icon} size={12.8} className="ms-1" />}
        >
          {title}
        </Badge>
      );
    },
    meta: {
      headerProps: { className: 'text-start ps-8' },
      cellProps: { className: 'text-start ps-8' }
    }
  },
  {
    accessorKey: 'time',
    header: 'TIME',
    cell: ({ row: { original } }) => {
      const { time } = original;
      return (
        <div className="hover-hide">
          <h6 className="text-highlight mb-0">{time}</h6>
        </div>
      );
    },
    meta: {
      headerProps: { className: 'text-end' },
      cellProps: { className: 'text-end whitespace-nowrap' }
    }
  },
  {
    accessorKey: 'action',
    enableSorting: false,
    header: '',
    cell: () => {
      return (
        <>
          <div className="relative">
            <div className="hover-actions">
              <Button
                variant="phoenix"
                color="secondary"
                className="me-1 text-sm"
                size="sm"
              >
                <FontAwesomeIcon icon={faCheck} />
              </Button>
              <Button
                variant="phoenix"
                color="secondary"
                className="text-sm"
                size="sm"
              >
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </div>
          </div>
          <RevealDropdownTrigger className="static">
            <RevealDropdown btnClassName="text-sm">
              <ActionDropdownItems />
            </RevealDropdown>
          </RevealDropdownTrigger>
        </>
      );
    },
    meta: {
      headerProps: { className: 'text-end pe-0' },
      cellProps: { className: 'whitespace-nowrap text-end pe-0' }
    }
  }
];

const EcomLatestReviewsTable = () => {
  const table = useAdvanceTable({
    data: latestReviewsTableData,
    columns,
    pageSize: 6,
    pagination: true,
    selection: true,
    sortable: true
  });

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    table.setGlobalFilter(e.target.value || undefined);
  };

  return (
    <AdvanceTableProvider {...table}>
      <Row className="items-end justify-between pb-8 g-4">
        <Col xs="auto">
          <h3>Latest reviews</h3>
          <p className="text-subtle leading-sm mb-0">
            Payment received across all channels
          </p>
        </Col>
        <Col xs={12} md="auto">
          <Row className="items-center g-2 gy-4">
            <Col xs="auto" className="flex-1">
              <SearchBox
                placeholder="Search"
                size="sm"
                onChange={handleSearchInputChange}
              />
            </Col>
            <Col xs="auto" className="flex items-center">
              <Button
                variant="phoenix"
                color="secondary"
                size="sm"
                className="bg-soft hover:bg-default me-3"
              >
                All products
              </Button>
              <Dropdown>
                <Dropdown.Trigger asChild>
                  <Button
                    variant="phoenix"
                    color="secondary"
                    size="sm"
                    className="bg-soft hover:bg-default action-btn dropdown-caret-none"
                  >
                    <FontAwesomeIcon icon={faEllipsisH} transform="shrink-2" />
                  </Button>
                </Dropdown.Trigger>
                <Dropdown.Content align="end">
                  <Dropdown.Item>Action</Dropdown.Item>
                  <Dropdown.Item>Another action</Dropdown.Item>
                  <Dropdown.Item>Something else here</Dropdown.Item>
                </Dropdown.Content>
              </Dropdown>
            </Col>
          </Row>
        </Col>
      </Row>

      <AdvanceTable
        tableProps={{ className: 'text-md mb-0 border-t border-subtle' }}
        rowClassName="hover-actions-trigger btn-reveal-trigger static"
      />
      <AdvanceTableFooter navBtn />
    </AdvanceTableProvider>
  );
};

export default EcomLatestReviewsTable;
