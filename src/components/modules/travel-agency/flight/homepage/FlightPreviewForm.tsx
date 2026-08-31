import { faCouch, faTag, faTicket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { currencyFormat } from 'helpers/utils';
import { Col, Row } from 'react-bootstrap';

interface FormDataProps {
  flightFareType: boolean;
  priceRange: number[];
  flightClass: string;
  departTime: string;
  returnTime: string;
}

interface FlightPreviewFormProps {
  formData: FormDataProps;
}

const FlightPreviewForm = ({ formData }: FlightPreviewFormProps) => {
  return (
    <Row className="g-4">
      <Col md={4} lg xl={2}>
        <h5 className="text-emphasis mb-2">Fare Type</h5>
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faTicket}
            className="text-default me-2"
            transform="up-1"
          />
          <p className="text-default whitespace-nowrap mb-0">
            {formData.flightFareType ? '' : 'Non-'}Refundable
          </p>
        </div>
      </Col>
      <Col md={4} lg xl={2}>
        <h5 className="text-emphasis mb-2">Price Range</h5>
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faTag}
            className="text-default me-2"
            transform="up-1"
          />
          <p className="text-default whitespace-nowrap mb-0">
            {currencyFormat(formData.priceRange[0])} -{' '}
            {currencyFormat(formData.priceRange[1])}
          </p>
        </div>
      </Col>
      <Col md={4} lg xl={2}>
        <h5 className="text-emphasis mb-2">Class</h5>
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faCouch}
            className="text-default me-2"
            transform="up-1"
          />
          <p className="text-default mb-0 capitalize">
            {formData.flightClass}
          </p>
        </div>
      </Col>

      <Col md={6} lg xl={2} className="lg:ms-auto">
        <h5 className="text-emphasis mb-2">Onward depart time</h5>
        <p className="mb-0 text-default">{formData.departTime}</p>
      </Col>
      <Col md={6} lg xl={2}>
        <h5 className="text-emphasis"> Return depart time</h5>
        <p className="mb-0 text-default">{formData.returnTime}</p>
      </Col>
    </Row>
  );
};

export default FlightPreviewForm;
