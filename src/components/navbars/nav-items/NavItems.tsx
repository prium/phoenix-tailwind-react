import Avatar from 'components/base/Avatar';
import { Dropdown, cn } from '@hummingbirdui/react';
import avatar57 from 'assets/img/team/40x40/57.webp';
import ProfileDropdownMenu from './ProfileDropdownMenu';
import NineDotMenu from './NineDotMenu';
import { useAppContext } from 'providers/AppProvider';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router';
import NotificationDropdownMenu from './NotificationDropdownMenu';
import ThemeToggler from 'components/common/ThemeToggler';
import { useState } from 'react';
import SearchModal from './SearchModal';

/** `+NavbarIcons` in phoenix-tailwind Mixins.pug */
const NavItems = () => {
  const {
    config: { navbarPosition }
  } = useAppContext();
  const [openSearchModal, setOpenSearchModal] = useState(false);

  return (
    <>
      <ul className="navbar-nav navbar-nav-icons flex-row">
        <li className="nav-item">
          <ThemeToggler className="px-2" />
        </li>
        <li
          className={cn('nav-item', {
            'lg:hidden!':
              navbarPosition === 'vertical' || navbarPosition === 'dual'
          })}
        >
          <a
            href="#!"
            className="nav-link"
            onClick={e => {
              e.preventDefault();
              setOpenSearchModal(true);
            }}
          >
            <span className="block h-5 w-5">
              <FeatherIcon icon="search" size={19} className="mb-0.5" />
            </span>
          </a>
        </li>
        <li className="nav-item dropdown">
          <Dropdown>
            <Dropdown.Trigger asChild>
              <Link to="#!" className="nav-link min-w-9 dropdown-caret-none">
                <span className="block h-5 w-5">
                  <FeatherIcon icon="bell" size={20} />
                </span>
              </Link>
            </Dropdown.Trigger>
            <NotificationDropdownMenu />
          </Dropdown>
        </li>
        <li className="nav-item dropdown">
          <Dropdown>
            <Dropdown.Trigger asChild>
              <Link to="#!" className="nav-link dropdown-caret-none">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                  <circle cx="2" cy="8" r="2" fill="currentColor"></circle>
                  <circle cx="2" cy="14" r="2" fill="currentColor"></circle>
                  <circle cx="8" cy="8" r="2" fill="currentColor"></circle>
                  <circle cx="8" cy="14" r="2" fill="currentColor"></circle>
                  <circle cx="14" cy="8" r="2" fill="currentColor"></circle>
                  <circle cx="14" cy="14" r="2" fill="currentColor"></circle>
                  <circle cx="8" cy="2" r="2" fill="currentColor"></circle>
                  <circle cx="14" cy="2" r="2" fill="currentColor"></circle>
                </svg>
              </Link>
            </Dropdown.Trigger>
            <NineDotMenu />
          </Dropdown>
        </li>
        <li className="nav-item dropdown">
          <Dropdown>
            <Dropdown.Trigger asChild>
              <Link
                to="#!"
                className="nav-link leading-none pe-0! dropdown-caret-none"
              >
                <Avatar src={avatar57} size="l" />
              </Link>
            </Dropdown.Trigger>
            <ProfileDropdownMenu />
          </Dropdown>
        </li>
      </ul>

      <SearchModal open={openSearchModal} onOpenChange={setOpenSearchModal} />
    </>
  );
};

export default NavItems;
