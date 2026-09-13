import PhoenixOffcanvas from 'components/base/PhoenixOffcanvas';
import { Dispatch, SetStateAction } from 'react';
import RoomFilterOffcanvasContent from './RoomFilterOffcanvasContent';

interface RoomFilterOffcanvasProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

/**
 * gold `#roomFilterOffcanvas`: a fixed offcanvas below xl, forced inline
 * (sticky) at xl+ by `.phoenix-offcanvas-filter-xl` in offcanvas.css.
 */
const RoomFilterOffcanvas = ({ open, setOpen }: RoomFilterOffcanvasProps) => {
  return (
    <PhoenixOffcanvas
      open={open}
      onHide={() => setOpen(false)}
      fixed
      className="phoenix-offcanvas-filter-xl bg-default scrollbar overflow-x-hidden"
      backdropClassName="xl:hidden"
    >
      <RoomFilterOffcanvasContent setOpen={setOpen} />
    </PhoenixOffcanvas>
  );
};

export default RoomFilterOffcanvas;
