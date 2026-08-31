import { cn } from '@hummingbirdui/react';
import NouiSlider from 'components/base/NouiSlider';

/** `+FlightPreviewForm` in mixins/travel-agency/flight/homepage/FlightSearch.pug */
const FlightPreviewForm = ({ className }: { className?: string }) => {
  return (
    <div className={cn('bg-subtle p-4 sm:p-6 rounded-md', className)}>
      <div className="row g-4">
        <div className="xl:col-2 lg:col md:col-4">
          <h6 className="mb-2">Fare Type</h6>
          <div className="form-check mb-0">
            <input
              className="form-check-input mt-0"
              id="flightFareType"
              type="checkbox"
              defaultChecked
            />
            <label
              htmlFor="flightFareType"
              className="form-check-label block leading-sm text-base text-default font-normal mb-0"
            >
              Refundable ticket
            </label>
          </div>
        </div>
        <div className="xl:col-2 lg:col md:col-4">
          <h6 className="mb-4">Price Range</h6>
          <NouiSlider
            className="noUi-primary-lighter noUi-handle-primary noUi-slider-slim noUi-handle-circle px-1 mb-4"
            options={{
              start: [100, 186],
              range: { min: 100, max: 200 },
              connect: true
            }}
          />
          <div className="flex flex-between-center">
            <div>
              <small className="hidden lg:block text-subtle">Min</small>
              <h6 className="mb-0 text-highlight font-semibold">$100</h6>
            </div>
            <div className="text-end">
              <small className="hidden lg:block text-subtle">Max</small>
              <h6 className="mb-0 text-highlight font-semibold">$200</h6>
            </div>
          </div>
        </div>
        <div className="xl:col-2 lg:col md:col-4">
          <h6 className="mb-2">Class</h6>
          <select className="form-select" id="flightClass">
            <option>Economy</option>
            <option>Business</option>
            <option>First class</option>
          </select>
        </div>
        <div className="xl:col-2 lg:col md:col-6 ms-auto">
          <h6 className="mb-2">Onward depart time</h6>
          <select className="form-select" id="departTime">
            <option>12:00 - 18:00</option>
            <option>18:00 - 24:00</option>
            <option>06:00 - 12:00</option>
          </select>
        </div>
        <div className="xl:col-2 lg:col md:col-6">
          <h6 className="mb-2">Return depart time</h6>
          <select className="form-select" id="returnTime">
            <option>12:00 - 18:00</option>
            <option>18:00 - 24:00</option>
            <option>06:00 - 12:00</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FlightPreviewForm;
