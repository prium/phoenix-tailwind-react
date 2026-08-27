import React from 'react';
import { AvailableRoom } from 'data/travel-agency/customer/hotelDetails';
import { Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Badge from 'components/base/Badge';
import {
  faBed,
  faCheck,
  faCircle,
  faMugSaucer,
  faUser,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';
import Button from 'components/base/Button';
import HotelDetailsRoomImageGallery from './HotelDetailsRoomImageGallery';
import { currencyFormat, numberFormat } from 'helpers/utils';
import { Link } from 'react-router';
import classNames from 'classnames';

interface HotelDetailsAvailabilityRoomInfoProps {
  room: AvailableRoom;
}

const renderIcons = (count: number, iconClass: IconDefinition) => {
  return Array.from({ length: count }).map((_, index) => (
    <FontAwesomeIcon
      icon={iconClass}
      key={index}
      className={classNames('text-primary text-md', {
        'me-1': index !== count - 1
      })}
    />
  ));
};

const HotelDetailsAvailabilityRoomInfo = ({
  room
}: HotelDetailsAvailabilityRoomInfoProps) => {
  return (
    <>
      <Row className="g-3 mb-4">
        <Col lg={8} xxl={7}>
          <Row className="flex-lg-nowrap g-3 mb-2">
            <Col md="auto">
              <h4 className="mb-0 font-semibold">
                <FontAwesomeIcon
                  icon={faCircle}
                  className="text-md text-soft me-2"
                  transform="up-1"
                />
                {room.name}
              </h4>
            </Col>
            <Col md="auto" className="flex align-items-center">
              <div className="vr bg-muted me-3 hidden d-md-block" />
              {renderIcons(room.beds, faBed)}

              <div className="vr bg-muted mx-3" />
              {renderIcons(room.person, faUser)}

              <div className="vr bg-muted mx-3" />
              {room.breakfast && (
                <>
                  <FontAwesomeIcon
                    icon={faMugSaucer}
                    className="text-primary text-md"
                  />
                  <div className="vr bg-muted mx-3" />
                </>
              )}
              <Badge variant="phoenix" bg="info">
                {numberFormat(room.discount, 'standard')}% OFF
              </Badge>
            </Col>
          </Row>
          <p className="mb-0">{room.desc}</p>
        </Col>
        <Col lg={4} xxl={5}>
          <h3 className="mb-2 flex align-items-center justify-content-lg-end gap-2">
            <span className="text-md text-soft font-normal text-decoration-line-through">
              {currencyFormat(room.price, {
                maximumFractionDigits: 2,
                useGrouping: true
              })}
            </span>
            {currencyFormat(room.discountPrice, { maximumFractionDigits: 2 })}
          </h3>
          <h5 className="text-default text-lg-end font-normal">
            +{currencyFormat(room.tax)} for tax and fees
          </h5>
        </Col>
      </Row>
      <Row className="g-3">
        <Col lg={7}>
          <HotelDetailsRoomImageGallery images={room.images} />
        </Col>
        <Col lg={4} xl={5} xxl={4} className="ms-auto">
          <Card className="bg-subtle">
            <Card.Body>
              <ul className="mb-2 list-unstyled flex flex-wrap gap-2 text-highlight text-md lh-1">
                {room.amenities.slice(0, 6).map((item, index) => (
                  <li key={index} className="me-1 mb-0">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-success me-1"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="#!" className="font-bold text-md">
                Show other amenities
              </Link>
            </Card.Body>
          </Card>
          <Button variant="outline-primary" className="w-100 mt-3">
            Add room
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default HotelDetailsAvailabilityRoomInfo;
