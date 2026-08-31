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
import classNames from 'classnames';
import Badge from 'components/base/Badge';
import Button from 'components/base/Button';
import Swiper from 'components/base/Swiper';
import React, { useState } from 'react';
import { Card, Row, Col, Collapse } from 'react-bootstrap';
import { Link } from 'react-router';
import { SwiperSlide } from 'swiper/react';
import { roomSearchInterface } from 'data/travel-agency/customer/hotel';

const RoomCard = ({
  data,
  isLastItem
}: {
  data: roomSearchInterface;
  isLastItem: boolean;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Card className={isLastItem ? '' : 'mb-4'}>
      <Card.Body>
        <Row className="gx-6 justify-between">
          <Col xs="auto" className="mb-6">
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
                  className="text-base font-black text-emphasis whitespace-nowrap"
                >
                  {data.name}
                </Link>
                <h6 className="font-semibold text-default whitespace-nowrap mt-1 mb-2">
                  <FontAwesomeIcon icon={faBorderAll} className="me-2" />
                  {data.category}
                </h6>
                <div className="flex items-baseline gap-1 mb-4">
                  <h6 className="mb-0 font-semibold">Available:</h6>
                  <h4 className="text-warning-dark font-black mb-0">
                    {data.available}
                    <span className="text-md text-subtle font-bold">
                      / {data.total}
                    </span>
                  </h4>
                </div>
                <h4 className="font-black mb-0">${data.price}</h4>
              </div>
            </div>
          </Col>
          <Col
            xs={{ order: 1 }}
            xxl={{ order: 0, span: 'auto' }}
            className="flex gap-8 md:gap-10 mb-6"
          >
            <div>
              <h6 className="mb-4 font-black text-subtle uppercase">
                <span className="hidden sm:inline-block">No. of</span> Beds
              </h6>
              <div className="flex items-center gap-4">
                <div className="sm:flex items-center gap-2">
                  <div
                    style={{ height: 24, width: 24 }}
                    className="flex items-center justify-center bg-primary-subtle rounded-md mb-2 sm:mb-0"
                  >
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
                  <div
                    style={{ height: 24, width: 24 }}
                    className="flex items-center justify-center bg-success-subtle rounded-md mb-2 sm:mb-0"
                  >
                    <FontAwesomeIcon
                      icon={faBed}
                      className="text-success-darker"
                    />
                  </div>
                  <h5 className="text-default font-semibold mb-0">{data.beds}</h5>
                </div>
              </div>
            </div>
            <div>
              <h6 className="mb-4 font-black text-subtle uppercase">
                <span className="hidden sm:inline-block">No. of </span> guests
              </h6>
              <div className="flex items-center gap-4">
                <div className="sm:flex items-center gap-2">
                  <div
                    style={{ height: 24, width: 24 }}
                    className="flex items-center justify-center bg-warning-subtle rounded-md mb-2 sm:mb-0"
                  >
                    <FontAwesomeIcon
                      icon={faUser}
                      className="text-warning-darker"
                    />
                  </div>
                  <h5 className="text-default font-semibold mb-0">{data.guest}</h5>
                </div>
                <div className="sm:flex items-center gap-2">
                  <div
                    style={{ height: 24, width: 24 }}
                    className="flex items-center justify-center bg-info-subtle rounded-md mb-2 sm:mb-0"
                  >
                    <FontAwesomeIcon
                      icon={faBaby}
                      className="text-info-darker"
                    />
                  </div>
                  <h5 className="text-default font-semibold mb-0">{data.child}</h5>
                </div>
              </div>
            </div>
            <div>
              <h6 className="mb-4 font-black text-subtle uppercase">
                Bathroom
              </h6>
              <div className="sm:flex items-center gap-2">
                <div
                  style={{ height: 24, width: 24 }}
                  className="flex items-center justify-center bg-danger-subtle rounded-md mb-2 sm:mb-0"
                >
                  <FontAwesomeIcon
                    icon={faBath}
                    className="text-danger-darker"
                  />
                </div>
                <h5 className="text-default font-semibold mb-0">{data.guest}</h5>
              </div>
            </div>
          </Col>
          <Col sm="auto" className="mb-6">
            <Button
              variant="phoenix-info"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls={`collapseRoomAvailableOnDates`}
              className="me-2 px-4 2xl:block 2xl:mb-2"
              style={{ minWidth: 130 }}
            >
              <FontAwesomeIcon icon={faCalendar} className="me-2" />
              {!open ? 'Show Dates' : 'Hide Dates'}
            </Button>
            <Link to="#!">
              <Button
                variant="primary"
                className="px-8 md:px-12 2xl:px-8 flex-1"
                style={{ minWidth: 130 }}
              >
                Book now
              </Button>
            </Link>
          </Col>
          <Col xs={12}>
            <Collapse in={open}>
              <div id={`collapseRoomAvailableOnDates`}>
                <div className="px-6 py-4 border border-subtle rounded-md mb-6 bg-subtle">
                  <Swiper
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
                      <SwiperSlide className="w-auto" key={dateIndex}>
                        <div
                          className={classNames(
                            'text-center pe-10 md:pe-8 xl:pe-12',
                            {
                              'border-e':
                                dateIndex !== data.availableOnDates.length - 1
                            }
                          )}
                        >
                          <h6 className="mb-4 font-black text-default">
                            {item.date}
                          </h6>
                          <h6 className="mb-2 text-highlight font-semibold">
                            ${item.price}
                          </h6>
                          {item.units ? (
                            <h6
                              className={`${
                                parseInt(item.units) > 5
                                  ? 'text-success'
                                  : 'text-warning'
                              }`}
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
            </Collapse>
          </Col>
        </Row>
        <div className="p-4 border border-subtle rounded-md">
          {data.amenities.slice(0, 13).map((item, index) => (
            <Link key={index} to="#!">
              <Badge
                className="text-highlight py-1 text-sm me-2 border-0"
                variant="phoenix"
                bg="primary"
              >
                {item}
              </Badge>
            </Link>
          ))}
          {data.amenities.slice(13).length > 1 && (
            <Link to="#!" className="font-bold pe-0 text-md whitespace-nowrap">
              + {data.amenities.slice(13).length} more
            </Link>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default RoomCard;
