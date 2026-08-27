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
    <Breadcrumb>
      <Breadcrumb.List className={cn('mb-2', className)}>
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
