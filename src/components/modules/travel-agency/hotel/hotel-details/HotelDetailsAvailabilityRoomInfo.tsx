import { AvailableRoom } from 'data/travel-agency/customer/hotelDetails';
import { Card, cn, Col, Row } from '@hummingbirdui/react';
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

interface HotelDetailsAvailabilityRoomInfoProps {
  room: AvailableRoom;
  index?: number;
}

const renderIcons = (count: number, iconClass: IconDefinition) => {
  return Array.from({ length: count }).map((_, index) => (
    <FontAwesomeIcon
      icon={iconClass}
      key={index}
      className={cn('fa-solid text-primary text-md', {
        'me-1': index !== count - 1
      })}
    />
  ));
};

/** `+RoomInfo` in mixins/travel-agency/hotel/HotelDetailsTabContent.pug */
const HotelDetailsAvailabilityRoomInfo = ({
  room
}: HotelDetailsAvailabilityRoomInfoProps) => {
  return (
    <>
      <Row className="g-4 mb-6">
        <Col lg={8} xxl={7}>
          <Row className="lg:flex-nowrap g-4 mb-2">
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
            <Col md="auto" className="flex items-center">
              <div className="vr min-h-5 bg-muted border-subtle me-4 hidden md:block" />
              {renderIcons(room.beds, faBed)}
              <div className="vr min-h-5 border-subtle bg-muted mx-4" />
              {renderIcons(room.person, faUser)}
              <div className="vr min-h-5 border-subtle bg-muted mx-4" />
              {room.breakfast && (
                <>
                  <FontAwesomeIcon
                    icon={faMugSaucer}
                    className="text-primary text-md"
                  />
                  <div className="vr min-h-5 border-subtle bg-muted mx-4" />
                </>
              )}
              {/* gold: plain `span.badge.badge-phoenix-info` without .badge-label */}
              <span className="badge badge-phoenix-info">
                {numberFormat(room.discount, 'standard')}% OFF
              </span>
            </Col>
          </Row>
          <p className="mb-0">{room.desc}</p>
        </Col>
        <Col lg={4} xxl={5}>
          <h3 className="mb-2 flex items-center lg:justify-end gap-2">
            <span className="text-md text-soft font-normal line-through">
              {currencyFormat(room.price, {
                maximumFractionDigits: 2,
                useGrouping: true
              })}
            </span>
            {currencyFormat(room.discountPrice, { maximumFractionDigits: 2 })}
          </h3>
          <h5 className="text-default lg:text-end font-normal">
            +{currencyFormat(room.tax)} for tax and fees
          </h5>
        </Col>
      </Row>
      <Row className="g-4">
        <Col lg={7}>
          <HotelDetailsRoomImageGallery images={room.images} />
        </Col>
        <Col lg={4} xl={5} xxl={4} className="ms-auto">
          <Card className="bg-subtle">
            <Card.Body>
              <ul className="p-0 mb-2 list-none flex list flex-wrap gap-2">
                {room.amenities.slice(0, 6).map((item, index) => (
                  <li
                    key={index}
                    className="text-highlight text-md me-1 mb-0 leading-none"
                  >
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
          <Button variant="outline-primary" className="w-full mt-4">
            Add room
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default HotelDetailsAvailabilityRoomInfo;
