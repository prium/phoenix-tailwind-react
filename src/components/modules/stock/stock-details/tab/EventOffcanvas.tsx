import {
  faCalendarPlus,
  faHeart,
  faTicket,
  faXmark
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Drawer } from '@hummingbirdui/react';
import { Dispatch, SetStateAction } from 'react';
import OffcanvasImage from 'assets/img/stock/offcanvas-image.jpeg';
import { UilClock, UilMapMarker } from '@iconscout/react-unicons';
import Unicon from 'components/base/Unicon';
import UpcomingCollapsibleContainer from './UpcomingCollapsibleContainer';
import { Link } from 'react-router';
import Img from 'assets/img/team/30.webp';
import { useAppContext } from 'providers/AppProvider';

interface EventOffcanvasProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

/** Gold: `#stockEventsSidebar` in mixins/stock/stock-details/EventsTabOffcanvas.pug */
const EventOffcanvas = ({ open, setOpen }: EventOffcanvasProps) => {
  const {
    config: { isRTL }
  } = useAppContext();
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Drawer
      direction={isRTL ? 'left' : 'right'}
      open={open}
      onOpenChange={o => !o && handleClose()}
    >
      <Drawer.Content
        className="bg-soft stock-events-offcanvas"
        aria-describedby={undefined}
      >
        <Drawer.Header className="gap-6 p-6 items-start">
          <Drawer.Title className="sr-only">
            Stock Market Essentials: Company Fundamentals
          </Drawer.Title>
          <h3 className="mb-0">
            Stock Market Essentials: Company Fundamentals
          </h3>
          <button
            type="button"
            className="btn btn-sm btn-phoenix-secondary"
            aria-label="close"
            onClick={handleClose}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </Drawer.Header>
        <Drawer.Body className="scrollbar p-6 border-t">
          <img src={OffcanvasImage} alt="" className="rounded-md mb-6" />
          <div className="row g-2 mb-6">
            <div className="col-5">
              <button type="button" className="btn btn-primary w-full">
                <FontAwesomeIcon icon={faTicket} className="me-2" />
                Get Tickets
              </button>
            </div>
            <div className="col-auto">
              <button type="button" className="btn btn-phoenix-primary">
                <FontAwesomeIcon icon={faCalendarPlus} className="me-2" />
                Add to Calendar
              </button>
            </div>
            <div className="col-auto">
              <button type="button" className="btn btn-phoenix-primary">
                <FontAwesomeIcon icon={faHeart} className="me-2" />
                3677
              </button>
            </div>
          </div>
          <div className="card mb-6">
            <div className="card-body">
              <div className="row g-4">
                <div className="lg:col-6">
                  <div className="flex gap-2 items-center mb-2">
                    <div className="bg-info-subtle px-2 py-1 rounded-md">
                      <Unicon
                        icon={UilMapMarker}
                        lineBox
                        fill="currentColor"
                        size={18}
                        className="text-lg text-info"
                      />
                    </div>
                    <h5>Location</h5>
                  </div>
                  <p className="text-md mb-0 text-muted">
                    Shannon Mekalan Vancouver, British Columbia, Canada
                  </p>
                </div>
                <div className="lg:col-6">
                  <div className="flex gap-2 items-center mb-2">
                    <div className="bg-primary-subtle px-2 py-1 rounded-md">
                      <Unicon
                        icon={UilClock}
                        lineBox
                        fill="currentColor"
                        size={18}
                        className="text-lg text-primary"
                      />
                    </div>
                    <h5>Date &amp; Time</h5>
                  </div>
                  <p className="text-md mb-0 text-muted">
                    28th June - 2nd July 2022,
                    <br />
                    10 am - 4 pm EDT
                  </p>
                </div>
              </div>
            </div>
          </div>
          <UpcomingCollapsibleContainer
            collapseTitle="About This event"
            id="aboutEvent"
          >
            <p className="mb-0">
              Company fundamentals are vital for navigating the stock market
              effectively. They encompass key financial statements—balance
              sheets, income statements, and cash flow statements—that reveal a
              company's revenue, expenses, assets, and liabilities. Investors
              often examine metrics like earnings per share (EPS)...
              <Link to="#!">read more</Link>
            </p>
          </UpcomingCollapsibleContainer>
          <UpcomingCollapsibleContainer
            collapseTitle="Speaker"
            id="speaker"
            className="mt-6"
          >
            <>
              <div className="flex items-center gap-2">
                <div className="avatar avatar-lg h-12 w-12 border-3 border-transparent rounded-full">
                  <img className="rounded-full h-full" src={Img} alt="" />
                </div>
                <div>
                  <h4>Richard Dawkins</h4>
                  <p className="text-subtle text-md">
                    Senior Strategist, Phoenix
                  </p>
                </div>
              </div>
              <p className="mb-0">
                Richard Dawkins serves as a Senior Strategist at Phoenix,
                bringing over a decade of expertise in strategic planning and
                market analysis. He excels in identifying emerging trends and
                developing actionable strategies that propel growth and
                innovation. With a background in Economics and an MBA, Richard
                is recognized for his collaborative leadership style, fostering
                cross-departmental teamwork...
                <Link to="#!">read more</Link>
              </p>
            </>
          </UpcomingCollapsibleContainer>
        </Drawer.Body>
      </Drawer.Content>
    </Drawer>
  );
};

export default EventOffcanvas;
