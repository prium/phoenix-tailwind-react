import {
  faBars,
  faCloudArrowUp,
  faFilter,
  faPlus
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Select } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import SearchBox from 'components/common/SearchBox';
import { File } from 'data/file-manager';
import { useAdvanceTableContext } from 'providers/AdvanceTableProvider';
import { ChangeEvent, useState } from 'react';
import AddFolderModal from './AddFolderModal';
import FileFilterModal from './FileFilterModal';

interface FilesHeaderProps {
  /** opens the sidebar offcanvas below `lg` */
  onOpenSidebar: () => void;
  /** toggles `show-sidebar` on `[data-collapse-filemanager-sidebar]` (lg…xl) */
  onToggleSidebar: () => void;
}

/** Toolbar row of the gold `layouts/LayoutFileManager.pug` content block. */
const FilesHeader = ({ onOpenSidebar, onToggleSidebar }: FilesHeaderProps) => {
  const [addFolderModal, setAddFolderModal] = useState(false);
  const [filterModal, setFilterModal] = useState(false);
  const { setGlobalFilter } = useAdvanceTableContext<File>();

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setGlobalFilter(event.target.value || undefined);
  };

  return (
    <>
      <div className="row g-4 flex-between-center">
        <div className="col-auto flex gap-2">
          <Button
            variant="phoenix-secondary"
            className="btn-square lg:hidden"
            data-phoenix-toggle="offcanvas"
            data-phoenix-target="#fileManagerSideBar"
            onClick={onOpenSidebar}
          >
            <FontAwesomeIcon icon={faBars} />
          </Button>
          <Button
            variant="phoenix-secondary"
            className="btn-square hidden lg:block xl:hidden"
            data-toggle-sidebar
            onClick={onToggleSidebar}
          >
            <FontAwesomeIcon icon={faBars} />
          </Button>
          <Button variant="primary" className="sm:px-10">
            <FontAwesomeIcon icon={faCloudArrowUp} className="me-2" />
            Upload
          </Button>
          <Button
            variant="link"
            className="text-muted px-2"
            onClick={() => setAddFolderModal(true)}
          >
            <FontAwesomeIcon icon={faPlus} className="me-2" />
            Add New Folder
          </Button>
        </div>
        <div className="col-auto flex gap-2">
          <SearchBox
            placeholder="Search by name"
            aria-label="Search"
            onChange={handleSearchInputChange}
          />
          <Select className="w-auto" defaultValue="1">
            <option value="1">Last 7 days</option>
            <option value="2">Last 15 days</option>
            <option value="3">Last 30 days</option>
          </Select>
          <Button
            variant="phoenix-primary"
            className="btn-square shrink-0"
            onClick={() => setFilterModal(true)}
          >
            <FontAwesomeIcon icon={faFilter} />
          </Button>
        </div>
      </div>
      <AddFolderModal
        show={addFolderModal}
        onHide={() => setAddFolderModal(false)}
      />
      <FileFilterModal
        show={filterModal}
        onHide={() => setFilterModal(false)}
      />
    </>
  );
};

export default FilesHeader;
