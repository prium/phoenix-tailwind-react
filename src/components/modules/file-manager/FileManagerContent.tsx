import { Card, cn } from '@hummingbirdui/react';
import AdvanceTable from 'components/base/AdvanceTable';
import ListViewGroupTable from 'components/tables/ListViewGroupTable';
import illustration47 from 'assets/img/spot-illustrations/47.png';
import illustration47Dark from 'assets/img/spot-illustrations/47_dark.png';
import illustration48 from 'assets/img/spot-illustrations/48.png';
import illustration48Dark from 'assets/img/spot-illustrations/48_dark.png';
import { File } from 'data/file-manager';
import { useAdvanceTableContext } from 'providers/AdvanceTableProvider';
import { useFileManagerContext } from 'providers/FileManagerProvider';
import { useState } from 'react';
import FileBox from './myfile-contents/FileBox';
import FileDetails from './myfile-contents/FileDetails';
import GridGroupView from './myfile-contents/GridGroupView';
import MyFilesActionBar from './myfile-contents/MyFilesActionBar';
import MyFilesHeader from './myfile-contents/MyFilesHeader';

const TABLE_PROPS = { className: 'text-md mb-0' };
/** the gold drops the bottom border of the last row's cells */
const TABLE_BODY = 'list [&>tr:last-child>td]:border-b-0';

/**
 * Gold `block fileManagerContent` of apps/file-manager/{grid,list}-view.pug.
 * `data-toggle-file-details` toggles `2xl:hidden` on the details column and
 * `2xl:w-full` on its previous sibling, exactly like the gold file-manager.js.
 */
const FileManagerContent = () => {
  const { showFileDetails, setShowFileDetails, isGridView, isGrouped } =
    useFileManagerContext();
  const [detailsOffcanvas, setDetailsOffcanvas] = useState(false);
  const table = useAdvanceTableContext<File>();
  const rows = table.getRowModel().rows.map(row => row.original);

  if (table.getRowCount() === 0) {
    return (
      <Card className="mt-8">
        <Card.Body className="text-center my-16">
          {table.getState().globalFilter ? (
            <>
              <img src={illustration47} className="dark:hidden" alt="" />
              <img
                src={illustration47Dark}
                className="hidden dark:block"
                alt=""
              />
              <h2 className="mt-8">Opps! No matches found.</h2>
              <p>
                Try a different search or adjust the filters to find a file by
                type, owner, and other criteria.
              </p>
            </>
          ) : (
            <>
              <img src={illustration48} className="dark:hidden" alt="" />
              <img
                src={illustration48Dark}
                className="hidden dark:block"
                alt=""
              />
              <h2 className="mt-8">Your file space is empty! </h2>
              <p>Get started by clicking the ‘Upload’ button.</p>
            </>
          )}
        </Card.Body>
      </Card>
    );
  }

  return (
    <Card className="mt-8">
      <Card.Header className="py-4 px-6">
        <MyFilesHeader />
      </Card.Header>
      <Card.Body className="pt-0">
        <MyFilesActionBar
          onToggleDetails={() => setShowFileDetails(!showFileDetails)}
          onOpenDetailsOffcanvas={() => setDetailsOffcanvas(true)}
        />
        <div className="row 2xl:gx-16" id="bulk-select-body">
          <div
            className={cn('col', {
              'my-files-table': !isGridView,
              '2xl:w-full': !showFileDetails
            })}
          >
            {isGridView ? (
              isGrouped ? (
                <GridGroupView data={rows} />
              ) : (
                <div className="files-container" data-files-container>
                  {rows.map(file => (
                    <FileBox file={file} key={file.id} />
                  ))}
                </div>
              )
            ) : isGrouped ? (
              <ListViewGroupTable
                tableProps={TABLE_PROPS}
                rowClassName="select-none"
              />
            ) : (
              <AdvanceTable
                tableProps={TABLE_PROPS}
                bodyClassName={TABLE_BODY}
                rowClassName="select-none"
              />
            )}
          </div>
          <div
            data-details-container
            className={cn('col-auto px-0 2xl:px-8 2xl:border-s border-subtle', {
              '2xl:hidden': !showFileDetails
            })}
          >
            <FileDetails
              open={detailsOffcanvas}
              onHide={() => setDetailsOffcanvas(false)}
            />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default FileManagerContent;
