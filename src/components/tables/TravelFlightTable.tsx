import { faClock } from '@fortawesome/free-regular-svg-icons';
import {
  faArrowRight,
  faFilter,
  faPlane,
  faTemperatureQuarter
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Dropdown, Row } from '@hummingbirdui/react';
import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import Button from 'components/base/Button';
import RevealDropdown from 'components/base/RevealDropdown';
import SearchBox from 'components/common/SearchBox';
import useAdvanceTable, { buildSelectionColumn } from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { ChangeEvent } from 'react';
import { Link } from 'react-router';
import FeatherIcon from 'feather-icons-react';
import FlightsTableHeader from 'components/modules/travel-agency/dashboard/FlightsTableHeader';
import { FlightInterface, flightsData } from 'data/travel-agency/travelAgency';

const columns: ColumnDef<FlightInterface>[] = [
  buildSelectionColumn<FlightInterface>({
    headerClassName: 'whitespace-nowrap px-0 py-1',
    cellClassName: 'text-md align-middle px-0'
  }),
  {
    id: 'flightNo',
    accessorKey: 'flightNo',
    header: 'FLIGHTS NO.',
    cell: ({ row: { original } }) => {
      const { flightNo } = original;
      return (
        <Link to="#!" className="font-bold">
          {flightNo}
        </Link>
      );
    },
    meta: {
      headerProps: { className: 'whitespace-nowrap text-subtle ps-0' },
      cellProps: { className: 'ps-0' }
    }
  },
  {
    id: 'vendor',
    accessorFn: ({ vendor }) => vendor.name,
    header: 'VENDOR',
    cell: ({ row: { original } }) => {
      const { vendor } = original;
      return (
        <Link to="#!" className="flex items-center gap-2">
          <img src={vendor.image} alt="" className="w-8" />
          <h6 className="mb-0 text-primary font-semibold text-nowrap">
            {vendor.name}
          </h6>
        </Link>
      );
    },
    meta: {
      headerProps: { className: 'w-45 text-subtle' },
      cellProps: { className: 'pe-8 min-w-45' }
    }
  },
  {
    id: 'weather',
    accessorFn: ({ weather }) => weather.temperature,
    header: 'WEATHER',
    cell: ({ row: { original } }) => {
      const { weather } = original;
      return (
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faTemperatureQuarter}
            className={`me-2 text-${
              weather.temperature > 25 ? 'danger' : 'info'
            }`}
          />
          <p className="mb-0 text-subtle me-4">{weather.temperature}°C</p>
          <FontAwesomeIcon
            icon={weather.icon}
            className={`me-2 ${weather.color}`}
          />
          <p className="mb-0 text-subtle">{weather.weather}</p>
        </div>
      );
    },
    meta: {
      headerProps: { className: 'w-62.5 text-start text-subtle' },
      cellProps: { className: 'pe-8 min-w-62.5' }
    }
  },
  {
    id: 'route',
    accessorFn: ({ route }) => route.from.airport,
    header: 'ROUTE',
    cell: ({ row: { original } }) => {
      const { route } = original;
      return (
        <div className="flex items-center gap-2">
          <img src={route.from.flag} alt="" width={16} />
          <p className="mb-0 font-semibold text-bold">{route.from.airport}</p>
          <FontAwesomeIcon icon={faArrowRight} className="text-subtle mx-1" />
          <p className="mb-0 font-semibold text-bold">{route.to.airport}</p>
          <img src={route.to.flag} alt="" width={16} />
        </div>
      );
    },
    meta: {
      headerProps: { className: 'w-45 text-subtle' },
      cellProps: { className: 'pe-8 min-w-45' }
    }
  },
  {
    id: 'destination',
    accessorFn: ({ destination }) => destination.percent,
    header: 'DESTINATION',
    cell: ({ row: { original } }) => {
      const { destination, status } = original;
      const mutedClass =
        status.label === 'Cancelled' ? 'text-soft' : 'text-subtle';
      return (
        <>
          <div
            className="progress overflow-visible h-0.5"
            role="progressbar"
            aria-label="flight-progress-bar"
            aria-valuenow={destination.percent}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="progress-bar overflow-visible relative bg-info-light rounded-md"
              style={{ width: `${destination.percent}%` }}
            >
              {destination.percent !== 0 && (
                <FontAwesomeIcon
                  icon={faPlane}
                  className="text-info absolute end-0"
                />
              )}
            </div>
          </div>
          <div className="flex justify-between mt-2">
            <p className={`${mutedClass} mb-0 text-sm`}>
              {destination.currentPosition}
            </p>
            <p className={`${mutedClass} mb-0 text-sm`}>{destination.target}</p>
          </div>
        </>
      );
    },
    meta: {
      headerProps: { className: 'min-w-70 text-subtle' },
      cellProps: { className: 'pe-8 2xl:pe-12 min-w-70' }
    }
  },
  {
    id: 'status',
    accessorFn: ({ status }) => status.label,
    header: 'STATUS',
    cell: ({ row: { original } }) => {
      const { status } = original;
      return (
        <span className={`badge-phoenix-${status.type} badge text-sm`}>
          {status.label}
        </span>
      );
    },
    meta: {
      headerProps: { className: 'min-w-30 text-end text-subtle' },
      cellProps: { className: 'text-end min-w-30' }
    }
  },
  {
    id: 'time',
    accessorFn: ({ time }) => time.date,
    header: 'TIME',
    cell: ({ row: { original } }) => {
      const { time } = original;
      return (
        <>
          <div className="flex justify-end items-center gap-2 mb-2">
            <FontAwesomeIcon icon={faClock} className="text-default" />
            <span className="text-default font-semibold">{time.time}</span>
          </div>
          <div className="flex justify-end gap-2">
            <FeatherIcon icon="calendar" className="text-default size-4" />
            <span className="text-default font-semibold">{time.date}</span>
          </div>
        </>
      );
    },
    meta: {
      headerProps: { className: 'min-w-50 text-end text-subtle' },
      cellProps: { className: 'text-end min-w-50' }
    }
  },
  {
    id: 'action',
    enableSorting: false,
    header: '',
    cell: () => {
      return (
        <div className="btn-reveal-trigger">
          <RevealDropdown btnClassName="ms-auto flex">
            <Dropdown.Item>Track flight</Dropdown.Item>
            <Dropdown.Item>Download</Dropdown.Item>
            <Dropdown.Item>Report abuse</Dropdown.Item>
          </RevealDropdown>
        </div>
      );
    },
    meta: {
      headerProps: { className: 'text-end pe-0' },
      cellProps: { className: 'text-end' }
    }
  }
];

const TravelFlightTable = () => {
  const table = useAdvanceTable({
    data: flightsData,
    columns,
    pageSize: 4,
    pagination: true,
    sortable: true
  });

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    table.setGlobalFilter(e.target.value || undefined);
  };
  return (
    <AdvanceTableProvider {...table}>
      <Row className="gx-0 gy-4 items-center py-6">
        <div className="xl:col-auto">
          <h3 className="mb-0">Flights </h3>
        </div>
        <Col xs="auto" className="flex-1">
          <div className="flex flex-between-center">
            <div className="flex items-center">
              <SearchBox
                placeholder="Search by Flight no."
                className="xl:ms-10 w-auto"
                onChange={handleSearchInputChange}
              />
              <Button variant="phoenix-secondary" className="px-4 ms-2 me-4">
                <FontAwesomeIcon
                  icon={faFilter}
                  transform="down-2"
                  className="text-muted"
                />
              </Button>
            </div>
            <FlightsTableHeader />
          </div>
        </Col>
      </Row>
      <AdvanceTable
        className="mb-6"
        tableProps={{
          className: 'text-md mb-0 border-t border-subtle'
        }}
      />
    </AdvanceTableProvider>
  );
};

export default TravelFlightTable;
