import { Dropdown } from '@hummingbirdui/react';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router';
import NineDotMenu from './NineDotMenu';
import ProfileDropdownMenu from './ProfileDropdownMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ThemeToggler from 'components/common/ThemeToggler';
import NotificationDropdownMenu from './NotificationDropdownMenu';
import { useState } from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import SearchModal from './SearchModal';

/** `+NavbarIconsSlim` in phoenix-tailwind Mixins.pug */
const NavItemsSlim = () => {
  const [openSearchModal, setOpenSearchModal] = useState(false);
  return (
    <>
      <ul className="navbar-nav navbar-nav-icons flex-row">
        <li className="nav-item">
          <ThemeToggler slim />
        </li>
        <li className="nav-item">
          <a
            href="#!"
            className="nav-link"
            onClick={e => {
              e.preventDefault();
              setOpenSearchModal(true);
            }}
          >
            <span className="inline-block h-3 w-3">
              <FeatherIcon icon="search" size={12} className="h-3 w-3" />
            </span>
          </a>
        </li>
        <li className="nav-item dropdown">
          <Dropdown>
            <Dropdown.Trigger asChild>
              <Link to="#!" className="nav-link dropdown-caret-none">
                <span className="inline-block h-3 w-3">
                  <FeatherIcon icon="bell" size={12} className="h-3 w-3" />
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
                  width="10"
                  height="10"
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
                className="nav-link leading-none pe-0! whitespace-nowrap dropdown-caret-none"
              >
                Olivia{' '}
                <span className="inline-block h-[10.2px] w-[10.2px]">
                  <FontAwesomeIcon icon={faChevronDown} className="text-sm" />
                </span>
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

export default NavItemsSlim;
