import Flatpickr, { DateTimePickerProps } from 'react-flatpickr';
import Unicon from 'components/base/Unicon';
import { UilCalendarAlt } from '@iconscout/react-unicons';
import { ReactElement } from 'react';
import { cn } from '@hummingbirdui/react';

interface DatePickerProps extends DateTimePickerProps {
  icon?: ReactElement;
  hideIcon?: boolean;
  /**
   * Skip the `.flatpickr-input-container` wrapper (its CSS pads floating
   * inputs) for gold markup without it, e.g. mixins/events/CreateEvent.pug.
   * Only valid together with `hideIcon` and a custom `render`.
   */
  noContainer?: boolean;
  className?: string;
  /** classes for the `.flatpickr-input-container` wrapper */
  wrapperClassName?: string;
}

const DatePicker = ({
  icon,
  hideIcon = false,
  noContainer = false,
  className,
  wrapperClassName,
  options,
  ...rest
}: DatePickerProps) => {
  const picker = (
    <Flatpickr
      className={cn('form-control datetimepicker', className, {
        'ps-10': !hideIcon
      })}
      options={{
        nextArrow: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"/></svg>`,
        prevArrow: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"/></svg>`,
        locale: {
          firstDayOfWeek: 1
        },
        monthSelectorType: 'static',
        onDayCreate: (...[, , , dayElem]) => {
          if (
            dayElem.dateObj.getDay() === 6 ||
            dayElem.dateObj.getDay() === 0
          ) {
            dayElem.className += ' weekend-days';
          }
        },
        dateFormat: 'M j, Y',
        disableMobile: true,
        ...options
      }}
      {...rest}
    />
  );
  if (noContainer) {
    return picker;
  }
  return (
    <div className={cn('flatpickr-input-container', wrapperClassName)}>
      {picker}
      {icon ? (
        <>{icon}</>
      ) : (
        !hideIcon && (
          /* the skin centers .flatpickr-icon for the gold glyph's 1lh box */
          <Unicon
            icon={UilCalendarAlt}
            lineBox
            wrapperClassName="flatpickr-icon text-subtle"
            fill="currentColor"
            size={16}
          />
        )
      )}
    </div>
  );
};

export default DatePicker;
