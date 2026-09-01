import { Input, cn } from '@hummingbirdui/react';
import { UilCalendarAlt } from '@iconscout/react-unicons';
import { Ref } from 'react';
import { DateTimePickerProps } from 'react-flatpickr';
import DatePicker from 'components/base/DatePicker';

export interface FloatingDatePickerProps {
  id: string;
  label: string;
  placeholder: string;
  /** Leading `span.uil.uil-calendar-alt.form-control-icon-start` inside `.input-group-icon` */
  icon?: boolean;
  /** flatpickr options, e.g. `{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }` */
  options?: DateTimePickerProps['options'];
  /** Extra classes on the `.form-floating` wrapper, e.g. `form-field` */
  className?: string;
}

/**
 * Gold flatpickr input with a floating label:
 * `.form-floating > input.form-control.datetimepicker + label.form-label`,
 * optionally wrapped in `.input-group-icon` with a leading calendar glyph.
 * Pug: mixins/events/CreateEvent.pug (Schedule),
 * apps/project-management/create-new.pug.
 */
const FloatingDatePicker = ({
  id,
  label,
  placeholder,
  icon = false,
  options,
  className
}: FloatingDatePickerProps) => {
  const field = (ref: Ref<HTMLInputElement>) => (
    <div className={cn('form-floating', className)}>
      <Input
        type="text"
        className="datetimepicker"
        placeholder={placeholder}
        ref={ref}
        id={id}
      />
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
  return (
    <DatePicker
      hideIcon
      noContainer
      options={options}
      render={(_, ref) =>
        icon ? (
          <div className="input-group-icon">
            <UilCalendarAlt
              fill="currentColor"
              size={16}
              className="text-subtle form-control-icon-start"
            />
            {field(ref)}
          </div>
        ) : (
          field(ref)
        )
      }
    />
  );
};

export default FloatingDatePicker;
