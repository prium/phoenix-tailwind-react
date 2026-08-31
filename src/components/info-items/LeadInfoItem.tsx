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
        {/* the gold glyph is a font icon with a 1lh line box — give the svg the same */}
        <span className="me-2 flex h-[1lh] items-center">
          <Unicon icon={icon} fill="currentColor" size={16} />
        </span>
        <h5 className="text-highlight mb-0">{label}</h5>
      </div>
      {value && <p className="mb-0 text-muted">{value}</p>}
      {children}
    </div>
  );
};

export default LeadInfoItem;
