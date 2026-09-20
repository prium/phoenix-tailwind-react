import { HTMLAttributes, PropsWithChildren } from 'react';
import { Dropdown, cn } from '@hummingbirdui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

interface RevealDropdownTriggerProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}
interface RevealDropdownProps {
  className?: string;
  btnClassName?: string;
  dropdownMenuClassName?: string;
  icon?: IconProp;
  /**
   * Gold's `DashboardDropdown` pins the icon to `text-sm`; `RevealBtn` leaves
   * it unsized so it inherits the button's 0.8rem — pass `""` for those.
   */
  iconClassName?: string;
}

/** Hover target: `.btn-reveal-trigger:hover .btn-reveal` gets its border/bg. */
export const RevealDropdownTrigger = ({
  children,
  className,
  ...rest
}: PropsWithChildren<RevealDropdownTriggerProps>) => (
  <div className={cn('btn-reveal-trigger', className)} {...rest}>
    {children}
  </div>
);

const RevealDropdown = ({
  children,
  className,
  btnClassName,
  dropdownMenuClassName,
  icon = faEllipsis,
  iconClassName = 'text-sm'
}: PropsWithChildren<RevealDropdownProps>) => {
  const dropdown = (
    <Dropdown>
      <Dropdown.Trigger asChild>
        <button
          type="button"
          className={cn(
            'btn btn-sm transition-none btn-reveal dropdown-caret-none',
            btnClassName
          )}
        >
          <FontAwesomeIcon icon={icon} className={iconClassName || undefined} />
        </button>
      </Dropdown.Trigger>
      <Dropdown.Content
        align="end"
        className={cn('py-2', dropdownMenuClassName)}
      >
        {children}
      </Dropdown.Content>
    </Dropdown>
  );

  return className ? <div className={className}>{dropdown}</div> : dropdown;
};

export default RevealDropdown;
