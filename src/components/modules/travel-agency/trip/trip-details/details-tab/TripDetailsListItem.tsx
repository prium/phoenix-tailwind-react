import { PropsWithChildren } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { cn } from '@hummingbirdui/react';

/** `+ListItem(property)` in phoenix-tailwind mixins/travel-agency/trip/TripDetails.pug */
const TripDetailsListItem = ({
  className,
  children
}: PropsWithChildren<{ className?: string }>) => (
  <li className={cn('mb-1 flex', className)}>
    <FontAwesomeIcon
      icon={faCircle}
      className="text-secondary-light me-4 text-xs"
      transform="down-13 shrink-4"
    />
    {children}
  </li>
);

export default TripDetailsListItem;
