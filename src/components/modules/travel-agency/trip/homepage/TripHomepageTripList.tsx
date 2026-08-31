import React from 'react';
import type { TripHomepageItems } from 'data/travel-agency/customer/trip';
import { Container, Row } from 'react-bootstrap';
import Button from 'components/base/Button';
import TripShowcaseItem from '../TripShowcaseItem';

interface TripHomepageTripListProps {
  tripItems: TripHomepageItems[];
}

const TripHomepageTripList = ({ tripItems }: TripHomepageTripListProps) => {
  return (
    <section className="pt-0 pb-16 -mt-26">
      <Container fluid="medium">
        <Row className="g-4">
          {tripItems.map(item => (
            <TripShowcaseItem key={item.id} showcaseItem={item} />
          ))}
        </Row>
        <div className="mt-8 relative text-center">
          <hr className="m-0 absolute top-1/2 top-1/2 -translate-y-1/2 w-full" />
          <Button
            variant="phoenix-secondary"
            className="rounded-full relative"
          >
            Show more
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default TripHomepageTripList;
