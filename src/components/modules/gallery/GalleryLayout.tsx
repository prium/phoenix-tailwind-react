import { faFileExport, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import SearchBox from 'components/common/SearchBox';
import { defaultBreadcrumbItems } from 'data/commonData';
import type { PropsWithChildren, ReactNode } from 'react';

interface GalleryLayoutProps {
  title: string;
  onSearch?: (value: string) => void;
  /** layout menu + filter nav row; omitted on the album page */
  toolbar?: ReactNode;
}

/**
 * Shared page shell of the gallery pages — heading, Add New / Export buttons
 * and the search box, copied from `apps/gallery/*.pug`.
 */
const GalleryLayout = ({
  title,
  onSearch,
  toolbar,
  children
}: PropsWithChildren<GalleryLayoutProps>) => (
  <>
    <PageBreadcrumb items={defaultBreadcrumbItems} className="mb-4" />
    <div className="mb-16">
      <h2 className="mb-8">{title}</h2>
      <div className="flex flex-wrap gap-4 justify-between">
        <div>
          <Button variant="primary" className="me-6">
            <FontAwesomeIcon icon={faPlus} className="me-2" />
            Add New
          </Button>
          <Button variant="link" className="text-default me-6 px-0">
            <FontAwesomeIcon icon={faFileExport} className="text-md me-2" />
            Export
          </Button>
        </div>
        <SearchBox
          placeholder="Search by name"
          onChange={e => onSearch?.(e.target.value)}
        />
      </div>
      {toolbar}
      {children}
    </div>
  </>
);

export default GalleryLayout;
