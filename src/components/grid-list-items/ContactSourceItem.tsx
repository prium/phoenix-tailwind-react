import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '@hummingbirdui/react';

export interface ContactSourceItem {
  value: number;
  label: string;
  /** literal `text-*` class (Tailwind cannot see interpolation) */
  iconClass: string;
  className?: string;
}

/** `+ContactBySource` in mixins/dashboard/CRM/Crm.pug */
const ContactSourceItem = ({
  value,
  label,
  iconClass,
  className
}: ContactSourceItem) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center sm:items-start md:flex-row md:justify-between 2xl:flex-col p-4 sm:ps-4 md:ps-6 md:p-4 h-full',
        className
      )}
    >
      <div className="flex items-center mb-1">
        <FontAwesomeIcon
          icon={faSquare}
          className={cn('text-xs me-2', iconClass)}
          transform="up-2"
        />
        <span className="mb-0 text-md text-default">{label}</span>
      </div>
      <h3 className="font-semibold! xl:ms-4 2xl:ms-0 md:pe-2 2xl:pe-0 mb-0 sm:mb-4">
        {value}
      </h3>
    </div>
  );
};

export default ContactSourceItem;
