import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import Badge from 'components/base/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';
import { visitorData } from 'data/travel-agency/travelAgency';

const columns: ColumnDef<visitorData>[] = [
  {
    id: 'country_name',
    header: 'Country name',
    accessorFn: ({ country }) => country.name,
    cell: ({ row: { original } }) => (
      <Link
        className="flex items-center text-primary md:py-1 2xl:py-0"
        to="#!"
      >
        <img src={original.country.flag} alt="" width="40" />
        <p className="mb-0 ps-4 font-bold text-md">{original.country.name}</p>
      </Link>
    ),
    meta: {
      headerProps: {
        className: 'fs-10'
      },
      cellProps: { className: 'py-2' }
    }
  },
  {
    accessorKey: 'users',
    cell: ({ row: { original } }) => (
      <h6>
        {original.users.number}
        <span className="text-subtle font-semibold ms-2">
          ({original.users.percantage})
        </span>
      </h6>
    ),
    meta: {
      headerProps: {
        className: 'fs-10'
      },
      cellProps: { className: 'py-2' }
    }
  },
  {
    accessorKey: 'status',
    cell: ({ row: { original } }) => (
      <Badge className="text-sm" variant="phoenix" bg={original.status.type}>
        <FontAwesomeIcon icon={faPlus} className="me-1" />
        {original.status.label}
      </Badge>
    ),
    meta: {
      headerProps: {
        style: { minWidth: 100, width: '15%' },
        className: 'text-end fs-10'
      },
      cellProps: { className: 'text-end fw-semibold py-2' }
    }
  }
];

export const VisitorsTable = () => {
  const table = useAdvanceTable({
    data: visitorData,
    columns,
    pageSize: 5,
    sortable: true
  });

  return (
    <AdvanceTableProvider {...table}>
      <AdvanceTable
        tableProps={{
          size: 'sm',
          className: 'phoenix-table fs-10 mb-0 mt-3'
        }}
        headerClassName="fs-0"
      />
      <AdvanceTableFooter
        className="pt-4 pb-6"
        tableInfo="fs-8"
        viewAllBtnClass="ms-auto"
      />
    </AdvanceTableProvider>
  );
};
