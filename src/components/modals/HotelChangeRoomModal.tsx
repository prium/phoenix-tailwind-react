import React, { Fragment } from 'react';
import { Modal, Row, Col } from 'react-bootstrap';
import Button from 'components/base/Button';
import Badge from 'components/base/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBaby,
  faBath,
  faBed,
  faCheck,
  faCircle,
  faTimes,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { numberFormat, currencyFormat } from 'helpers/utils';
import type { RoomType } from 'data/travel-agency/customer/hotelCompare';
import { SwiperSlide } from 'swiper/react';
import RoomPictureSlider from 'components/modules/travel-agency/hotel/hotel-compare/RoomPictureSlider';
import SelectRoomCollapsibleContainer from 'components/modules/travel-agency/hotel/hotel-compare/SelectRoomCollapsibleContainer';
import classNames from 'classnames';

interface HotelChangeRoomModalProps {
  show: boolean;
  handleClose: () => void;
  roomTypes: RoomType[];
}

const HotelChangeRoomModal = ({
  show,
  handleClose,
  roomTypes
}: HotelChangeRoomModalProps) => {
  return (
    <Modal show={show} onHide={handleClose} centered size="xl">
      <Modal.Header className="p-6 justify-between">
        <h3 className="mb-0 text-highlight">Select Room</h3>
        <Button
          variant="phoenix-secondary"
          className="px-4"
          onClick={handleClose}
        >
          <FontAwesomeIcon icon={faTimes} transform="down-2" />
        </Button>
      </Modal.Header>
      <Modal.Body className="p-6">
        {roomTypes.map((room, index) => (
          <Fragment key={room.id}>
            <Row className="g-4 mb-6">
              <Col lg={8} xxl={7}>
                <div className="flex items-center mb-2">
                  <h4 className="mb-0 font-semibold pe-4">
                    <FontAwesomeIcon
                      icon={faCircle}
                      className="text-md text-soft me-2"
                      transform="up-2"
                    />
                    {room.type}
                  </h4>
                  <Badge variant="phoenix" bg="info" className="text-sm">
                    {numberFormat(room.discount, 'standard', {
                      maximumSignificantDigits: 2
                    })}
                    % OFF
                  </Badge>
                </div>
                <p className="mb-0">{room.desc}</p>
              </Col>
              <Col lg={4} xxl={5}>
                <h3 className="mb-2 flex items-center lg:justify-end gap-2">
                  <span className="text-md text-soft font-normal line-through">
                    {currencyFormat(room.price, { maximumFractionDigits: 2 })}
                  </span>
                  {currencyFormat(room.discountPrice, {
                    maximumFractionDigits: 2
                  })}
                  <span className="text-md text-default">/ night</span>
                </h3>
                <h5 className="text-default lg:text-end font-normal">
                  Inclusive of all taxes and fees
                </h5>
              </Col>
            </Row>
            <Row className="mb-6 justify-between">
              <Col lg={7}>
                <RoomPictureSlider
                  loop={true}
                  spaceBetween={8}
                  slidesPerView="auto"
                  grabCursor={true}
                >
                  {room.images.map((img, index) => (
                    <SwiperSlide key={index} className="w-auto">
                      <img src={img} alt="" className="rounded-md" width={158} />
                    </SwiperSlide>
                  ))}
                </RoomPictureSlider>
              </Col>
              <Col lg={5} xl={4}>
                <div className="p-6 border border-subtle rounded-md mt-6 lg:mt-0">
                  <Row className="g-4">
                    <Col xs={6}>
                      <h6 className="font-semibold text-muted">
                        <FontAwesomeIcon
                          icon={faBed}
                          className="text-info me-2"
                        />
                        {numberFormat(room.beds, 'standard', {
                          minimumIntegerDigits: 2
                        })}
                        &nbsp;Double Bed
                      </h6>
                    </Col>
                    <Col xs={6}>
                      <h6 className="font-semibold text-muted">
                        <FontAwesomeIcon
                          icon={faUser}
                          className="text-info me-2"
                        />
                        {numberFormat(room.adults, 'standard', {
                          minimumIntegerDigits: 2
                        })}
                        &nbsp;Adult
                      </h6>
                    </Col>
                    <Col xs={6}>
                      <h6 className="font-semibold text-muted">
                        <FontAwesomeIcon
                          icon={faBaby}
                          className="text-info me-2"
                        />
                        {numberFormat(room.child, 'standard', {
                          minimumIntegerDigits: 2
                        })}
                        &nbsp;Child
                      </h6>
                    </Col>
                    <Col xs={6}>
                      <h6 className="font-semibold text-muted">
                        <FontAwesomeIcon
                          icon={faBath}
                          className="text-info me-2"
                        />
                        {numberFormat(room.bathrooms, 'standard', {
                          minimumIntegerDigits: 2
                        })}
                        &nbsp;Bathrooms
                      </h6>
                    </Col>
                  </Row>
                </div>
                <Button variant="outline-primary" className="w-full mt-4">
                  Add to compare
                </Button>
              </Col>
            </Row>
            <SelectRoomCollapsibleContainer
              collapseTitle="Room Amenities"
              id={`amenitiesCollapse-${index}`}
            >
              <div className="md:px-6 pt-6">
                <h5 className="mb-4">Most popular</h5>
                <Row className="g-0 mb-8">
                  {room.popularAmenities.map(item => (
                    <Col sm={6} lg={4} key={item.id}>
                      <div
                        className={classNames(
                          item.classes,
                          'flex items-center gap-2 px-10 py-6 h-full border-subtle'
                        )}
                      >
                        <FontAwesomeIcon
                          icon={item.icon}
                          className="text-md text-warning"
                        />
                        <h5 className="text-subtle mb-0 font-normal">
                          {item.title}
                        </h5>
                      </div>
                    </Col>
                  ))}
                </Row>
                <h5 className="mb-4">Others Amenities</h5>
                <Row className="g-2">
                  {room.amenities.map((item, index) => (
                    <Col lg={4} xl={3} key={index}>
                      <div className="p-4 border border-subtle rounded-md">
                        <h5 className="text-muted font-semibold mb-0">
                          <FontAwesomeIcon
                            icon={faCheck}
                            className="text-success me-2"
                          />
                          {item}
                        </h5>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </SelectRoomCollapsibleContainer>
            {index !== roomTypes.length - 1 && <hr className="my-12" />}
          </Fragment>
        ))}
      </Modal.Body>
    </Modal>
  );
};

export default HotelChangeRoomModal;
