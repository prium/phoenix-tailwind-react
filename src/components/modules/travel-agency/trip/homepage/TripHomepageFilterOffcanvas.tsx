import { Drawer } from '@hummingbirdui/react';
import { useAppContext } from 'providers/AppProvider';
import TripHomepageFilterOffcanvasContent, {
  TripFilterOffcanvasFooter
} from './TripHomepageFilterOffcanvasContent';

interface TripHomepageFilterOffcanvasProps {
  show: boolean;
  onHide: () => void;
}

/** `+TripFilterOffcanvas` in phoenix-tailwind mixins/travel-agency/trip/TripFilterOffcanvas.pug */
const TripHomepageFilterOffcanvas = ({
  show,
  onHide
}: TripHomepageFilterOffcanvasProps) => {
  const {
    config: { isRTL }
  } = useAppContext();
  return (
    <Drawer
      direction={isRTL ? 'left' : 'right'}
      open={show}
      onOpenChange={open => !open && onHide()}
    >
      <Drawer.Content id="tripFilterOffcanvas" aria-describedby={undefined}>
        <Drawer.Header className="p-6 bg-subtle">
          <Drawer.Title asChild>
            <h5 className="mb-0 text-highlight" id="tripFilterOffcanvasLabel">
              Filter
            </h5>
          </Drawer.Title>
          <button
            type="button"
            className="btn btn-close"
            aria-label="Close"
            onClick={onHide}
          />
        </Drawer.Header>
        <Drawer.Body className="scrollbar px-6 pt-6 pb-8">
          <TripHomepageFilterOffcanvasContent />
        </Drawer.Body>
        <TripFilterOffcanvasFooter />
      </Drawer.Content>
    </Drawer>
  );
};

export default TripHomepageFilterOffcanvas;
