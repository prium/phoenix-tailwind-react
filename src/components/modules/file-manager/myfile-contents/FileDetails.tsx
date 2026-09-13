import {
  faChevronRight,
  faLink,
  faXmark
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '@hummingbirdui/react';
import lightImg from 'assets/img/spot-illustrations/46.png';
import darkImg from 'assets/img/spot-illustrations/dark_46.png';
import Button from 'components/base/Button';
import AvatarDropdown from 'components/common/AvatarDropdown';
import FileManagerTimeline from 'components/timelines/FileManagerTimeline';
import { File } from 'data/file-manager';
import { useFileManagerContext } from 'providers/FileManagerProvider';
import { useState } from 'react';
import FileIcon from './FileIcon';

const tabs = [
  { id: 'tab-details', label: 'File Details' },
  { id: 'tab-activity', label: 'File Activity' }
];

/** Media / glyph header of the gold `getFileDetailsTemplate` details tab. */
const FilePreview = ({ file }: { file: File }) => {
  if (file.type === 'image') {
    return (
      <img
        className="w-full h-full object-cover rounded-md mb-4"
        src={file.img}
        alt=""
        style={{ aspectRatio: '16/9' }}
      />
    );
  }
  if (file.type === 'video') {
    return (
      <video
        className="block h-full w-full overflow-hidden rounded-md object-cover mb-4"
        muted
        controls
        poster={file.thumb}
        style={{ aspectRatio: '16/9' }}
      >
        <source src={file.video} type="video/mp4" />
      </video>
    );
  }
  return (
    <FileIcon
      file={file}
      muted={false}
      className={cn('text-6xl', file.type === 'folder' ? 'mb-3' : 'mb-4')}
    />
  );
};

const SelectedFileDetails = ({ file }: { file: File }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div>
      <h3>{file.name}</h3>
      <ul
        className="nav nav-underline file-details-tab text-md flex-nowrap gap-0 mt-6 mb-8"
        id="fileDetailsTab"
        role="tablist"
      >
        {tabs.map(tab => (
          <li
            key={tab.id}
            className="nav-item text-nowrap w-1/2 text-center"
            role="presentation"
          >
            <a
              href={`#${tab.id}`}
              className={cn('nav-link', { active: activeTab === tab.id })}
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={event => {
                event.preventDefault();
                setActiveTab(tab.id);
              }}
            >
              {tab.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {activeTab === 'tab-details' ? (
          <div className="tab-pane fade active show" role="tabpanel">
            <FilePreview file={file} />
            <table className="table table-borderless">
              <tbody>
                <tr>
                  <th className="p-0" style={{ width: 110 }} />
                  <th className="p-0 text-center" style={{ width: 20 }} />
                  <th className="p-0" />
                </tr>
                {file.details.map(item => (
                  <tr key={item.key}>
                    <td className="py-1 align-middle">
                      <h5 className="mb-0">{item.key}</h5>
                    </td>
                    <td className="py-1 align-middle">:</td>
                    <td className="py-1 align-middle">
                      {item.value}{' '}
                      {item.modifiedBy && (
                        <>
                          by{' '}
                          <a className="text-md font-black" href="#!">
                            {item.modifiedBy}
                          </a>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <hr className="mb-6" />
            <h5 className="mb-4">Admin</h5>
            <AvatarDropdown
              user={{
                ...file.admin,
                id: 100,
                username: 'tyrion222',
                connections: 224,
                mutual: 23
              }}
              size="m"
              dropdownClass="dropdown-toggle dropdown-caret-none"
              className="rounded-full border border-subtle-subtle"
            />
            <h5 className="mb-4 mt-8">Team members</h5>
            <div className="avatar-group avatar-group-dense">
              {file.assignees.map((member, index) => (
                <AvatarDropdown
                  key={index}
                  user={{
                    ...member,
                    id: index,
                    username: 'tyrion222',
                    connections: 224,
                    mutual: 23
                  }}
                  size="m"
                  dropdownClass="dropdown-toggle dropdown-caret-none"
                  className="rounded-full border border-subtle-subtle"
                />
              ))}
            </div>
            <a className="btn btn-link p-0" href="#!">
              Control Access
              <FontAwesomeIcon icon={faChevronRight} className="ms-2 mt-2" />
            </a>
            <hr className="my-6" />
            <h5 className="mb-4">File Link</h5>
            <h6 className="font-normal text-default">{file.fileLink}</h6>
            <Button variant="phoenix-primary" className="mt-2">
              <FontAwesomeIcon icon={faLink} className="me-2" />
              Copy link
            </Button>
          </div>
        ) : (
          <div className="tab-pane fade active show" role="tabpanel">
            <h4 className="mb-4">Today</h4>
            <FileManagerTimeline data={file.activities} />
          </div>
        )}
      </div>
    </div>
  );
};

interface FileDetailsProps {
  /** drawer state below `2xl` (above it the panel is a static column) */
  open: boolean;
  onHide: () => void;
}

/**
 * Gold `+FileDetails` (mixins/file-manager/FileDetails.pug) plus the panel that
 * the gold builds from JS in `theme/file-manager/template.js` once a single file
 * is selected. `.file-details-offcanvas` is `position: static` from `2xl`, so
 * the same DOM is both the column and the small-screen drawer.
 */
const FileDetails = ({ open, onHide }: FileDetailsProps) => {
  const { fileCollection, checkedFileIds } = useFileManagerContext();
  const selected =
    checkedFileIds.length === 1
      ? fileCollection.find(file => file.id === checkedFileIds[0])
      : undefined;

  return (
    <>
      <div
        className={cn(
          'phoenix-offcanvas file-details-offcanvas scrollbar overflow-x-hidden bg-soft',
          { show: open }
        )}
        id="fileDetailsOffcanvas"
        data-breakpoint="xxl"
      >
        <button
          type="button"
          className="btn p-0 text-base 2xl:hidden absolute top-0 end-0 mt-6 me-6"
          data-phoenix-dismiss="offcanvas"
          onClick={onHide}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <div data-file-details>
          {selected ? (
            <SelectedFileDetails file={selected} />
          ) : (
            <div className="text-center px-6">
              {checkedFileIds.length > 1 && (
                <h5 className="mb-4">{checkedFileIds.length} items selected</h5>
              )}
              <img src={lightImg} alt="" className="dark:hidden" />
              <img src={darkImg} alt="" className="hidden dark:block" />
              {checkedFileIds.length === 0 && (
                <h5 className="mt-6">
                  Select an item to view more information
                </h5>
              )}
            </div>
          )}
        </div>
      </div>
      <div
        data-phoenix-backdrop
        className="phoenix-offcanvas-backdrop 2xl:hidden"
        onClick={onHide}
      />
    </>
  );
};

export default FileDetails;
