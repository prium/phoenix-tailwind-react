import React from 'react';
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

import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { ChangeEvent } from 'react';
import { Link } from 'react-router';
import Badge from 'components/base/Badge';
import RevealDropdown, {
  RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import ActionDropdownItems from 'components/common/ActionDropdownItems';
import {
  RoomListingData,
  RoomListingInterface
} from 'data/travel-agency/roomListing';

const columns: ColumnDef<RoomListingInterface>[] = [
  {
    id: 'roomInformation',
    header: 'room Information',
    accessorKey: 'name',

    cell: ({ row: { original } }) => {
      const { img, name, category, price } = original;
      return (
        <>
          <div className="flex items-center gap-4">
            <Link to="#!">
              <img
                src={img}
                alt=""
                width={80}
                className="rounded-sm border border-light"
              />
            </Link>
            <div>
              <Link
                to="#!"
                className="text-base font-black text-emphasis whitespace-nowrap"
              >
                {name}
              </Link>
              <h6 className="fw-seibold text-default whitespace-nowrap mt-1 mb-2">
                <FontAwesomeIcon icon={faBorderAll} className="me-2" />
                {category}
              </h6>
              <h4 className="font-black mb-0">${price}</h4>
            </div>
          </div>
        </>
      );
    },
    meta: {
      headerProps: { style: { width: 300 } },
      cellProps: { className: 'align-middle py-4' }
    }
  },
  {
    header: 'NO. of Beds',
    accessorKey: 'beds',

    cell: ({ row: { original } }) => {
      const { beds, bedRooms } = original;
      return (
        <div className="flex items-center">
          <div
            className="flex items-center justify-center bg-primary-subtle rounded-md me-2"
            style={{ height: 24, width: 24 }}
          >
            <FontAwesomeIcon
              icon={faPersonShelter}
              className="text-primary-darker"
            />
          </div>
          <h5 className="text-emphasis font-semibold mb-0 me-4">
            {bedRooms}
          </h5>
          <div
            className="flex items-center justify-center bg-success-subtle rounded-md me-2"
            style={{ height: 24, width: 24 }}
          >
            <FontAwesomeIcon icon={faBed} className="text-success-darker" />
          </div>
          <h5 className="text-emphasis font-semibold mb-0">{beds}</h5>
        </div>
      );
    },
    meta: {
      headerProps: {
        style: { width: 200 },
        className: 'text-subtle align-middle px-4'
      },
      cellProps: { className: 'align-middle px-4' }
    }
  },
  {
    accessorKey: 'guest',
    header: 'NO. of Guests',
    cell: ({ row: { original } }) => {
      const { guest, child } = original;
      return (
        <div className="flex items-center">
          <div
            className="flex items-center justify-center bg-warning-subtle rounded-md me-2"
            style={{ height: 24, width: 24 }}
          >
            <FontAwesomeIcon icon={faUser} className="text-warning-darker" />
          </div>
          <h5 className="text-emphasis font-semibold mb-0 me-4">{guest}</h5>
          <div
            className="flex items-center justify-center bg-info-subtle rounded-md me-2"
            style={{ height: 24, width: 24 }}
          >
            <FontAwesomeIcon icon={faBaby} className="text-info-darker" />
          </div>
          <h5 className="text-emphasis font-semibold mb-0">{child}</h5>
        </div>
      );
    },
    meta: {
      headerProps: {
        style: { width: 200 },
        className: 'text-subtle align-middle px-4'
      },
      cellProps: { className: 'align-middle px-4' }
    }
  },
  {
    accessorKey: 'bathrooms',
    header: 'Bathroom',
    cell: ({ row: { original } }) => {
      const { bathRooms } = original;
      return (
        <div className="flex items-center">
          <div
            className="flex items-center justify-center bg-danger-subtle rounded-md me-2"
            style={{ height: 24, width: 24 }}
          >
            <FontAwesomeIcon icon={faBath} className="text-danger-darker" />
          </div>
          <h5 className="text-emphasis font-semibold mb-0 me-4">
            {bathRooms}
          </h5>
        </div>
      );
    },
    meta: {
      headerProps: {
        style: { width: 140 },
        className: 'text-subtle align-middle px-4'
      },
      cellProps: { className: 'align-middle px-4' }
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
            <Badge
              key={index}
              variant="phoenix"
              bg="primary"
              className="text-highlight py-1 text-sm border-0"
            >
              {item}
            </Badge>
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
      headerProps: {
        style: { minWidth: 450 },
        className: 'text-subtle align-middle ps-4'
      },
      cellProps: { className: 'align-middle ps-4' }
    }
  },
  {
    accessorKey: 'totalRooms',
    header: 'Total Room',
    cell: ({ row: { original } }) => {
      const { totalRooms } = original;
      return <h2 className="text-muted">{totalRooms}</h2>;
    },
    meta: {
      headerProps: {
        style: { width: 180 },
        className: 'text-subtle align-middle text-end ps-4'
      },
      cellProps: { className: 'align-middle text-end ps-4' }
    }
  },
  {
    id: 'roomListingDropdown',
    cell: () => {
      return (
        <RevealDropdownTrigger>
          <RevealDropdown>
            <ActionDropdownItems />
          </RevealDropdown>
        </RevealDropdownTrigger>
      );
    },
    meta: {
      headerProps: {
        className: 'text-subtle align-middle text-end ps-4 pe-0'
      },
      cellProps: { className: 'align-middle ps-4' }
    }
  }
];
const RoomListingTable = () => {
  const table = useAdvanceTable({
    data: RoomListingData,
    columns,
    pageSize: 6,
    pagination: true,
    selection: true,
    selectionColumnWidth: '30px',
    sortable: true
  });

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    table.setGlobalFilter(e.target.value || undefined);
  };
  return (
    <AdvanceTableProvider {...table}>
      <div className="md:flex mt-8 mb-6">
        <Button
          variant="primary"
          startIcon={<FontAwesomeIcon icon={faPlus} className="me-2" />}
          className="me-6"
        >
          Create Listing
        </Button>
        <Button
          variant="link"
          startIcon={
            <FontAwesomeIcon icon={faFileExport} className="me-2 text-md" />
          }
          className="text-default me-6 px-0"
        >
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
        tableProps={{
          className: ' text-md mb-0 border-light'
        }}
        rowClassName="hover-actions-trigger btn-reveal-trigger static"
      />
      <AdvanceTableFooter navBtn />
    </AdvanceTableProvider>
  );
};

export default RoomListingTable;
