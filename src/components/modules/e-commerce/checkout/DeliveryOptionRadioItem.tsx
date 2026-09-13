import { currencyFormat } from 'helpers/utils';
import { DeliveryOptionsType } from './DeliveryType';
import Badge from 'components/base/Badge';

/** `+ShippingRadio` in phoenix-tailwind checkout/Checkout.pug */
const DeliveryOptionRadioItem = ({
  option
}: {
  option: DeliveryOptionsType;
}) => {
  const { id, label, price, estDelivery, description, popular } = option;
  return (
    <div>
      <div className="flex flex-wrap items-center mb-4">
        <div className="form-check mb-0">
          <input
            type="radio"
            id={id}
            name="delivery_type"
            className="form-check-input"
            defaultChecked={popular}
          />
          <label htmlFor={id} className="form-check-label text-base text-default">
            {label}
          </label>
        </div>
        <span className="inline-block text-emphasis font-bold ms-2">
          {currencyFormat(price, { minimumFractionDigits: 2 })}
        </span>
        {popular && (
          <Badge color="warning" variant="phoenix" className="ms-2 lg:ms-6 xl:ms-2">
            Popular
          </Badge>
        )}
      </div>
      <div className="ps-6">
        <h6 className="text-subtle mb-2">Est. delivery: {estDelivery}</h6>
        <h6 className="text-info leading-base mb-0">{description}</h6>
      </div>
    </div>
  );
};

export default DeliveryOptionRadioItem;
