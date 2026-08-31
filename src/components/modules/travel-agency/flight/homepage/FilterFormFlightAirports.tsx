import FilterCollapse from './FilterCollapse';
import { flightAirports } from 'data/travel-agency/customer/flight';

/** `+FlightAirports` in mixins/travel-agency/flight/homepage/FlightFilters.pug */
const FilterFormFlightAirports = ({ className }: { className?: string }) => {
  return (
    <FilterCollapse id="flightAirports" title="Airports" className={className}>
      <div className="flex gap-4">
        {flightAirports.map(item => (
          <div key={item.id} className="flex-1">
            <h5 className="mb-4">{item.label}</h5>
            {item.airports.map(airport => (
              <div key={airport} className="form-check gap-2">
                <input
                  className="form-check-input mt-0"
                  type="checkbox"
                  id={airport.split(' :')[0]}
                />
                <label
                  htmlFor={airport.split(' :')[0]}
                  className="form-check-label text-md text-default leading-sm"
                >
                  {airport}
                </label>
              </div>
            ))}
          </div>
        ))}
      </div>
    </FilterCollapse>
  );
};

export default FilterFormFlightAirports;
