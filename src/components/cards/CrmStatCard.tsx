import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Badge, { BadgeBg } from 'components/base/Badge';
import { Card } from 'react-bootstrap';

interface CrmStatCardProps {
  icon: IconProp;
  color: string;
  label: string;
  title: string;
  value: number;
  badgeLabel: string;
  badgeBg: BadgeBg;
  footerText: string;
}

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
          <div className="sm:border-b sm:mb-6">
            <div className="flex items-center">
              <div
                className={`flex items-center icon-wrapper-sm shadow-${color}-100`}
                style={{ transform: 'rotate(-7.45deg)' }}
              >
                <FontAwesomeIcon
                  icon={icon}
                  className={`text-${color} text-lg z-1 ms-2`}
                />
              </div>
              <p className="text-subtle text-md mb-0 ms-2 mt-4">{label}</p>
            </div>
            <p className={`text-${color} mt-2 text-xl font-bold mb-0 sm:mb-6`}>
              {value} <span className="text-base text-default leading-lg">{title}</span>
            </p>
          </div>
          <div className="flex flex-col justify-center flex-between-end sm:block text-end sm:text-start">
            <Badge variant="phoenix" bg={badgeBg} className="text-sm mb-2">
              {badgeLabel}
            </Badge>
            <p className="mb-0 text-md text-subtle">{footerText}</p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CrmStatCard;
