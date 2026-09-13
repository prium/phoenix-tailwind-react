import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from '@hummingbirdui/react';
import { BadgeBg } from 'components/base/Badge';

/* the gold renders plain `span.badge` (no .badge-label wrapper, whose 1.4px
   translate would shift the text); literal classes for Tailwind */
const badgeClasses: Record<string, string> = {
  primary: 'badge badge-phoenix-primary text-sm mb-2',
  secondary: 'badge badge-phoenix-secondary text-sm mb-2',
  success: 'badge badge-phoenix-success text-sm mb-2',
  danger: 'badge badge-phoenix-danger text-sm mb-2',
  warning: 'badge badge-phoenix-warning text-sm mb-2',
  info: 'badge badge-phoenix-info text-sm mb-2'
};

/* Tailwind needs the literal class strings (no `before:bg-${color}/30`) */
const colorClasses: Record<string, { wrapper: string; text: string }> = {
  primary: {
    wrapper:
      "flex items-center relative before:absolute before:content-[''] before:top-2 before:start-[0.2rem] before:size-[1.299rem] before:rounded-[0.243rem] before:bg-primary/30 -rotate-[7.45deg]",
    text: 'text-primary'
  },
  info: {
    wrapper:
      "flex items-center relative before:absolute before:content-[''] before:top-2 before:start-[0.2rem] before:size-[1.299rem] before:rounded-[0.243rem] before:bg-info/30 -rotate-[7.45deg]",
    text: 'text-info'
  }
};

interface CrmStatCardProps {
  icon: IconProp;
  color: 'primary' | 'info';
  label: string;
  title: string;
  value: number;
  badgeLabel: string;
  badgeBg: BadgeBg;
  footerText: string;
}

/** `+CrmStats` in mixins/dashboard/CRM/CrmStats.pug */
const CrmStatCard = ({
  icon,
  color,
  label,
  title,
  value,
  badgeLabel,
  footerText,
  badgeBg
}: CrmStatCardProps) => {
  return (
    <Card className="h-full">
      <Card.Body>
        <div className="flex sm:block justify-between">
          <div className="sm:border-b border-subtle sm:mb-7">
            <div className="flex items-center">
              <div className={colorClasses[color].wrapper}>
                <FontAwesomeIcon
                  icon={icon}
                  className={`${colorClasses[color].text} text-lg z-1 ms-2`}
                />
              </div>
              <p className="text-subtle text-md mb-0 ms-2 mt-4">{label}</p>
            </div>
            <p
              className={`${colorClasses[color].text} mt-2 text-xl font-bold mb-0 sm:mb-6`}
            >
              {value} <span className="text-base text-default">{title}</span>
            </p>
          </div>
          <div className="flex flex-col justify-center flex-between-end sm:block text-end sm:text-start">
            <span className={badgeClasses[badgeBg]}>{badgeLabel}</span>
            <p className="mb-0 text-md text-subtle">{footerText}</p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CrmStatCard;
