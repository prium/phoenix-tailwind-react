import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/base/Button';
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

/** gold: `a.btn.collapse-indicator[data-bs-toggle=collapse]` + `.collapse.show` */
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
            'px-6 py-4 sm:py-6': containerSize === 'trip'
          }
        )}
        aria-controls={id}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <h4 className={classNames('mb-0', titleClass)}>{collapseTitle}</h4>
        <FontAwesomeIcon
          icon={faChevronDown}
          className="toggle-icon text-default"
        />
      </Button>
      <div className={classNames('collapse', { show: open })} id={id}>
        {children}
      </div>
    </>
  );
};

export default CollapsibleContainer;
