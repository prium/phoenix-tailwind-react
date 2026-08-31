import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Col,
  Dropdown,
  Input,
  InputGroup,
  Row,
  Select
} from '@hummingbirdui/react';
import { useState } from 'react';
import { useWizardFormContext } from 'providers/WizardFormProvider';
import ConterForm from './ConterForm';
import { AddRoomWizardFormData } from 'data/travel-agency/addRoom';

const CounterFormGroup = ({
  id,
  name,
  label
}: {
  id: string;
  name: string;
  label: string;
}) => (
  <>
    <label className="mb-1 text-highlight font-bold" htmlFor={id}>
      {label}
    </label>
    <ConterForm name={name} id={id} />
  </>
);

const roomSizeUnits = ['sq. m', 'sq. ft', 'sq. in'];

/** gold `+RoomDetailsForm` (mixins/travel-agency/add-room/RoomDetailsForm.pug) */
const RoomDetailsForm = () => {
  const methods = useWizardFormContext<AddRoomWizardFormData>();
  const { onChange } = methods;
  const [roomSizeUnit, setRoomSizeUnit] = useState(roomSizeUnits[0]);

  return (
    <>
      <h3 className="mb-10">Room Details</h3>
      <h4 className="mb-2">Share your room details</h4>
      <p className="mb-6 text-subtle">
        Enjoy a comfortable stay in our well-appointed rooms with a variety of
        options to choose from.
      </p>
      <Row className="g-4 sm:g-6 mb-10">
        <Col sm={6} md={7}>
          <label
            className="mb-1 text-highlight font-bold"
            htmlFor="room-category"
          >
            Room category
          </label>
          <Select id="room-category" name="roomCategory" onChange={onChange}>
            <option>King</option>
            <option>Bridal suite</option>
            <option>Single room</option>
          </Select>
        </Col>
        <Col sm={6} md={5}>
          <label className="mb-1 text-highlight font-bold" htmlFor="room-name">
            Room name (Optional)
          </label>
          <Input
            id="room-name"
            type="text"
            placeholder="Enter name"
            name="roomName"
            onChange={onChange}
          />
        </Col>
      </Row>
      <Row className="gx-4 sm:gx-6 gy-4 mb-10">
        <Col xs={6} sm={4}>
          <label className="mb-1 text-highlight font-bold" htmlFor="bed-type">
            Bed type
          </label>
          <Select id="bed-type" name="bedType" onChange={onChange}>
            <option>Twin bed</option>
            <option>King bed</option>
            <option>Queen bed</option>
            <option>Single bed</option>
            <option>Double bed</option>
            <option>Twin XL bed</option>
            <option>Quad Bed</option>
            <option>Executive Suite</option>
            <option>Bunk Bed</option>
          </Select>
        </Col>
        <Col xs={6} sm={4}>
          <CounterFormGroup id="adult" name="adult" label="Adult" />
        </Col>
        <Col xs={6} sm={4}>
          <CounterFormGroup
            id="child-allow"
            name="children"
            label="Children allowed"
          />
        </Col>
        <Col xs={6} sm={4}>
          <CounterFormGroup
            id="number-of-bed"
            name="bed"
            label="Number of bed"
          />
        </Col>
        <Col xs={6} sm={4}>
          <CounterFormGroup id="bathroom" name="bathroom" label="Bathroom" />
        </Col>
        <Col xs={6} sm={4}>
          <CounterFormGroup id="balcony" name="balcony" label="Balcony" />
        </Col>
      </Row>
      <Row className="g-4 sm:g-6">
        <Col xs={6}>
          <CounterFormGroup
            id="room-of-this-type"
            name="roomOfThisType"
            label="Room of this type"
          />
        </Col>
        <Col xs={6}>
          <label className="mb-1 text-highlight font-bold">
            Room size (OPT)
          </label>
          <InputGroup>
            <Input
              id="room-size"
              type="text"
              placeholder="Size"
              className="form-icon-input"
              name="roomSize"
              onChange={onChange}
            />
            <Dropdown>
              <Dropdown.Trigger asChild>
                <button
                  type="button"
                  className="btn border border-default px-4 bg-soft hover:bg-default rounded-md rounded-s-none border"
                >
                  <span className="me-2">{roomSizeUnit}</span>
                  <FontAwesomeIcon icon={faChevronDown} className="text-sm" />
                </button>
              </Dropdown.Trigger>
              <Dropdown.Content align="end" className="dropdown-menu">
                {roomSizeUnits.map(unit => (
                  <Dropdown.Item
                    key={unit}
                    onClick={() => setRoomSizeUnit(unit)}
                  >
                    {unit}
                  </Dropdown.Item>
                ))}
              </Dropdown.Content>
            </Dropdown>
          </InputGroup>
        </Col>
      </Row>

      <h4 className="mt-12 mb-2">Sleeping arrangements</h4>
      <p className="mb-6 text-subtle">
        Sleep well in our comfortable rooms with modern amenities.
      </p>
      <Row className="gx-4 sm:gx-6 gy-4">
        <Col xs={6} sm={4}>
          <CounterFormGroup
            id="single-bed"
            name="singleBed"
            label="Single bed"
          />
        </Col>
        <Col xs={6} sm={4}>
          <CounterFormGroup
            id="double-bed"
            name="doubleBed"
            label="Double bed"
          />
        </Col>
        <Col xs={6} sm={4}>
          <CounterFormGroup id="queen-bed" name="queenBed" label="Queen bed" />
        </Col>
        <Col xs={6} sm={4}>
          <CounterFormGroup id="king-bed" name="kingBed" label="King bed" />
        </Col>
        <Col xs={6} sm={4}>
          <CounterFormGroup id="sofa-bed" name="sofaBed" label="Sofa bed" />
        </Col>
        <Col xs={6} sm={4}>
          <CounterFormGroup id="extra-bed" name="extraBed" label="Extra bed" />
        </Col>
      </Row>
    </>
  );
};

export default RoomDetailsForm;
