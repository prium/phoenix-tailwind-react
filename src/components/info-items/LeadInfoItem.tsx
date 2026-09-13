import { Icon } from '@iconscout/react-unicons';
import { cn } from '@hummingbirdui/react';
import Unicon from 'components/base/Unicon';
import { PropsWithChildren } from 'react';

interface LeadInfoItemInterface {
  icon: Icon;
  label: string;
  value?: string;
  className?: string;
}

/** info rows of `+AboutThisLead` / `+Address` in mixins/crm/LeadDetails.pug */
const LeadInfoItem = ({
  className,
  label,
  value,
  icon,
  children
}: PropsWithChildren<LeadInfoItemInterface>) => {
  return (
    <div className={cn(className)}>
      <div className="flex items-center mb-1">
        <Unicon
          icon={icon}
          lineBox
          wrapperClassName="me-2"
          fill="currentColor"
          size={16}
        />
        <h5 className="text-highlight mb-0">{label}</h5>
      </div>
      {value && <p className="mb-0 text-muted">{value}</p>}
      {children}
    </div>
  );
};

export default LeadInfoItem;
