import { cn } from '@hummingbirdui/react';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import FilesHeader from 'components/modules/file-manager/FilesHeader';
import RecentFilesCard from 'components/modules/file-manager/RecentFilesCard';
import Sidebar from 'components/modules/file-manager/sidebar/Sidebar';
import FileManagerTableWrapper from 'components/tables/FileManagerTableWrapper';
import { defaultBreadcrumbItems } from 'data/commonData';
import { PropsWithChildren, useEffect, useState } from 'react';

/**
 * Gold `layouts/LayoutFileManager.pug` (content block). The sidebar keeps the
 * gold `.phoenix-offcanvas.phoenix-offcanvas-fixed` + sibling backdrop DOM
 * verbatim — file-manager.css makes it sticky from `lg` and `show` only drives
 * the small-screen drawer. The `lg…xl` bars button toggles `show-sidebar` on
 * `[data-collapse-filemanager-sidebar]`, exactly like the gold file-manager.js.
 */
const FileManagerLayout = ({ children }: PropsWithChildren) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [openOffcanvas, setOpenOffcanvas] = useState(false);

  useEffect(() => {
    if (openOffcanvas) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.removeProperty('overflow');
    }
    return () => {
      document.body.style.removeProperty('overflow');
    };
  }, [openOffcanvas]);

  return (
    <>
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <div
        className={cn('mb-16', { 'show-sidebar': showSidebar })}
        data-collapse-filemanager-sidebar
      >
        <h2 className="mb-6">File Manager</h2>
        <div className="row gx-6">
          <div className="col-auto file-manager-sidebar">
            <div
              className={cn(
                'phoenix-offcanvas phoenix-offcanvas-fixed bg-default scrollbar overflow-x-hidden',
                { show: openOffcanvas }
              )}
              id="fileManagerSideBar"
              data-breakpoint="lg"
            >
              <Sidebar onHide={() => setOpenOffcanvas(false)} />
            </div>
            <div
              className="phoenix-offcanvas-backdrop lg:hidden"
              onClick={() => setOpenOffcanvas(false)}
            />
          </div>
          <div className="col my-files">
            <FileManagerTableWrapper>
              <FilesHeader
                onOpenSidebar={() => setOpenOffcanvas(true)}
                onToggleSidebar={() => setShowSidebar(prev => !prev)}
              />
              <RecentFilesCard />
              {children}
            </FileManagerTableWrapper>
          </div>
        </div>
      </div>
    </>
  );
};

export default FileManagerLayout;
