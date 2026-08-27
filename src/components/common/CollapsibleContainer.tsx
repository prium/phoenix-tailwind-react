import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/base/Button';
import { Collapse } from 'react-bootstrap';
import classNames from 'classnames';

type ContainerSize = 'sm' | 'base' | 'large' | 'trip';
interface CollapsibleContainerProps {
  collapseTitle: string;
  titleClass?: string;
  id: string;
  children: React.ReactElement;
  className?: string;
  containerSize?: ContainerSize;
  defaultOpen?: boolean;
}

const CollapsibleContainer = ({
  collapseTitle,
  titleClass,
  children,
  id,
  className,
  containerSize = 'large',
  defaultOpen = true
}: CollapsibleContainerProps) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <>
      <Button
        variant=""
        className={classNames(
          className,
          'flex flex-between-center collapse-indicator text-highlight bg-subtle w-full sticky start-0',
          {
            collapsed: open,
            'py-2 px-6': containerSize === 'sm',
            'p-6': containerSize === 'base',
            'p-10': containerSize === 'large',
            'px-10 py-6 sm:py-6': containerSize === 'trip'
          }
        )}
        aria-controls={id}
        onClick={() => setOpen(!open)}
      >
        <h4 className={classNames('mb-0', titleClass)}>{collapseTitle}</h4>
        <FontAwesomeIcon
          icon={faChevronDown}
          className="toggle-icon text-default"
        />
      </Button>
      <Collapse in={open}>
        <div id={id}>{children}</div>
      </Collapse>
    </>
  );
};

export default CollapsibleContainer;
