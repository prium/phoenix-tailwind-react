import FilterCollapse from './FilterCollapse';
import { flightAircraft } from 'data/travel-agency/customer/flight';

/** `+FlightAircraft` in mixins/travel-agency/flight/homepage/FlightFilters.pug */
const FilterFormFlightAircraft = ({ className }: { className?: string }) => {
  return (
    <FilterCollapse id="flightAircraft" title="Aircraft" className={className}>
      <>
        <div className="flex mb-4">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              id="includedAircraft"
              type="radio"
              name="aircrafts"
            />
            <label
              className="form-check-label text-base text-default"
              htmlFor="includedAircraft"
            >
              Include
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              id="excludedAircraft"
              type="radio"
              name="aircrafts"
              defaultChecked
            />
            <label
              className="form-check-label text-base text-default"
              htmlFor="excludedAircraft"
            >
              Exclude
            </label>
          </div>
        </div>
        {flightAircraft.map(aircraft => (
          <div key={aircraft.id} className="form-check mb-[5.5px]">
            <input
              className="form-check-input"
              type="checkbox"
              id={aircraft.id}
            />
            <label
              className="form-check-label text-base text-default"
              htmlFor={aircraft.id}
            >
              {aircraft.label}
            </label>
          </div>
        ))}
      </>
    </FilterCollapse>
  );
};

export default FilterFormFlightAircraft;
