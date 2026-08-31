import { useWizardFormContext } from 'providers/WizardFormProvider';
import { ChangeEvent } from 'react';
import { FloatingLabel, Input, Row, Select } from '@hummingbirdui/react';
import { AddPropertyWizardFormData } from 'data/travel-agency/addProperty';
import { Link } from 'react-router';

/** gold `+FinanceForm` (mixins/travel-agency/add-property/FinanceForm.pug) */
const FinanceForm = () => {
  const methods = useWizardFormContext<AddPropertyWizardFormData>();
  const { onChange, formData, setFormData } = methods;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked
    });
  };
  return (
    <>
      <h3 className="mb-10">Finance</h3>
      <h4 className="mb-6">Payment from Phoenix Booking Management</h4>
      <Row className="g-4">
        <div className="md:col-6">
          <FloatingLabel htmlFor="wizard-currency" label="payment currency">
            <Input
              type="text"
              name="paymentCurrency"
              id="wizard-currency"
              placeholder="payment currency"
              defaultValue="$ US Dollar"
              onChange={onChange}
            />
          </FloatingLabel>
        </div>
        <div className="md:col-6">
          <FloatingLabel
            htmlFor="wizard-percentage"
            label="Commission Percentage"
          >
            <Input
              type="text"
              name="commisionPercentage"
              id="wizard-percentage"
              placeholder="Commission Percentage"
              defaultValue="Flat 10%"
              disabled
              onChange={onChange}
            />
          </FloatingLabel>
        </div>
      </Row>
      <FloatingLabel
        className="mt-4"
        htmlFor="EFT-type"
        label="Select Payment Method"
      >
        <Select
          className="form-icon-input"
          name="PaymentMethod"
          id="EFT-type"
          onChange={onChange}
        >
          <option>Electronic Funds Transfer (EFT)</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </Select>
      </FloatingLabel>
      <div className="form-check my-6!">
        <input
          className="form-check-input"
          id="invoiceChecked"
          type="checkbox"
          defaultChecked
        />
        <label
          className="form-check-label font-normal text-base"
          htmlFor="invoiceChecked"
        >
          Invoice to the name and address of property
        </label>
      </div>
      <div className="form-floating mb-6">
        <Input
          type="text"
          name="invoiceEmail"
          id="wizard-invoice-email"
          placeholder="Invoice email"
          onChange={onChange}
        />
        <label className="form-label" htmlFor="wizard-invoice-email">
          Invoice email
        </label>
        <Link
          to="#!"
          className="absolute flex items-center px-4 font-bold text-md end-0 top-0 mt-4 me-2"
        >
          Verify now
        </Link>
      </div>
      <div className="form-check-inline mb-4">
        <input
          className="form-check-input"
          id="creditCard"
          type="radio"
          name="paymentMethod"
          value="creditCard"
          defaultChecked
          onChange={handleChange}
        />
        <label className="form-check-label text-base" htmlFor="creditCard">
          Credit Card
        </label>
      </div>
      <div className="form-check-inline mb-4">
        <input
          className="form-check-input"
          id="bankAccount"
          type="radio"
          name="paymentMethod"
          value="bankAccount"
          onChange={handleChange}
        />
        <label className="form-check-label text-base" htmlFor="bankAccount">
          Bank Account
        </label>
      </div>
      <div className="form-check-inline mb-4">
        <input
          className="form-check-input"
          id="online"
          type="radio"
          name="paymentMethod"
          value="online"
          onChange={handleChange}
        />
        <label className="form-check-label text-base" htmlFor="online">
          Online
        </label>
      </div>
      <Row className="g-4">
        <div className="md:col-6">
          <FloatingLabel htmlFor="card-type" label="Select card">
            <Select
              className="form-icon-input"
              name="cardType"
              id="card-type"
              onChange={onChange}
            >
              <option>Visa Debit card</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </Select>
          </FloatingLabel>
        </div>
        <div className="md:col-6">
          <FloatingLabel htmlFor="wizard-card-number" label="Card number">
            <Input
              type="text"
              name="cardNumber"
              id="wizard-card-number"
              placeholder="Card number"
              onChange={onChange}
            />
          </FloatingLabel>
        </div>
      </Row>
      <FloatingLabel
        className="mt-4"
        htmlFor="wizard-card-holder"
        label="Card Holder name"
      >
        <Input
          type="text"
          name="cardHolder"
          id="wizard-card-holder"
          placeholder="Card Holder name"
          onChange={onChange}
        />
      </FloatingLabel>
      <h4 className="mt-10 mb-6">Payment from Guests (On property)</h4>
      <div className="border p-4 rounded-md">
        <div className="form-check form-switch mb-0">
          <input
            className="form-check-input"
            id="cashPayment"
            type="checkbox"
            name="isCashPayment"
            onChange={handleChange}
          />
          <label
            className="form-check-label text-base font-bold text-default ms-2"
            htmlFor="cashPayment"
          >
            Cash payment
          </label>
        </div>
      </div>
      <div className="border p-4 rounded-md my-4">
        <div className="form-check form-switch mb-0">
          <input
            className="form-check-input"
            id="cardPayment"
            type="checkbox"
            name="isCardPayment"
            onChange={handleChange}
          />
          <label
            className="form-check-label text-base font-bold text-default ms-2"
            htmlFor="cardPayment"
          >
            Card Payment
          </label>
        </div>
      </div>
      <div className="border p-4 rounded-md">
        <div className="form-check form-switch mb-0">
          <input
            className="form-check-input"
            id="onlinePayment"
            type="checkbox"
            name="isMFSPayment"
            onChange={handleChange}
          />
          <label
            className="form-check-label text-base font-bold text-default ms-2"
            htmlFor="onlinePayment"
          >
            MFS / Online Payment
          </label>
        </div>
      </div>
    </>
  );
};

export default FinanceForm;
