import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import React, { PropsWithChildren } from 'react';
import { Collapse } from 'react-bootstrap';

interface RoomFilterCollapseProps {
  title: string;
  hideBorderBottom?: boolean;
  onToggle: () => void;
  collapseStatus: boolean;
}

const RoomFilterCollapseItem = ({
  title,
  children,
  hideBorderBottom = false,
  onToggle,
  collapseStatus
}: PropsWithChildren<RoomFilterCollapseProps>) => {
  return (
    <>
      <Button
        onClick={onToggle}
        aria-controls={title.split(' ').join('_')}
        aria-expanded={collapseStatus}
        className="px-0 py-2 flex items-center mt-4 collapse-indicator"
      >
        <FontAwesomeIcon
          icon={faCaretDown}
          className="text-default me-2 toggle-icon "
        />
        <h5 className="text-highlight">{title}</h5>
      </Button>
      <Collapse in={collapseStatus}>
        <div
          id={title.split(' ').join('_')}
          className={hideBorderBottom ? undefined : 'border-b'}
        >
          <div className="pb-6">{children}</div>
        </div>
      </Collapse>
    </>
  );
};
export default RoomFilterCollapseItem;
