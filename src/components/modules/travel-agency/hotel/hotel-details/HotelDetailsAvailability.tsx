import { Fragment } from 'react';
import { type AvailableRoom } from 'data/travel-agency/customer/hotelDetails';
import { Card, Col, Row } from '@hummingbirdui/react';
import DatePicker from 'components/base/DatePicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/base/Button';
import HotelDetailsAvailabilityRoomInfo from './HotelDetailsAvailabilityRoomInfo';
import InputGroupCounter from 'components/common/InputGroupCounter';

interface HotelDetailsAvailabilityProps {
  availableRooms: AvailableRoom[];
}

const AvailabilityDateInput = ({
  id,
  label
}: {
  id: string;
  label: string;
}) => (
  <>
    <label className="font-bold text-subtle mb-1" htmlFor={id}>
      {label}
    </label>
    <DatePicker
      id={id}
      wrapperClassName="input-group-icon"
      placeholder="26 Jan, 2023"
      hideIcon
      icon={
        <FontAwesomeIcon
          icon={faCalendar}
          className="text-default text-md form-control-icon-start"
        />
      }
    />
  </>
);

/** Availability pane of `+HotelDetailsTab` (HotelDetailsTab.pug) */
const HotelDetailsAvailability = ({
  availableRooms
}: HotelDetailsAvailabilityProps) => {
  return (
    <>
      <h3 className="mb-4 font-bold">Availability</h3>
      <Card>
        <Card.Body>
          <Row className="g-4">
            <Col sm={6} lg={3}>
              <AvailabilityDateInput id="checkIn" label="Check in" />
            </Col>
            <Col sm={6} lg={3}>
              <AvailabilityDateInput id="checkOut" label="Check out" />
            </Col>
            <Col sm={6} lg={3}>
              <label className="font-bold text-subtle mb-1">Adults</label>
              <InputGroupCounter
                id="adult"
                inputGap="gap-2"
                buttonClasses="rounded-md px-4"
                iconClasses=""
              />
            </Col>
            <Col sm="auto" className="ms-auto self-end">
              <Button variant="primary" className="w-full">
                Update Results
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {availableRooms.map((room, index) => (
        <Fragment key={room.id}>
          <hr className="border-subtle my-10" />
          <HotelDetailsAvailabilityRoomInfo room={room} index={index} />
        </Fragment>
      ))}
    </>
  );
};

export default HotelDetailsAvailability;
