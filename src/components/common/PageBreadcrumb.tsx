import { Breadcrumb, cn } from '@hummingbirdui/react';
import { Link } from 'react-router';

export interface PageBreadcrumbItem {
  label: string;
  url?: string;
  active?: boolean;
}

interface PageBreadcrumbProps {
  items: PageBreadcrumbItem[];
  className?: string;
}

const PageBreadcrumb = ({ items, className }: PageBreadcrumbProps) => {
  return (
    // gold: `nav.mb-4(aria-label='breadcrumb') > ol.breadcrumb.mb-0`
    <Breadcrumb className={cn('mb-4', className)}>
      <Breadcrumb.List className="mb-0">
        {items.map(item => (
          <Breadcrumb.Item active={item.active} key={item.label}>
            {item.active ? (
              <Breadcrumb.Page>{item.label}</Breadcrumb.Page>
            ) : (
              <Breadcrumb.Link asChild>
                <Link to={item.url ?? '#!'}>{item.label}</Link>
              </Breadcrumb.Link>
            )}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb.List>
    </Breadcrumb>
  );
};

export default PageBreadcrumb;
