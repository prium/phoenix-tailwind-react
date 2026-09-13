import { PropsWithChildren } from 'react';
import { Dropdown, cn } from '@hummingbirdui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';

interface BasicDropdownProps {
  className?: string;
  btnClassName?: string;
  dropdownMenuClassName?: string;
  icon?: IconProp;
}

const BasicDropdown = ({
  children,
  className,
  btnClassName,
  dropdownMenuClassName,
  icon = faEllipsis
}: PropsWithChildren<BasicDropdownProps>) => {
  const dropdown = (
    <Dropdown>
      <Dropdown.Trigger asChild>
        <Button
          variant="phoenix"
          color="secondary"
          size="sm"
          className={cn(
            'bg-soft hover:bg-default dropdown-caret-none',
            btnClassName
          )}
        >
          <FontAwesomeIcon icon={icon} className="text-sm" />
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Content align="end" className={dropdownMenuClassName}>
        {children}
      </Dropdown.Content>
    </Dropdown>
  );

  return className ? <div className={className}>{dropdown}</div> : dropdown;
};

export default BasicDropdown;
