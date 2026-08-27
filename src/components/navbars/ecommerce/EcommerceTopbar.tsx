import Logo from 'components/common/Logo';
import { Col, Dropdown, Row } from '@hummingbirdui/react';
import { Link } from 'react-router';
import FeatherIcon from 'feather-icons-react';
import NotificationDropdownMenu from '../nav-items/NotificationDropdownMenu';
import ProfileDropdownMenu from '../nav-items/ProfileDropdownMenu';
import SearchBox from 'components/common/SearchBox';
import ThemeToggler from 'components/common/ThemeToggler';

/** `+Topbar` in phoenix-tailwind mixins/e-commerce/Topbar.pug */
const EcommerceTopbar = () => {
  return (
    <div className="container-small">
      <div className="ecommerce-topbar">
        <nav className="navbar navbar-expand-lg px-0">
          <Row className="gx-0 gy-2 w-full flex-between-center">
            <Col xs="auto">
              <Link to="/" className="no-underline">
                <Logo />
              </Link>
            </Col>
            <Col xs="auto" className="md:order-1">
              <ul className="navbar-nav navbar-nav-icons flex-row -me-2">
                <li className="nav-item flex items-center">
                  <ThemeToggler className="px-2" />
                </li>
                <li className="nav-item h-10">
                  <Link
                    to="/apps/e-commerce/customer/cart"
                    className="nav-link px-2 icon-indicator icon-indicator-primary"
                  >
                    <FeatherIcon
                      icon="shopping-cart"
                      size={20}
                      className="text-subtle"
                    />
                    <span className="icon-indicator-number">3</span>
                  </Link>
                </li>
                <li className="nav-item dropdown h-10">
                  <Dropdown>
                    <Dropdown.Trigger asChild>
                      <Link
                        to="#!"
                        className="nav-link px-2 icon-indicator icon-indicator-sm icon-indicator-danger dropdown-caret-none"
                      >
                        <FeatherIcon icon="bell" size={20} className="text-subtle" />
                      </Link>
                    </Dropdown.Trigger>
                    <NotificationDropdownMenu className="mt-2" />
                  </Dropdown>
                </li>
                <li className="nav-item dropdown h-10">
                  <Dropdown>
                    <Dropdown.Trigger asChild>
                      <Link to="#!" className="nav-link px-2 dropdown-caret-none">
                        <FeatherIcon icon="user" size={20} className="text-subtle" />
                      </Link>
                    </Dropdown.Trigger>
                    <ProfileDropdownMenu className="mt-2" />
                  </Dropdown>
                </li>
              </ul>
            </Col>
            <Col xs={12} md={6}>
              <SearchBox
                placeholder="Search"
                className="ecommerce-search-box w-full"
                inputClassName="rounded-full"
                size="sm"
              />
            </Col>
          </Row>
        </nav>
      </div>
    </div>
  );
};

export default EcommerceTopbar;
