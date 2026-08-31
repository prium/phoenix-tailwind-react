import { UilCalendar } from '@iconscout/react-unicons';
import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import Avatar from 'components/base/Avatar';
import Rating from 'components/base/Rating';
import RevealDropdown from 'components/base/RevealDropdown';
import Unicon from 'components/base/Unicon';
import ActionDropdownItems from 'components/common/ActionDropdownItems';
import MostRecentForecastTableFooter from 'components/modules/stock/stock-details/tab/MostRecentForecastTableFooter';
import { MostRecentForecastTableRowItem } from 'data/stock/forecast';
import { currencyFormat, numberFormat } from 'helpers/utils';
import useAdvanceTable, { buildSelectionColumn } from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { Link } from 'react-router';

/** Gold: `#mostRecentForecast` in mixins/stock/stock-details/MostRecentForecastTable.pug */
const columns: ColumnDef<MostRecentForecastTableRowItem>[] = [
  buildSelectionColumn({
    headerClassName: 'whitespace-nowrap text-md ps-0 py-[15px]',
    cellClassName: 'text-md ps-0'
  }),
  {
    accessorKey: 'customer',
    id: 'analyst',
    header: 'Analyst',
    cell: ({ row: { original } }) => {
      const {
        customer: { name, avatar, placeholder }
      } = original;
      return (
        <Link to="#!" className="flex items-center text-default">
          <Avatar
            src={avatar}
            size="m"
            rounded="circle"
            imageClassName="bg-muted"
            placeholder={placeholder}
          />
          <h6 className="mb-0 ms-2">{name}</h6>
        </Link>
      );
    },
    meta: {
      headerProps: { className: 'whitespace-nowrap min-w-55' },
      cellProps: { className: 'analyst whitespace-nowrap' }
    }
  },
  {
    accessorKey: 'rating',
    header: 'rating',
    cell: ({ row: { original } }) => {
      const { rating } = original;
      return <Rating readonly initialValue={rating} />;
    },
    meta: {
      headerProps: { className: 'ps-4 min-w-30' },
      cellProps: { className: 'rating whitespace-nowrap ps-4' }
    }
  },
  {
    accessorKey: 'status',
    header: 'status',
    cell: ({ row: { original } }) => {
      const {
        status: { title, badgeBg }
      } = original;
      return (
        <div className={`badge-phoenix-${badgeBg} badge text-sm`}>
          <span className="badge-label">{title}</span>
        </div>
      );
    },
    meta: {
      headerProps: { className: 'ps-4 min-w-30' },
      cellProps: { className: 'status ps-4' }
    }
  },
  {
    accessorKey: 'action',
    header: 'action',
    cell: ({ row: { original } }) => {
      const { action } = original;
      return (
        <p className="text-md font-semibold text-emphasis mb-0">{action}</p>
      );
    },
    meta: {
      headerProps: { className: 'min-w-45' },
      cellProps: { className: 'action' }
    }
  },
  {
    accessorKey: 'priceTarget',
    header: 'price target',
    cell: ({ row: { original } }) => {
      const { priceTarget } = original;
      return (
        <p className="text-md font-semibold mb-0">
          {currencyFormat(priceTarget, { minimumFractionDigits: 2 })}
        </p>
      );
    },
    meta: {
      headerProps: { className: 'min-w-40' },
      cellProps: { className: 'priceTarget whitespace-nowrap' }
    }
  },
  {
    accessorKey: 'upside',
    header: 'upside',
    cell: ({ row: { original } }) => {
      const {
        upside: { label, badgeBg, prefix }
      } = original;

      // gold badge has no `.badge-label` wrapper
      return (
        <div className={`badge badge-phoenix-${badgeBg} text-sm`}>
          {prefix}
          {numberFormat(label, 'standard', { minimumFractionDigits: 2 })}%
        </div>
      );
    },
    meta: {
      headerProps: { className: 'min-w-36' },
      cellProps: { className: 'upside' }
    }
  },
  {
    accessorKey: 'date',
    header: 'date',
    cell: ({ row: { original } }) => {
      const { date } = original;
      return (
        <div className="flex items-center justify-end gap-2">
          <Unicon
            icon={UilCalendar}
            lineBox
            wrapperClassName="text-base"
            fill="currentColor"
            size={16}
          />
          <h6 className="font-semibold mb-0">{date}</h6>
        </div>
      );
    },
    meta: {
      headerProps: { className: 'text-end pe-4 min-w-36' },
      cellProps: { className: 'date pe-4 text-end' }
    }
  },
  {
    accessorKey: 'tableAction',
    enableSorting: false,
    header: '',
    cell: () => {
      return (
        <RevealDropdown
          className="btn-reveal-trigger static"
          btnClassName="text-sm"
        >
          <ActionDropdownItems />
        </RevealDropdown>
      );
    },
    meta: {
      headerProps: { className: 'pe-0 min-w-[57.6px]' },
      cellProps: { className: 'whitespace-nowrap pe-0' }
    }
  }
];

const MostRecentForecastTable = ({
  data
}: {
  data: MostRecentForecastTableRowItem[];
}) => {
  const table = useAdvanceTable({
    data,
    columns,
    pageSize: 10,
    pagination: true,
    sortable: true
  });
  return (
    <AdvanceTableProvider {...table}>
      <AdvanceTable
        tableProps={{
          className: 'text-md mb-0 border-t border-subtle'
        }}
        headerClassName="uppercase"
        rowClassName="hover-actions-trigger btn-reveal-trigger static"
      />
      <MostRecentForecastTableFooter />
    </AdvanceTableProvider>
  );
};

export default MostRecentForecastTable;
