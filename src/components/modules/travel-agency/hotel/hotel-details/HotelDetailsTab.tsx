import { useState, type JSX } from 'react';
import { cn } from '@hummingbirdui/react';
import HotelDetailsAvailability from './HotelDetailsAvailability';
import HotelDetailsDescription from './HotelDetailsDescription';
import HotelDetailsPolicy from './HotelDetailsPolicy';
import HotelDetailsFacilities from './HotelDetailsFacilities';
import HotelReviews from './HotelReviews';
import {
  availableRooms,
  facilities,
  charges,
  ratings,
  reviews
} from 'data/travel-agency/customer/hotelDetails';

interface TabItemProps {
  name: string;
  content: JSX.Element;
}

const generateTabItems = (activeKey: string): TabItemProps[] => [
  {
    name: 'Availability',
    content: <HotelDetailsAvailability availableRooms={availableRooms} />
  },
  {
    name: 'Description',
    content: <HotelDetailsDescription activeKey={activeKey} />
  },
  {
    name: 'Policy',
    content: <HotelDetailsPolicy />
  },
  {
    name: 'Facilities',
    content: (
      <HotelDetailsFacilities facilities={facilities} charges={charges} />
    )
  },
  {
    name: 'Reviews',
    content: <HotelReviews ratings={ratings} reviews={reviews} />
  }
];

/** `+HotelDetailsTab` in mixins/travel-agency/hotel/HotelDetailsTab.pug */
const HotelDetailsTab = () => {
  const [activeKey, setActiveKey] = useState('availability');

  const tabItems = generateTabItems(activeKey);

  return (
    <>
      <div className="scrollbar mt-8 mb-3.75 pb-4">
        <ul className="nav nav-pills flex-nowrap" role="tablist">
          {tabItems.map(item => {
            const key = item.name.toLowerCase();
            return (
              <li className="nav-item" key={item.name}>
                <button
                  type="button"
                  role="tab"
                  id={`pills-${key}-tab`}
                  aria-selected={activeKey === key}
                  className={cn('nav-link', { active: activeKey === key })}
                  onClick={() => setActiveKey(key)}
                >
                  {item.name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="tab-content" id="hotel-details-tab-content">
        {tabItems.map(item => {
          const key = item.name.toLowerCase();
          return (
            <div
              key={item.name}
              role="tabpanel"
              id={`pills-${key}`}
              aria-labelledby={`pills-${key}-tab`}
              tabIndex={0}
              className={cn('tab-pane fade', {
                'show active': activeKey === key
              })}
            >
              {item.content}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HotelDetailsTab;
