import React from 'react';
import { Form, Modal, Row, Col } from 'react-bootstrap';
import Button from 'components/base/Button';

import {
  faMagnifyingGlass,
  faRotate,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  FilterFormFlightAirlines,
  FilterFormFlightCabin,
  FilterFormFlightDuration,
  FilterFormFlightPriceCalculator,
  FilterFormFlightStops
} from 'components/modules/travel-agency/flight/homepage/FlightFilterFormContent';
import FilterFormFlightAircraft from 'components/modules/travel-agency/flight/homepage/FilterFormFlightAircraft';
import FilterFormFlightAirports from 'components/modules/travel-agency/flight/homepage/FilterFormFlightAirports';
import FilterFormFlightBaggage from 'components/modules/travel-agency/flight/homepage/FilterFormFlightBaggage';
import FilterFormFlightSchedule from 'components/modules/travel-agency/flight/homepage/FilterFormFlightSchedule';

interface FlightFilterModalProps {
  show: boolean;
  handleModalClose: () => void;
}

const FlightFilterModal = ({
  show,
  handleModalClose
}: FlightFilterModalProps) => {
  return (
    <Modal
      show={show}
      onHide={handleModalClose}
      className="p-0 border-0"
      centered
      fullscreen={'md-down'}
      dialogClassName="modal-53w"
      scrollable={true}
    >
      <Modal.Header className="p-6 pb-4 items-start border-0">
        <div>
          <h4 id="flightFilterModalLabel" className="mb-2 text-highlight">
            Filter
          </h4>
          <p className="mb-0">
            Search for flights according to your preferences
          </p>
        </div>
        <Button className="p-1 ms-auto" onClick={handleModalClose}>
          <FontAwesomeIcon icon={faTimes} className="text-sm btn-close" />
        </Button>
      </Modal.Header>
      <Modal.Body className="scrollbar px-6 pt-4 pb-0">
        <Form>
          <Row className="g-8">
            <Col md={6}>
              <Row className="g-0">
                <Col xs={12} className="mb-10">
                  <FilterFormFlightStops />
                </Col>
                <Col xs={12} className="mb-10">
                  <FilterFormFlightSchedule />
                </Col>
                <Col xs={12} className="mb-10">
                  <FilterFormFlightAirlines />
                </Col>
                <Col xs={12}>
                  <FilterFormFlightDuration />
                </Col>
              </Row>
            </Col>
            <Col md={6}>
              <Row className="g-0">
                <Col xs={12} className="mb-10">
                  <FilterFormFlightPriceCalculator />
                </Col>
                <Col xs={12} className="mb-10">
                  <FilterFormFlightAirports />
                </Col>
                <Col xs={12} className="mb-10">
                  <FilterFormFlightBaggage />
                </Col>
                <Col xs={12} className="mb-10">
                  <FilterFormFlightCabin />
                </Col>
                <Col xs={12}>
                  <FilterFormFlightAircraft />
                </Col>
              </Row>
            </Col>
          </Row>
          <div className="modal-footer border-0 px-0 pt-4 pb-6">
            <div className="w-full flex flex-wrap gap-4 border-t border-subtle pt-6">
              <Button
                variant="phoenix-primary"
                className="m-0 whitespace-nowrap"
                size="lg"
              >
                <FontAwesomeIcon icon={faRotate} className="sm:me-2" />
                <span className="hidden sm:inline-block">Reset filter</span>
              </Button>
              <Button
                variant="primary"
                className="m-0 whitespace-nowrap flex-1"
                type="submit"
                size="lg"
                startIcon={
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="me-2" />
                }
              >
                Update results
              </Button>
            </div>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FlightFilterModal;
