import React from 'react';
import { SelectedTrip } from 'data/travel-agency/customer/trip';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faClock, faUser } from '@fortawesome/free-solid-svg-icons';
import { numberFormat } from 'helpers/utils';

interface TripSummaryCardProps {
  selectedTrip: SelectedTrip;
}
const TripSummaryCard = ({ selectedTrip }: TripSummaryCardProps) => {
  return (
    <Card>
      <Card.Body>
        <img
          src={selectedTrip.image}
          alt=""
          className="w-full object-cover rounded-md"
          height={220}
        />
        <h3 className="mb-6 mt-8">{selectedTrip.title}</h3>
        <h5 className="font-normal mb-4">
          <FontAwesomeIcon
            icon={faCalendar}
            className="text-soft me-2"
          />
          {selectedTrip.date}
        </h5>
        <h5 className="font-normal mb-4">
          <FontAwesomeIcon
            icon={faUser}
            className="text-soft me-2"
          />
          {selectedTrip.people}
        </h5>
        <h5 className="font-normal mb-4">
          <FontAwesomeIcon
            icon={faClock}
            className="text-soft me-2"
          />
          Pickup time: <span className="ms-4">{selectedTrip.pickupTime}</span>
        </h5>
        <h5 className="font-normal mb-8">
          <FontAwesomeIcon
            icon={faClock}
            className="text-soft me-2"
          />
          Drop off time:{' '}
          <span className="ms-2">{selectedTrip.dropOffTime}</span>
        </h5>
        <div className="p-4 rounded-md bg-subtle">
          <div className="flex flex-between-center mb-2">
            <h5 className="mb-0 font-normal">Booking Fee</h5>
            <h5 className="mb-0 font-normal">
              USD{' '}
              {numberFormat(selectedTrip.bookingFee, 'standard', {
                minimumFractionDigits: 2
              })}
            </h5>
          </div>
          <div className="flex flex-between-center mb-4">
            <h5 className="mb-0 font-normal">Subtotal</h5>
            <h5 className="mb-0 font-normal">
              USD{' '}
              {numberFormat(selectedTrip.subTotal, 'standard', {
                minimumFractionDigits: 2
              })}
            </h5>
          </div>
          <div className="flex flex-between-center">
            <h4 className="mb-0">Total</h4>
            <h4 className="mb-0">
              USD{' '}
              {numberFormat(
                selectedTrip.bookingFee + selectedTrip.subTotal,
                'standard',
                {
                  minimumFractionDigits: 2
                }
              )}
            </h4>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TripSummaryCard;
