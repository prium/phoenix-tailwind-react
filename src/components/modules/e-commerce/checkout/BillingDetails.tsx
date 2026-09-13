import EcomAddressTable from 'components/tables/EcomAddressTable';
import { shippingDetailsAddress } from 'data/e-commerce';

/** `+BillingInfo` in phoenix-tailwind mixins/e-commerce/checkout/Checkout.pug */
const BillingDetails = () => {
  return (
    <>
      <h3>Billing Details</h3>
      <div className="form-check">
        <input
          type="checkbox"
          id="sameAsShipping"
          className="form-check-input"
          defaultChecked
        />
        <label
          htmlFor="sameAsShipping"
          className="form-check-label text-base font-normal"
        >
          Same as shipping address
        </label>
      </div>
      <EcomAddressTable data={shippingDetailsAddress} />
    </>
  );
};

export default BillingDetails;
