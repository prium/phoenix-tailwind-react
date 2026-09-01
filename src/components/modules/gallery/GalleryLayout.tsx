import { faFileExport, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import SearchBox from 'components/common/SearchBox';
import { defaultBreadcrumbItems } from 'data/commonData';
import Button from 'components/base/Button';
import classNames from 'classnames';
import { Nav, NavProps, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { gridLayoutItems, IsotopeNavItem } from 'data/gallery';
import { Link } from 'react-router';
import Scrollbar from 'components/base/Scrollbar';
import { PropsWithChildren } from 'react';

interface GalleryLayoutProps extends NavProps {
  title: string;
  navItems: IsotopeNavItem[];
  gridLayouts?: boolean;
  defaultActiveKey?: number | string;
  view: string;
  navClassName?: string;
  gridClassName?: string;
  onSearch?: (value: string) => void;
}

const GalleryLayout = ({
  title,
  navItems,
  gridLayouts,
  defaultActiveKey,
  navClassName,
  gridClassName,
  view,
  onSelect,
  onSearch,
  children
}: PropsWithChildren<GalleryLayoutProps>) => {
  return (
    <>
      <PageBreadcrumb items={defaultBreadcrumbItems} className="mb-4" />
      <div className="mb-16">
        <h2 className="mb-8">{title}</h2>
        <div className="flex justify-between gap-4 flex-wrap">
          <div>
            <Button variant="primary" className="me-6">
              <FontAwesomeIcon icon={faPlus} className="me-2" />
              Add New
            </Button>
            <Button variant="link" className="px-0 me-6 text-default">
              <FontAwesomeIcon icon={faFileExport} className="me-2 text-md" />
              Export
            </Button>
          </div>
          <SearchBox
            placeholder="Search by name"
            onChange={e => onSearch?.(e.target.value)}
          />
        </div>
        <div className="md:flex lg:block xl:flex justify-between gap-6 my-6">
          {gridLayouts && (
            <GridLayout view={view} gridClassNames={gridClassName} />
          )}
          <Scrollbar style={{ maxWidth: 400, width: '100%' }}>
            <Nav
              className={classNames(navClassName)}
              defaultActiveKey={defaultActiveKey || navItems[0].eventKey}
              onSelect={onSelect}
              style={{ minWidth: 400 }}
            >
              {navItems.map((navItem: IsotopeNavItem) => (
                <Nav.Item key={navItem.eventKey}>
                  <Nav.Link
                    className={classNames('cursor-pointer', navItem.className)}
                    eventKey={navItem.eventKey}
                  >
                    {navItem.label}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Scrollbar>
        </div>
        {children}
      </div>
    </>
  );
};

export default GalleryLayout;

interface GridLayoutProps {
  view: string;
  gridClassNames?: string;
}

const GridLayout = ({ gridClassNames, view }: GridLayoutProps) => {
  return (
    <div
      className={classNames(
        'flex gap-2 mb-6 md:mb-0 lg:mb-4 xl:mb-0 md:order-1 lg:order-0 xl:order-1',
        gridClassNames
      )}
    >
      {gridLayoutItems.map(item => (
        <OverlayTrigger
          key={item.id}
          overlay={
            <Tooltip id={`overlay-${item.id}`}>{item.tooltipTitle}</Tooltip>
          }
        >
          <Link to={item.link}>
            <Button
              variant="phoenix-secondary"
              className={classNames('btn-square', {
                'border-primary text-primary': view === item.activeKey
              })}
            >
              <FontAwesomeIcon icon={item.icon} />
            </Button>
          </Link>
        </OverlayTrigger>
      ))}
    </div>
  );
};
