import FilterCollapse from './FilterCollapse';
import InputGroupCounter from 'components/common/InputGroupCounter';

/** `+FlightBaggage` in mixins/travel-agency/flight/homepage/FlightFilters.pug */
const FilterFormFlightBaggage = ({ className }: { className?: string }) => {
  return (
    <FilterCollapse
      id="flightBaggage"
      title="Baggage"
      titleClassName=""
      className={className}
    >
      <div className="flex gap-2 justify-between">
        <div>
          <h5 className="mb-4 text-highlight">Carry on bag</h5>
          <InputGroupCounter id="carryOnBag" inputGap="flex-nowrap gap-1" />
        </div>
        <div>
          <h5 className="mb-4 text-highlight">Checked bag</h5>
          <InputGroupCounter id="checkedBag" inputGap="flex-nowrap gap-1" />
        </div>
      </div>
    </FilterCollapse>
  );
};

export default FilterFormFlightBaggage;
