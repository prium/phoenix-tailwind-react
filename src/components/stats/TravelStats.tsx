import Badge, { BadgeBg } from 'components/base/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import type { PropsWithChildren } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface TravelStatsProps {
  title: string;
  amount: string;
  badgeLabel: string;
  subtitle?: string;
  badgeBg?: BadgeBg;
  badgeIcon?: IconProp;
}

const TravelStats = ({
  children,
  title,
  amount,
  subtitle = 'From last month',
  badgeLabel,
  badgeBg = 'primary',
  badgeIcon = faPlus
}: PropsWithChildren<TravelStatsProps>) => {
  return (
    <>
      <h5 className="text-default mb-6">{title}</h5>
      <div className="md:flex flex-between-center">
        {children}
        <div className="mt-6 md:mt-0">
          <h3 className="text-highlight mb-2"> {amount}</h3>
          <Badge variant="phoenix" bg={badgeBg} className="text-sm me-2">
            <FontAwesomeIcon icon={badgeIcon} className="me-1" />
            {badgeLabel}
          </Badge>
          <span className="text-md text-muted block sm:inline mt-1">
            {subtitle}
          </span>
        </div>
      </div>
    </>
  );
};

export default TravelStats;
