import { PropsWithChildren } from 'react';
import {
  faAngleRight,
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '@hummingbirdui/react';

interface StockDetailsPaginationProps {
  currentPage: number;
  pageSize: number;
  totalItem: number;
  className?: string;
  /** classes on the pagination column (gold events footer adds `sm:-me-2`) */
  paginationColClassName?: string;
  /** classes on the next button (gold news footer adds `pe-0`) */
  nextBtnClassName?: string;
}

/**
 * Static list.js-style pagination footer of the stock-details News/Events tabs:
 * `.row.flex-between-center.py-2.pe-0.text-md` in
 * mixins/stock/stock-details/{NewsTabContent,EventsTabContent}.pug.
 * Children are the gold `li.page-item > a.page-link` items.
 */
const StockDetailsPagination = ({
  currentPage,
  pageSize,
  totalItem,
  className,
  paginationColClassName,
  nextBtnClassName,
  children
}: PropsWithChildren<StockDetailsPaginationProps>) => {
  return (
    <div className={cn('row flex-between-center py-2 pe-0 text-md', className)}>
      <div className="col-auto flex">
        <p className="mb-0 hidden sm:block me-4 font-semibold">
          {currentPage} to {pageSize}{' '}
          <span className="text-subtle">Items of </span>
          {totalItem}
        </p>
        <a className="font-semibold" href="#!">
          View all
          <FontAwesomeIcon
            icon={faAngleRight}
            className="ms-1"
            transform="down-1"
          />
        </a>
        <a className="font-semibold hidden" href="#!">
          View Less
          <FontAwesomeIcon
            icon={faAngleRight}
            className="ms-1"
            transform="down-1"
          />
        </a>
      </div>
      <div className={cn('col-auto flex', paginationColClassName)}>
        <button
          type="button"
          className="page-link disabled"
          data-list-pagination="prev"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <ul className="mb-0 pagination">{children}</ul>
        <button
          type="button"
          className={cn('page-link', nextBtnClassName)}
          data-list-pagination="next"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default StockDetailsPagination;
