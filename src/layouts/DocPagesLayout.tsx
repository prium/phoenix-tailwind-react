/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { snakeCase } from 'helpers/utils';
import { Col, Row, cn } from '@hummingbirdui/react';
import React, {
  PropsWithChildren,
  ReactNode,
  useEffect,
  useState
} from 'react';
import { useLocation } from 'react-router';

export type SideNavItem = {
  to: string;
  label: string;
  subItem?: SideNavItem[];
};

interface DocPagesLayoutProps {
  sideNavItems?: SideNavItem[];
}

/**
 * Gold `LayoutComponent.pug`'s `rightNav` block: the doc cards on the left and
 * a sticky "On this page" nav on the right, built from every
 * `PhoenixDocCard.Header` title unless `sideNavItems` overrides it.
 */
const DocPagesLayout = ({
  children,
  sideNavItems
}: PropsWithChildren<DocPagesLayoutProps>) => {
  const [navItems, setNavItems] = useState<SideNavItem[]>([]);

  useEffect(() => {
    if (sideNavItems) {
      setNavItems(sideNavItems);
    } else {
      const items: SideNavItem[] = [];
      const recursiveMap = (children: ReactNode) => {
        React.Children.forEach(children, child => {
          if (React.isValidElement(child)) {
            if (
              (child.props as any)?.children &&
              typeof child.type !== 'string' &&
              //@ts-ignore
              child.type?.componentName !== 'PhoenixDocCardHeader'
            ) {
              recursiveMap((child.props as any).children);
            } else {
              if (
                typeof child.type !== 'string' &&
                //@ts-ignore
                child.type?.componentName === 'PhoenixDocCardHeader' &&
                (child.props as any).title
              ) {
                items.push({
                  to: snakeCase((child.props as any).title),
                  label: (child.props as any).title
                });
              }
            }
          }
        });
      };
      recursiveMap(children);

      setNavItems(items);
    }
  }, []);

  return (
    <div className="mt-6">
      <Row className="g-6 mb-12">
        <Col xs={12} xl={10} className="order-1 xl:order-0">
          {children}
        </Col>
        <Col xs={12} xl={2}>
          <div className="sticky top-20 xl:mt-6">
            <h5 className="leading-none">On this page</h5>
            <hr />
            <ul className="nav nav-vertical flex-col doc-nav" data-doc-nav>
              {navItems.map(item => (
                <NavItem item={item} key={item.label} />
              ))}
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
};

const NavItem = ({ item }: { item: SideNavItem }) => {
  const { hash } = useLocation();

  return (
    <li className="nav-item">
      <a
        href={`#${item.to}`}
        className={cn('nav-link', { active: hash === `#${item.to}` })}
      >
        {item.label}
      </a>
      {item.subItem && (
        <ul className="nav flex-col">
          {item.subItem.map(subItem => (
            <NavItem item={subItem} key={subItem.to} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default DocPagesLayout;
