import { currencyFormat } from 'helpers/utils';
import { Form } from 'react-bootstrap';
import { DeliveryOptionsType } from './DeliveryType';
import Badge from 'components/base/Badge';

const DeliveryOptionRadioItem = ({
  option
}: {
  option: DeliveryOptionsType;
}) => {
  const { id, label, price, estDelivery, description, popular } = option;
  return (
    <div>
      <div className="flex flex-wrap items-center mb-4">
        <Form.Check type="radio" id={id} className="mb-0">
          <Form.Check.Input type="radio" name="delivery_type" />
          <Form.Check.Label className="text-base text-default">
            {label}
          </Form.Check.Label>
        </Form.Check>
        <span className="inline-block text-emphasis font-bold ms-2">
          {currencyFormat(price, { minimumFractionDigits: 2 })}
        </span>
        {popular && (
          <Badge
            bg="warning"
            variant="phoenix"
            className="ms-2 lg:ms-6 xl:ms-2"
          >
            Popular
          </Badge>
        )}
      </div>
      <div className="ps-6">
        <h6 className="text-subtle mb-2">
          Est. delivery: ${estDelivery}
        </h6>
        <h6 className="text-info leading-base mb-0">{description}</h6>
      </div>
    </div>
  );
};

export default DeliveryOptionRadioItem;
