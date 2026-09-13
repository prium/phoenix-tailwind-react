import { faList, faTableCellsLarge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Select, Tooltip, cn } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import IndeterminateCheckbox from 'components/base/IndeterminateCheckbox';
import { File } from 'data/file-manager';
import { useAdvanceTableContext } from 'providers/AdvanceTableProvider';
import { useFileManagerContext } from 'providers/FileManagerProvider';
import { Link } from 'react-router';

/** Gold `+MyFilesHeader` in mixins/file-manager/MyFilesHeader.pug. */
const MyFilesHeader = () => {
  const table = useAdvanceTableContext<File>();
  const { isGridView, isGrouped, setIsGrouped } = useFileManagerContext();

  return (
    <div className="row g-4 flex-between-center">
      <div className="col-auto">
        <h5 className="mb-0">
          {table.getState().globalFilter ? 'Top Results' : 'My Files'}
        </h5>
      </div>
      <div className="col-auto flex">
        <Tooltip>
          <Tooltip.Trigger asChild>
            <Button
              variant="phoenix-secondary"
              className={cn('btn-square shrink-0 me-2', {
                'border-primary text-primary': isGridView
              })}
              asChild
            >
              <Link to="/apps/file-manager/grid-view">
                <FontAwesomeIcon icon={faTableCellsLarge} />
              </Link>
            </Button>
          </Tooltip.Trigger>
          <Tooltip.Content>Grid view</Tooltip.Content>
        </Tooltip>
        <Tooltip>
          <Tooltip.Trigger asChild>
            <Button
              variant="phoenix-secondary"
              className={cn('btn-square shrink-0', {
                'border-primary text-primary': !isGridView
              })}
              asChild
            >
              <Link to="/apps/file-manager/list-view">
                <FontAwesomeIcon icon={faList} />
              </Link>
            </Button>
          </Tooltip.Trigger>
          <Tooltip.Content>List view</Tooltip.Content>
        </Tooltip>
        <Select className="mx-2 sm:mx-4" defaultValue="date">
          <option value="date">Sort by - Date created</option>
          <option value="name">Sort by - Name</option>
          <option value="size">Sort by - Size</option>
        </Select>
        {/* gold puts the tooltip on the input itself; Radix needs a trigger
            element it can hold a ref on, so the switch stays plain */}
        <IndeterminateCheckbox
          className="form-switch flex items-center"
          role="switch"
          id="viewAsGroup"
          title="View as group"
          checked={isGrouped}
          onChange={() => setIsGrouped(prev => !prev)}
        />
      </div>
    </div>
  );
};

export default MyFilesHeader;
