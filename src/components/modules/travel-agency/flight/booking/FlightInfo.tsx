import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCouch } from '@fortawesome/free-solid-svg-icons';
import { Card, Row, Col } from 'react-bootstrap';
import longArrowDown from 'assets/img/icons/long-arrow-down.svg';
import qatarAirlineLogo from 'assets/img/brand/qatar-airline.png';

interface FlightDetailsProps {
  time: string;
  date: string;
  airportCode: string;
  airportName: string;
}

const FlightDetails = ({
  time,
  date,
  airportCode,
  airportName
}: FlightDetailsProps) => (
  <Row className="items-center">
    <Col md={3} className="md:text-end mb-2 md:mb-0">
      <h2>{time}</h2>
      <p className="mb-0 whitespace-nowrap">{date}</p>
    </Col>
    <Col md="auto" className="hidden md:block text-center">
      <FontAwesomeIcon icon={faCircle} className="text-soft text-xs" />
    </Col>
    <Col md="auto">
      <h5>
        {airportCode} - {airportName}
        <span className="text-subtle font-normal">
          {' '}
          ({airportName} Intl. Airport)
        </span>
      </h5>
    </Col>
  </Row>
);

const FlightInfo = () => {
  return (
    <Card className="bg-subtle mb-10">
      <Card.Body className="p-6 lg:p-10">
        <Row className="g-0 justify-between">
          <Col lg={8} className="mb-8 lg:mb-0">
            <Row className="gy-6">
              <Col xs={12}>
                <FlightDetails
                  time="13:45"
                  date="23 January, 2023"
                  airportCode="DAC"
                  airportName="Dhaka"
                />
              </Col>

              <Col xs={12}>
                <Row className="items-center">
                  <Col xs="auto" md={3} className="md:text-end">
                    <p className="mb-0 text-soft">0h 45m</p>
                  </Col>
                  <Col xs="auto" className="md:text-center">
                    <img src={longArrowDown} alt="" />
                  </Col>
                  <Col xs="auto">
                    <p className="mb-0 text-soft">Qatar Airways</p>
                  </Col>
                </Row>
              </Col>

              <Col xs={12}>
                <FlightDetails
                  time="14:15"
                  date="23 January, 2023"
                  airportCode="CXB"
                  airportName="Cox’s Bazar"
                />
              </Col>
            </Row>
          </Col>

          {/* Right Panel for Airline Info */}
          <Col
            lg={4}
            className="lg:ps-10 pt-8 lg:pt-0 border-t lg:border-t-0 lg:border-s border-subtle"
          >
            <Row className="lg:g-4 md:g-0 g-4 flex-between-center">
              <Col md="auto" lg={12} className="whitespace-nowrap">
                <img
                  src={qatarAirlineLogo}
                  alt=""
                  width={32}
                  className="rounded-md"
                />
                <h5 className="whitespace-nowrap font-normal inline-block ms-2 mb-0">
                  Qatar Airways
                </h5>
              </Col>
              <Col xs="auto" lg={12}>
                <h5 className="whitespace-nowrap">Flight number</h5>
                <p className="mb-0">VQ 935</p>
              </Col>
              <Col xs="auto" lg={12}>
                <h5 className="whitespace-nowrap">Flight model</h5>
                <p className="mb-0">ATR735</p>
              </Col>
              <Col xs="auto" lg={12}>
                <h5 className="mb-0 whitespace-nowrap">
                  <FontAwesomeIcon icon={faCouch} className="me-2" />
                  Economy
                </h5>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default FlightInfo;
