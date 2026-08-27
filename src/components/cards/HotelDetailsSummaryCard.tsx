import { useMemo, useState } from 'react';
import { Link } from 'react-router';
import { Card } from 'react-bootstrap';
import img1 from 'assets/img/hotels/39.png';
import { cartItems } from 'data/travel-agency/customer/hotelDetails';
import HotelDetailsCartItem from './HotelDetailsCartItem';
import { currencyFormat } from 'helpers/utils';
import Button from 'components/base/Button';

const discount = 50;
interface HotelDetailsSummaryCardProps {
  className?: string;
  showHotelInfo: boolean;
}

const HotelDetailsSummaryCard = ({
  className,
  showHotelInfo
}: HotelDetailsSummaryCardProps) => {
  const [items, setItems] = useState(cartItems);

  const subTotal = useMemo(() => {
    return items.reduce((acc, item) => acc + item.price, 0);
  }, [items]);

  const removeButtonClickHandler = (id: number) => {
    const newItems = items.filter(item => item.id !== id);
    setItems(newItems);
  };
  return (
    <Card className={className}>
      <Card.Body>
        <h5 className="mb-4">Summary</h5>
        {showHotelInfo && (
          <>
            <img src={img1} alt="" width={208} className="rounded-md mb-4" />
            <h4 className="text-highlight mb-2">
              Radisson Blu Water Garden Hotel, Dhaka
            </h4>
            <p className="mb-8 text-subtle">
              Airport Rd, Dhaka Cantonment, Dhaka, 1206, Bangladesh
            </p>
          </>
        )}
        {items.map((item, index) => (
          <HotelDetailsCartItem
            key={item.id}
            cartItem={item}
            index={index}
            className="mb-4"
            crossButtonClickHandler={removeButtonClickHandler}
            showHotelInfo={showHotelInfo}
          />
        ))}
        <div className="px-6 py-4 bg-subtle rounded-md">
          <div className="flex flex-between-center mb-2">
            <h6 className="text-subtle font-semibold">Sub-total</h6>
            <h6 className="text-highlight font-semibold">
              {currencyFormat(subTotal, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}
            </h6>
          </div>
          <div className="flex flex-between-center mb-2">
            <h6 className="text-subtle font-semibold">Discount</h6>
            <h6 className="text-subtle font-semibold">
              -{currencyFormat(discount)}
            </h6>
          </div>
          <hr />
          <div className="flex flex-between-center">
            <h4 className="text-default">Total</h4>
            <h4 className="text-default">
              {currencyFormat(subTotal !== 0 ? subTotal - discount : 0, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}
            </h4>
          </div>
        </div>
        {!showHotelInfo && (
          <Link to="/apps/travel-agency/hotel/customer/hotel-compare">
            <Button variant="primary" className="mt-4 w-full">
              Proceed with booking
            </Button>
          </Link>
        )}
      </Card.Body>
    </Card>
  );
};

export default HotelDetailsSummaryCard;
