import { JSX, useState } from 'react';
import { cn } from '@hummingbirdui/react';
import TripDetailsTabDetailsContent from './TripDetailsTabDetailsContent';
import TripDetailsTabReviewContent from './TripDetailsTabReviewContent';
import {
  tripDetailsTabDetailItems,
  tripDetailsReviews
} from 'data/travel-agency/customer/trip';

interface TabItemProps {
  id: string;
  name: string;
  content: JSX.Element;
}

const tabItems: TabItemProps[] = [
  {
    id: 'pills-details',
    name: 'Details',
    content: (
      <TripDetailsTabDetailsContent
        tripDetailsItems={tripDetailsTabDetailItems}
      />
    )
  },
  {
    id: 'pills-review',
    name: 'Review',
    content: (
      <TripDetailsTabReviewContent tripDetailsReviews={tripDetailsReviews} />
    )
  }
];

/** gold: `ul.nav.nav-pills.flex-nowrap.my-8` + `.tab-content#trip-details-tab-content` */
const TripDetailsTab = () => {
  const [activeTab, setActiveTab] = useState(tabItems[0].id);
  return (
    <>
      <ul className="nav nav-pills flex-nowrap my-8" role="tablist">
        {tabItems.map(item => (
          <li className="nav-item" key={item.id}>
            <button
              type="button"
              className={cn('nav-link', { active: activeTab === item.id })}
              id={`${item.id}-tab`}
              role="tab"
              aria-controls={item.id}
              aria-selected={activeTab === item.id}
              onClick={() => setActiveTab(item.id)}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
      <div className="tab-content" id="trip-details-tab-content">
        {tabItems.map(item => (
          <div
            key={item.id}
            className={cn('tab-pane fade', {
              'show active': activeTab === item.id
            })}
            id={item.id}
            role="tabpanel"
            aria-labelledby={`${item.id}-tab`}
            tabIndex={0}
          >
            {item.content}
          </div>
        ))}
      </div>
    </>
  );
};

export default TripDetailsTab;
