import { useState } from 'react';
import { cn } from '@hummingbirdui/react';
import { useAdvanceTableContext } from 'providers/AdvanceTableProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleRight,
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';

/**
 * Gold Flights list controls (phoenix list.js DOM): hidden `.pagination`,
 * `[data-list-info]` text, View all / View Less toggle and the
 * `.btn-phoenix-primary` prev/next buttons.
 */
const FlightsTableHeader = () => {
  const {
    setPageSize,
    previousPage,
    nextPage,
    getCanNextPage,
    getCanPreviousPage,
    getState,
    getPrePaginationRowModel,
    getPaginationRowModel
  } = useAdvanceTableContext();

  const {
    pagination: { pageSize, pageIndex }
  } = getState();

  const [perPage] = useState(pageSize);
  const [isAllVisible, setIsAllVisible] = useState(false);

  const toggleView = () => {
    setIsAllVisible(!isAllVisible);
    setPageSize(
      isAllVisible ? perPage : getPrePaginationRowModel().rows.length
    );
  };

  return (
    <div className="flex items-center">
      <div className="pagination hidden"></div>
      <p className="mb-0 hidden md:block me-4 font-semibold text-default text-nowrap">
        {pageSize * pageIndex + 1} to{' '}
        {pageSize * pageIndex + getPaginationRowModel().rows.length}
        <span className="text-subtle"> Items of </span>
        {getPrePaginationRowModel().rows.length}
      </p>
      <div className="hidden sm:block">
        <a
          className={cn('font-semibold text-nowrap', { hidden: isAllVisible })}
          href="#!"
          onClick={e => {
            e.preventDefault();
            toggleView();
          }}
        >
          View all
          <FontAwesomeIcon
            icon={faAngleRight}
            className="ms-1"
            transform="down-1"
          />
        </a>
        <a
          className={cn('font-semibold text-nowrap', { hidden: !isAllVisible })}
          href="#!"
          onClick={e => {
            e.preventDefault();
            toggleView();
          }}
        >
          View Less
        </a>
      </div>
      <button
        type="button"
        title="Previous"
        className={cn('btn btn-phoenix-primary px-4 me-1 sm:ms-6', {
          disabled: !getCanPreviousPage()
        })}
        onClick={() => previousPage()}
      >
        <FontAwesomeIcon icon={faChevronLeft} transform="down-1" />
      </button>
      <button
        type="button"
        title="Next"
        className={cn('btn btn-phoenix-primary px-4', {
          disabled: !getCanNextPage()
        })}
        onClick={() => nextPage()}
      >
        <FontAwesomeIcon icon={faChevronRight} transform="down-1" />
      </button>
    </div>
  );
};

export default FlightsTableHeader;
