import { Dispatch, SetStateAction } from 'react';
import { Drawer } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import { useAppContext } from 'providers/AppProvider';
import HomepageFilterOffcanvasContent from './HomepageFilterOffcanvasContent';

interface HomepageFilterOffcanvasProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

/** `+HotelFilterOffcanvas` in mixins/travel-agency/hotel/HotelFilterOffcanvas.pug */
const HomepageFilterOffcanvas = ({
  isOpen,
  setIsOpen
}: HomepageFilterOffcanvasProps) => {
  const {
    config: { isRTL }
  } = useAppContext();

  return (
    <Drawer
      direction={isRTL ? 'left' : 'right'}
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <Drawer.Content aria-describedby={undefined}>
        <Drawer.Header className="p-6 bg-subtle">
          <Drawer.Title asChild>
            <h5 className="mb-0 text-highlight">Filter</h5>
          </Drawer.Title>
          <button
            type="button"
            className="btn btn-close"
            aria-label="Close"
            onClick={() => setIsOpen(false)}
          />
        </Drawer.Header>
        <Drawer.Body className="scrollbar p-6">
          <HomepageFilterOffcanvasContent />
        </Drawer.Body>
        <div className="p-6 border-t border-subtle flex gap-2">
          <Button variant="phoenix-primary" size="lg">
            Reset
          </Button>
          <Button variant="primary" size="lg" className="flex-1">
            Show 445 items
          </Button>
        </div>
      </Drawer.Content>
    </Drawer>
  );
};

export default HomepageFilterOffcanvas;
