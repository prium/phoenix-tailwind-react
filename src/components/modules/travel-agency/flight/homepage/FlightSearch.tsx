import { useState } from 'react';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, cn } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import FlightSearchForm from './FlightSearchForm';
import FlightPreviewForm from './FlightPreviewForm';

interface FlightTypeRadioProps {
  id: string;
  label: string;
  defaultChecked?: boolean;
}

/** `div.form-check-inline.shrink-0` radio in mixins/travel-agency/flight/homepage/FlightSearch.pug */
const FlightTypeRadio = ({
  id,
  label,
  defaultChecked
}: FlightTypeRadioProps) => (
  <div className="form-check-inline shrink-0">
    <input
      className="form-check-input"
      id={id}
      type="radio"
      name="flightType"
      defaultChecked={defaultChecked}
    />
    <label className="form-check-label text-base text-default" htmlFor={id}>
      {label}
    </label>
  </div>
);

const FlightSearch = () => {
  const [detailsVisible, setDetailsVisible] = useState(true);

  return (
    <form>
      <Card className="relative mb-10">
        <Card.Body>
          <div className="flex items-center flex-wrap gap-1 mb-7.25">
            <FlightTypeRadio id="oneWay" label="One way" />
            <FlightTypeRadio id="return" label="Return" defaultChecked />
            <FlightTypeRadio id="multi" label="Multiple cities" />
          </div>

          <FlightSearchForm className="mb-6" />

          {detailsVisible && <FlightPreviewForm className="mb-6" />}

          <div className="flex flex-wrap gap-4 justify-between">
            <a
              className="font-semibold text-nowrap text-base"
              href="#!"
              onClick={e => {
                e.preventDefault();
                setDetailsVisible(!detailsVisible);
              }}
            >
              {detailsVisible ? 'Close' : 'Show'} details{' '}
              <FontAwesomeIcon
                icon={faAngleUp}
                transform="down-1"
                className={cn('ms-1', { 'rotate-180': !detailsVisible })}
              />
            </a>
            <Button
              type="button"
              variant="primary"
              size="lg"
              className="flex-1 max-w-60"
            >
              Search
            </Button>
          </div>
        </Card.Body>
      </Card>
    </form>
  );
};

export default FlightSearch;
