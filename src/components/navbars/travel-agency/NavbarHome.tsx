import {
  faHotel,
  faPlane,
  faSuitcaseRolling,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '@hummingbirdui/react';
import { Link } from 'react-router';

interface NavTab {
  label: string;
  icon: IconDefinition;
  path: string;
}

const tabs: NavTab[] = [
  {
    label: 'Hotel',
    icon: faHotel,
    path: `/apps/travel-agency/hotel/customer/homepage`
  },
  {
    label: 'Flight',
    icon: faPlane,
    path: `/apps/travel-agency/flight/homepage`
  },
  {
    label: 'Trip',
    icon: faSuitcaseRolling,
    path: `/apps/travel-agency/trip/homepage`
  }
];

/** `+NavbarHome` in phoenix-tailwind mixins/travel-agency/common/NavbarHome.pug */
const NavbarHome = ({ currentPage }: { currentPage: string }) => {
  return (
    <nav className="navbar navbar-landing navbar-home navbar-expand py-6 px-0">
      <ul className="navbar-nav mx-auto mt-4 lg:mt-0 gap-2">
        {tabs.map(tab => (
          <li className="nav-item" key={tab.label}>
            <Link
              className={cn('nav-link font-bold rounded-lg', {
                active: currentPage === tab.label
              })}
              aria-current="page"
              to={tab.path}
            >
              <FontAwesomeIcon icon={tab.icon} className="me-2" />
              {tab.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarHome;
