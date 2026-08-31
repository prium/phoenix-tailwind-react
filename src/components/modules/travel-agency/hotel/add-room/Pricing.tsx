import {
  cn,
  Col,
  FloatingLabel,
  Input,
  Row,
  Select
} from '@hummingbirdui/react';
import { AddPropertyWizardFormData } from 'data/travel-agency/addProperty';
import { useWizardFormContext } from 'providers/WizardFormProvider';
import { useState } from 'react';
import WeeklyPricingCard from './WeeklyPricingCard';
import ExtraBed from './ExtraBed';
import Breakfast from './Breakfast';

/** gold `+PricingForm` (mixins/travel-agency/add-room/PricingForm.pug) */
const Pricing = () => {
  const methods = useWizardFormContext<AddPropertyWizardFormData>();
  const { onChange } = methods;
  const [allDayPricing, setAllDayPricing] = useState(true);

  return (
    <>
      <h3 className="mb-10">Pricing</h3>
      <h4 className="mb-2">Base price per night</h4>
      <p className="mb-9 text-subtle">
        Get a great value stay with us, starting at our base price per night.
      </p>
      <div
        className="nav nav-tabs mb-4 border-0"
        id="day-week-pricing"
        role="tablist"
      >
        <div className="form-check-inline me-4">
          <input
            className="form-check-input"
            type="radio"
            id="all-day-tab"
            name="dayWeekPricing"
            checked={allDayPricing}
            onChange={() => setAllDayPricing(true)}
          />
          <label className="form-check-label" htmlFor="all-day-tab">
            Across all days
          </label>
        </div>
        <div className="form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            id="day-of-week-tab"
            name="dayWeekPricing"
            checked={!allDayPricing}
            onChange={() => setAllDayPricing(false)}
          />
          <label className="form-check-label" htmlFor="day-of-week-tab">
            By day of week
          </label>
        </div>
      </div>
      <div className="tab-content">
        <div
          className={cn('tab-pane fade', { 'show active': allDayPricing })}
          id="allDayPricing"
          role="tabpanel"
        >
          <Row className="gx-2 sm:w-119">
            <Col xs={8}>
              <FloatingLabel htmlFor="room-price" label="Room price">
                <Input
                  type="text"
                  name="roomPrice"
                  id="room-price"
                  placeholder="Room price"
                  onChange={onChange}
                />
              </FloatingLabel>
            </Col>
            <Col xs={4}>
              <FloatingLabel htmlFor="room-price-currency" label="Currency">
                <Select
                  name="currency"
                  id="room-price-currency"
                  onChange={onChange}
                >
                  <option value="1">USD</option>
                  <option value="2">EUR</option>
                  <option value="2">BDT</option>
                </Select>
              </FloatingLabel>
            </Col>
          </Row>
        </div>
        <div
          className={cn('tab-pane fade', { 'show active': !allDayPricing })}
          id="dayOfWeekPricing"
          role="tabpanel"
        >
          <WeeklyPricingCard />
        </div>
      </div>
      <label className="mb-2 mt-8 leading-none text-highlight font-bold">
        How many people are included in the base rate?
      </label>
      <div className="form-floating sm:w-119">
        <Select name="peopleInBaseRate" id="people-select" onChange={onChange}>
          <option value="1">05 People</option>
          <option value="2">10 People</option>
          <option value="2">15 People</option>
        </Select>
        <label className="form-label" htmlFor="people-select">
          Select
        </label>
      </div>
      <ExtraBed />
      <Breakfast />
    </>
  );
};

export default Pricing;
