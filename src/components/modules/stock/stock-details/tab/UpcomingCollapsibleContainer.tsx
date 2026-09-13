import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

interface CollapsibleContainerProps {
  collapseTitle: string;
  id: string;
  children: React.ReactElement;
  defaultOpen?: boolean;
  className?: string;
}

/** Gold: collapse sections of mixins/stock/stock-details/EventsTabOffcanvas.pug */
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
      <a
        className={classNames(
          'btn px-6 py-4 flex flex-between-center collapse-indicator bg-subtle',
          className
        )}
        role="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(!open)}
      >
        <h4 className="text-base sm:text-lg mb-0 text-highlight">
          {collapseTitle}
        </h4>
        <FontAwesomeIcon icon={faChevronDown} className="toggle-icon" />
      </a>
      <div id={id} className={classNames('collapse', open ? 'show' : 'hidden')}>
        <div className="p-6">{children}</div>
      </div>
    </>
  );
};

export default UpcomingCollapsibleContainer;
