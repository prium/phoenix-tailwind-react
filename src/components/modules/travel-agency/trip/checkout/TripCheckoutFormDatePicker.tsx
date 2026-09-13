import DatePicker from 'components/base/DatePicker';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface TripCheckoutFormDatePickerProps {
  label: string;
  id: string;
  placeholder?: string;
}

/** gold: label + `.input-group-icon.flatpickr-input-container` + `fa-calendar-alt` start icon */
const TripCheckoutFormDatePicker = ({
  id,
  label,
  placeholder = 'DD/MM/YYYY'
}: TripCheckoutFormDatePickerProps) => {
  return (
    <>
      <label htmlFor={id} className="font-bold text-highlight mb-1">
        {label}
      </label>
      <DatePicker
        wrapperClassName="input-group-icon"
        hideIcon
        icon={
          <FontAwesomeIcon
            icon={faCalendarDays}
            className="text-soft text-md form-control-icon-start"
            transform="up-1"
          />
        }
        id={id}
        placeholder={placeholder}
        options={{ disableMobile: true }}
      />
    </>
  );
};

export default TripCheckoutFormDatePicker;
