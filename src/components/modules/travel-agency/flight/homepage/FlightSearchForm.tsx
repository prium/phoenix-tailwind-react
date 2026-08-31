import { useState } from 'react';
import {
  faArrowsRotate,
  faMinus,
  faPlus
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown, cn } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import DatePicker from 'components/base/DatePicker';

/** gold `.input-group.gap-2(data-quantity)` counter in the traveler dropdown */
const CounterInput = ({
  id,
  defaultValue
}: {
  id: string;
  defaultValue: number;
}) => {
  const [value, setValue] = useState(defaultValue);
  return (
    <div className="input-group gap-2">
      <Button
        type="button"
        variant="phoenix-primary"
        className="px-2 rounded-md"
        onClick={() => setValue(Math.max(0, value - 1))}
      >
        <FontAwesomeIcon icon={faMinus} className="px-1" />
      </Button>
      <input
        className="form-control border-subtle input-spin-none text-center rounded-md"
        id={id}
        type="number"
        value={value}
        onChange={e => setValue(parseInt(e.target.value) || 0)}
      />
      <Button
        type="button"
        variant="phoenix-primary"
        className="px-2 rounded-md"
        onClick={() => setValue(value + 1)}
      >
        <FontAwesomeIcon icon={faPlus} className="px-1" />
      </Button>
    </div>
  );
};

const FloatingDateInput = ({ id, label }: { id: string; label: string }) => (
  <DatePicker
    wrapperClassName="form-floating flex-1"
    hideIcon
    options={{
      disableMobile: true,
      defaultDate: 'today',
      dateFormat: 'j M, Y'
    }}
    render={(_, ref) => (
      <>
        <input
          className="form-control"
          id={id}
          type="text"
          placeholder="dd/mm/yyyy"
          ref={ref}
        />
        <label className="form-label" htmlFor={id}>
          {label}
        </label>
      </>
    )}
  />
);

interface TravelerCountRowProps {
  title: string;
  id: string;
  defaultValue: number;
  className?: string;
}

const TravelerCountRow = ({
  title,
  id,
  defaultValue,
  className
}: TravelerCountRowProps) => (
  <div className={cn('row items-center g-0', className)}>
    <div className="col-5">
      <h5 className="mb-0 text-default">{title}</h5>
    </div>
    <div className="col-7">
      <CounterInput id={id} defaultValue={defaultValue} />
    </div>
  </div>
);

/** `+FlightSearchForm` in mixins/travel-agency/flight/homepage/FlightSearch.pug */
const FlightSearchForm = ({ className }: { className?: string }) => {
  return (
    <div className={cn('row g-4', className)}>
      <div className="lg:col">
        <div className="row flex-center g-2">
          <div className="sm:col">
            <div className="form-floating flex-1">
              <input
                className="form-control"
                id="fromLocation"
                type="text"
                placeholder="Dhaka (DAC)"
              />
              <label className="form-label" htmlFor="fromLocation">
                From
              </label>
            </div>
          </div>
          <div className="col-auto">
            <Button
              type="button"
              variant="phoenix-secondary"
              className="btn-circle size-8"
            >
              <FontAwesomeIcon icon={faArrowsRotate} transform="down-1" />
            </Button>
          </div>
          <div className="sm:col">
            <div className="form-floating flex-1">
              <input
                className="form-control"
                id="toLocation"
                type="text"
                placeholder="Sylhet (ZYL)"
              />
              <label className="form-label" htmlFor="toLocation">
                To
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col">
        <div className="row g-2">
          <div className="sm:col-6">
            <FloatingDateInput id="journeyDate" label="Journey Date" />
          </div>
          <div className="sm:col-6">
            <FloatingDateInput id="returnDate" label="Return Date" />
          </div>
        </div>
      </div>

      <div className="lg:col-auto">
        <Dropdown>
          <Dropdown.Trigger asChild>
            <div className="form-floating min-w-52">
              <input
                className="form-control cursor-pointer"
                id="travelerCount"
                type="text"
                readOnly
                placeholder="1 Traveler"
                defaultValue="1 Traveler"
              />
              <label className="form-label" htmlFor="travelerCount">
                Traveler
              </label>
            </div>
          </Dropdown.Trigger>
          <Dropdown.Content align="start" className="p-6 w-80 max-w-80">
            <TravelerCountRow
              title="Adults"
              id="adults"
              defaultValue={1}
              className="pb-4 border-b border-subtle"
            />
            <TravelerCountRow
              title="Infants"
              id="infants"
              defaultValue={0}
              className="py-4 border-b border-subtle"
            />
            <TravelerCountRow
              title="Children"
              id="child"
              defaultValue={0}
              className="py-4"
            />
            <Button type="button" variant="primary" className="w-full">
              Complete
            </Button>
          </Dropdown.Content>
        </Dropdown>
      </div>
    </div>
  );
};

export default FlightSearchForm;
