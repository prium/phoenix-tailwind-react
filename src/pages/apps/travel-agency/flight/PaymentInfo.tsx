import { Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlane,
  faEdit,
  faUser,
  faSuitcaseRolling,
  faCircle
} from '@fortawesome/free-solid-svg-icons';
import qatarAirlineLogo from 'assets/img/brand/qatar-airline.png';

const FlightInfo = () => {
  return (
    <div>
      <div className="flex justify-between mb-6">
        <div>
          <FontAwesomeIcon icon={faPlane} className="text-primary me-2" />
          <h4 className="mb-0 inline-block text-highlight">
            Flight info
          </h4>
        </div>
        <Button variant="link" className="p-0">
          <FontAwesomeIcon icon={faEdit} className="me-2" />
          Edit
        </Button>
      </div>

      <div className="mb-6 flex items-center">
        <img
          src={qatarAirlineLogo}
          alt=""
          style={{ height: '3.5rem' }}
          className="img-fluid rounded-lg"
        />
        <h5 className="whitespace-nowrap font-normal inline-block ms-2 mb-0">
          Qatar Airways
        </h5>
      </div>

      <p className="text-emphasis">
        Travelling from <strong>Dhaka</strong> to <strong>Cox’s Bazar</strong>
      </p>

      <div className="flex gap-2 flex-wrap">
        <p className="mb-0 text-emphasis whitespace-nowrap">
          Tuesday, 29 January
          <FontAwesomeIcon
            icon={faCircle}
            className="text-subtle text-xs mx-2"
            transform="shrink-6"
          />
          5:00 pm
        </p>
        <p className="mb-0 text-emphasis whitespace-nowrap">
          <span className="text-subtle me-2">-</span>
          Tuesday, 29 January
          <FontAwesomeIcon
            icon={faCircle}
            className="text-subtle text-xs mx-2"
            transform="shrink-6"
          />
          5:30 pm
        </p>
      </div>
    </div>
  );
};

const PersonalInfo = () => {
  return (
    <div>
      <div className="flex justify-between mb-6">
        <div>
          <FontAwesomeIcon icon={faUser} className="text-primary me-2" />
          <h4 className="mb-0 inline-block text-highlight">
            Personal info
          </h4>
        </div>
        <Button variant="link" className="p-0">
          <FontAwesomeIcon icon={faEdit} className="me-2" />
          Edit
        </Button>
      </div>

      <div className="bg-subtle rounded-md p-6">
        <Row className="g-0 gy-8 flex-col sm:flex-row">
          <Col className="pe-6">
            <h5 className="mb-4">Passenger 1</h5>
            <p className="mb-2">John James Johansen</p>
            <p className="mb-0">
              Adult
              <FontAwesomeIcon
                icon={faCircle}
                className="text-subtle text-xs mx-2"
                transform="shrink-5"
              />
              Male
            </p>
          </Col>
          <Col className="sm:border-s sm:border-t-0 border-t border-subtle sm:ps-6 pt-6 sm:pt-0">
            <h5 className="mb-4">Passenger 2</h5>
            <p className="mb-2">John James Johansen</p>
            <p className="mb-0">
              Adult
              <FontAwesomeIcon
                icon={faCircle}
                className="text-subtle text-xs mx-2"
                transform="shrink-5"
              />
              Male
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

const BaggageInfo = () => {
  return (
    <div>
      <div className="flex justify-between mb-6">
        <div>
          <FontAwesomeIcon
            icon={faSuitcaseRolling}
            className="text-primary me-2"
          />
          <h4 className="mb-0 inline-block text-highlight">
            Included baggage
          </h4>
        </div>
        <Button variant="link" className="p-0">
          <FontAwesomeIcon icon={faEdit} className="me-2" />
          Edit
        </Button>
      </div>

      <div className="flex gap-4 mb-6">
        <FontAwesomeIcon
          icon={faCircle}
          className="text-soft text-xs mx-2"
          transform="down-8"
        />
        <div>
          <h5 className="mb-2">1 personal item</h5>
          <p className="mb-0 text-subtle">
            Must go under the seat in front of you
          </p>
        </div>
      </div>

      <div className="flex gap-4 mb-6">
        <FontAwesomeIcon
          icon={faCircle}
          className="text-soft text-xs mx-2"
          transform="down-8"
        />
        <div>
          <h5 className="mb-2">1 carry-on bag</h5>
          <p className="mb-0 text-subtle">Max weight 8 kg</p>
        </div>
      </div>

      <div className="flex gap-4">
        <FontAwesomeIcon
          icon={faCircle}
          className="text-soft text-xs mx-2"
          transform="down-8"
        />
        <div>
          <h5 className="mb-2">1 checked bag</h5>
          <p className="mb-0 text-subtle">Max weight 25 kg</p>
        </div>
      </div>
    </div>
  );
};

const FlightPaymentInfo = () => {
  return (
    <div>
      <FlightInfo />
      <hr className="my-8" />
      <PersonalInfo />
      <hr className="my-8" />
      <BaggageInfo />
    </div>
  );
};

export default FlightPaymentInfo;
