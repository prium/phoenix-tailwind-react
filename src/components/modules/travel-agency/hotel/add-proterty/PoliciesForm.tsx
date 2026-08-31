import { FloatingLabel, Input, Row } from '@hummingbirdui/react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import DatePicker from 'components/base/DatePicker';
import NouiSlider from 'components/base/NouiSlider';
import { useWizardFormContext } from 'providers/WizardFormProvider';
import { AddPropertyWizardFormData } from 'data/travel-agency/addProperty';
import PriceTierForm from '../common/PriceTierForm';

const timeOptions = {
  enableTime: true,
  noCalendar: true,
  dateFormat: 'H:i',
  disableMobile: true
};

const TimeFloatingInput = ({ id, label }: { id: string; label: string }) => (
  <DatePicker
    render={(_, ref) => (
      <div className="form-floating">
        <input
          className="form-control datetimepicker"
          id={id}
          type="text"
          placeholder="H:i"
          ref={ref}
        />
        <label className="form-label" htmlFor={id}>
          {label}
        </label>
      </div>
    )}
    hideIcon
    options={timeOptions}
  />
);

const SwitchTier = ({
  id,
  label,
  className = ''
}: {
  id: string;
  label: string;
  className?: string;
}) => (
  <div className={`border p-4 rounded-md ${className}`.trim()}>
    <div className="form-check form-switch mb-0">
      <input className="form-check-input" id={id} type="checkbox" />
      <label
        className="form-check-label text-base font-bold text-default ms-2"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  </div>
);

const ageSegments = [
  { from: 0, to: 7, fromDisabled: true, toDisabled: false },
  { from: 8, to: 12, fromDisabled: false, toDisabled: false },
  { from: 13, to: 18, fromDisabled: false, toDisabled: true }
];

