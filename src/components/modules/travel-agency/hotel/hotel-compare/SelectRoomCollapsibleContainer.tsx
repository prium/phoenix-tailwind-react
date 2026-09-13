import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { cn } from '@hummingbirdui/react';

interface SelectRoomCollapsibleContainerProps {
  collapseTitle: string;
  id: string;
  children: React.ReactElement;
  className?: string;
}

/** `a.btn.p-4.collapse-indicator` + `.collapse` in ChangeRoomModal.pug */
const SelectRoomCollapsibleContainer = ({
  collapseTitle,
  children,
  id,
  className
}: SelectRoomCollapsibleContainerProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <a
        href={`#${id}`}
        role="button"
        className={cn(
          'btn p-4 flex flex-between-center collapse-indicator text-highlight bg-subtle',
          className
        )}
        aria-controls={id}
        aria-expanded={open}
        onClick={e => {
          e.preventDefault();
          setOpen(!open);
        }}
      >
        <h5 className="mb-0">{collapseTitle}</h5>
        <FontAwesomeIcon
          icon={faChevronDown}
          className="toggle-icon text-default"
        />
      </a>
      <div className={cn('collapse', { show: open })} id={id}>
        {children}
      </div>
    </>
  );
};

export default SelectRoomCollapsibleContainer;
