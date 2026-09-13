import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';
import { visitorData } from 'data/travel-agency/travelAgency';

const columns: ColumnDef<visitorData>[] = [
  {
    id: 'country',
    header: 'COUNTRY NAME',
    accessorFn: ({ country }) => country.name,
    cell: ({ row: { original } }) => (
      <Link className="flex items-center text-primary md:py-1 2xl:py-0" to="#!">
        <img src={original.country.flag} alt="" width="40" />
        <p className="mb-0 ps-4 font-bold text-md">{original.country.name}</p>
      </Link>
    ),
    meta: {
      headerProps: { className: 'ps-0 min-w-25' },
      cellProps: { className: 'py-2 whitespace-nowrap ps-0' }
    }
  },
  {
    id: 'users',
    header: 'USERS',
    accessorFn: ({ users }) => users.number,
    cell: ({ row: { original } }) => (
      <h6>
        {original.users.number}
        <span className="text-subtle font-semibold ms-2">
          ({original.users.percantage})
        </span>
      </h6>
    ),
    meta: {
      headerProps: { className: 'min-w-28.75' },
      cellProps: { className: 'py-2' }
    }
  },
  {
    id: 'status',
    header: 'STATUS',
    accessorFn: ({ status }) => status.label,
    cell: ({ row: { original } }) => (
      <span
        className={`badge-phoenix-${original.status.type} badge text-sm rounded-sm`}
      >
        <FontAwesomeIcon icon={faPlus} />
        {original.status.label}
      </span>
    ),
    meta: {
      headerProps: { className: 'text-end' },
      cellProps: { className: 'py-2 text-end' }
    }
  }
];

export const visitorsTableColumns = columns;

/** Renders inside an `AdvanceTableProvider` owned by `VisitorsCard` so the
 * card footer can show the gold list info / View all controls. */
export const VisitorsTable = () => (
  <AdvanceTable
    className="mt-4"
    tableProps={{
      className: 'text-sm mb-0'
    }}
  />
);
