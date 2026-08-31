import { cn } from '@hummingbirdui/react';
import { Range, stockChartRanges } from 'data/stock/portfolio';

interface StockRangeButtonGroupProps {
  active: Range;
  onChange?: (range: Range) => void;
  ariaLabel?: string;
}

/**
 * Gold `.scrollbar > .btn-group.btn-group-sm.stock-btn-group` chart range
 * filter (1D…All) from mixins/stock/portfolio/MyPortfolioMainContent.pug and
 * mixins/stock/watchlist/CollapsibleContainer.pug. The active button carries
 * the literal gold classes.
 */
const StockRangeButtonGroup = ({
  active,
  onChange,
  ariaLabel = 'portfolio-chart-btn-group'
}: StockRangeButtonGroupProps) => {
  return (
    <div className="scrollbar">
      <div
        className="btn-group btn-group-sm stock-btn-group"
        role="group"
        aria-label={ariaLabel}
      >
        {stockChartRanges.map(({ label, value }) => (
          <button
            key={value}
            type="button"
            data-value={value}
            className={cn(
              'btn btn-phoenix-secondary',
              value === active &&
                'active bg-white dark:bg-black text-primary border-subtle'
            )}
            onClick={() => onChange?.(value)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StockRangeButtonGroup;
