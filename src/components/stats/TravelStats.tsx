import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import type { PropsWithChildren } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { cn } from '@hummingbirdui/react';
import { BadgeBg } from 'components/base/Badge';

interface TravelStatsProps {
  title: string;
  amount: string;
  badgeLabel: string;
  subtitle?: string;
  badgeBg?: BadgeBg;
  badgeIcon?: IconProp;
  /** gold: `mt-6 md:mt-0` for Total Value, `mt-4 md:mt-0` for the others */
  amountContainerClass?: string;
  subtitleNowrap?: boolean;
}

/**
 * One stat block of the Travel Agency dashboard "Stats" strip.
 * The gold badges here have no `.badge-label` wrapper (plain span), so the
 * badge markup is written out instead of using `components/base/Badge`.
 */
const TravelStats = ({
  children,
  title,
  amount,
  subtitle = 'From last month',
  badgeLabel,
  badgeBg = 'primary',
  badgeIcon = faPlus,
  amountContainerClass = 'mt-4 md:mt-0',
  subtitleNowrap
}: PropsWithChildren<TravelStatsProps>) => {
  return (
    <>
      <h5 className="text-default mb-6">{title}</h5>
      <div className="md:flex flex-between-center">
        {children}
        <div className={amountContainerClass}>
          <h3 className="text-highlight mb-2.25">{amount}</h3>
          <span
            className={`badge badge-phoenix-${badgeBg} me-2 text-sm rounded-sm`}
          >
            <FontAwesomeIcon icon={badgeIcon} className="me-1" />
            {badgeLabel}
          </span>
          <span
            className={cn(
              'text-md text-muted',
              subtitleNowrap && 'text-nowrap',
              'block sm:inline mt-1'
            )}
          >
            {subtitle}
          </span>
        </div>
      </div>
    </>
  );
};

export default TravelStats;
