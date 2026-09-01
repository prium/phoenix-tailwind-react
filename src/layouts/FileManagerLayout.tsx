import PageBreadcrumb from 'components/common/PageBreadcrumb';
import FilesHeader from 'components/modules/file-manager/FilesHeader';
import Sidebar from 'components/modules/file-manager/sidebar/Sidebar';
import RecentFilesCard from 'components/modules/file-manager/RecentFilesCard';
import { defaultBreadcrumbItems } from 'data/commonData';
import React, { PropsWithChildren, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import FileManagerTableWrapper from 'components/tables/FileManagerTableWrapper';

const FileManagerLayout = ({ children }: PropsWithChildren) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [openOffcanvas, setOpenOffcanvas] = useState(false);

  return (
    <div>
      <PageBreadcrumb items={defaultBreadcrumbItems} className="mb-6" />
      <h2 className="mb-10">File Manager</h2>
      <Row
        className={`gx-10 data-collapse-file-manager-sidebar mb-16 ${
          showSidebar ? 'show-sidebar' : ''
        }`}
      >
        <Col
          xs="auto"
          className="file-manager-sidebar-wrapper hidden lg:block "
        >
          <Sidebar setOpenOffcanvas={setOpenOffcanvas} />
        </Col>
        <Col className="my-files">
          <FileManagerTableWrapper>
            <FilesHeader
              showSidebar={showSidebar}
              setShowSidebar={setShowSidebar}
              openOffcanvas={openOffcanvas}
              setOpenOffcanvas={setOpenOffcanvas}
            />
            <RecentFilesCard />
            {children}
          </FileManagerTableWrapper>
        </Col>
      </Row>
    </div>
  );
};

export default FileManagerLayout;
