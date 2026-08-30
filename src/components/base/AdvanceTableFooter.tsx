import { useState } from 'react';
import { Col, Pagination, Row, cn } from '@hummingbirdui/react';
import Button from './Button';
import { useAdvanceTableContext } from 'providers/AdvanceTableProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import usePagination from 'hooks/usePagination';
import {
  faAngleRight,
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';

interface AdvanceTableFooterProps {
  className?: string;
  pagination?: boolean;
  navBtn?: boolean;
  showViewAllBtn?: boolean;
  viewAllBtnClass?: string;
  tableInfo?: string;
  nextPageLinkClassName?: string;
}

const AdvanceTableFooter = ({
  className,
  pagination,
  navBtn,
  showViewAllBtn = true,
  viewAllBtnClass,
  tableInfo,
  nextPageLinkClassName
}: AdvanceTableFooterProps) => {
  const {
    setPageSize,
    previousPage,
    nextPage,
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
    { active = false, disabled = false, className: linkClass = '' } = {}
  ) => (
    <Pagination.Item key={key} active={active} disabled={disabled}>
      <Pagination.Link asChild className={linkClass}>
        <button type="button" onClick={onClick} disabled={disabled}>
          {label}
        </button>
      </Pagination.Link>
    </Pagination.Item>
  );

  const ellipsis = (key: React.Key) => (
    <Pagination.Item key={key} disabled>
      <Pagination.Link asChild>
        <span>…</span>
      </Pagination.Link>
    </Pagination.Item>
  );

  return (
    // gold pagination footer: `.row.items-center.justify-between.py-2.pe-0.text-md > .col-auto.flex`
    // gold prev/next footer (dashboard tables): `.row.items-center.py-1 > .col.flex.text-md`
    <Row
      className={cn(
        'items-center',
        pagination ? 'justify-between py-2 pe-0 text-md' : 'py-1',
        className
      )}
    >
      <Col xs={pagination ? 'auto' : undefined} className="flex text-md">
        <p
          className={cn(
            'mb-0 hidden sm:block me-10 font-semibold text-default',
            tableInfo
          )}
        >
          {pageSize * pageIndex + 1} to{' '}
          {pageSize * pageIndex + getPaginationRowModel().rows.length}
          <span className="text-subtle"> items of </span>
          {getPrePaginationRowModel().rows.length}
        </p>
        {showViewAllBtn && (
          <Button
            variant="link"
            className={cn(viewAllBtnClass, 'p-0 font-semibold')}
            endIcon={
              <FontAwesomeIcon
                icon={faAngleRight}
                className="ms-1 text-md"
                transform="down-1"
              />
            }
            onClick={() => {
              setIsAllVisible(!isAllVisible);
              setPageSize(
                isAllVisible ? perPage : getPrePaginationRowModel().rows.length
              );
            }}
          >
            View {isAllVisible ? 'less' : 'all'}
          </Button>
        )}
      </Col>
      {navBtn && (
        <Col xs="auto" className="flex">
          <Button
            variant="link"
            startIcon={
              <FontAwesomeIcon icon={faChevronLeft} className="me-2" />
            }
            className="px-1 me-1"
            disabled={!getCanPreviousPage()}
            onClick={() => previousPage()}
          >
            Previous
          </Button>
          <Button
            variant="link"
            endIcon={<FontAwesomeIcon icon={faChevronRight} className="ms-2" />}
            className="px-1 ms-1"
            disabled={!getCanNextPage()}
            onClick={() => nextPage()}
          >
            Next
          </Button>
        </Col>
      )}
      {pagination && (
        <Col xs="auto" className="flex">
          <Pagination className="mb-0">
            <Pagination.Content className="justify-center items-center">
              {pageButton(
                'prev',
                <FontAwesomeIcon icon={faChevronLeft} />,
                () => setPageIndex(pageIndex - 1),
                { disabled: !getCanPreviousPage() }
              )}

              {hasPrevEllipsis && (
                <>
                  {pageButton('first', 1, () => setPageIndex(0), {
                    active: pageIndex === 0
                  })}
                  {ellipsis('prev-ellipsis')}
                </>
              )}

              {visiblePaginationItems.map(page =>
                pageButton(page, page, () => setPageIndex(page - 1), {
                  active: pageIndex === page - 1
                })
              )}

              {hasNextEllipsis && (
                <>
                  {ellipsis('next-ellipsis')}
                  {pageButton(
                    'last',
                    getPageCount(),
                    () => setPageIndex(getPageCount() - 1),
                    { active: pageIndex === getPageCount() - 1 }
                  )}
                </>
              )}

              {pageButton(
                'next',
                <FontAwesomeIcon icon={faChevronRight} />,
                () => setPageIndex(pageIndex + 1),
                {
                  disabled: !getCanNextPage(),
                  className: nextPageLinkClassName
                }
              )}
            </Pagination.Content>
          </Pagination>
        </Col>
      )}
    </Row>
  );
};

export default AdvanceTableFooter;
