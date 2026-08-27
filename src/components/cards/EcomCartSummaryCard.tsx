import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import OrderSummaryDetails from 'components/common/OrderSummaryDetails';
import { currencyFormat } from 'helpers/utils';
import { Card, Input, InputGroup, Select } from '@hummingbirdui/react';
import { Link } from 'react-router';

/** `+CartSummaryCard` in phoenix-tailwind mixins/e-commerce/cart/SummaryCard.pug */
const EcomCartSummaryCard = () => {
  return (
    <Card>
      <Card.Body>
        <div className="flex flex-between-center mb-4">
          <h3 className="card-title mb-0">Summary</h3>
          <Link to="#!" className="btn btn-link p-0">
            Edit cart
          </Link>
        </div>
        <Select className="mb-4" aria-label="delivery type">
          <option value="cod">Cash on Delivery</option>
          <option value="card">Card</option>
          <option value="paypal">Paypal</option>
        </Select>
        <OrderSummaryDetails />
        <InputGroup className="mb-4">
          <Input type="text" placeholder="Voucher" aria-label="voucher" />
          <Button variant="phoenix" color="primary" className="px-8">
            Apply
          </Button>
        </InputGroup>
        <div className="flex justify-between border-y border-dashed py-4 mb-6">
          <h4 className="mb-0">Total :</h4>
          <h4 className="mb-0">
            {currencyFormat(695.2, { minimumFractionDigits: 2 })}
          </h4>
        </div>
        <Button
          className="w-full"
          variant="primary"
          endIcon={
            <FontAwesomeIcon icon={faChevronRight} className="ms-1 text-sm" />
          }
        >
          Proceed to check out
        </Button>
      </Card.Body>
    </Card>
  );
};

export default EcomCartSummaryCard;
