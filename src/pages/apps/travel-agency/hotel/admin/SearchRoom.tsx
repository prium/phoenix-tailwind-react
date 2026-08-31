import {
  faCalendarAlt,
  faChevronRight,
  faFilter,
  faRotate,
  faSearch
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FloatingLabel } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import DatePicker from 'components/base/DatePicker';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import RoomCard from 'components/modules/travel-agency/hotel/search-room/RoomCard';
import RoomFilterOffcanvas from 'components/modules/travel-agency/hotel/search-room/RoomFilterOffcanvas';
import { defaultBreadcrumbItems } from 'data/commonData';
import { useState } from 'react';
import { Link } from 'react-router';
import { roomsSearchData } from 'data/travel-agency/customer/hotel';

const SearchRoom = () => {
  const [openOffcanvas, setOpenOffcanvas] = useState(false);

  return (
    <>
      <PageBreadcrumb items={defaultBreadcrumbItems} className="mb-4" />
      <div className="mb-16">
        <div className="row items-end mb-8 gy-4">
          <div className="col max-w-72.5">
            <h2>Rooms</h2>
          </div>
          <div className="xl:col">
            <div className="row gx-2 xl:gx-4 gy-4">
              <div className="sm:col-auto order-1 sm:order-0 sm:me-2 xl:hidden">
                <Button
                  variant="phoenix-secondary"
                  size="lg"
                  className="text-subtle w-full"
                  onClick={() => setOpenOffcanvas(true)}
                >
                  <FontAwesomeIcon icon={faFilter} className="me-2" />
                  Filter
                </Button>
              </div>
              <div className="col sm:col-5 2xl:col-3">
                <DatePicker
                  render={(_, ref) => {
                    return (
                      <FloatingLabel
                        htmlFor="checkIn"
                        label="Select time range"
                        className="w-auto"
                      >
                        <input
                          className="form-control datetimepicker"
                          id="checkIn"
                          type="text"
                          placeholder="H:i"
                          ref={ref}
                        />
                        <FontAwesomeIcon
                          icon={faCalendarAlt}
                          className="absolute top-0 end-0 mt-4 me-4"
                        />
                      </FloatingLabel>
                    );
                  }}
                  hideIcon
                  options={{
                    disableMobile: true,
                    mode: 'range',
                    minDate: 'today',
                    dateFormat: 'd-m-y'
                  }}
                />
              </div>
              <div className="col sm:col-auto grow-0">
                <Button
                  variant="phoenix-primary"
                  size="lg"
                  className="2xl:px-10 text-nowrap"
                >
                  <span className="hidden xl:inline-block">Update </span>
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="text-md xl:ms-2"
                  />
                </Button>
              </div>
              <div className="col sm:col-auto ms-auto grow-0">
                <Button
                  variant="phoenix-secondary"
                  size="lg"
                  className="ms-auto text-nowrap"
                >
                  <span className="hidden xl:inline-block">Refresh </span>
                  <FontAwesomeIcon
                    icon={faRotate}
                    className="text-md xl:ms-2"
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="row gx-10">
          <div className="xl:col-auto">
            <RoomFilterOffcanvas
              open={openOffcanvas}
              setOpen={setOpenOffcanvas}
            />
          </div>
          <div className="col xl:w-1/4">
            {roomsSearchData.map((item, index) => (
              <RoomCard
                key={index}
                data={item}
                index={index}
                isLastItem={roomsSearchData.length - 1 === index}
              />
            ))}
            <div className="border p-4 rounded-lg mt-8 flex flex-end-center gap-4 sm:gap-10 flex-wrap">
              <h2 className="text-default mb-0">
                <span className="text-md text-subtle font-bold me-2">
                  Total :
                </span>
                04
              </h2>
              <Link to="#!" className="btn btn-primary sm:px-12">
                Confirm Booking
                <FontAwesomeIcon icon={faChevronRight} className="ms-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchRoom;