/** gold `+PoliciesForm` (mixins/travel-agency/add-property/PoliciesForm.pug) */
const PoliciesForm = () => {
  const methods = useWizardFormContext<AddPropertyWizardFormData>();

  return (
    <>
      <h3 className="mb-10">Policies</h3>
      <div className="form-check-inline me-8 mb-4">
        <input
          className="form-check-input"
          id="limitedCheckIn"
          type="radio"
          name="checkIn"
          value="limitedCheckIn"
          defaultChecked
        />
        <label className="form-check-label text-base" htmlFor="limitedCheckIn">
          Limited Check-in
        </label>
      </div>
      <div className="form-check-inline mb-4">
        <input
          className="form-check-input"
          id="24HrCheckIn"
          type="radio"
          name="checkIn"
          value="24HrCheckIn"
        />
        <label className="form-check-label text-base" htmlFor="24HrCheckIn">
          24hr Check-in
        </label>
      </div>
      <Row className="g-4 items-center">
        <div className="col-12 sm:col-6 md:col-auto md:grow">
          <TimeFloatingInput id="checkInStarts" label="Check-in Starts" />
        </div>
        <div className="col-12 sm:col-6 md:col-auto md:grow">
          <TimeFloatingInput id="checkInEnds" label="Check-in Ends" />
        </div>
        <div className="col-12 md:col-auto">
          <div className="form-check mb-0">
            <input
              className="form-check-input"
              id="lateCheckIn"
              type="checkbox"
              defaultChecked
            />
            <label
              className="form-check-label font-normal text-base"
              htmlFor="lateCheckIn"
            >
              Late Check-in
            </label>
          </div>
        </div>
      </Row>
      <SwitchTier
        id="ageRestriction"
        label="Age Restriction"
        className="mt-4"
      />
      <SwitchTier id="deposit" label="Deposit at Check-in" className="my-4" />
      <SwitchTier id="documentation" label="Documentation at Check-in" />
      <h4 className="mb-6 mt-10">Checkout Policy</h4>
      <div className="mb-4">
        <TimeFloatingInput id="chcckOutBefore" label="Checkout Before" />
      </div>
      <PriceTierForm
        id="flexible-checkout"
        name="Flexible Checkout"
        className=""
        methods={methods}
      />
      <h4 className="mb-6 mt-10">Cancellation Policy</h4>
      <div className="form-check-inline me-8 mb-0">
        <input
          className="form-check-input"
          id="nonRefundable"
          type="radio"
          name="refundPolicy"
          value="nonRefundable"
        />
        <label className="form-check-label text-base" htmlFor="nonRefundable">
          Non Refundable
        </label>
      </div>
      <div className="form-check-inline mb-0">
        <input
          className="form-check-input"
          id="optionalRefund"
          type="radio"
          name="refundPolicy"
          value="optionalRefund"
          defaultChecked
        />
        <label className="form-check-label text-base" htmlFor="optionalRefund">
          Optional Refund
        </label>
      </div>
      <SwitchTier id="fullRefund" label="Full Refund" className="mt-3 mb-4" />
      <SwitchTier id="partialRefund" label="Partial Refund" />
      <h4 className="mb-6 mt-10">Pet Policy</h4>
      <div className="form-check-inline me-8 mb-0">
        <input
          className="form-check-input"
          id="notAllowed"
          type="radio"
          name="petPolicy"
          value="notAllowed"
        />
        <label className="form-check-label text-base" htmlFor="notAllowed">
          Not allowed
        </label>
      </div>
      <div className="form-check-inline mb-0">
        <input
          className="form-check-input"
          id="allowed"
          type="radio"
          name="petPolicy"
          value="allowed"
          defaultChecked
        />
        <label className="form-check-label text-base" htmlFor="allowed">
          Allowed
        </label>
      </div>
      <SwitchTier
        id="petRestrickedZone"
        label="Pet Restricted Zones"
        className="mt-3 mb-4"
      />
      <SwitchTier id="AdditionalCharges" label="Additional Charges" />
      <h4 className="mb-6 mt-10">Child Policy</h4>
      {ageSegments.map((segment, index) => (
        <div key={index}>
          <h5 className={`mb-2 text-default${index > 0 ? ' mt-6' : ''}`}>
            {index === 2 ? (
              <>
                <span>Age Segment {index + 1}</span>
                <Button variant="link" className="p-0 ms-1">
                  Remove
                </Button>
              </>
            ) : (
              `Age Segment ${index + 1}`
            )}
          </h5>
          <Row className="items-center g-4">
            <div className="col-6 sm:col-auto">
              <div className="form-floating age-segment-input">
                <Input
                  type="number"
                  className="input-spin-none"
                  id={`wizard-from${index + 1}`}
                  placeholder="From (Yrs)"
                  defaultValue={segment.from}
                  disabled={segment.fromDisabled}
                />
                <label
                  className="form-label"
                  htmlFor={`wizard-from${index + 1}`}
                >
                  From (Yrs)
                </label>
              </div>
            </div>
            <div
              className={`${
                index === 0 ? 'col-12 sm:col-auto' : 'col-auto'
              } flex-1 order-1 sm:order-0`}
            >
              <NouiSlider
                className="noUi-target-primary noUi-handle-primary noUi-slider-slim noUi-handle-circle px-2"
                options={{
                  range: { min: 0, max: 18 },
                  start: [segment.from, segment.to],
                  connect: true
                }}
              />
            </div>
            <div className="col-6 sm:col-auto">
              <div className="form-floating age-segment-input">
                <Input
                  type="number"
                  className="input-spin-none"
                  id={`wizard-to${index + 1}`}
                  placeholder="To (Yrs)"
                  defaultValue={segment.to}
                  disabled={segment.toDisabled}
                />
                <label className="form-label" htmlFor={`wizard-to${index + 1}`}>
                  To (Yrs)
                </label>
              </div>
            </div>
          </Row>
        </div>
      ))}
      <Button variant="link" className="p-0 mt-4 text-base">
        <FontAwesomeIcon icon={faPlus} className="me-2" />
        Add Segment
      </Button>
      <div className="border px-4 py-2 rounded-md mt-6">
        <div className="form-check form-switch mb-0 py-1">
          <input
            className="form-check-input"
            id="documentation-requirement"
            type="checkbox"
          />
          <label
            className="form-check-label text-base font-bold text-default ms-2"
            htmlFor="documentation-requirement"
          >
            Documentation Requirement
          </label>
        </div>
      </div>
      <h4 className="mb-6 mt-10">Included Taxes in your rate</h4>
      <PriceTierForm id="vat" name="VAT" className="mb-4" methods={methods} />
      <PriceTierForm id="gst" name="GST" className="mb-4" methods={methods} />
      <PriceTierForm
        id="holet-tax"
        name="Hotel tax"
        className="mb-4"
        methods={methods}
      />
      <PriceTierForm
        id="city-tax"
        name="City / District tax"
        className="mb-4"
        methods={methods}
      />
      <PriceTierForm
        id="tourist-tax"
        name="Tourist tax"
        className=""
        methods={methods}
      />
      <h4 className="mb-6 mt-10">Your Documentations</h4>
      <FloatingLabel
        htmlFor="wizard-property-registrations"
        label="Property Registration No. (OPTIONAL)"
      >
        <Input
          type="number"
          className="input-spin-none"
          id="wizard-property-registrations"
          placeholder="Property Registration No. (OPTIONAL)"
        />
      </FloatingLabel>
      <FloatingLabel
        className="my-4"
        htmlFor="wizard-business-registration"
        label="Business Registration No."
      >
        <Input
          type="number"
          className="input-spin-none"
          id="wizard-business-registration"
          placeholder="Business Registration No."
        />
      </FloatingLabel>
      <FloatingLabel
        htmlFor="wizard-taxpaper"
        label="Taxpayer Indentification No."
      >
        <Input
          type="number"
          className="input-spin-none"
          id="wizard-taxpaper"
          placeholder="Taxpayer Indentification No."
        />
      </FloatingLabel>
    </>
  );
};

export default PoliciesForm;
