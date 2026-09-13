import { JourneyDetail } from 'data/travel-agency/customer/trip';
import { Card } from '@hummingbirdui/react';
import classNames from 'classnames';

interface TripDetailsTabDetailsDepartureProps {
  departureItems: JourneyDetail[];
}

/** "Departure and return" body in mixins/travel-agency/trip/TripDetails.pug */
const TripDetailsTabDetailsDeparture = ({
  departureItems
}: TripDetailsTabDetailsDepartureProps) => {
  return (
    <div className="py-10 px-6">
      {departureItems.map((item, index) => (
        <Card
          key={item.id}
          className={classNames('bg-transparent', {
            'mb-3': departureItems.length - 1 !== index
          })}
        >
          <Card.Body>
            <h5 className="mb-3">{item.label}</h5>
            <p className="mb-0">{item.description}</p>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default TripDetailsTabDetailsDeparture;
