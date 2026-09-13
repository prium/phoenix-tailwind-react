import { cn, Col, Dropdown, Row } from '@hummingbirdui/react';
import bg42 from 'assets/img/bg/42.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendar,
  faMapMarkerAlt,
  faSearch,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'components/base/DatePicker';
import Button from 'components/base/Button';
import InputGroupCounter from 'components/common/InputGroupCounter';

export const GuestCounterRow = ({
  title,
  className
}: {
  title: string;
  className?: string;
}) => {
  return (
    <Row className={cn('items-center g-0', className)}>
      <Col xs={5}>
        <h5 className="mb-0 text-default">{title}</h5>
      </Col>
      <Col xs={7}>
        <InputGroupCounter id={title.toLowerCase()} inputGap="gap-2" />
      </Col>
    </Row>
  );
};

/** Back-compat alias — FlightSearchForm imports `DropdownItem` from here. */
export const DropdownItem = GuestCounterRow;

/** `+HotelSearch` in phoenix-tailwind mixins/travel-agency/hotel/HotelSearch.pug */
const HotelActions = ({ background }: { background: boolean }) => {
  return (
    <div
      className={cn(
        'md:container-medium',
        background ? 'px-0 md:px-4' : 'px-0!'
      )}
    >
      <div className={cn({ 'px-4 py-14 relative': background })}>
        {background && (
          <div
            className="bg-holder overlay md:rounded-md bg-cover! bg-center!"
            style={{ backgroundImage: `url(${bg42})` }}
          />
        )}
        <Row
          className={cn(
            'gx-0 gy-4 md:gy-0 items-center mx-auto p-4 bg-soft rounded-4xl md:rounded-full relative border',
            { 'lg:w-3/4': background }
          )}
        >
          <Col xs={12} md>
            <div className="input-group-icon border-b md:border-b-0 border-subtle pb-4 md:pb-0">
              <input
                type="text"
                placeholder="Pick a place"
                className="form-control border-0 py-0 shadow-none text-base"
              />
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="form-control-icon-start text-subtle pb-4 md:pb-0"
                transform="up-2"
              />
            </div>
          </Col>
          <Col xs={6} md>
            <DatePicker
              wrapperClassName="input-group-icon"
              className="border-y-0 border-s-0 md:border-s py-0 shadow-none border-subtle text-base rounded-none"
              placeholder="Pick a date"
              hideIcon
              options={{ mode: 'range', dateFormat: 'd/m/y' }}
              icon={
                <FontAwesomeIcon
                  icon={faCalendar}
                  className="form-control-icon-start text-subtle"
                  transform="up-2"
                />
              }
            />
          </Col>
          <Col xs={6} md>
            <Dropdown>
              <Dropdown.Trigger asChild>
                <button
                  type="button"
                  className="btn px-4 text-base font-semibold text-subtle"
                >
                  <FontAwesomeIcon icon={faUser} className="me-2" />1 adult
                </button>
              </Dropdown.Trigger>
              <Dropdown.Content align="start" className="p-6 max-w-80 w-80">
                <GuestCounterRow
                  title="Adults"
                  className="pb-4 border-b border-subtle"
                />
                <GuestCounterRow
                  title="Infants"
                  className="py-4 border-b border-subtle"
                />
                <GuestCounterRow title="Children" className="pt-4" />
              </Dropdown.Content>
            </Dropdown>
          </Col>
          <Col xs={12} md="auto">
            <Button
              variant="phoenix-primary"
              size="lg"
              className="rounded-full w-full"
            >
              <FontAwesomeIcon icon={faSearch} className="me-2" />
              Search
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HotelActions;
