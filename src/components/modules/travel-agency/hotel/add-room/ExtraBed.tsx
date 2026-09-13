import {
  cn,
  Col,
  FloatingLabel,
  Input,
  InputGroup,
  Row,
  Select
} from '@hummingbirdui/react';
import Button from 'components/base/Button';
import { AddRoomWizardFormData } from 'data/travel-agency/addRoom';
import { useWizardFormContext } from 'providers/WizardFormProvider';
import { useState } from 'react';

const extraBedOptions = [
  '02-06 year olds',
  '07-12 year olds',
  '12-16 year olds',
  'For adults'
];

/** gold "Extra bed option" switch + `#extraBedCollapse` of PricingForm.pug */
const ExtraBed = () => {
  const methods = useWizardFormContext<AddRoomWizardFormData>();
  const { onChange } = methods;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(2);

  const handleCount = (type: string) => {
    if (type === 'increase') setValue(value + 1);
    if (type === 'decrease' && value >= 1) setValue(value - 1);
  };

  return (
    <>
      <div className="flex items-center gap-2 mt-12">
        <label
          className="text-lg font-bold text-emphasis"
          htmlFor="extraBedSwitch"
        >
          Extra bed option
        </label>
        <div className="form-check form-switch mb-0">
          <input
            className="form-check-input"
            id="extraBedSwitch"
            type="checkbox"
            role="button"
            name="extraBedSwitch"
            aria-expanded={open}
            checked={open}
            onChange={e => {
              onChange(e);
              setOpen(e.target.checked);
            }}
          />
        </div>
      </div>
      <p className="text-md text-subtle mb-0">Can you provide extra bed</p>
      <div className={cn('collapse', { show: open })} id="extraBedCollapse">
        <div className="mt-6">
          <Row className="gx-4">
            <div className="col-6 sm:col-4 2xl:col-5">
              <label
                className="mb-1 text-highlight font-bold"
                htmlFor="number-of-bed-pricing"
              >
                Number of bed
              </label>
              <InputGroup className="gap-1">
                <Button
                  variant="phoenix-primary"
                  className="px-4 bg-soft hover:bg-default rounded-md"
                  onClick={() => handleCount('decrease')}
                >
                  -
                </Button>
                <Input
                  id="number-of-bed-pricing"
                  type="number"
                  value={value}
                  onChange={e => setValue(parseInt(e.target.value) || 0)}
                  className="flex-1 border-subtle input-spin-none text-center rounded-md"
                />
                <Button
                  variant="phoenix-primary"
                  className="px-4 bg-soft hover:bg-default rounded-md"
                  onClick={() => handleCount('increase')}
                >
                  +
                </Button>
              </InputGroup>
            </div>
            <div className="col-6 sm:col-4 2xl:col-5">
              <label
                className="mb-1 text-highlight font-bold"
                htmlFor="pricing-bed-type"
              >
                Bed type
              </label>
              <Select id="pricing-bed-type" name="bedType" onChange={onChange}>
                <option>Twin bed</option>
                <option>King bed</option>
                <option>Queen bed</option>
                <option>Single bed</option>
                <option>Double bed</option>
                <option>Twin XL bed</option>
                <option>Quad Bed</option>
                <option>Quad Bed</option>
                <option>Executive Suite</option>
                <option>Bunk Bed</option>
              </Select>
            </div>
          </Row>
          <h5 className="mt-6 mb-4">
            Check the box(es) if you can accommodate the following guests in
            extra beds.
          </h5>
          {extraBedOptions.map((item, index) => (
            <Row
              key={index}
              className={cn('gx-2 gy-0 items-center', {
                'mb-4': index !== extraBedOptions.length - 1
              })}
            >
              <div className="col-12 sm:col-auto">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`age-range-${index + 1}`}
                  />
                  <label
                    className={cn('form-check-label text-emphasis', {
                      'me-8': index === extraBedOptions.length - 1
                    })}
                    htmlFor={`age-range-${index + 1}`}
                  >
                    {item}
                  </label>
                </div>
              </div>
              <Col xs="auto">
                <FloatingLabel
                  htmlFor={`room-price-${index + 1}`}
                  label="Room price"
                >
                  <Input
                    type="text"
                    name="room-price"
                    id={`room-price-${index + 1}`}
                    placeholder="Room price"
                  />
                </FloatingLabel>
              </Col>
              <Col xs="auto">
                <FloatingLabel
                  htmlFor={`room-price-currency-${index + 1}`}
                  label="Currency"
                >
                  <Select
                    name="room-price-currency"
                    id={`room-price-currency-${index + 1}`}
                  >
                    <option value="1">USD</option>
                    <option value="2">EUR</option>
                    <option value="2">BDT</option>
                  </Select>
                </FloatingLabel>
              </Col>
            </Row>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExtraBed;
