import { Accessibility } from 'data/travel-agency/customer/trip';
import TripDetailsListItem from './TripDetailsListItem';

interface TripDetailsTabDetailsAccessibilityProps {
  accessibility: Accessibility;
}

/** "Accessibility" body in mixins/travel-agency/trip/TripDetails.pug */
const TripDetailsTabDetailsAccessibility = ({
  accessibility
}: TripDetailsTabDetailsAccessibilityProps) => {
  return (
    <div className="py-10 px-6">
      <ul className="list-none p-0">
        {accessibility.items.map(item => (
          <TripDetailsListItem key={item}>{item}</TripDetailsListItem>
        ))}
      </ul>
      <p>
        {accessibility.query}{' '}
        <span className="text-emphasis font-semibold">
          {accessibility.promo}
        </span>
      </p>
      <a href={`tel:${accessibility.tel.split(' ').join('')}`}>
        {accessibility.tel}
      </a>
    </div>
  );
};

export default TripDetailsTabDetailsAccessibility;
