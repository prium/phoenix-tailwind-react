import React from 'react';
import { type CartItem } from 'data/travel-agency/customer/hotelDetails';
import { Card, Row, Col } from 'react-bootstrap';
import Button from 'components/base/Button';
import Badge from 'components/base/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBaby,
  faBed,
  faCircleXmark,
  faMoon,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { currencyFormat } from 'helpers/utils';

interface HotelDetailsCartItemProps {
  cartItem: CartItem;
  index: number;
  className?: string;
  crossButtonClickHandler: (id: number) => void;
  showHotelInfo: boolean;
}

const HotelDetailsCartItem = ({
  cartItem,
  index,
  className,
  crossButtonClickHandler,
  showHotelInfo
}: HotelDetailsCartItemProps) => {
  return (
    <Card className={className}>
      <Card.Body>
        {!showHotelInfo && (
          <Button
            className="p-0 absolute end-0 text-base -mt-8 -me-2 text-subtle"
            onClick={() => crossButtonClickHandler(cartItem.id)}
          >
            <FontAwesomeIcon icon={faCircleXmark} />
          </Button>
        )}
        <div className="flex justify-between gap-4 mb-6">
          <div>
            <h5 className="text-highlight"> Room {index + 1}</h5>
            <p className="mb-0 text-subtle">{cartItem.roomName}</p>
          </div>
          <h4 className="mb-0">
            {currencyFormat(cartItem.price, {
              maximumFractionDigits: 2,
              useGrouping: true
            })}
          </h4>
        </div>

        <Row className="items-center g-0">
          <Col xs={3}>
            <h5 className="text-default whitespace-nowrap mb-0">Check in</h5>
          </Col>
          <Col xs="auto">
            <span className="px-2">:</span>
          </Col>
          <Col xs="auto">{cartItem.checkIn}</Col>
        </Row>

        <Row className="items-center g-0 mb-6">
          <Col xs={3}>
            <h5 className="text-default whitespace-nowrap mb-0">Check out</h5>
          </Col>
          <Col xs="auto">
            <span className="px-2">:</span>
          </Col>
          <Col xs="auto">{cartItem.checkOut}</Col>
        </Row>
        <div className="flex flex-wrap gap-2">
          <Badge
            variant="phoenix"
            bg="secondary"
            className="py-1 border-0 capitalize"
          >
            <FontAwesomeIcon icon={faBed} className="text-md me-2" />
            {cartItem.bedType}
          </Badge>
          <Badge
            variant="phoenix"
            bg="secondary"
            className="py-1 border-0 capitalize"
          >
            <FontAwesomeIcon icon={faUser} className="text-md me-2" />
            {cartItem.adults} Adults
          </Badge>
          {cartItem.child && (
            <Badge
              variant="phoenix"
              bg="secondary"
              className="py-1 border-0 capitalize"
            >
              <FontAwesomeIcon icon={faBaby} className="text-md me-2" />
              {cartItem.child} Childs
            </Badge>
          )}
          {cartItem.nights && (
            <Badge
              variant="phoenix"
              bg="secondary"
              className="py-1 border-0 capitalize"
            >
              <FontAwesomeIcon icon={faMoon} className="text-md me-2" />
              {cartItem.nights} Nights
            </Badge>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default HotelDetailsCartItem;
