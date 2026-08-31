import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

export interface ContactSourceItem {
  value: number;
  label: string;
  color: string;
  className?: string;
}

const ContactSourceItem = ({
  value,
  label,
  color,
  className
}: ContactSourceItem) => {
  return (
    <div
      className={classNames(
        className,
        'flex flex-col flex-center sm:items-start md:flex-row md:justify-between 2xl:flex-col p-6 sm:ps-4 md:ps-6 md:p-4 h-full'
      )}
    >
      <div className="flex items-center mb-1">
        <FontAwesomeIcon
          icon={faSquare}
          className={`text-xs me-2 text-${color}`}
          transform="up-2"
        />
        <span className="mb-0 text-md text-default">{label}</span>
      </div>
      <h3 className="font-semibold xl:ms-4 2xl:ms-0 md:pe-2 2xl:pe-0 mb-0 sm:mb-4">
        {value}
      </h3>
    </div>
  );
};

export default ContactSourceItem;
