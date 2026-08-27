import { JSX } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faHeart,
  faHome,
  faShoppingCart,
  faStar,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EcomProfilePersonalInfo from 'components/forms/EcomProfilePersonalInfo';
import EcomProfileOrdersTable from 'components/tables/EcomProfileOrdersTable';
import EcomProfileReviewsTable from 'components/tables/EcomProfileReviewsTable';
import EcomProfileStoresTable from 'components/tables/EcomProfileStoresTable';
import EcomWishlistTable from 'components/tables/EcomWishlistTable';
import { Tabs, cn } from '@hummingbirdui/react';

interface TabLink {
  id: string;
  label: string;
  number?: number;
  icon: IconProp;
  content: JSX.Element;
}

const tabLinks: TabLink[] = [
  {
    id: 'orders',
    label: 'Orders',
    number: 35,
    icon: faShoppingCart,
    content: <EcomProfileOrdersTable />
  },
  {
    id: 'review',
    label: 'Reviews',
    number: 24,
    icon: faStar,
    content: <EcomProfileReviewsTable />
  },
  {
    id: 'wishlist',
    label: 'Wishlist',
    icon: faHeart,
    content: <EcomWishlistTable />
  },
  {
    id: 'stores',
    label: 'Stores',
    icon: faHome,
    content: <EcomProfileStoresTable />
  },
  {
    id: 'personal-info',
    label: 'Personal info',
    icon: faUser,
    content: <EcomProfilePersonalInfo />
  }
];

/** `#myTabdiv` nav-underline tabs in apps/e-commerce/landing/profile.pug */
const ProfileDetailsTab = () => {
  return (
    <Tabs defaultValue="orders">
      <div className="scrollbar">
        <Tabs.List
          variant="underline"
          className="text-md flex-nowrap mb-4 pb-1"
        >
          {tabLinks.map((item, index) => (
            <Tabs.Trigger
              key={item.id}
              value={item.id}
              className={cn('whitespace-nowrap', {
                'me-4': index !== tabLinks.length - 1
              })}
            >
              <FontAwesomeIcon icon={item.icon} className="me-2" />
              {item.label}{' '}
              {item.number && (
                <span className="text-subtle font-normal">({item.number})</span>
              )}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      </div>

      {tabLinks.map(item => (
        <Tabs.Content key={item.id} value={item.id}>
          {item.content}
        </Tabs.Content>
      ))}
    </Tabs>
  );
};

export default ProfileDetailsTab;
