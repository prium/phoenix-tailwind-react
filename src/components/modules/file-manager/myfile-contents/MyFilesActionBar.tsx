import { Dropdown, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark,
  faDownload,
  faTrash,
  faShareNodes,
  faEllipsis,
  faInfoCircle
} from '@fortawesome/free-solid-svg-icons';
import { useFileManagerContext } from 'providers/FileManagerProvider';
import { useState } from 'react';
import { useAdvanceTableContext } from 'providers/AdvanceTableProvider';

const MyFilesActionBar = () => {
  const {
    showFileDetails,
    setShowFileDetails,
    setCheckedFileIds,
    checkedFileIds,
    fileCollection,
    setFileCollection
  } = useFileManagerContext();
  const table = useAdvanceTableContext();
  const [deleteTooltip, setDeleteTooltip] = useState(false);
  const handleDeleteFiles = () => {
    const updatedFiles = fileCollection.filter(
      file => !checkedFileIds.includes(file.id)
    );
    setFileCollection(updatedFiles);
    setCheckedFileIds([]);
    setDeleteTooltip(!deleteTooltip);
  };

  return (
    <div className="myfiles-action-bar -mx-6 mb-6">
      {checkedFileIds.length == 0 && (
        <h6
          className="mb-0 text-subtle"
          id="file-manager-replace-element"
        >
          {table.getState().globalFilter
            ? ` ${table.getRowCount()} items found`
            : ` Total ${table.getRowCount()} items`}
        </h6>
      )}

      <div
        id="file-manager-actions"
        className={checkedFileIds.length ? 'block' : 'hidden'}
      >
        <div className="flex items-center">
          <button className="btn p-0 text-base me-2 sm:me-4">
            <FontAwesomeIcon
              onClick={() => {
                setCheckedFileIds([]);
                table.setRowSelection({});
              }}
              icon={faXmark}
              transform="down-1"
            />
          </button>
          <h6 className="mb-0 me-6 whitespace-nowrap text-subtle">
            {checkedFileIds.length} item selected
          </h6>

          <div className="flex gap-1 sm:gap-2">
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip id="file-download-tooltip">Download</Tooltip>}
            >
              <Button
                variant="phoenix-secondary"
                className="text-sm btn-square-sm hidden sm:block"
              >
                <FontAwesomeIcon icon={faDownload} />
              </Button>
            </OverlayTrigger>
            <OverlayTrigger
              placement="top"
              show={deleteTooltip}
              onToggle={setDeleteTooltip}
              overlay={<Tooltip id="file-download-tooltip">Delete</Tooltip>}
            >
              <Button
                variant="phoenix-secondary"
                className="text-sm btn-square-sm hidden sm:block"
                onClick={handleDeleteFiles}
              >
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </OverlayTrigger>

            <OverlayTrigger
              placement="top"
              overlay={<Tooltip id="file-download-tooltip">Share</Tooltip>}
            >
              <Button
                variant="phoenix-secondary"
                className="text-sm btn-square-sm hidden sm:block"
              >
                <FontAwesomeIcon icon={faShareNodes} />
              </Button>
            </OverlayTrigger>

            <Dropdown align="end">
              <Dropdown.Toggle
                variant="phoenix-secondary"
                className="text-sm btn-square-sm dropdown-caret-none"
              >
                <FontAwesomeIcon icon={faEllipsis} />
              </Dropdown.Toggle>
              <Dropdown.Menu
                className="dropdown-menu-end"
                style={{ zIndex: 6 }}
              >
                <Dropdown.Item href="#">Share</Dropdown.Item>
                <Dropdown.Item href="#">Download</Dropdown.Item>
                <Dropdown.Item href="#">Duplicate</Dropdown.Item>
                <Dropdown.Item href="#">Move</Dropdown.Item>
                <Dropdown.Item href="#">Rename</Dropdown.Item>
                <Dropdown.Item href="#">Move to Bin</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#" className="text-danger">
                  Delete
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="file-details-tooltip">File Details</Tooltip>}
      >
        <Button
          variant="phoenix-secondary"
          className="text-sm btn-square-sm"
          onClick={() => setShowFileDetails(!showFileDetails)}
        >
          <FontAwesomeIcon icon={faInfoCircle} />
        </Button>
      </OverlayTrigger>
    </div>
  );
};

export default MyFilesActionBar;
