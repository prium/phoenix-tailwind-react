import {
  faAngleLeft,
  faAngleRight,
  faArchive,
  faRedo,
  faStar,
  faTag,
  faTrash
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import IndeterminateCheckbox from 'components/base/IndeterminateCheckbox';
import TooltipIconButton from 'components/common/TooltipIconButton';
import { useBulkSelect } from 'providers/BulkSelectProvider';

interface InboxToolbarProps {
  /** the inbox page variant ("Showing :" label + sticky inbox-toolbar offset) */
  inbox?: boolean;
}

/**
 * Gold `mixin InboxToolbar` (../phoenix-tailwind/src/pug/mixins/email/Common.pug).
 */
const InboxToolbar = ({ inbox }: InboxToolbarProps) => {
  const { getParentCheckboxProps } = useBulkSelect();
  return (
    <>
      <div
        className={cn(
          'flex items-center flex-wrap sticky pb-2 bg-default z-2 email-toolbar',
          { 'inbox-toolbar': inbox }
        )}
      >
        <div className="flex items-center flex-1 me-2">
          <Button
            size="sm"
            className="p-0 me-2"
            onClick={() => location.reload()}
          >
            <FontAwesomeIcon icon={faRedo} className="text-primary text-sm" />
          </Button>
          <p className="font-semibold text-sm text-subtle/85 mb-0 leading-sm text-nowrap">
            Last refreshed 1m ago
          </p>
        </div>
        <div className="flex">
          <p className="text-subtle/85 text-md font-semibold mb-0 me-4">
            {inbox ? 'Showing :' : ''}{' '}
            <span className="text-default">1-7 </span>
            of <span className="text-default">205</span>
          </p>
          <Button className="p-0 me-4">
            <FontAwesomeIcon icon={faAngleLeft} className="text-soft text-sm" />
          </Button>
          <Button className="p-0">
            <FontAwesomeIcon
              icon={faAngleRight}
              className="text-primary text-sm"
            />
          </Button>
        </div>
      </div>
      <div className="border-t border-subtle py-2.75 flex justify-between">
        <IndeterminateCheckbox
          className="text-base"
          {...getParentCheckboxProps()}
        />
        <div className="flex gap-3">
          <TooltipIconButton
            title="Archive"
            icon={faArchive}
            className="p-0 text-soft/85 hover:text-subtle/85"
            iconClass="text-sm"
          />
          <TooltipIconButton
            title="Delete"
            icon={faTrash}
            className="p-0 text-soft/85 hover:text-subtle/85"
            iconClass="text-sm"
          />
          <TooltipIconButton
            title="Star"
            icon={faStar}
            className="p-0 text-soft/85 hover:text-subtle/85"
            iconClass="text-sm"
          />
          <TooltipIconButton
            title="Tags"
            icon={faTag}
            className="p-0 text-soft/85 hover:text-subtle/85"
            iconClass="text-sm"
          />
        </div>
      </div>
    </>
  );
};

export default InboxToolbar;
