import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/base/Button';
import { Collapse } from 'react-bootstrap';
import classNames from 'classnames';

interface CollapsibleContainerProps {
  collapseTitle: string;
  id: string;
  children: React.ReactElement;
  defaultOpen?: boolean;
  className?: string;
}

const UpcomingCollapsibleContainer = ({
  collapseTitle,
  children,
  id,
  defaultOpen = true,
  className
}: CollapsibleContainerProps) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <>
      <Button
        variant=""
        className={classNames(
          'px-10 py-6 flex flex-between-center collapse-indicator bg-subtle w-full',
          className,
          {
            collapsed: open
          }
        )}
        aria-controls={id}
        onClick={() => setOpen(!open)}
      >
        <h4 className="text-base sm:text-lg mb-0 text-highlight">
          {collapseTitle}
        </h4>
        <FontAwesomeIcon icon={faChevronDown} className="toggle-icon" />
      </Button>
      <Collapse in={open}>
        <div className="p-6" id={id}>
          {children}
        </div>
      </Collapse>
    </>
  );
};

export default UpcomingCollapsibleContainer;
