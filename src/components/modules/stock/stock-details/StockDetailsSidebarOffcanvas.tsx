import { Dispatch, SetStateAction, useEffect } from 'react';
import { cn } from '@hummingbirdui/react';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import StockDetailsSideBarContent from './StockDetailsSideBarContent';

interface StockDetailsSidebarOffcanvasProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

/**
 * Gold: `#stockDetailsSidebar` offcanvas in
 * mixins/stock/stock-details/StockDetailsSideBar.pug — a single element that is
 * a Bootstrap-style end offcanvas below `xl` and, via `.stock-offcanvas-xl`,
 * a sticky in-flow sidebar from `xl` up.
 */
const StockDetailsSidebarOffcanvas = ({
  open,
  setOpen
}: StockDetailsSidebarOffcanvasProps) => {
  const { breakpoints } = useBreakpoints();
  const isOffcanvas = breakpoints.down('xl');

  useEffect(() => {
    if (open && isOffcanvas) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.removeProperty('overflow');
    }
    return () => {
      document.body.style.removeProperty('overflow');
    };
  }, [open, isOffcanvas]);

  return (
    <>
      <div
        className={cn(
          'offcanvas offcanvas-end stock-offcanvas-xl bg-soft xl:border xl:rounded-md scrollbar max-w-96',
          { show: open && isOffcanvas }
        )}
        id="stockDetailsSidebar"
        aria-labelledby="offcanvasStockDetails"
      >
        <div className="offcanvas-body p-0">
          <StockDetailsSideBarContent setOpen={setOpen} />
        </div>
      </div>
      {open && isOffcanvas && (
        <div className="offcanvas-backdrop" onClick={() => setOpen(false)} />
      )}
    </>
  );
};

export default StockDetailsSidebarOffcanvas;
