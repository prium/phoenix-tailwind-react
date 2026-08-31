import FilterCollapse from './FilterCollapse';
import { flightSchedules } from 'data/travel-agency/customer/flight';

/** `+FlightSchedules` in mixins/travel-agency/flight/homepage/FlightFilters.pug */
const FilterFormFlightSchedule = ({ className }: { className?: string }) => {
  return (
    <FilterCollapse
      id="flightTime"
      title="Flight Schedules"
      className={className}
    >
      {flightSchedules.map(schedule => (
        <div key={schedule.id} className="mb-6">
          <h5 className="mb-4">{schedule.title}</h5>
          <div className="row g-2">
            {schedule.scheduleChecks.map(check => (
              <div key={check.id} className="col-6 sm:col-4">
                <input
                  className="btn-check flight-filter-checkbox"
                  type="checkbox"
                  name={schedule.name}
                  id={check.id}
                />
                <label
                  className="btn btn-phoenix-secondary text-nowrap w-full px-0"
                  htmlFor={check.id}
                >
                  {check.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </FilterCollapse>
  );
};

export default FilterFormFlightSchedule;
