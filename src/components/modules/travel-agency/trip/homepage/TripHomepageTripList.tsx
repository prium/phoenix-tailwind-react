import type { TripHomepageItems } from 'data/travel-agency/customer/trip';
import { Row } from '@hummingbirdui/react';
import TripShowcaseItem from '../TripShowcaseItem';

interface TripHomepageTripListProps {
  tripItems: TripHomepageItems[];
}

/** trip list section in phoenix-tailwind pug/apps/travel-agency/trip/homepage.pug */
const TripHomepageTripList = ({ tripItems }: TripHomepageTripListProps) => {
  return (
    <section className="pt-0 pb-16 -mt-26">
      <div className="container-medium">
        <Row className="g-4">
          {tripItems.map(item => (
            <TripShowcaseItem key={item.id} showcaseItem={item} />
          ))}
        </Row>
        <div className="mt-8 relative text-center">
          <hr className="m-0 absolute top-1/2 -translate-y-1/2 w-full border-subtle" />
          <button
            type="button"
            className="btn btn-phoenix-secondary rounded-full relative"
          >
            Show more
          </button>
        </div>
      </div>
    </section>
  );
};

export default TripHomepageTripList;
