import React from 'react';
import { Col, Form, Modal } from 'react-bootstrap';
import Button from 'components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendar,
  faChevronRight,
  faXmark
} from '@fortawesome/free-solid-svg-icons';
import { Row } from 'react-bootstrap';
import DatePicker from 'components/base/DatePicker';
import InputGroupCounter from 'components/common/InputGroupCounter';
import { tripDetailsModalPricingPlan } from 'data/travel-agency/customer/trip';
import TripDetailsModalPricingPlanCard from 'components/cards/TripDetailsModalPricingPlanCard';
import { Link } from 'react-router';

interface TripDetailsAvailabilityModalProps {
  show: boolean;
  onHide: () => void;
}

const TripDetailsAvailabilityModal = ({
  show,
  onHide
}: TripDetailsAvailabilityModalProps) => {
  return (
    <Modal show={show} onHide={onHide} centered dialogClassName="modal-md">
      <Modal.Header className="border-0 justify-between items-start gap-8 px-6 pt-6 pb-4">
        <div>
          <h2 id="flightFilterModalLabel" className="mb-0">
            Walk where the king walked once in Wakanda
          </h2>
        </div>
        <Button
          className="ms-auto p-0 text-xl text-soft"
          onClick={onHide}
        >
          <FontAwesomeIcon icon={faXmark} />
        </Button>
      </Modal.Header>
      <Modal.Body className="p-6">
        <Form>
          <Row className="g-8 mb-6">
            <Col md={5}>
              <label
                htmlFor="tripDate"
                className="font-bold mb-2 text-lg text-emphasis px-0"
              >
                Choose your preferred date
              </label>
              <div className="form-icon-container flatpickr-input-container">
                <DatePicker
                  render={(_, ref) => {
                    return (
                      <>
                        <Form.Control
                          type="text"
                          placeholder="22 May, 2024"
                          ref={ref}
                          id="tripDate"
                          className="form-icon-input"
                        />
                        <FontAwesomeIcon
                          icon={faCalendar}
                          className="form-icon text-default text-md"
                          transform="up-2"
                        />
                      </>
                    );
                  }}
                  hideIcon={true}
                  options={{
                    dateFormat: 'd-m-Y'
                  }}
                />
              </div>
            </Col>
            <Col md={7}>
              <Row className="g-4">
                <Col xs="auto" sm={6}>
                  <label
                    htmlFor="adults"
                    className="font-bold mb-2 text-lg text-emphasis"
                  >
                    Adults
                  </label>
                  <InputGroupCounter
                    id="adults"
                    inputGap="gap-2"
                    buttonClasses="rounded px-3"
                    iconClasses="px-0"
                  />
                </Col>
                <Col xs="auto" sm={6}>
                  <label
                    htmlFor="children"
                    className="font-bold mb-2 text-lg text-emphasis"
                  >
                    Children
                  </label>
                  <InputGroupCounter
                    id="children"
                    inputGap="gap-2"
                    buttonClasses="rounded px-3"
                    iconClasses="px-0"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          {tripDetailsModalPricingPlan.map(pricingPlan => (
            <TripDetailsModalPricingPlanCard
              key={pricingPlan.id}
              pricingPlan={pricingPlan}
            />
          ))}
          <Link to="/apps/travel-agency/trip/checkout">
            <Button variant="primary" className="w-full mt-10" size="lg">
              Proceed to booking
              <FontAwesomeIcon icon={faChevronRight} className="text-md ms-2" />
            </Button>
          </Link>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default TripDetailsAvailabilityModal;
