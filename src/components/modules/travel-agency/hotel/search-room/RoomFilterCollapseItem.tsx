import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Collapsible, cn } from '@hummingbirdui/react';
import { PropsWithChildren } from 'react';

interface RoomFilterCollapseProps {
  title: string;
  onToggle: () => void;
  collapseStatus: boolean;
  /** gold content wrapper classes; amenities has none, price range adds pt-1 */
  contentClassName?: string;
}

/** `a.btn.collapse-indicator` + `.collapse` sections of RoomFilterOffcanvas.pug */
const RoomFilterCollapseItem = ({
  title,
  children,
  onToggle,
  collapseStatus,
  contentClassName = 'border-b pb-6'
}: PropsWithChildren<RoomFilterCollapseProps>) => {
  return (
    <Collapsible open={collapseStatus} onOpenChange={onToggle}>
      <Collapsible.Trigger asChild>
        <button
          type="button"
          className="btn collapse-indicator px-0 py-2 flex justify-start items-center mt-4"
          aria-expanded={collapseStatus}
        >
          <FontAwesomeIcon
            icon={faCaretDown}
            className="toggle-icon text-default me-2"
          />
          <h5 className="text-highlight">{title}</h5>
        </button>
      </Collapsible.Trigger>
      <Collapsible.Content>
        <div className={cn(contentClassName) || undefined}>{children}</div>
      </Collapsible.Content>
    </Collapsible>
  );
};
export default RoomFilterCollapseItem;
