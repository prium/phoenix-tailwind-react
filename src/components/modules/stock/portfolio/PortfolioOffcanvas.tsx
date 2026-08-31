import { Dispatch, SetStateAction } from 'react';
import { Drawer } from '@hummingbirdui/react';
import { useAppContext } from 'providers/AppProvider';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import PortfolioSidebarContent from './PortfolioSidebarContent';

interface PortfolioOffcanvasProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

/**
 * Below-xl drawer for `#portfolioSidebardiv.offcanvas.offcanvas-end` in
 * mixins/stock/portfolio/MyPortfolioSidebar.pug. At xl+ the page renders the
 * gold sticky element instead (`.stock-offcanvas-xl`).
 */
const PortfolioOffcanvas = ({ open, setOpen }: PortfolioOffcanvasProps) => {
  const { breakpoints } = useBreakpoints();
  const {
    config: { isRTL }
  } = useAppContext();

  if (!breakpoints.down('xl')) {
    return null;
  }

  return (
    <Drawer
      direction={isRTL ? 'left' : 'right'}
      open={open}
      onOpenChange={setOpen}
    >
      <Drawer.Content
        className="stock-offcanvas-xl bg-soft scrollbar"
        aria-describedby={undefined}
      >
        <Drawer.Title className="sr-only">Quote Lookup</Drawer.Title>
        <Drawer.Body className="p-0">
          <PortfolioSidebarContent onClose={() => setOpen(false)} />
        </Drawer.Body>
      </Drawer.Content>
    </Drawer>
  );
};

export default PortfolioOffcanvas;
