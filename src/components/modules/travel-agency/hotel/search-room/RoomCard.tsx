import {
  faBaby,
  faBath,
  faBed,
  faBorderAll,
  faCalendar,
  faPersonShelter,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, cn } from '@hummingbirdui/react';
import Swiper from 'components/base/Swiper';
import { useState } from 'react';
import { Link } from 'react-router';
import { SwiperSlide } from 'swiper/react';
import { roomSearchInterface } from 'data/travel-agency/customer/hotel';

/** gold `+RoomCard` (mixins/travel-agency/room-search/RoomCard.pug) */
const RoomCard = ({
  data,
  index,
  isLastItem
}: {
  data: roomSearchInterface;
  index: number;
  isLastItem: boolean;
}) => {
  // the gold expands the first card's availability dates
  const [open, setOpen] = useState(index === 0);

  return (
    <Card className={isLastItem ? '' : 'mb-4'}>
      <Card.Body>
        <div className="row gx-6 justify-between">
          <div className="col-auto mb-6">
            <div className="flex gap-4">
              <Link to="#!">
                <img
                  src={data.img}
                  alt=""
                  width={108}
                  className="rounded-sm border border-subtle"
                />
              </Link>
              <div>
                <Link
                  to="#!"
                  className="text-base font-extrabold text-emphasis text-nowrap"
                >
                  {data.name}
                </Link>
                <h6 className="font-semibold text-default text-nowrap mt-1 mb-2">
                  <FontAwesomeIcon icon={faBorderAll} className="me-2" />
                  {data.category}
                </h6>
                <div className="flex items-baseline gap-1 mb-4">
                  <h6 className="mb-0 font-semibold">Available:</h6>
                  <h4 className="text-warning-dark font-extrabold mb-0">
                    {data.available}
                    <span className="text-md text-subtle font-bold">
                      {' '}
                      / {data.total}
                    </span>
                  </h4>
                </div>
                <h4 className="font-extrabold mb-0">${data.price}</h4>
              </div>
            </div>
          </div>
          <div className="2xl:col-auto flex gap-8 md:gap-10 order-1 2xl:order-0 mb-6">
            <div>
              <h6 className="mb-4 font-extrabold text-subtle uppercase">
                <span className="hidden sm:inline-block">No. of </span> Beds
              </h6>
              <div className="flex items-center gap-4">
                <div className="sm:flex items-center gap-2">
                  <div className="size-6 flex items-center justify-center bg-primary-subtle rounded-md mb-2 sm:mb-0">
                    <FontAwesomeIcon
                      icon={faPersonShelter}
                      className="text-primary-darker"
                    />
                  </div>
                  <h5 className="text-default font-semibold mb-0">
                    {data.bedRooms}
                  </h5>
                </div>
                <div className="sm:flex items-center gap-2">
                  <div className="size-6 flex items-center justify-center bg-success-subtle rounded-md mb-2 sm:mb-0">
                    <FontAwesomeIcon
                      icon={faBed}
                      className="text-success-darker"
                    />
                  </div>
                  <h5 className="text-default font-semibold mb-0">
                    {data.beds}
                  </h5>
                </div>
              </div>
            </div>
            <div>
              <h6 className="mb-4 font-extrabold text-subtle uppercase">
                <span className="hidden sm:inline-block">No. of </span> guests
              </h6>
              <div className="flex items-center gap-4">
                <div className="sm:flex items-center gap-2">
                  <div className="size-6 flex items-center justify-center bg-warning-subtle rounded-md mb-2 sm:mb-0">
                    <FontAwesomeIcon
                      icon={faUser}
                      className="text-warning-darker"
                    />
                  </div>
                  <h5 className="text-default font-semibold mb-0">
                    {data.guest}
                  </h5>
                </div>
                <div className="sm:flex items-center gap-2">
                  <div className="size-6 flex items-center justify-center bg-info-subtle rounded-md mb-2 sm:mb-0">
                    <FontAwesomeIcon
                      icon={faBaby}
                      className="text-info-darker"
                    />
                  </div>
                  <h5 className="text-default font-semibold mb-0">
                    {data.child}
                  </h5>
                </div>
              </div>
            </div>
            <div>
              <h6 className="mb-4 font-extrabold text-subtle uppercase">
                Bathroom
              </h6>
              <div className="sm:flex items-center gap-2">
                <div className="size-6 flex items-center justify-center bg-danger-subtle rounded-md mb-2 sm:mb-0">
                  <FontAwesomeIcon
                    icon={faBath}
                    className="text-danger-darker"
                  />
                </div>
                <h5 className="text-default font-semibold mb-0 me-3">
                  {data.bathrooms}
                </h5>
              </div>
            </div>
          </div>
          <div className="sm:col-auto mb-6">
            <a
              role="button"
              className="btn btn-phoenix-info collapse-indicator me-2 px-4 2xl:block 2xl:mb-2"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls={`collapseRoomAvailableOnDates-${index}`}
            >
              <FontAwesomeIcon icon={faCalendar} className="me-2" />
              <span className="collapse-show">Show Dates</span>
              <span className="collapse-hide">Hide Dates</span>
            </a>
            <Link
              to="#!"
              className="btn btn-primary px-8 md:px-12 2xl:px-8 flex-1"
            >
              Book now
            </Link>
          </div>
          <div className="col-12">
            <div
              className={cn('collapse', { show: open })}
              id={`collapseRoomAvailableOnDates-${index}`}
            >
              <div className="px-6 py-4 border border-subtle rounded-md mb-6 bg-subtle">
                <Swiper
                  parentClassName="px-6"
                  navIconClassName="text-primary"
                  navIconTransform="shrink-3"
                  spaceBetween={24}
                  slidesPerView="auto"
                  grabCursor={true}
                  breakpoints={{
                    768: {
                      spaceBetween: 32
                    },
                    1540: {
                      spaceBetween: 48
                    }
                  }}
                >
                  {data.availableOnDates.map((item, dateIndex) => (
                    <SwiperSlide className="w-auto!" key={dateIndex}>
                      <div
                        className={cn('text-center pe-6 md:pe-8 xl:pe-12', {
                          'border-e':
                            dateIndex !== data.availableOnDates.length - 1
                        })}
                      >
                        <h6 className="mb-4 font-extrabold text-default">
                          {item.date}
                        </h6>
                        <h6 className="mb-2 text-highlight font-semibold">
                          ${item.price}
                        </h6>
                        {item.units ? (
                          <h6
                            className={
                              parseInt(item.units) > 5
                                ? 'text-success'
                                : 'text-warning'
                            }
                          >
                            {item.units} units
                          </h6>
                        ) : (
                          <h6 className="text-danger">N/A</h6>
                        )}
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 border border-subtle rounded-md">
          {data.amenities.slice(0, 13).map((item, badgeIndex) => (
            <Link
              key={badgeIndex}
              to="#!"
              className="badge bg-primary-subtle text-highlight uppercase no-underline py-1 text-[10.24px] leading-2 me-2"
            >
              {item}
            </Link>
          ))}
          <Link to="#!" className="font-bold pe-0 text-md text-nowrap">
            + {data.amenities.slice(13).length} more
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default RoomCard;
