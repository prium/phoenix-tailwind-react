import { useState } from 'react';
import { cn } from '@hummingbirdui/react';
import { useAdvanceTableContext } from 'providers/AdvanceTableProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import usePagination from 'hooks/usePagination';
import {
  faAngleRight,
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';

interface MostRecentForecastTableFooterProps {
  className?: string;
}

/**
 * Gold list.js footer of `#mostRecentForecast`:
 * `.flex.flex-end-center.py-1.text-md.pagination-subtle` in
 * mixins/stock/stock-details/MostRecentForecastTable.pug.
 */
const MostRecentForecastTableFooter = ({
  className
}: MostRecentForecastTableFooterProps) => {
  const {
    setPageSize,
    getCanNextPage,
    getCanPreviousPage,
    getState,
    getPrePaginationRowModel,
    getPaginationRowModel,
    getPageCount,
    setPageIndex
  } = useAdvanceTableContext();

  const {
    pagination: { pageSize, pageIndex }
  } = getState();

  const [perPage] = useState(pageSize);
  const { hasNextEllipsis, hasPrevEllipsis, visiblePaginationItems } =
    usePagination({
      currentPageNo: pageIndex + 1,
      totalPage: getPageCount(),
      maxPaginationButtonCount: 5
    });

  const [isAllVisible, setIsAllVisible] = useState(false);

  const pageButton = (
    key: React.Key,
    label: React.ReactNode,
    onClick: () => void,
    { active = false, disabled = false } = {}
  ) => (
    <li key={key} className={cn({ active, disabled })}>
      <button
        type="button"
        className="page"
        onClick={onClick}
        disabled={disabled}
      >
        {label}
      </button>
    </li>
  );

  return (
    // `data-list` scopes the gold list.js `.pagination`/`.page` styles (list.css)
    <div
      data-list=""
      className={cn(
        'flex flex-end-center py-1 text-md pagination-subtle',
        className
      )}
    >
      <p className="mb-0 hidden sm:block me-4 font-semibold text-default">
        {pageSize * pageIndex + 1} to{' '}
        {pageSize * pageIndex + getPaginationRowModel().rows.length}
        <span className="text-subtle"> Items of </span>
        {getPrePaginationRowModel().rows.length}
      </p>
      <a
        className="font-semibold"
        href="#!"
        onClick={e => {
          e.preventDefault();
          setIsAllVisible(!isAllVisible);
          setPageSize(
            isAllVisible ? perPage : getPrePaginationRowModel().rows.length
          );
        }}
      >
        View {isAllVisible ? 'Less' : 'all'}
        <FontAwesomeIcon
          icon={faAngleRight}
          className="ms-1"
          transform="down-1"
        />
      </a>
      <div className="flex ms-6 sm:-me-2">
        <button
          type="button"
          className={cn('page-link', { disabled: !getCanPreviousPage() })}
          data-list-pagination="prev"
          disabled={!getCanPreviousPage()}
          onClick={() => setPageIndex(pageIndex - 1)}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <ul className="mb-0 pagination">
          {hasPrevEllipsis && (
            <>
              {pageButton('first', 1, () => setPageIndex(0), {
                active: pageIndex === 0
              })}
              <li className="disabled">
                <button type="button" className="page" disabled>
                  …
                </button>
              </li>
            </>
          )}

          {visiblePaginationItems.map(page =>
            pageButton(page, page, () => setPageIndex(page - 1), {
              active: pageIndex === page - 1
            })
          )}

          {hasNextEllipsis && (
            <>
              <li className="disabled">
                <button type="button" className="page" disabled>
                  …
                </button>
              </li>
              {pageButton(
                'last',
                getPageCount(),
                () => setPageIndex(getPageCount() - 1),
                { active: pageIndex === getPageCount() - 1 }
              )}
            </>
          )}
        </ul>
        <button
          type="button"
          className={cn('page-link', { disabled: !getCanNextPage() })}
          data-list-pagination="next"
          disabled={!getCanNextPage()}
          onClick={() => setPageIndex(pageIndex + 1)}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default MostRecentForecastTableFooter;
