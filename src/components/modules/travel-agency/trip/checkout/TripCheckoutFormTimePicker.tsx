import DatePicker from 'components/base/DatePicker';

interface TripCheckoutFormTimePickerProps {
  label: string;
  id: string;
  placeholder?: string;
}

/** gold: `.flatpickr-input-container` with a time-only flatpickr, no icon */
const TripCheckoutFormTimePicker = ({
  id,
  label,
  placeholder = 'Hour : Minute'
}: TripCheckoutFormTimePickerProps) => {
  return (
    <>
      <label htmlFor={id} className="font-bold text-highlight mb-1">
        {label}
      </label>
      <DatePicker
        hideIcon
        id={id}
        placeholder={placeholder}
        options={{
          enableTime: true,
          noCalendar: true,
          dateFormat: 'H:i',
          disableMobile: true
        }}
      />
    </>
  );
};

export default TripCheckoutFormTimePicker;
