import { Col, Row, cn } from '@hummingbirdui/react';
import { Route, RouteItems } from 'sitemap';
import { capitalize } from 'helpers/utils';
import { Link, useLocation } from 'react-router';
import FeatherIcon from 'feather-icons-react';
import { Fragment, useMemo } from 'react';

/** `+TopNavMegaMenu` in phoenix-tailwind Mixins.pug */
const TopNavMegaMenu = ({
  route,
  show
}: {
  route: RouteItems;
  show?: boolean;
}) => {
  // gold: group1 = [4], group2 = [0, 1, 3], group3 = [2, 5]; rendered as group2, group1, group3
  const groups = useMemo(() => {
    const p = route.pages;
    return [[p[0], p[1], p[3]], [p[4]], [p[2], p[5]]].map(g =>
      g.filter(Boolean)
    );
  }, [route.pages]);

  return (
    <div
      className={cn(
        'dropdown-menu navbar-dropdown-caret dropdown-menu-card py-0',
        { show }
      )}
      data-bs-popper={show ? 'none' : undefined}
    >
      <div className="border-0 scrollbar max-h-[60vh]">
        <div className="px-4 pt-6 pb-4 img-dropdown">
          <Row className="gx-6 gy-8">
            {groups.map((group, gi) => (
              <Col key={gi} xs={12} sm={6} md={4}>
                {group.map((page, index) => (
                  <Fragment key={page.name}>
                    <div
                      className={cn('dropdown-item-group', {
                        'mt-5': index > 0
                      })}
                    >
                      <FeatherIcon
                        icon={page.icon as string}
                        size={16}
                        className="me-2 stroke-2"
                      />
                      <h6 className="dropdown-item-title">
                        {capitalize(page.name)}
                      </h6>
                    </div>
                    <TopNavMegaMenuItemsLooper page={page} />
                  </Fragment>
                ))}
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

const TopNavMegaMenuItemsLooper = ({ page }: { page: Route }) => {
  const { pathname } = useLocation();
  return (
    <>
      {page.pages?.map(item => (
        <Fragment key={item.name}>
          {item.pages ? (
            <TopNavMegaMenuItemsLooper page={item} />
          ) : (
            <Link
              to={item.path || '#!'}
              className={cn('dropdown-link', {
                active: pathname === item.path
              })}
            >
              {capitalize(item.name)}
            </Link>
          )}
        </Fragment>
      ))}
    </>
  );
};

export default TopNavMegaMenu;
