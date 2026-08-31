import { IncludeOrExclude } from 'data/travel-agency/customer/trip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import TripDetailsListItem from './TripDetailsListItem';

interface TripDetailsTabDetailsIncludedProps {
  includedItems: IncludeOrExclude;
}

/** "What are included or excluded" body in mixins/travel-agency/trip/TripDetails.pug */
const TripDetailsTabDetailsIncluded = ({
  includedItems
}: TripDetailsTabDetailsIncludedProps) => {
  return (
    <div className="py-10 px-6">
      <h5 className="mb-4 text-highlight">
        <FontAwesomeIcon icon={faThumbsUp} className="me-2" />
        Included
      </h5>
      <ul className="list-none p-0 mb-6">
        {includedItems.include.map(item => (
          <TripDetailsListItem key={item.id}>
            {item.encompass}
          </TripDetailsListItem>
        ))}
      </ul>
      <h5 className="mb-4 text-highlight">
        <FontAwesomeIcon icon={faThumbsDown} className="me-2" />
        Excluded
      </h5>
      <ul className="list-none p-0 mb-0">
        {includedItems.exclude.map(item => (
          <TripDetailsListItem key={item.id}>
            {item.encompass}
          </TripDetailsListItem>
        ))}
      </ul>
    </div>
  );
};

export default TripDetailsTabDetailsIncluded;
