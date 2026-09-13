import FilterCollapse from './FilterCollapse';
import NouiSlider from 'components/base/NouiSlider';
import ReactSelect from 'components/base/ReactSelect';

import {
  flightAirlines,
  flightCabins,
  flightStops
} from 'data/travel-agency/customer/flight';

interface CheckItem {
  id: string;
  label: string;
}

const FilterCheck = ({ item }: { item: CheckItem }) => (
  <div className="form-check">
    <input className="form-check-input" type="checkbox" id={item.id} />
    <label
      className="form-check-label text-base text-default"
      htmlFor={item.id}
    >
      {item.label}
    </label>
  </div>
);

export const FilterFormFlightStops = ({
  className
}: {
  className?: string;
}) => {
  return (
    <FilterCollapse id="flightStops" title="Stops" className={className}>
      {flightStops.map(stop => (
        <FilterCheck key={stop.id} item={stop} />
      ))}
    </FilterCollapse>
  );
};

export const FilterFormFlightAirlines = ({
  className
}: {
  className?: string;
}) => {
  return (
    <FilterCollapse id="flightAirlines" title="Airlines" className={className}>
      {flightAirlines.map(airline => (
        <FilterCheck key={airline.id} item={airline} />
      ))}
    </FilterCollapse>
  );
};

export const FilterFormFlightCabin = ({
  className
}: {
  className?: string;
}) => {
  return (
    <FilterCollapse id="flightCabin" title="Cabin" className={className}>
      {flightCabins.map(cabin => (
        <FilterCheck key={cabin.id} item={cabin} />
      ))}
    </FilterCollapse>
  );
};

/** noUiSlider values array from the gold `data-nouislider-values` */
const durationValues = [
  '45m',
  '46m',
  '47m',
  '48m',
  '49m',
  '50m',
  '51m',
  '52m',
  '53m',
  '54m',
  '55m'
];

export const FilterFormFlightDuration = ({
  className
}: {
  className?: string;
}) => {
  return (
    <FilterCollapse
      id="flightDuration"
      title="Flight Duration"
      className={className}
    >
      <div className="flex flex-between-center mb-2">
        <h6 className="mb-0 text-highlight font-semibold">0h 45m</h6>
        <h6 className="mb-0 text-highlight font-semibold">0h 55m</h6>
      </div>
      <NouiSlider
        className="noUi-primary-lighter noUi-handle-primary noUi-slider-medium noUi-handle-circle px-1 mt-4"
        values={durationValues}
        options={{ start: ['48m'], connect: [true, false] }}
      />
    </FilterCollapse>
  );
};

export const FilterFormFlightPriceCalculator = ({
  className
}: {
  className?: string;
}) => {
  return (
    <FilterCollapse
      id="flightPriceCalculator"
      title="Price Calculator"
      className={className}
    >
      <ReactSelect
        placeholder="Select method"
        isMulti
        options={[
          { value: 'mastercarddebit', label: 'Mastercard debit' },
          { value: 'mastercardcredit', label: 'Mastercard credit' },
          { value: 'visadebit', label: 'Visa debit' },
          { value: 'visacredit', label: 'Visa credit' },
          { value: 'americanexpress', label: 'American Express' },
          { value: 'paypal', label: 'Paypal' }
        ]}
      />
    </FilterCollapse>
  );
};
