import { Form } from 'react-bootstrap';
import CollapsibleContainer from 'components/common/CollapsibleContainer';
import { flightAircraft } from 'data/travel-agency/customer/flight';

const FilterFormFlightAircraft = () => {
  return (
    <CollapsibleContainer
      collapseTitle="Aircraft"
      titleClass="text-base"
      containerSize="sm"
      id="flightStops"
    >
      <div className="p-3 pb-0">
        <div className="flex mb-3">
          <Form.Check type="radio" className="form-check-inline">
            <Form.Check.Input
              type="radio"
              id="includeAircraft"
              name="aircrafts"
            />
            <Form.Check.Label
              htmlFor="includeAircraft"
              className="text-base text-default"
            >
              Include
            </Form.Check.Label>
          </Form.Check>
          <Form.Check type="radio" className="form-check-inline">
            <Form.Check.Input
              type="radio"
              id="excludeAircraft"
              name="aircrafts"
              defaultChecked={true}
            />
            <Form.Check.Label
              htmlFor="excludeAircraft"
              className="text-base text-default"
            >
              Exclude
            </Form.Check.Label>
          </Form.Check>
        </div>
        {flightAircraft.map(aircraft => (
          <Form.Check key={aircraft.id}>
            <Form.Check.Input id={aircraft.id} />
            <Form.Check.Label htmlFor={aircraft.id} className="text-base text-default">
              {aircraft.label}
            </Form.Check.Label>
          </Form.Check>
        ))}
      </div>
    </CollapsibleContainer>
  );
};

export default FilterFormFlightAircraft;
