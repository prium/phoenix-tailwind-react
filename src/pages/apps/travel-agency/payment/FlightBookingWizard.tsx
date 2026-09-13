import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faCheck,
  faMoneyBill,
  faPlane,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '@hummingbirdui/react';
import { Link } from 'react-router';

interface WizardItem {
  name: string;
  icon: IconProp;
  url: string;
}

interface FlightBookingWizardProps {
  activeItem: string;
}

const wizardItems: WizardItem[] = [
  {
    name: 'Flight',
    icon: faPlane,
    url: '/apps/travel-agency/flight/homepage'
  },
  {
    name: 'Booking',
    icon: faUser,
    url: '/apps/travel-agency/flight/booking'
  },
  {
    name: 'Payment',
    icon: faMoneyBill,
    url: '/apps/travel-agency/flight/payment'
  }
];

/** `+FlightBookingWizard` in mixins/travel-agency/flight/FlightBookingWizard.pug */
const FlightBookingWizard = ({ activeItem }: FlightBookingWizardProps) => {
  const activeIndex = wizardItems.findIndex(i => i.name === activeItem);

  return (
    <div className="theme-wizard flight-booking-wizard w-72.5">
      <ul className="nav justify-between nav-wizard nav-wizard-success">
        {wizardItems.map((item, index) => {
          const isDone = index < activeIndex;
          return (
            <li className="nav-item" key={item.name}>
              <Link
                to={item.url}
                data-wizard-step={index + 1}
                className={cn('nav-link font-semibold', {
                  'done complete': isDone,
                  active: activeItem === item.name
                })}
              >
                <div className="inline-block text-center">
                  <span className="nav-item-circle-parent">
                    <span className="block nav-item-circle">
                      <FontAwesomeIcon icon={isDone ? faCheck : item.icon} />
                    </span>
                  </span>
                  <span className="mt-1 text-md">{item.name}</span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FlightBookingWizard;
