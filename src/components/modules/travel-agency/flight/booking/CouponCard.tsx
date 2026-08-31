import { Card, cn } from '@hummingbirdui/react';
import Button from 'components/base/Button';

/** `+CouponCard` in mixins/travel-agency/flight/booking/CouponCard.pug */
const CouponCard = ({ className }: { className?: string }) => {
  return (
    <Card
      className={cn(
        'bg-info-subtle border-info-subtle lg:sticky lg:top-[calc(var(--navbar-top-height)+3.725rem)]',
        className
      )}
    >
      <Card.Body>
        <h4>Have a coupon?</h4>
        <p className="mb-6 text-md text-subtle">Enter code to get a discount</p>
        <div className="input-group gap-2">
          <div className="flex-1">
            <input
              className="form-control bg-soft"
              type="text"
              placeholder="Coupon Code"
            />
          </div>
          <Button type="button" variant="primary" className="rounded-md">
            Submit
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CouponCard;
