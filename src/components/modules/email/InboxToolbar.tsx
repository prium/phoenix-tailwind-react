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
import classNames from 'classnames';
import Button from 'components/base/Button';
import IndeterminateCheckbox from 'components/base/IndeterminateCheckbox';
import TooltipIconButton from 'components/common/TooltipIconButton';
import { useBulkSelect } from 'providers/BulkSelectProvider';

interface InboxToolbarProps {
  size?: 'sm' | 'lg';
  className?: string;
}

const InboxToolbar = ({ size = 'lg', className }: InboxToolbarProps) => {
  const { getParentCheckboxProps } = useBulkSelect();
  return (
    <>
      <div
        className={classNames(
          className,
          'flex align-items-center flex-wrap position-sticky pb-2 bg-default z-2 email-toolbar'
        )}
      >
        <div className="flex align-items-center flex-1 me-2">
          <Button className="p-0 me-2" onClick={() => location.reload()}>
            <FontAwesomeIcon icon={faRedo} className="text-primary text-sm" />
          </Button>
          <p className="font-semibold text-sm text-subtle text-opacity-85 mb-0 lh-sm text-nowrap">
            Last refreshed 1m ago
          </p>
        </div>
        <div className="flex gap-3">
          <p className="text-subtle text-opacity-85 text-md font-semibold mb-0">
            {size === 'lg' ? 'Showing : ' : ' '}
            <span className="text-default">1-7</span>
            {' of '}
            <span className="text-default">205</span>
          </p>
          <Button className="p-0" type="button">
            <FontAwesomeIcon
              icon={faAngleLeft}
              className="text-soft text-sm"
            />
          </Button>
          <Button className="p-0" type="button">
            <FontAwesomeIcon
              icon={faAngleRight}
              className="text-primary text-sm"
            />
          </Button>
        </div>
      </div>
      <div className="border-y border-light py-2 flex justify-content-between">
        <IndeterminateCheckbox {...getParentCheckboxProps()} />
        <div className="flex gap-2">
          <TooltipIconButton
            iconClass="text-sm"
            title="Archive"
            icon={faArchive}
          />
          <TooltipIconButton iconClass="text-sm" title="Delete" icon={faTrash} />
          <TooltipIconButton iconClass="text-sm" title="Star" icon={faStar} />
          <TooltipIconButton iconClass="text-sm" title="Tags" icon={faTag} />
        </div>
      </div>
    </>
  );
};

export default InboxToolbar;
