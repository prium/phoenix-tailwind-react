import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '@hummingbirdui/react';
import {
  Rating as ReactRating,
  RatingProps as ReactRatingProps
} from 'react-simple-star-rating';
import { useAppContext } from 'providers/AppProvider';

export interface RatingProps extends ReactRatingProps {
  iconClass?: string;
  /** Tailwind colour name, e.g. `warning` → `text-warning` */
  fillIconColor?: string;
  emptyIconColor?: string;
}

const Rating = ({
  iconClass,
  fillIconColor = 'warning',
  emptyIconColor = 'warning-light',
  ...rest
}: RatingProps) => {
  const {
    config: { isRTL }
  } = useAppContext();
  return (
    <ReactRating
      allowFraction
      rtl={isRTL}
      fillIcon={
        <FontAwesomeIcon
          icon={faStar}
          className={cn(iconClass, `text-${fillIconColor}`)}
        />
      }
      emptyIcon={
        <FontAwesomeIcon
          icon={farStar}
          className={cn(iconClass, `text-${emptyIconColor}`)}
        />
      }
      {...rest}
    />
  );
};

export default Rating;
