import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import Button from 'components/base/Button';
import {
  faBaby,
  faBath,
  faBed,
  faBorderAll,
  faFileExport,
  faFilter,
  faPersonShelter,
  faPlus,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import SearchBox from 'components/common/SearchBox';

import useAdvanceTable, { buildSelectionColumn } from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { ChangeEvent } from 'react';
import { Link } from 'react-router';
import RevealDropdown, {
  RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import ActionDropdownItems from 'components/common/ActionDropdownItems';
import {
  RoomListingData,
  RoomListingInterface
} from 'data/travel-agency/roomListing';

const columns: ColumnDef<RoomListingInterface>[] = [
  buildSelectionColumn<RoomListingInterface>({
    headerClassName:
      'whitespace-nowrap text-md align-middle py-3.5 ps-0 max-w-5 w-4.5',
    cellClassName: 'text-md align-middle ps-0'
  }),
  {
    id: 'name',
    header: 'ROOM INFORMATION',
    accessorKey: 'name',
    cell: ({ row: { original } }) => {
      const { img, name, category, price } = original;
      return (
        <div className="flex items-center gap-4">
          <Link to="#!" className="size-20">
            <img
              src={img}
              alt=""
              className="rounded-sm border border-subtle size-full"
            />
          </Link>
          <div>
            <Link
              to="#!"
              className="text-base font-extrabold text-emphasis text-nowrap"
            >
              {name}
            </Link>
            <h6 className="text-default text-nowrap mt-1 mb-2">
              <FontAwesomeIcon icon={faBorderAll} className="me-2" />
              {category}
            </h6>
            <h4 className="font-extrabold mb-0">${price}</h4>
          </div>
        </div>
      );
    },
    meta: {
      headerProps: {
        className: 'text-subtle align-middle whitespace-nowrap w-75'
      },
      cellProps: { className: 'align-middle py-6 name' }
    }
  },
  {
    id: 'beds',
    header: 'NO. OF BEDS',
    accessorKey: 'beds',
    cell: ({ row: { original } }) => {
      const { beds, bedRooms } = original;
      return (
        <div className="flex items-center">
          <div className="flex items-center justify-center bg-primary-subtle rounded-md me-2 size-6">
            <FontAwesomeIcon
              icon={faPersonShelter}
              className="text-primary-darker"
            />
          </div>
          <h5 className="text-emphasis font-semibold mb-0 me-4">{bedRooms}</h5>
          <div className="flex items-center justify-center bg-success-subtle rounded-md me-2 size-6">
            <FontAwesomeIcon icon={faBed} className="text-success-darker" />
          </div>
          <h5 className="text-emphasis font-semibold mb-0">{beds}</h5>
        </div>
      );
    },
    meta: {
      headerProps: { className: 'text-subtle align-middle px-6 w-50' },
      cellProps: { className: 'align-middle px-6 beds' }
    }
  },
  {
    id: 'guest',
    accessorKey: 'guest',
    header: 'NO. OF GUESTS',
    cell: ({ row: { original } }) => {
      const { guest, child } = original;
      return (
        <div className="flex items-center">
          <div className="flex items-center justify-center bg-warning-subtle rounded-md me-2 size-6">
            <FontAwesomeIcon icon={faUser} className="text-warning-darker" />
          </div>
          <h5 className="text-emphasis font-semibold mb-0 me-4">{guest}</h5>
          <div className="flex items-center justify-center bg-info-subtle rounded-md me-2 size-6">
            <FontAwesomeIcon icon={faBaby} className="text-info-darker" />
          </div>
          <h5 className="text-emphasis font-semibold mb-0">{child}</h5>
        </div>
      );
    },
    meta: {
      headerProps: { className: 'text-subtle align-middle px-6 w-50' },
      cellProps: { className: 'align-middle px-6 guest' }
    }
  },
  {
    id: 'bathRooms',
    accessorKey: 'bathRooms',
    header: 'BATHROOM',
    cell: ({ row: { original } }) => {
      const { bathRooms } = original;
      return (
        <div className="flex items-center">
          <div className="flex items-center justify-center bg-danger-subtle rounded-md me-2 size-6">
            <FontAwesomeIcon icon={faBath} className="text-danger-darker" />
          </div>
          <h5 className="text-emphasis font-semibold mb-0 me-3">{bathRooms}</h5>
        </div>
      );
    },
    meta: {
      headerProps: { className: 'text-subtle align-middle px-6 w-35' },
      cellProps: { className: 'align-middle px-6 bathRooms' }
    }
  },
  {
    accessorKey: 'amenities',
    header: 'AMENITIES',
    enableSorting: false,
    cell: ({ row: { original } }) => {
      const { amenities } = original;
      return (
        <div className="flex flex-wrap gap-2">
          {amenities.slice(0, 13).map((item, index) => (
            <span
              key={index}
              className="badge bg-primary-subtle text-highlight uppercase px-1.75 py-1 text-[10.24px]"
            >
              {item}
            </span>
          ))}
          {amenities.length > 13 && (
            <Link to="#!" className="font-bold text-md">
              +{amenities.length - 13} More
            </Link>
          )}
        </div>
      );
    },
    meta: {
      headerProps: { className: 'text-subtle align-middle ps-6 min-w-112.5' },
      cellProps: { className: 'align-middle ps-6 amenities' }
    }
  },
  {
    id: 'totalRooms',
    accessorKey: 'totalRooms',
    header: 'TOTAL ROOM',
    cell: ({ row: { original } }) => {
      const { totalRooms } = original;
      return <h2 className="text-muted">{totalRooms}</h2>;
    },
    meta: {
      headerProps: {
        className: 'text-subtle align-middle ps-6 text-end w-45'
      },
      cellProps: { className: 'align-middle text-end ps-6 totalRooms' }
    }
  },
  {
    id: 'roomListingDropdown',
    enableSorting: false,
    cell: () => {
      return (
        <RevealDropdownTrigger className="static">
          <RevealDropdown btnClassName="text-sm">
            <ActionDropdownItems />
          </RevealDropdown>
        </RevealDropdownTrigger>
      );
    },
    meta: {
      headerProps: {
        className: 'text-subtle text-end align-middle pe-0 ps-6'
      },
      cellProps: { className: 'align-middle ps-6' }
    }
  }
];

const RoomListingTable = () => {
  const table = useAdvanceTable({
    data: RoomListingData,
    columns,
    pageSize: 8,
    pagination: true,
    sortable: true
  });

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    table.setGlobalFilter(e.target.value || undefined);
  };
  return (
    <AdvanceTableProvider {...table}>
      <div className="md:flex mt-8 mb-6">
        <Button variant="primary" className="me-6">
          <FontAwesomeIcon icon={faPlus} className="me-2" />
          Create Listing
        </Button>
        <Button variant="link" className="text-default me-6 px-0">
          <FontAwesomeIcon icon={faFileExport} className="text-md me-2" />
          Export
        </Button>
        <div className="flex gap-2 md:ms-auto mt-4 md:mt-0">
          <SearchBox
            placeholder="Search products"
            onChange={handleSearchInputChange}
          />
          <Button variant="phoenix-primary" className="px-4">
            <FontAwesomeIcon transform="down-2" icon={faFilter} />
          </Button>
        </div>
      </div>

      <AdvanceTable
        tableProps={{ className: 'text-md mb-0' }}
        rowClassName="hover-actions-trigger btn-reveal-trigger static"
      />
      <AdvanceTableFooter navBtn className="py-2 g-0" />
    </AdvanceTableProvider>
  );
};

export default RoomListingTable;
