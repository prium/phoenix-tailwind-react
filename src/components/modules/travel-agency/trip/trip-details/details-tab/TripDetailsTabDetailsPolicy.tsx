import { Policy } from 'data/travel-agency/customer/trip';
import { Card } from '@hummingbirdui/react';
import classNames from 'classnames';
import TripDetailsListItem from './TripDetailsListItem';

interface TripDetailsTabDetailsPolicyProps {
  policies: Policy[];
}

/** "Policy" body in mixins/travel-agency/trip/TripDetails.pug */
const TripDetailsTabDetailsPolicy = ({
  policies
}: TripDetailsTabDetailsPolicyProps) => {
  return (
    <div className="py-10 px-6">
      {policies.map((policy, index) => (
        <Card
          key={policy.id}
          className={classNames('bg-transparent', {
            'mb-3': index !== policies.length - 1
          })}
        >
          <Card.Body>
            <h5 className="mb-3">{policy.label}</h5>
            <ul className="list-none mb-0 p-0">
              {policy.policyItems.map((item, itemIndex) => (
                <TripDetailsListItem
                  key={item.id}
                  className={classNames({
                    'mb-3': itemIndex !== policy.policyItems.length - 1
                  })}
                >
                  {item.policyItem}
                </TripDetailsListItem>
              ))}
            </ul>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default TripDetailsTabDetailsPolicy;
