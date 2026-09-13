import { ColumnDef } from '@tanstack/react-table';
import classNames from 'classnames';
import AdvanceTable from 'components/base/AdvanceTable';
import RevealDropdown from 'components/base/RevealDropdown';
import ActionDropdownItems from 'components/common/ActionDropdownItems';
import { EconomicPredictionTableRowItem } from 'data/stock/forecast';
import { currencyFormat, numberFormat } from 'helpers/utils';
import useAdvanceTable, { buildSelectionColumn } from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';

/** Gold: `#forecast` table in mixins/stock/stock-details/ForecastTabContent.pug */
const columns: ColumnDef<EconomicPredictionTableRowItem>[] = [
  buildSelectionColumn({
    headerClassName: 'whitespace-nowrap text-md ps-0 py-3.75',
    cellClassName: 'text-md ps-0 py-5.75'
  }),
  {
    accessorKey: 'endingYear',
    header: 'Ending year',
    cell: ({ row: { original } }) => {
      const { endingYear } = original;

      return (
        <p className="text-md font-semibold text-emphasis mb-0">{endingYear}</p>
      );
    },
    meta: {
      headerProps: { className: 'whitespace-nowrap min-w-30' },
      cellProps: { className: 'endingYear whitespace-nowrap' }
    }
  },
  {
    accessorKey: 'revenue',
    header: 'revenue',
    cell: ({ row: { original } }) => {
      const { revenue } = original;

      return (
        <p className="text-md font-semibold text-emphasis mb-0">
          {currencyFormat(revenue, {
            minimumFractionDigits: 2
          })}
          B
        </p>
      );
    },
    meta: {
      headerProps: { className: 'min-w-30' },
      cellProps: { className: 'revenue whitespace-nowrap' }
    }
  },
  {
    accessorKey: 'revenueGrowth',
    header: 'revenue growth',
    cell: ({ row: { original } }) => {
      const {
        revenueGrowth: { growth, className }
      } = original;

      return (
        <p className={classNames(className, 'text-md font-semibold mb-0')}>
          {numberFormat(growth, 'standard', {
            minimumFractionDigits: 2
          })}
        </p>
      );
    },
    meta: {
      headerProps: { className: 'min-w-30' },
      cellProps: { className: 'revenueGrowth' }
    }
  },
  {
    accessorKey: 'eps',
    header: 'eps',
    cell: ({ row: { original } }) => {
      const { eps } = original;

      return (
        <p className="text-md font-semibold text-emphasis mb-0">
          {numberFormat(eps, 'standard', { minimumFractionDigits: 2 })}
        </p>
      );
    },
    meta: {
      headerProps: { className: 'min-w-30 ps-8' },
      cellProps: { className: 'eps ps-8' }
    }
  },
  {
    accessorKey: 'epsGrowth',
    header: 'eps growth',
    cell: ({ row: { original } }) => {
      const {
        epsGrowth: { growth, className }
      } = original;

      return (
        <p className={classNames(className, 'text-md font-semibold mb-0')}>
          {numberFormat(growth, 'standard', {
            minimumFractionDigits: 2
          })}
        </p>
      );
    },
    meta: {
      headerProps: { className: 'min-w-30 ps-8' },
      cellProps: { className: 'epsGrowth whitespace-nowrap ps-8' }
    }
  },
  {
    accessorKey: 'forwardPE',
    header: 'forward pe',
    cell: ({ row: { original } }) => {
      const { forwardPE } = original;

      return (
        <p className="text-md font-semibold text-emphasis mb-0">
          {forwardPE
            ? numberFormat(forwardPE, 'standard', { minimumFractionDigits: 2 })
            : 'N/A'}
        </p>
      );
    },
    meta: {
      headerProps: { className: 'min-w-30 ps-8' },
      cellProps: { className: 'forwardPE ps-8' }
    }
  },
  {
    accessorKey: 'noAnalysts',
    header: 'no. analysts',
    cell: ({ row: { original } }) => {
      const { noAnalysts } = original;

      return (
        <p className="text-md font-semibold text-emphasis mb-0">
          {noAnalysts ?? 'N/A'}
        </p>
      );
    },
    meta: {
      headerProps: { className: 'min-w-30 ps-8' },
      cellProps: { className: 'noANalysts ps-8' }
    }
  },
  {
    accessorKey: 'action',
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
      headerProps: { className: 'min-w-12 pe-0' },
      cellProps: { className: 'whitespace-nowrap pe-0' }
    }
  }
];

const ForecastEconomicPredictionTable = ({
  data
}: {
  data: EconomicPredictionTableRowItem[];
}) => {
  const table = useAdvanceTable({
    data,
    columns,
    pageSize: 6,
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
    </AdvanceTableProvider>
  );
};

export default ForecastEconomicPredictionTable;
