import {
  faDownload,
  faEllipsis,
  faInfoCircle,
  faShareNodes,
  faTrash,
  faXmark
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip, cn } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import { File } from 'data/file-manager';
import { useAdvanceTableContext } from 'providers/AdvanceTableProvider';
import { useFileManagerContext } from 'providers/FileManagerProvider';
import FilesDropdown from '../FilesDropdown';

const BULK_BTN =
  'btn-phoenix-secondary text-sm btn-square size-7.5 hidden sm:block';

/**
 * Gold action bar of `apps/file-manager/{grid,list}-view.pug`. The two pages
 * ship slightly different class strings (the grid one greys the item count and
 * left-aligns its dropdown items), so they are switched on the current view.
 */
interface MyFilesActionBarProps {
  /** `2xl` and up: hides/shows the static details column */
  onToggleDetails: () => void;
  /** below `2xl`: opens the `#fileDetailsOffcanvas` drawer */
  onOpenDetailsOffcanvas: () => void;
}

const MyFilesActionBar = ({
  onToggleDetails,
  onOpenDetailsOffcanvas
}: MyFilesActionBarProps) => {
  const {
    showFileDetails,
    checkedFileIds,
    setCheckedFileIds,
    fileCollection,
    setFileCollection,
    isGridView
  } = useFileManagerContext();
  const table = useAdvanceTableContext<File>();

  const handleDelete = () => {
    setFileCollection(
      fileCollection.filter(file => !checkedFileIds.includes(file.id))
    );
    setCheckedFileIds([]);
    table.setRowSelection({});
  };

  const clearSelection = () => {
    setCheckedFileIds([]);
    table.setRowSelection({});
  };

  const detailsButton = (className: string, onClick: () => void) => (
    <Tooltip>
      <Tooltip.Trigger asChild>
        <Button
          variant="phoenix-secondary"
          className={className}
          data-toggle-file-details
          onClick={onClick}
        >
          <FontAwesomeIcon icon={faInfoCircle} />
        </Button>
      </Tooltip.Trigger>
      <Tooltip.Content>
        {showFileDetails ? 'Hide details' : 'Show details'}
      </Tooltip.Content>
    </Tooltip>
  );

  return (
    <div className="myfiles-action-bar -mx-6 mb-6">
      <h6
        className={cn('mb-0', {
          'text-subtle': isGridView,
          hidden: checkedFileIds.length > 0
        })}
        id="file-manager-replace-element"
      >
        {table.getState().globalFilter
          ? `${table.getRowCount()} items found`
          : `Total ${table.getRowCount()} items`}
      </h6>
      <div
        id="file-manager-actions"
        className={cn({ hidden: checkedFileIds.length === 0 })}
      >
        <div className="flex items-center">
          <button
            type="button"
            className="btn p-0 text-muted text-base me-2 sm:me-4"
            data-remove-bulk-check
            onClick={clearSelection}
          >
            <FontAwesomeIcon icon={faXmark} transform="down-1" />
          </button>
          <h6
            className={cn('mb-0 me-6 text-nowrap', {
              'text-subtle': isGridView
            })}
            data-files-selected
          >
            {checkedFileIds.length}{' '}
            {checkedFileIds.length === 1 ? 'item' : 'items'} selected
          </h6>
          <div className="flex gap-1 sm:gap-2">
            <Tooltip>
              <Tooltip.Trigger asChild>
                <Button variant="phoenix-secondary" className={BULK_BTN}>
                  <FontAwesomeIcon icon={faDownload} />
                </Button>
              </Tooltip.Trigger>
              <Tooltip.Content>Download</Tooltip.Content>
            </Tooltip>
            <Tooltip>
              <Tooltip.Trigger asChild>
                <Button
                  variant="phoenix-secondary"
                  className={BULK_BTN}
                  onClick={handleDelete}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
              </Tooltip.Trigger>
              <Tooltip.Content>Delete</Tooltip.Content>
            </Tooltip>
            <Tooltip>
              <Tooltip.Trigger asChild>
                <Button variant="phoenix-secondary" className={BULK_BTN}>
                  <FontAwesomeIcon icon={faShareNodes} />
                </Button>
              </Tooltip.Trigger>
              <Tooltip.Content>Share</Tooltip.Content>
            </Tooltip>
            <FilesDropdown
              className="dropdown"
              triggerClassName={cn(
                'btn-phoenix-secondary btn-square size-7.5',
                isGridView && 'text-sm'
              )}
              icon={faEllipsis}
              itemClassName={cn(
                'dropdown-item font-semibold',
                isGridView && 'text-start'
              )}
            />
          </div>
        </div>
      </div>
      {detailsButton(
        'btn-phoenix-secondary text-sm btn-square size-7.5 hidden 2xl:block',
        onToggleDetails
      )}
      {detailsButton(
        'btn-phoenix-secondary text-sm btn-square size-7.5 2xl:hidden',
        onOpenDetailsOffcanvas
      )}
    </div>
  );
};

export default MyFilesActionBar;
