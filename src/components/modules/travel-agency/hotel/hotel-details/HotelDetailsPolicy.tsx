import { Card, cn, Col, Progress, Row } from '@hummingbirdui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBaby,
  faClock,
  faCreditCard,
  faPaw
} from '@fortawesome/free-solid-svg-icons';
import masterCard from 'assets/img/logos/mastercard.png';
import americanExpress from 'assets/img/logos/american_express.png';
import visa from 'assets/img/logos/visa.png';

/** Check in / Check out time bars of `+Policy` (HotelDetailsTabContent.pug) */
const PolicyTimeCard = ({
  label,
  align
}: {
  label: string;
  align: 'start' | 'end';
}) => (
  <Card className="bg-subtle mb-4">
    <Card.Body>
      <Row className="g-4">
        <Col sm={3}>
          <h5 className="mb-0">
            <FontAwesomeIcon
              icon={faClock}
              className="text-md me-1"
              transform="up-1"
            />
            {label}
          </h5>
        </Col>
        <Col sm={9}>
          <Progress
            value={50}
            aria-label="Basic example"
            className="overflow-visible h-2"
          >
            <Progress.Bar
              className={cn('relative overflow-visible rounded-md', {
                'ms-auto': align === 'end'
              })}
            >
              <span
                className={cn('absolute mt-8 text-default text-sm', {
                  'end-0': align === 'start'
                })}
              >
                12 am
              </span>
            </Progress.Bar>
          </Progress>
          <div className="flex flex-between-center w-full">
            <span className="text-default text-sm mt-1">6 am</span>
            <span className="text-default text-sm mt-1">6 pm</span>
          </div>
        </Col>
      </Row>
    </Card.Body>
  </Card>
);

/** `+Policy` in mixins/travel-agency/hotel/HotelDetailsTabContent.pug */
const HotelDetailsPolicy = () => {
  return (
    <>
      <h3 className="mb-8">Policy</h3>
      <PolicyTimeCard label="Check in" align="end" />
      <PolicyTimeCard label="Check out" align="start" />
      <Card className="bg-subtle mb-4">
        <Card.Body>
          <Row className="g-4">
            <Col sm={3}>
              <h5 className="mb-0">
                <FontAwesomeIcon
                  icon={faBaby}
                  className="text-md me-1"
                  transform="up-1"
                />
                Baby policy
              </h5>
            </Col>
            <Col sm={9}>
              <h5 className="mb-2 text-success">Allowed</h5>
              <p className="mb-0 text-default">
                Children under the age of five can stay in the same room as
                their parents and receive complimentary breakfast. Children from
                5 to 10 years old will be charged $1,500 for extra bed and
                breakfast. Extra Breakfast Charge: $400 NET per night (for
                adults). Extra Breakfast Charge $200 NET Per Night (Above 5 to
                11 Years)
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card className="bg-subtle mb-4">
        <Card.Body>
          <Row className="g-4 items-center">
            <Col xs={5} sm={3}>
              <h5 className="mb-0">
                <FontAwesomeIcon
                  icon={faPaw}
                  className="text-md me-1"
                  transform="up-1"
                />
                Pet policy
              </h5>
            </Col>
            <Col xs={7} sm={9}>
              <h5 className="mb-0 text-warning">Not Allowed</h5>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card className="bg-subtle">
        <Card.Body>
          <Row className="g-4 items-center">
            <Col xs={5} sm={3}>
              <h5 className="mb-0">
                <FontAwesomeIcon
                  icon={faCreditCard}
                  className="text-md me-1"
                  transform="up-1"
                />
                Payment
              </h5>
            </Col>
            <Col xs={7} sm={9}>
              <img src={masterCard} alt="" className="me-4" />
              <img src={americanExpress} alt="" className="me-4" />
              <img src={visa} alt="" />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default HotelDetailsPolicy;
