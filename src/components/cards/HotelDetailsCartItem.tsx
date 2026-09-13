import { type CartItem } from 'data/travel-agency/customer/hotelDetails';
import { Card, Col, Row } from '@hummingbirdui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBaby,
  faBed,
  faCircleXmark,
  faMoon,
  faUser,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';
import { currencyFormat } from 'helpers/utils';

interface HotelDetailsCartItemProps {
  cartItem: CartItem;
  index: number;
  className?: string;
  crossButtonClickHandler: (id: number) => void;
  showHotelInfo: boolean;
}

/** gold: `span.badge.badge-phoenix-secondary.py-1.border-0.capitalize` (no badge-label) */
const CartItemBadge = ({
  icon,
  label
}: {
  icon: IconDefinition;
  label: string;
}) => (
  <span className="badge badge-phoenix-secondary py-1 border-0 capitalize">
    <FontAwesomeIcon icon={icon} className="text-md me-2" />
    <span>{label}</span>
  </span>
);

/** `+CartItem` in mixins/travel-agency/hotel/SummaryCard.pug */
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
          <button
            className="btn p-0 absolute end-0 text-base -mt-8 -me-2 text-subtle"
            onClick={() => crossButtonClickHandler(cartItem.id)}
          >
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        <div className="flex justify-between gap-4 mb-6">
          <div>
            <h5 className="text-highlight">Room {index + 1}</h5>
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
            <h5 className="text-default text-nowrap mb-0">Check in</h5>
          </Col>
          <Col xs="auto">
            <span className="px-2">:</span>
          </Col>
          <Col xs="auto">
            <span>{cartItem.checkIn}</span>
          </Col>
        </Row>

        <Row className="items-center g-0 mb-6">
          <Col xs={3}>
            <h5 className="text-default text-nowrap mb-0">Check out</h5>
          </Col>
          <Col xs="auto">
            <span className="px-2">:</span>
          </Col>
          <Col xs="auto">
            <span>{cartItem.checkOut}</span>
          </Col>
        </Row>
        <div className="flex flex-wrap gap-2">
          <CartItemBadge icon={faBed} label={cartItem.bedType} />
          <CartItemBadge icon={faUser} label={`${cartItem.adults} Adults`} />
          {cartItem.child && (
            <CartItemBadge icon={faBaby} label={`${cartItem.child} Childs`} />
          )}
          {cartItem.nights && (
            <CartItemBadge icon={faMoon} label={`${cartItem.nights} Nights`} />
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default HotelDetailsCartItem;
