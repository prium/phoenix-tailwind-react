import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StorageDetails from './StorageDetails';
import TreeView from './TreeView';

interface SidebarProps {
  /** closes the offcanvas below `lg` (gold `data-phoenix-dismiss="offcanvas"`) */
  onHide: () => void;
}

/** Body of the gold `+FileManagerOffcanvas` panel. */
const Sidebar = ({ onHide }: SidebarProps) => (
  <>
    <div className="flex flex-between-center">
      <h5 className="mb-2">My Files</h5>
      <button
        type="button"
        className="btn p-0 text-base lg:hidden"
        data-phoenix-dismiss="offcanvas"
        onClick={onHide}
      >
        <FontAwesomeIcon icon={faXmark} transform="up-3" />
      </button>
    </div>
    <TreeView />
    <StorageDetails />
  </>
);

export default Sidebar;
